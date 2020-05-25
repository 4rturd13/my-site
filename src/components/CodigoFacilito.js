import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Posts from "./Posts"
import Certificate from "./Certificate"
import Course from "./Course"

const CodigoFacilito = () => {
  const data = useStaticQuery(graphql`
    {
      codigofacilitoJson {
        data {
          certificates {
            title
            score
            code
          }
          courses {
            title
            progress
            url
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <section>
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
          <Posts
            data={data.codigofacilitoJson.data.certificates}
            card={Certificate}
            title="Online certificates"
          />
          <Posts
            data={data.codigofacilitoJson.data.courses}
            card={Course}
            title="Online courses"
          />
        </div>
      </div>
    </section>
  )
}

export default CodigoFacilito
