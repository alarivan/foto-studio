import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const LandingImage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(
        relativePath: { eq: "markus-lompa-e6UGI3lqIxs-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      fluid={data.fileName.childImageSharp.fluid}
      alt="Camera"
      style={{ height: "100%" }}
    />
  )
}

export default LandingImage
