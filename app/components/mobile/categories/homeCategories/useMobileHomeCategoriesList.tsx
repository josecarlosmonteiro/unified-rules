'use client'

import { TCategory } from "@/app/types/categories";
import { useState } from "react";
import { useConfirmationSubPage } from "../../ui/ConfirmationSubPage/useConfirmationSubPage";

export function useMobileHomeCategoriesList(removeCategory: (categoryId: string) => void) {
  const { showConfirmationSubPage, openSubpageConfirmation, closeSubpageConfirmation } = useConfirmationSubPage();

  const [selectedCategory, setSelectedCategory] = useState<TCategory | undefined>(undefined);

  const verifyDelete = (category: TCategory) => {
    setSelectedCategory(category);
    openSubpageConfirmation();
  }

  const confirmDelete = () => {
    if (!selectedCategory) return;

    removeCategory(selectedCategory?.id);
    closeSubpageConfirmation();
  }

  const cancelDelete = () => {
    setSelectedCategory(undefined);
    closeSubpageConfirmation();
  }

  return {
    showConfirmationSubPage,
    selectedCategory,
    verifyDelete,
    confirmDelete,
    cancelDelete,
  };
}