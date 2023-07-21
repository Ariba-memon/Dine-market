import React, { useState } from 'react'

const Quantity = () => {
  const [num, setNum] = useState(1)
  return (
    <>
      <div className="flex items-center gap-x-2">
        <button
          className="border rounded-full h-7 w-7 flex justify-center items-center"
          onClick={() => {
            setNum(num <= 1 ? 1 : num - 1)
          }}
        >
          {/* Minus */}-
        </button>

        {/* NUmber */}
        <span className="text-sm">{num}</span>

        <button
          className="border rounded-full h-7 w-7 flex justify-center items-center"
          onClick={() => {
            setNum(num + 1)
          }}
        >
          {/* Plus */}+
        </button>
      </div>
    </>
  )
}

export default Quantity
// export const OperationButton = () => {
//   return (
//     <div className="w-6 h-6 border rounded-full items-center justify-center">
//       -
//     </div>
//   )
// }
