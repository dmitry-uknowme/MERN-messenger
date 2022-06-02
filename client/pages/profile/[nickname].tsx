/* eslint-disable @typescript-eslint/no-unused-expressions */
import MainTemplate from "../../templates/MainTemplate";
import Profile from "../../components/Profile";
import { GetServerSideProps } from "next";
import axios from "axios";

const PostListPage = ({ serverProfile }) => {
  return (
    <MainTemplate title="Профиль">
      <Profile serverProfile={serverProfile} />
    </MainTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  const { nickname } = params;
  let resultUser = null;
  axios
    .get(`http://localhost:9000/api/users/${nickname}?column=username`, {
      withCredentials: true,
    })
    .then((response) => {
      console.log("resss", res);
      const data = response.data;
      resultUser = data;
    })
    .catch((error) => {
      console.log("err", error);
      const status = error?.response?.status;
      if (status) {
        if (status === 403) {
          console.log("redireeeect");
          return {
            redirect: {
              permanent: true,
              destination: "/login",
            },
            props: {},
          };
        }
        // switch (status) {
        //   case 403:
        //     () => {
        //       return {
        //         redirect: "/login",
        //       };
        //     };
        // }
      }
    })
    .finally(() => {
      return { props: { serverProfile: resultUser } };
    });
  //   console.log("resssss", resultUser);
  return { props: { serverProfile: resultUser } };
  //   return { redirect: "/login", };
};

export default PostListPage;
