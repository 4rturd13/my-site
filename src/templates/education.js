import React from "react"
import { graphql, Link } from "gatsby"
import EducationNav from "../components/EducationNav"

export default props => {
  const pageData = props.data.educationJson
  console.log(props.data.educationJson)

  return (
    <>
      <header className="py-12 border-green-500 border-solid border-t-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="uppercase underline text-pink-500">
            Back to home
          </Link>
          <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
          <p className="text-xl">{pageData.description}</p>
        </div>
      </header>
      <ul>
        {pageData.items.map((item, index) => (
          <li className="bg-white shadow mt-4 flex" key={index}>
            <p className="vertical-text">{pageData.slug}</p>
            <div className="flex items-center flex-1 p-8">
              <div className="flex-1">
                <h3>{item.name}</h3>
                {item.degree && (
                  <span className="inline-block p-2 radius bg-green-100 text-green-700">
                    {item.degree}
                  </span>
                )}
                {item.url && (
                  <a
                    href={item.url}
                    className="btn mt-4 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More info
                  </a>
                )}
              </div>
              <div className="inline-block">
                {item.score && (
                  <span className="inline-block p-2 text-2xl bg-blue-100 text-blue-700">
                    {item.score}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <EducationNav />
    </>
  )
}

export const query = graphql`
  query($slug: String) {
    educationJson(slug: { eq: $slug }) {
      title
      description
      items {
        name
        degree
        url
      }
    }
  }
`
