import React from "react"
import { Box, Heading, Text } from "rebass"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  fluid: FluidObject
}
const Item: React.FC<Props> = ({ fluid }) => {
  return (
    <Box>
      <Img style={{ display: "block", width: "100%" }} fluid={fluid} alt="" />
      <Box sx={{ pb: 4, pt: 3, px: 2, textAlign: "center" }}>
        <Heading sx={{ fontSize: 2, mb: 2 }}>
          Lorem ipsum dolor sit amet consectetu
        </Heading>
        <Text>
          Ad excepteur incididunt incididunt enim deserunt magna veniam eu
          incididunt veniam sint nulla.
        </Text>
      </Box>
    </Box>
  )
}

export default Item
