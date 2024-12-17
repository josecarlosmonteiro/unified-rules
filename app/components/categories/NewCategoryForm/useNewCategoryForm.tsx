'use client'

import { FormEvent, useState } from "react";
import { TNewCategory } from "@/app/types/categories";

type Props = {
  onSubmit: (payload: TNewCategory) => void;
  initialShowForm?: boolean;
}

const DEFAULT_VALUE = {
  title: '',
  level: 0,
  startDate: '',
};

export function useNewCategoryForm({ initialShowForm = false, onSubmit }: Props) {
  const [showForm, setShowForm] = useState<boolean>(initialShowForm);
  const [newCategory, setNewCategory] = useState<TNewCategory>(DEFAULT_VALUE);

  const toggleForm = () => {
    return setShowForm(state => !state);
  }

  const onChangeTitle = (title: string) => {
    return setNewCategory(state => ({ ...state, title }));
  }

  const onChangeLevel = (level: number) => {
    return setNewCategory(state => ({ ...state, level }));
  }

  const onChangeStartDate = (newDate: string) => {
    return setNewCategory(state => ({ ...state, startDate: newDate }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const payload: TNewCategory = {
      ...newCategory,
    }

    setNewCategory(DEFAULT_VALUE);
    return onSubmit(payload);
  }

  return {
    showForm,
    newCategory,
    toggleForm,
    onChangeTitle,
    onChangeLevel,
    onChangeStartDate,
    handleSubmit,
  }
}