import React from "react"

export default props => {
  const certificate = props.element
  return (
    <div className="shadow p-8 bg-white mr-4 rounded">
      <h4 className="font-bold">{certificate.title}</h4>
      <div className="text-center">
        <span
          //   href={course.url}
          className="inline-block bg-green-200 text-green-700 p-2 mt-2 radius"
        >
          Score: {certificate.score}
        </span>
      </div>
    </div>
  )
}
