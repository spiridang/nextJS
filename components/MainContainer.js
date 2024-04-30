import Head from "next/head";
import A from "./A";

const MainContainer = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          charSet="UTF-8"
          name="description"
          content="spiridang nextJS"
        ></meta>
        <title>main page</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="main" />
        <A href={"/users"} text="users" />
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: orange;
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
