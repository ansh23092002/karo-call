import React from 'react'

const Card = ( {title, children} ) => {
  return (
    <div className="border rounded-lg p-4 shadow-md ">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default Card
