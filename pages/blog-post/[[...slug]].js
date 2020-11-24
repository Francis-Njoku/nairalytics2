import LayoutHead from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Post from "../../components/blog/Post";
// import { useRouter } from "next/router";

const BlogPost = () => {
  //   const { query } = useRouter();
  //   let slug = null;
  //   if (query.slug) {
  //     slug = query.slug[0];
  //   }

  return (
    <Layout>
      <LayoutHead pageTitle={"Blog Post"} />
      <main className="main main--transparent pt-5 px-0">
        <Post />
      </main>
    </Layout>
  );
};

export default BlogPost;
