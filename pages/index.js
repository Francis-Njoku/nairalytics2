import Layout from "../components/layout/Layout";
import LayoutHead from "../components/layout/Head";
import Hero from "../components/home/Hero";
import Search from "../components/home/Search";
import Indicators from "../components/home/Indicators";
import Link from "next/link";

import ExternalLink from "../assets/images/icons/external-link.svg";
import Promo from "../components/home/Promo";

const Home = () => {
  return (
    <Layout>
      <LayoutHead pageTitle="Home" />
      <main className="main main--transparent px-0 pt-0">
        <Hero />
        <section className="section">
          <div className="row justify-content-center mb-5">
            <div className="col-md-4 col-sm-8">
              <h2 className="h2 text-center">
                All Economic Indicators at your fingertip.
              </h2>
            </div>
          </div>
          <Search />

          <div className="row justify-content-center">
            <div className="col-md-10 col-sm-12">
              <Indicators />
              <div className="row">
                <div className="col text-right">
                  <Link href="/data-type">
                    <a className="link">
                      view all macro-economic indicators
                      <ExternalLink className="link__icon" />
                    </a>
                  </Link>
                </div>
              </div>
              <Promo />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
