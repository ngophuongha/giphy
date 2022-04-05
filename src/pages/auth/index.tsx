import { Route, Routes } from "react-router-dom";
import { SignIn } from "../../modules/auth";

import { routesConstants } from "../routes.constant";

const AuthRoute = (): JSX.Element => {
  return (
    <Routes>
      <Route path={routesConstants.auth.signIn} element={<SignIn />} />
    </Routes>
  );
};
export default AuthRoute;
