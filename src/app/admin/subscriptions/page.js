import React from 'react'

export default function Subscriptions() {
  return (
     <div className="p-5">
      <h1 className="capitalize">All Subscription</h1>
      <div className="border-1 my-2 p-2">
        <div className="grid grid-cols-3 gap-4">
          <div className="uppercase p-2 font-bold">email Subscription</div>
          <div className="uppercase p-2 font-bold">date</div>
          <div className="uppercase p-2 font-bold">action</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="lowercase p-2">greatsfackdev@gmail.com</div>
          <div className="capitalize p-2">Fri Jun 21 2024</div>
          <div className="p-2">x</div>
        </div>
        <hr />
      </div>
    </div>
  )
}
