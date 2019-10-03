import React, { ReactNode } from "react"
import { ThemeProvider } from "emotion-theming"
import theme from "../themes/default"
import GlobalStyles from "./styled/global"
import { Box } from "rebass"
import Helmet from "react-helmet"
import Footer from "./footer"

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
        <GlobalStyles />
        <Box sx={{ maxWidth: "960px", m: "auto" }}>
          <main>{children}</main>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
