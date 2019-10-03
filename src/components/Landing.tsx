import React from "react"
import { Box, Heading, Flex } from "rebass"
import { Link } from "react-scroll"
import LandingImage from "./Landing/Image"
import styled from "@src/lib/styled"

interface Props {}

const LinkButton = styled(Link)`
  padding: ${({ theme }) => theme.space[1] + " " + theme.space[4]};
  margin-top: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.text};
  border-color: ${({ theme }) => theme.colors.border};

  cursor: pointer;
  transition: background-color 200ms ease;
  border: 1px solid;
  text-decoration: none;

  :hover {
    background-color: #f4f4f4;
  }
`

const Landing: React.FC<Props> = () => {
  return (
    <Box
      sx={{
        display: ["block", "grid"],
        gridTemplateColumns: [null, "40% 60%"],
        m: "auto",
      }}
    >
      <Box>
        <Flex
          flex="0 1 40vw"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          px={3}
          sx={{
            textAlign: "center",
            bg: "background",
            height: ["50vh", "100vh"],
          }}
        >
          <Heading
            as="h1"
            sx={{
              fontWeight: "body",
              fontSize: [3, 4],
              textTransform: "uppercase",
              m: 0,
            }}
          >
            foto studio
          </Heading>
          <Heading
            as="h2"
            sx={{
              fontWeight: "body",
              fontSize: 2,
              textTransform: "capitalize",
              m: 0,
              color: "#888",
            }}
          >
            Beautiful Nature Photography
          </Heading>
          <LinkButton to="images" smooth={true} duration={600}>
            View Work
          </LinkButton>
        </Flex>
      </Box>

      <Box
        sx={{
          height: ["50vh", "100vh"],
          flex: "0 1 60vw",
          m: 0,
        }}
      >
        <LandingImage />
      </Box>
    </Box>
  )
}

export default Landing
