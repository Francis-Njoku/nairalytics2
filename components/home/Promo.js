import React from "react";
import Link from "next/link";

const Promo = () => {
  return (
    <div className="row">
      <div className="col ">
        <div className="promo">
          <div className="promo__card">
            <div className="promo__card__details">
              <h2 className="promo__card__heading">
                Gain access to personalised content and premium data.
              </h2>
              <Link href="/signup">
                <a className="btn btn--primary promo__card__btn">
                  Create Account
                </a>
              </Link>
            </div>
            <div className="promo__card__img">
              <img
                src="/images/smiling-man.png"
                alt="smiling man"
              />
            </div>
          </div>

          <div className="promo__or">
            <span className="promo__or__text">or</span>
          </div>

          <div className="promo__card">
            <div className="promo__card__details">
              <h2 className="promo__card__heading">
                Sign up to our weekly newsletter.
              </h2>
              <form className="form-inline promo__card__form">
                <div className="form-group promo__card__form__group">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control form__input promo__card__form__input"
                    id="email"
                    placeholder="Your email address"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn--primary promo__card__form__btn"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
