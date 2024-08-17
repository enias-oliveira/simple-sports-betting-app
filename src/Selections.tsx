import React from "react"
import { useApp } from "./use-app"

export const Selections = () => {
    const { selections } = useApp()

    return (<div className="min-w-full border-2">
        <div className="px-2 py-4 border">Selections</div>
          <div className="flex justify-start gap-2 px-4 py-6 ">
        {selections.map((userSelection) => (
          <div key={userSelection.id} className="border">
            <div>{userSelection.name}</div>
            <div>{userSelection.price}</div>
          </div>
        ))}
          </div>
      </div>)
}