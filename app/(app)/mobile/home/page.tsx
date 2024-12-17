'use client'

import { useCategories } from "@/app/components/categories/useCategories"
import { MobileHomeCategoriesList } from "@/app/components/mobile/categories/homeCategories/MobileHomeCategoriesList";

export default function MobileHomePage() {
  const { categories, createNewCategory, removeCategory } = useCategories();

  return (
    <main>
      <h1>Home Mobile Page</h1>
      <hr />

      <div className="mt-4 w-full flex justify-center gap-4">
        <MobileHomeCategoriesList
          categories={categories}
          createCategory={createNewCategory}
          removeCategory={removeCategory}
        />
      </div>
    </main>
  )
}