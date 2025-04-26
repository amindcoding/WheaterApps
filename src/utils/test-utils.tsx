// src/utils/test-utils.tsx
// src/utils/test-utils.tsx
import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen"; // <- generated tree dari Tanstack Router

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
      },
    },
  });

export function renderWithProviders(ui: ReactElement) {
  const queryClient = createTestQueryClient();

  const history = createMemoryHistory({
    initialEntries: ["/"], // Default route
  });

  const router = createRouter({
    routeTree,
    history,
    context: {
      queryClient,
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {ui}
    </QueryClientProvider>
  );
}
