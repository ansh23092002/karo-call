import React from 'react'

const Card = ( {title, children, ClassName} ) => {
  return (
    <div className="rounded-lg p-4 shadow-md ">
      <h2 className={`text-lg  ${ClassName}`}>{title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default Card
