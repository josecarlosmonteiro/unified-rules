'use client'

import { TCategory } from "@/app/types/categories"
import { localDateString } from "@/app/utils/date";
import { useCategoryCardRules } from "./useCategoryCardRules";

type Props = {
  category: TCategory;
  removeCategory: (categoryId: TCategory) => void;
}

export function CategoryCard({ category, removeCategory, }: Props) {
  const { title, level, startDate } = category;
  const { passedDateCard, getCategoryCardStyle } = useCategoryCardRules(category);

  return (
    <div className={`w-full flex flex-col h-fit p-4 rounded border border-l-4 ${getCategoryCardStyle()}`}>
      <div>
        <div>Título: {title}</div>
        <div>Level: {level}</div>
        <div>Data: {localDateString(startDate)}</div>
      </div>

      <button
        type="button"
        className="p-2 px-4 mt-4 rounded bg-gray-600 shadow-md border border-gray-700 text-white"
        onClick={() => removeCategory(category)}
        disabled={passedDateCard}
      >
        remover
      </button>
    </div >
  )
}