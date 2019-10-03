import React from "react"
import { Box, Heading } from "rebass"
import { useStaticQuery, graphql } from "gatsby"
import Item from "./Images/Item"

interface Props {}

const Images: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { regex: "/showcase/" } }
        sort: { fields: name }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)
  return (
    <Box id="images">
      <Box
        as="header"
        sx={{
          padding: 3,
          textAlign: "center",
          bg: "dark",
          color: "background",
        }}
      >
        <Heading
          as="h2"
          sx={{
            fontSize: 2,
            px: 3,
            display: "inline-block",
            borderWidth: "0 1px",
            borderStyle: "dotted",
            borderColor: "border",
          }}
        >
          Our Work
        </Heading>
      </Box>
      {data.allFile.nodes.map((image: any) => {
        return (
          <Item
            key={image.childImageSharp.fluid.originalName}
            fluid={image.childImageSharp.fluid}
          />
        )
      })}
    </Box>
  )
}

export default Images
