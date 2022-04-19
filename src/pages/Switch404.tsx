import { Routes, Route } from "react-router-dom";
import { Page404 } from "./404/Page404";

export const Switch404: React.FC = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route element={<Page404 />} path="*" />
    </Routes>
  );
};
