import React from "react"

export default props => (
  <>
    <h2 className="text-3xl font-bold text-center mt-12">{props.title}</h2>
    <div className="flex mt-8">
      {console.log(props.data)}
      {props.data.map(el => (
        <props.card element={el} />
      ))}
    </div>
  </>
)
