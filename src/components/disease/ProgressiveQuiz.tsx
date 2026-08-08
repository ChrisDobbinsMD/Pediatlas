"use client";

import { useState } from "react";

export type QuizAnswer = {
  text: string;
  correct: boolean;
  feedback: string;
};

export type QuizQuestion = {
  question: string;
  answers: QuizAnswer[];
};

type ProgressiveQuizProps = {
  questions: QuizQuestion[];
};

export default function ProgressiveQuiz({
  questions,
}: ProgressiveQuizProps) {
  const [selectedAnswers, setSelectedAnswers] =
    useState<Record<number, number>>({});

  const [visibleQuestionCount, setVisibleQuestionCount] =
    useState(1);

  const score = Object.entries(selectedAnswers).filter(
    ([questionIndex, answerIndex]) =>
      questions[Number(questionIndex)].answers[answerIndex]
        .correct
  ).length;

  const quizComplete =
    visibleQuestionCount === questions.length &&
    Object.keys(selectedAnswers).length === questions.length;

  return (
    <div>
      <div className="space-y-6">
        {questions
          .slice(0, visibleQuestionCount)
          .map((question, questionIndex) => {
            const selectedAnswerIndex =
              selectedAnswers[questionIndex];

            const hasAnswered =
              selectedAnswerIndex !== undefined;

            const selectedAnswer = hasAnswered
              ? question.answers[selectedAnswerIndex]
              : undefined;

            const isCorrect =
              selectedAnswer?.correct === true;

            return (
              <div
                key={questionIndex}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Question {questionIndex + 1}
                  </p>

                  {hasAnswered && (
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        isCorrect
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {isCorrect ? "Correct" : "Review"}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold leading-8 text-slate-950">
                  {question.question}
                </h3>

                <div className="mt-6 space-y-3">
                  {question.answers.map(
                    (answer, answerIndex) => {
                      const isSelected =
                        selectedAnswerIndex === answerIndex;

                      let answerClass =
                        "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50";

                      if (hasAnswered && answer.correct) {
                        answerClass =
                          "border-emerald-400 bg-emerald-50 text-emerald-950";
                      }

                      if (
                        hasAnswered &&
                        isSelected &&
                        !answer.correct
                      ) {
                        answerClass =
                          "border-rose-400 bg-rose-50 text-rose-950";
                      }

                      return (
                        <button
                          key={answerIndex}
                          type="button"
                          disabled={hasAnswered}
                          onClick={() =>
                            setSelectedAnswers(
                              (previous) => ({
                                ...previous,
                                [questionIndex]:
                                  answerIndex,
                              })
                            )
                          }
                          className={`w-full rounded-2xl border px-5 py-4 text-left font-medium transition ${answerClass} ${
                            hasAnswered
                              ? "cursor-default"
                              : "cursor-pointer"
                          }`}
                        >
                          <span className="mr-3 font-bold">
                            {String.fromCharCode(
                              65 + answerIndex
                            )}
                            .
                          </span>

                          {answer.text}
                        </button>
                      );
                    }
                  )}
                </div>

                {hasAnswered && selectedAnswer && (
                  <div
                    className={`mt-6 rounded-2xl border p-6 ${
                      isCorrect
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-amber-200 bg-amber-50"
                    }`}
                  >
                    <p
                      className={`font-bold ${
                        isCorrect
                          ? "text-emerald-950"
                          : "text-amber-950"
                      }`}
                    >
                      {isCorrect
                        ? "Correct"
                        : "Not quite"}
                    </p>

                    <p
                      className={`mt-3 leading-7 ${
                        isCorrect
                          ? "text-emerald-900"
                          : "text-amber-900"
                      }`}
                    >
                      {selectedAnswer.feedback}
                    </p>

                    {questionIndex <
                      questions.length - 1 &&
                      visibleQuestionCount ===
                        questionIndex + 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            setVisibleQuestionCount(
                              questionIndex + 2
                            )
                          }
                          className="mt-5 rounded-xl bg-blue-950 px-5 py-3 font-semibold text-white transition hover:bg-blue-900"
                        >
                          Continue to Question{" "}
                          {questionIndex + 2} →
                        </button>
                      )}
                  </div>
                )}
              </div>
            );
          })}
      </div>

      {quizComplete && (
        <div className="mt-8 rounded-2xl bg-blue-950 p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Quiz Complete
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {score} / {questions.length} correct
          </h3>

          <p className="mt-3 leading-7 text-blue-100">
            Review any missed questions above before moving
            on.
          </p>

          <button
            type="button"
            onClick={() => {
              setSelectedAnswers({});
              setVisibleQuestionCount(1);
            }}
            className="mt-5 rounded-xl bg-white px-5 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}