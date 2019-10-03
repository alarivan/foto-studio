import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "@src/components/Landing"
import Images from "@src/components/Images"
import { Box } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      maxWidth="900px"
      sx={{
        m: "auto",
        boxShadow: "main",
      }}
    >
      <Landing />
      <Images />
    </Box>
  </Layout>
)

export default IndexPage
