import React, {useState} from 'react';
import faqs from '../../lib/faq';
import { Collapse, CardBody, Card } from "reactstrap";
import Search from "../assets/images/icons/search.svg";

const FAQ = () => {
     const [activeCollapse, setActiveCollapse] = useState(0);

     const toggleCollapse = (val) =>
       setActiveCollapse(val === activeCollapse ? "" : val);

 
    return (
      <main className="main main--transparent pt-0 px-0">
        <section className="main__head">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1 className="h1 text-center text-white mb-3">FAQs</h1>
              <div className="input-group input-group--with-border">
                <input
                  type="text"
                  placeholder="Search an issue"
                  className="form-control form__input form__input--no-border form__input--with-append"
                />
                <div className="input-group-append form__append">
                  <Search />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--center section--pad section--bg">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <ul className="accordion">
                {faqs.map((item, index) => (
                  <li className="accordion__item" key={index}>
                    <button
                      className="accordion__btn"
                      onClick={() => toggleCollapse(index)}
                    >
                      <span className="accordion__btn__title">
                        {item.question}
                      </span>
                      <span className="accordion__btn__icon">
                        {activeCollapse === index ? "—" : "+"}
                      </span>
                    </button>
                    <Collapse
                      isOpen={activeCollapse === index}
                      className="accordion__collapse"
                    >
                      <Card className="accordion__card">
                        <CardBody className="accordion__card__body">
                          <p className="p">{item.answer}</p>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    );
};

 export default FAQ;