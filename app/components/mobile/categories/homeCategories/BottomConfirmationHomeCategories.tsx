'use client'

type Props = {
  cancelDelete: () => void;
  confirmDelete: () => void;
}

export function BottomConfirmationHome({ cancelDelete, confirmDelete }: Props) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-4">
        <button
          className="w-full p-2 px-4 rounded border-2 border-white bg-none text-white"
          type="button"
          onClick={cancelDelete}
        >
          cancelar
        </button>

        <button
          className="w-full p-2 px-4 rounded border-2 border-white bg-white text-blue-700"
          type="button"
          onClick={confirmDelete}
        >
          confirmar
        </button>
      </div>
    </div>
  )
}