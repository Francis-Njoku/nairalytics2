import React from "react";
import Link from "next/link";
import SideList from "./SideList";
import ChatIcon from "../../assets/images/icons/chat.svg";
import LikeIcon from "../../assets/images/icons/like.svg";
import ShareButtons from '../ShareButtons';

const persons = [1, 2, 3, 4];

const Post = () => {
  return (
    <section className="section">
      <div className="row">
        <div className="col">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item breadcrumb__item">
                <Link className="link breadcrumb__link" href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li
                className="breadcrumb-item breadcrumb__item active"
                aria-current="page"
              >
                Understanding global Economics
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <article className="post">
            <div className="post__head">
              <img
                src={"/images/table.jpg"}
                className="post__image"
                alt="table"
              />
            </div>
            <div className="post__body">
              <span className="post__category">business news</span>
              <h3 className="post__title">Understanding gLOBAL Economics</h3>
              <p className="post__description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only.
              </p>
              <p className="post__description">
                Integer dui dolor, scelerisque id purus nec, vulputate facilisis
                libero. Nulla at lacus a ligula elementum lobortis. Integer eget
                nisi ac lectus gravida consequat. Nullam in ligula lorem. Donec
                tempus felis non mauris egestas placerat. Quisque convallis
                dictum ex non iaculis. Nunc a lorem commodo, lobortis dui eu,
                varius elit. Sed sagittis ipsum vel mi posuere eleifend. Nullam
                ipsum tellus, laoreet a nulla ullamcorper, porta bibendum quam.
                Donec suscipit egestas quam. Phasellus ultrices egestas leo quis
                vulputate. Etiam dignissim lobortis sapien et luctus.
              </p>
              <div className="post__meta">
                <div className="post__meta__section">
                  <div className="post__label">
                    <div className="post__label__item">
                      <LikeIcon className="post__label__icon post__label__icon--like" />
                      <span className="post__label__text">15</span>
                    </div>
                    <div className="post__label__item">
                      <ChatIcon className="post__label__icon post__label__icon--chat" />
                      <span className="post__label__text">0</span>
                    </div>
                  </div>
                </div>
                <div className="post__meta__section">
                  <div className="post__users">
                    <div className="post__users__images">
                      {persons.map((person) => (
                        <img
                          src={"/images/smiling-man.png"}
                          className="post__users__image"
                          alt="man"
                          key={person.toString()}
                        />
                      ))}
                    </div>
                    <span className="post__users__count">+20 more</span>
                  </div>
                </div>
              </div>
              <div className="post__share">
                <ShareButtons />
              </div>
              <div className="post__comment">
                <form>
                  <div className="form-group form__group">
                    <label className="form__label" htmlFor="message">
                      Leave a comment
                    </label>
                    <textarea
                      className="form-control form__input"
                      id="message"
                      rows="3"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group form__group">
                    <label className="form__label" htmlFor="name">
                      Name *
                    </label>
                    <input
                      type="password"
                      className="form-control form__input"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group form__group">
                    <label className="form__label" htmlFor="emailAddress">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-control form__input"
                      id="emailAddress"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn--primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-3">
          <SideList />
        </div>
      </div>
    </section>
  );
};

export default Post;
