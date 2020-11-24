import AssociatedPosts from "../components/blog/Blog";
import Layout from "../components/layout/Layout";
import LayoutHead from "../components/layout/Head";

const Blog = () => {
  return (
    <Layout>
      <LayoutHead pageTitle={"Blog"} />
      <main className="main main--transparent pt-5 px-0">
        <AssociatedPosts />
      </main>
    </Layout>
  );
};

export default Blog;
