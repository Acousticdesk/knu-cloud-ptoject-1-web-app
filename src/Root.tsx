import React from "react";
import App from "./App";
import { Auth } from "./auth/auth.component";

export function Root() {
  return (
    <Auth>
      <App />
    </Auth>
  );
}
