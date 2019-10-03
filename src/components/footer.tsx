import React from "react"
import { Box, Heading, Text } from "rebass"

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Box
      as="footer"
      sx={{
        textAlign: "center",
        py: 4,
        px: 3,
        mx: "auto",
        mt: 4,
      }}
    >
      <Heading as="h3" sx={{ fontSize: 4, mb: 0 }}>
        Get In Touch
      </Heading>
      <Text sx={{ mb: 3, mx: "auto", maxWidth: "400px" }}>
        Fugiat ea adipisicing irure aliqua voluptate aliqua elit aute ea
        reprehenderit laboris deserunt tempor.
      </Text>
      <Text sx={{ mb: 2 }}>
        Email: <strong>contact@notrealfotostudio.com</strong>
      </Text>
      <Text>
        Phone: <strong>(123) 555-5555</strong>
      </Text>
    </Box>
  )
}

export default Footer
