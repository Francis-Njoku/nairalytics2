import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import countries from "../lib/countries";

const Signup = () => {
      const router = useRouter();

      const [selectedCountry, setSelectedCountry] = useState(countries[0]);
      const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

      const handleSubmit = (event) => {
        event.preventDefault();
        router.push("/");
      };

      const toggleCountryDropdown = () => {
        setIsCountryDropdownOpen(
          (isCountryDropdownOpen) => !isCountryDropdownOpen
        );
      };
    return (
      <main className="main">
        <section className="section account">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row justify-content-between">
                  <div className="col-md-5 d-md-block d-none">
                    <h1 className="h1 mb-5">Create Your Free Account</h1>
                    <ul className="account__list">
                      <li className="account__list__item">
                        Get at least two stock recommendation monthly Monthly
                        Buy,
                      </li>
                      <li className="account__list__item">
                        Sell or Hold Recommendations
                      </li>
                      <li className="account__list__item">
                        Get exclusive market intelligence on stocks and market
                        in general
                      </li>
                      <li className="account__list__item">
                        Succinctly written analysis of company results and
                        corporate actions
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <a className="btn btn--google" href="/#">
                      <img
                        src={"/images/google.png"}
                        alt="google icon"
                        className="btn--google__icon"
                      />
                      <span className="btn--google__label">
                        Sign up with Google
                      </span>
                    </a>
                    <div className="account__or">
                      <span className="account__or__text">or</span>
                    </div>
                    <form className="form__account" onSubmit={handleSubmit}>
                      <div className="form__row">
                        <div className="form__col">
                          <div className="form-group form__group">
                            <label className="form__label" htmlFor="firstName">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="form-control form__input"
                              id="firstName"
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                        </div>
                        <div className="form__col">
                          <div className="form-group form__group">
                            <label className="form__label" htmlFor="lastName">
                              last Name
                            </label>
                            <input
                              type="text"
                              className="form-control form__input"
                              id="lastName"
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                        </div>
                      </div>
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
                        <label className="form__label" htmlFor="phoneNumber">
                          Phone number
                        </label>
                        <div className="input-group">
                          <Dropdown
                            isOpen={isCountryDropdownOpen}
                            toggle={toggleCountryDropdown}
                            className="country__dropdown"
                          >
                            <DropdownToggle
                              className="country__dropdown__toggle"
                              caret
                            >
                              <span className="country__dropdown__label">
                                <img
                                  className="country__dropdown__label__flag"
                                  src={`/flags/${selectedCountry.flag}`}
                                  alt={`${selectedCountry.name} flag`}
                                />
                                <span className="country__dropdown__label__code">
                                  {selectedCountry.phoneCode}
                                </span>
                              </span>
                            </DropdownToggle>
                            <DropdownMenu className="country__dropdown__menu">
                              {countries.map((country, index) => (
                                <DropdownItem
                                  className="country__dropdown__item"
                                  key={index}
                                  onClick={() => {
                                    setSelectedCountry(country);
                                  }}
                                >
                                  <span className="country__dropdown__label">
                                    <img
                                      className="country__dropdown__label__flag"
                                      src={`/flags/${country.flag}`}
                                      alt={`${country.name} flag`}
                                    />
                                    <span className="country__dropdown__label__code">
                                      {country.phoneCode}
                                    </span>
                                  </span>
                                </DropdownItem>
                              ))}
                            </DropdownMenu>
                          </Dropdown>
                          <input
                            type="text"
                            className="form-control form__input"
                            id="phoneNumber"
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group form__group">
                        <label className="form__label" htmlFor="password">
                          Password
                        </label>
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
                        Create Account
                      </button>
                      <p className="form__text">
                        Already have account?
                        <Link href="/login">
                          <a className="form__link">Login here.</a>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
};

 export default Signup;