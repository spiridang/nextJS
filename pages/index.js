import Link from "next/link";
import A from "../components/A";

const index = () => {
  return (
    <div>
      <div className="navbar">
        <A href={"/"} text="main" />
        <A href={"/users"} text="users" />
      </div>
      <h1>Main Page</h1>
      <style jsx>{`
        .navbar {
          background: orange;
          padding: 15px;
        }
      `}</style>
    </div>
  );
};

export default index;
