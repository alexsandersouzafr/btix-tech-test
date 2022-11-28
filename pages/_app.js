import Layout from "../packages/components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps, posts, users }) {
  return (
    <Layout>
      <Component {...pageProps} posts={posts} users={users} />
    </Layout>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonPosts = await posts.json();

  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUsers = await users.json();

  return {
    posts: jsonPosts,
    users: jsonUsers,
  };
};

export default MyApp;
