import { Outlet } from "react-router-dom";
import Post_List from "../components/Post_List";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <Post_List />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
