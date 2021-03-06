import { Suspense } from "react";
import { Route } from "react-router-dom";

import { Suspender } from "../components/loader/Suspender";
import { Trending } from "./trending";
import { Switch404 } from "./Switch404";
import { routesConstants } from "./routes.constant";
import { SignInPage } from "./auth/SignIn";

export const PageRoute: React.FC = () => {
  return (
    <Suspense fallback={<Suspender />}>
      <Switch404>
        <Route path={routesConstants.root} element={<Trending />} />
        <Route path={routesConstants.trending} element={<Trending />} />
        <Route path={routesConstants.auth.signIn} element={<SignInPage />} />
      </Switch404>
    </Suspense>
  );
};
