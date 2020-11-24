import React from "react";
import ChatIcon from "../../assets/images/icons/chat.svg";
import LikeIcon from "../../assets/images/icons/like.svg";
import SideList from "./SideList";
import Link from 'next/link';

const AssociatedPosts = () => {
  const nums = [1, 2, 3, 4];
  const persons = [1, 2, 3, 4];

  return (
    <section className="section">
      <div className="row">
        <div className="col-md-8">
          <div className="blog-posts">
            <div className="articles articles--2cols">
              {nums.map((num) => (
                <article className="article" key={num.toString()}>
                  <div className="article__head">
                    <img
                      src={"/images/table.jpg"}
                      className="article__image"
                      alt="table"
                    />
                  </div>
                  <div className="article__body">
                    <Link className="article__title" href="/blog-post">
                      <a>Understanding global Economics</a>
                    </Link>
                    <p className="article__description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only.
                    </p>
                    <div className="article__meta">
                      <div className="article__meta__section">
                        <div className="article__label">
                          <div className="article__label__item">
                            <LikeIcon className="article__label__icon article__label__icon--like" />
                            <span className="article__label__text">15</span>
                          </div>
                          <div className="article__label__item">
                            <ChatIcon className="article__label__icon article__label__icon--chat" />
                            <span className="article__label__text">0</span>
                          </div>
                        </div>
                      </div>
                      <div className="article__meta__section">
                        <div className="article__users">
                          <div className="article__users__images">
                            {persons.map((person) => (
                              <img
                                src={"/images/smiling-man.png"}
                                className="article__users__image"
                                alt="man"
                                key={person.toString()}
                              />
                            ))}
                          </div>
                          <span className="article__users__count">
                            +20 More
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="blog-posts__cta">
              <button className="btn btn--secondary btn--more">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <SideList />
        </div>
      </div>
    </section>
  );
};

export default AssociatedPosts;
