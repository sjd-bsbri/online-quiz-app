'use client';

import React from 'react';
import useQuizStore from '@/store/quizStore';
import CategorySelector from '@/components/CategorySelector';
import QuizQuestion from '@/components/QuizQuestion';
import QuizResults from '@/components/QuizResults';

export default function Home() {
  const { isQuizActive, isQuizCompleted } = useQuizStore();

  // Render appropriate component based on quiz state
  if (isQuizCompleted) {
    return <QuizResults />;
  }

  if (isQuizActive) {
    return <QuizQuestion />;
  }

  return <CategorySelector />;
}