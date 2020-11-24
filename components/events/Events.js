import React from "react";
import Link from "next/link";

const Events = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const persons = [1, 2, 3, 4];
  return (
    <main className="main main--transparent pt-0 px-0">
      <section className="main__head">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="h1 text-center text-white mb-3">Events</h1>
            <div className="input-group input-group--with-border">
              <input
                type="text"
                placeholder="Search all events"
                className="form-control form__input form__input--no-border form__input--with-append"
              />
              <div className="input-group-append form__append">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="form__icon"
                >
                  <path d="M47.4 44.6L33.8 30.9C36.4 27.7 38 23.5 38 19 38 8.5 29.5 0 19 0 8.5 0 0 8.5 0 19 0 29.5 8.5 38 19 38 23.5 38 27.7 36.4 30.9 33.8L44.6 47.4C45 47.8 45.5 48 46 48 46.5 48 47 47.8 47.4 47.4 48.2 46.6 48.2 45.4 47.4 44.6ZM19 34C10.7 34 4 27.3 4 19 4 10.7 10.7 4 19 4 27.3 4 34 10.7 34 19 34 27.3 27.3 34 19 34Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--center">
        <div className="row">
          <div className="articles">
            {numbers.map((num) => (
              <article className="article" key={num.toString()}>
                <div className="article__head">
                  <img
                    src={"/images/table.jpg"}
                    className="article__image"
                    alt="table"
                  />
                </div>
                <div className="article__body">
                  <h3 className="article__title">
                    Understanding gLOBAL Economics
                  </h3>
                  <p className="article__description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only.
                  </p>
                  <Link href="/">
                    <a className="article__link">Save a seat</a>
                  </Link>
                  <div className="article__meta">
                    <div className="article__meta__section">
                      <span className="article__date">28/06 | 3pm</span>
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
                          +20 Booked
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
