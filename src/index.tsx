import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./Router";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
