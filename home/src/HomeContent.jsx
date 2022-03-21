import { Container, Box, Paper } from "@mui/material";
import React from "react";

export default function HomeContent() {
  return (
    <Container>
      <Box>
        <Paper elevation={4} sx={{ marginBlock: "5vh" }}>
          <div>Name: home</div>
          <div>Framework: react</div>
          <div>Language: JavaScript</div>
          <div>CSS: Tailwind</div>
        </Paper>
      </Box>
    </Container>
  );
}
