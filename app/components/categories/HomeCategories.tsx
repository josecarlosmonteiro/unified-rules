'use client'

import { TCategory, TNewCategory } from "@/app/types/categories";
import { CategoryCard } from "./CategoryCard";
import { NewCategoryForm } from "./NewCategoryForm";

type Props = {
  categories: TCategory[];
  createNewCategory: (payload: TNewCategory) => void;
  removeCategory: (categoryId: string) => void;
}

export function HomeCategories({ categories, createNewCategory, removeCategory, }: Props) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      <NewCategoryForm onSubmitForm={createNewCategory} />

      <div className="col-span-2 grid grid-cols-3 gap-4">
        {!categories.length && <div className="text-center italic text-gray-400">Não há categorias a serem listadas.</div>}
        {categories.map(cat =>
          <CategoryCard
            key={cat.id}
            category={cat}
            removeCategory={() => removeCategory(cat.id)}
          />
        )}
      </div>
    </div>
  )
}