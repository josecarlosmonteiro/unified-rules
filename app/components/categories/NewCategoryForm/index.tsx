'use client'

import { TNewCategory } from "@/app/types/categories";
import { useNewCategoryForm } from "./useNewCategoryForm";

type Props = {
  initialShowForm?: boolean;
  onSubmitForm: (payload: TNewCategory) => void;
}

export function NewCategoryForm({ initialShowForm, onSubmitForm }: Props) {
  const { showForm,
    toggleForm,
    newCategory,
    onChangeTitle,
    onChangeLevel,
    onChangeStartDate,
    handleSubmit,
  } = useNewCategoryForm({ initialShowForm, onSubmit: onSubmitForm });

  return (
    <div className="flex flex-col gap-4">
      <button type="button" className="w-full p-2 px-4 rounded bg-gray-700" onClick={toggleForm}>
        {showForm ? 'Concluído' : 'Add Categoria'}
      </button>

      {
        showForm &&
        <form onSubmit={handleSubmit}>
          <div className="p-4 flex flex-col gap-4 rounded border">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Title *</label>
              <input
                type="text"
                placeholder="category name..."
                onChange={e => onChangeTitle(e.target.value)}
                value={newCategory.title}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="">Level *</label>
              <input
                type="text"
                placeholder="category name..."
                onChange={e => onChangeLevel(Number.parseInt(e.target.value, 10))}
                value={newCategory.level}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="">Data de início *</label>
              <input
                type="date"
                onChange={e => onChangeStartDate(e.target.value)}
                value={newCategory.startDate}
                required
              />
            </div>

            <button className="p-2 px-4 bg-gray-600 rounded" type="submit">
              adicionar
            </button>
          </div>
        </form>
      }
    </div>
  )
}