import { TCategory, TNewCategory } from "../types/categories";
import { api } from "./client";

const getServices = async (): Promise<TCategory[]> => {
  const { data } = await api.get('/categories');

  return data;
}

async function createCategory(newCategory: TNewCategory): Promise<TCategory> {
  const { data } = await api.post('/categories', newCategory);

  return data;
}

async function removeCategory(categoryId: string) {
  await api.delete(`/categories/${categoryId}`);
}

export const categoriesService = {
  getServices,
  createCategory,
  removeCategory,
};