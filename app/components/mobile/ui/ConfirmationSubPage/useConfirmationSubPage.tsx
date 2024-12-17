'use client'

import { useState } from "react"

export function useConfirmationSubPage() {
  const [showConfirmationSubPage, setShowConfirmationSubPage] = useState<boolean>(false);

  const openSubpageConfirmation = () => setShowConfirmationSubPage(true);
  const closeSubpageConfirmation = () => setShowConfirmationSubPage(false);

  return {
    showConfirmationSubPage,
    openSubpageConfirmation,
    closeSubpageConfirmation,
  }
}