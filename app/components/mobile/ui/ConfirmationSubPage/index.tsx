'use client'

import { ReactNode } from "react";

export type BottomButtons = {
  label?: string;
  onClick?: () => void;
}

type Props = {
  showConfirmationSubPage: boolean;
  confirmationMessage: string;
  children?: ReactNode;
  bottom?: ReactNode;
}

export function ConfirmationSubPage({ showConfirmationSubPage, confirmationMessage, bottom, children }: Props) {
  return (
    <>
      {
        showConfirmationSubPage &&
        <div className="fixed top-0 left-0 w-full h-screen bg-blue-900 text-white showSubPage">
          <div className="p-4 flex flex-col gap-4">
            <div>
              <h2 className="text-xl">{confirmationMessage}</h2>
              <hr />

              <div className="mt-4">
                {children}
              </div>
            </div>
          </div>

          {
            bottom &&
            <div className="p-4 absolute w-full flex gap-4 bottom-0 bg-black bg-opacity-10">
              {bottom}
            </div>
          }
        </div>
      }
    </>
  )
}