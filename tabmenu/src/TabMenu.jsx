import { Container, Box, Paper, Tabs, Tab, Button } from "@mui/material";
import React from "react";
import {
  Routes,
  Route,
  Link,
  useParams,
  useResolvedPath,
  useMatch,
} from "react-router-dom";

const Tab1 = React.lazy(() => import("tab1/Tab1"));
const Tab2 = React.lazy(() => import("tab2/Tab2"));

export default function TabMenu() {
  const match = useMatch("/tabmenu/:tabName?");
  const tabName = match?.params?.tabName;
  return (
    <Container>
      <Box>
        <Paper elevation={4} sx={{ marginBlock: "5vh" }}>
          <Link value="tab1" to="tab1">
            <Button>Iguana</Button>
          </Link>
          <Link value="tab2" to="tab2">
            <Button>Dictionary</Button>
          </Link>
          <Routes>
            <Route
              index
              element={
                <React.Suspense fallback="Loading...">
                  <Tab1 />
                </React.Suspense>
              }
            />
            <Route
              path="tab1"
              element={
                <React.Suspense fallback="Loading...">
                  <Tab1 />
                </React.Suspense>
              }
            />
            <Route
              path="tab2"
              element={
                <React.Suspense fallback="Loading...">
                  <Tab2 />
                </React.Suspense>
              }
            />
          </Routes>
          {/*  */}
        </Paper>
      </Box>
    </Container>
  );
}
