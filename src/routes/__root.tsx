import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Outlet />
      {import.meta.env.DEV && (
        <React.Fragment>
          <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
          <TanStackRouterDevtools />
        </React.Fragment>
      )}
    </React.Fragment>
  ),
});
