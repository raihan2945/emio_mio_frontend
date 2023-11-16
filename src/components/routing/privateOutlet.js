import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "../layout/Main";
import Home from "../../pages/Home";

export default function PrivateOutlet() {
    const auth = useSelector((state) => state?.auth?.accessToken);

  return auth ? (
    <Main>
      <Outlet/>
    </Main>
  ) : (
    <Navigate to="/sign-in" />
  );
}
