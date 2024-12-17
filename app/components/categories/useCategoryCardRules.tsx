'use client'

import { TCategory } from "@/app/types/categories"

const styleByLevel: Record<number, string> = {
  1: 'bg-green-700 border-green-700 border-l-green-300',
  2: 'bg-yellow-700 border-yellow-700 border-l-yellow-300',
  3: 'bg-blue-700 border-blue-700 border-l-blue-300',
}

export function useCategoryCardRules(category: TCategory) {
  const { level, startDate } = category;

  const passedDateCard = new Date() > new Date(startDate);

  const getCategoryCardStyle = () => {
    if (passedDateCard)
      return 'bg-gray-700 opacity-50';

    if (level > 3)
      return 'bg-gray-300 border-gray-300 border-l-gray-700 text-gray-600'

    return styleByLevel[level];
  }

  return {
    passedDateCard,
    getCategoryCardStyle,
  }
}