import { Suspense } from "react";
import { Route } from "react-router-dom";
import { Trending } from "./trending";
import { Switch404 } from "./Page404";
import { routesConstants } from "./routes.constant";

export const PageRoute: React.FC = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Switch404>
        <Route path={routesConstants.root} element={<Trending />} />
        <Route path={routesConstants.trending} element={<Trending />} />
      </Switch404>
    </Suspense>
  );
};
