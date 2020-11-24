import LayoutHead from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import GalleryComponent from "../components/gallery/Gallery";

const Gallery = () => {
  return (
    <Layout>
      <LayoutHead pageTitle={"Gallery"} />
      <GalleryComponent />
    </Layout>
  );
};

export default Gallery;
