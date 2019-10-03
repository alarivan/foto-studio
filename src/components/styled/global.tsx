import React from "react"
import { Global } from "@emotion/core"
import emotionNormalize from "emotion-normalize"
import { Theme } from "@src/lib/styled"

export default () => (
  <>
    <Global styles={emotionNormalize} />
    <Global
      styles={(theme: Theme) => ({
        body: {
          fontFamily: theme.fonts.body,
          color: theme.colors.text,
        },
      })}
    />
  </>
)
