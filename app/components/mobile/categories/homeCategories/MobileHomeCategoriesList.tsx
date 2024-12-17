'use client'

import { TCategory, TNewCategory } from "@/app/types/categories"
import { CategoryCard } from "../../../categories/CategoryCard";
import { NewCategoryForm } from "../../../categories/NewCategoryForm";
import { ConfirmationSubPage } from "../../ui/ConfirmationSubPage";
import { useMobileHomeCategoriesList } from "./useMobileHomeCategoriesList";
import { localDateString } from "@/app/utils/date";
import { BottomConfirmationHome } from "./BottomConfirmationHomeCategories";

type Props = {
  categories: TCategory[];
  createCategory: (payload: TNewCategory) => void;
  removeCategory: (categoryid: string) => void;
}

export function MobileHomeCategoriesList({ categories, createCategory, removeCategory }: Props) {
  const {
    showConfirmationSubPage,
    selectedCategory,
    verifyDelete,
    confirmDelete,
    cancelDelete,
  } = useMobileHomeCategoriesList(removeCategory);

  return (
    <div className="w-full flex flex-col gap-4 justify-center">
      <NewCategoryForm
        onSubmitForm={createCategory}
      />


      {!categories.length && <div className="text-center text-gray-600 italic">Ainda não há categorias cadastradas</div>}

      {
        !!categories.length &&
        categories.map(cat => (
          <CategoryCard key={cat.id} category={cat} removeCategory={verifyDelete} />
        ))
      }

      <ConfirmationSubPage
        confirmationMessage="Remover categoria?"
        showConfirmationSubPage={showConfirmationSubPage}
        bottom={
          <BottomConfirmationHome
            confirmDelete={confirmDelete}
            cancelDelete={cancelDelete}
          />
        }
      >
        <div className="flex flex-col gap-4 p-4 rounded border">
          <div>Título: {selectedCategory?.title}</div>
          <div>Level: {selectedCategory?.level}</div>
          <div>Data: {localDateString(selectedCategory?.startDate || "")}</div>
        </div>
      </ConfirmationSubPage>
    </div>
  )
}