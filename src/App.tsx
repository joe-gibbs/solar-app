import { ChakraProvider, theme } from "@chakra-ui/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Terms } from "./pages/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "terms",
    element: <Terms />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
