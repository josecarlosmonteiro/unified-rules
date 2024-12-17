'use client'

import { HomeCategories } from "@/app/components/categories/HomeCategories";
import { useCategories } from "@/app/components/categories/useCategories";

export default function HomePage() {
  const { categories, loadingCategories, createNewCategory, removeCategory } = useCategories();

  return (
    <main>
      <h1 className="text-3xl">Home Page</h1>
      <hr />

      {
        loadingCategories
          ? <div>Carregando categorias. Aguarde.</div>
          : <HomeCategories
            categories={categories}
            createNewCategory={createNewCategory}
            removeCategory={removeCategory}
          />
      }
    </main>
  )
}