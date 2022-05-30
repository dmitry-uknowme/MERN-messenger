import axios from "axios";
import { GetServerSideProps } from "next";
import Login from "../components/Login";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../store";
import { fetchUser } from "../store/action-creators/user";
import FullscreenTemplate from "../templates/FullscreenTemplate";

const LoginPage = () => {
  return (
    <FullscreenTemplate title="Вход">
      <Login />
    </FullscreenTemplate>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {};

export default LoginPage;
