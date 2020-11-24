import React from "react";
import Link from "next/link";

const Gallery = () => {
  return (
    <main className="main">
      <section className="section gallery">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col mb-3">
              <h1 className="h1 mb-5">Gallery</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className="nav nav-pills nav-fill gallery__nav">
                <li className="nav-item gallery__nav__item">
                  <Link href="/">
                    <a className="nav-link gallery__nav__link active">
                      Category 1
                    </a>
                  </Link>
                </li>
                <li className="nav-item gallery__nav__item">
                  <Link href="/">
                    <a className="nav-link gallery__nav__link">Category 2</a>
                  </Link>
                </li>
                <li className="nav-item gallery__nav__item">
                  <Link href="/">
                    <a className="nav-link gallery__nav__link">Category 3</a>
                  </Link>
                </li>
                <li className="nav-item gallery__nav__item">
                  <Link href="/">
                    <a className="nav-link gallery__nav__link">Category 4</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <figure className="figure">
                <img
                  className="figure__img"
                  src={"/images/gallery/image-8.png"}
                  alt="gallery item"
                />
              </figure>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-between">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <figure className="figure">
                    <img
                      className="figure__img"
                      src={"/images/gallery/image-1.png"}
                      alt="gallery item"
                    />
                  </figure>
                </div>
                <div className="col-md-6 col-sm-6">
                  <figure className="figure">
                    <img
                      className="figure__img"
                      src={"/images/gallery/image-2.png"}
                      alt="gallery item"
                    />
                  </figure>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <figure className="figure">
                    <img
                      className="figure__img"
                      src={"/images/gallery/image-5.png"}
                      alt="gallery item"
                    />
                  </figure>
                </div>
                <div className="col-md-6 col-sm-6">
                  <figure className="figure">
                    <img
                      className="figure__img"
                      src={"/images/gallery/image-10.png"}
                      alt="gallery item"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-between">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <figure className="figure">
                    <img
                      className="figure__img"
                      src={"/images/gallery/image-3.png"}
                      alt="gallery item"
                    />
                  </figure>
                </div>
                <div className="col-md-6 col-sm-6">
                  <figure className="figure">
                    <img
                      className="figure__img"
                      src={"/images/gallery/image-6.png"}
                      alt="gallery item"
                    />
                  </figure>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <figure className="figure">
                    <img
                      className="figure__img"
                      src={"/images/gallery/image-9.png"}
                      alt="gallery item"
                    />
                  </figure>
                </div>
                <div className="col-md-6 col-sm-6">
                  <figure className="figure">
                    <img
                      className="figure__img"
                      src={"/images/gallery/image-7.png"}
                      alt="gallery item"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <figure className="figure">
                <img
                  className="figure__img"
                  src={"/images/gallery/image-4.png"}
                  alt="gallery item"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
