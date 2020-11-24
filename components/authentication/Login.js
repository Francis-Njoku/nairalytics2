import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <main className="main">
      <section className="section account">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-5 col-sm-10">
              <h1 className="h1 mb-5 text-center">Welcome back!</h1>
              <a className="btn btn--google" href="/#">
                <img
                  src={"/images/google.png"}
                  alt="google icon"
                  className="btn--google__icon"
                />
                <span className="btn--google__label">Sign in with Google</span>
              </a>
              <div className="account__or">
                <span className="account__or__text">or</span>
              </div>
              <form className="form__account" onSubmit={handleSubmit}>
                <div className="form-group form__group">
                  <label className="form__label" htmlFor="emailAddress">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control form__input"
                    id="emailAddress"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="form-group form__group">
                  <div className="form__label-group">
                    <label className="form__label" htmlFor="password">
                      Password
                    </label>
                    <Link href="/forgot-password">
                      <a className="form__link">Forgot Password?</a>
                    </Link>
                  </div>
                  <input
                    type="password"
                    className="form-control form__input"
                    id="password"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn--lg btn-block btn--primary"
                >
                  Login
                </button>
                <p className="form__text">
                  Don’t have an account?
                  <Link href="/signup">
                    <a className="form__link"> Create one here.</a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
