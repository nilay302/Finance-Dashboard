import {Box, useMediaQuery, useTheme} from "@mui/material";
import React from 'react'

type Props = {}
const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const Dashboard = (props: Props) => {
    const {palette} = useTheme();
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box width='100%'height="100%" display="grid" gap="1.5rem"
    sx={{
        gridTemplateColumns:"repeat(3,minmax(370px, 1fr))",
        gridTemplateRows:"repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas:gridTemplateLargeScreens,
    }}
    >
        <Box bgcolor="#fff" gridArea="a" />
        <Box bgcolor="#fff" gridArea="b" />
        <Box bgcolor="#fff" gridArea="c" />
        <Box bgcolor="#fff" gridArea="d" />
        <Box bgcolor="#fff" gridArea="e" />
        <Box bgcolor="#fff" gridArea="f" />
        <Box bgcolor="#fff" gridArea="g" />
        <Box bgcolor="#fff" gridArea="h" />
        <Box bgcolor="#fff" gridArea="i" />
        <Box bgcolor="#fff" gridArea="j" />

    </Box>
  )
}

export default Dashboard