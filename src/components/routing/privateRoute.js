import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "../layout/Main";

export default function PrivateRoute({ children }) {
  const auth = useSelector((state) => state?.auth?.accessToken);

  return auth ? <Main>{children}</Main> : <Navigate to="/login" />;
}
