'use client'

import { categoriesService } from "@/app/services/categoriesService";
import { TCategory, TNewCategory } from "@/app/types/categories";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useCategories() {
  const { data: categories = [], isLoading: loadingCategories, refetch } = useQuery<TCategory[]>({
    queryKey: ['fetch-categories'],
    queryFn: categoriesService.getServices
  });

  const createNewCategory = useMutation({
    mutationFn: (payload: TNewCategory) => categoriesService.createCategory(payload),
    onSuccess: () => refetch(),
    onError: () => alert("Erro ao tentar adicionar categoria.")
  });

  const removeCategory = useMutation({
    mutationFn: (categoryId: string) => categoriesService.removeCategory(categoryId),
    onSuccess: () => refetch(),
    onError: () => alert("Erro ao tentar remover categoria."),
  });

  return {
    categories,
    loadingCategories,
    createNewCategory: createNewCategory.mutate,
    removeCategory: removeCategory.mutate,
  }
}