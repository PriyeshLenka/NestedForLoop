import React, { useState } from "react";
import reactSvg from "../../assets/react.svg";
import ExpandableParagraph from "./Comment";
import "./UserDasboard.css";
import Comment from "./Comment";
import ChatInput from "./ChatInput";
const QueriesSection = () => {
  const [isTruncated, setIsTruncated] = useState(true);
  const text =
    "Need help with deploying a Spring Boot application to a server in the AWS Cloud. Lorem, ipsum dolor sit amet lorem Need help with deploying a Spring Boot application to a server in the AWS Cloud. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, accusantium. Aliquid maxime in dolore ad obcaecati, distinctio sunt minus eveniet vitae? Nemo, aperiam iste ipsam numquam repellendus corrupti sed non!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quod consequuntur adipisci voluptates velit eveniet quia Need help with deploying a Spring Boot application to a server in the AWS Cloud. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, accusantium. Aliquid maxime in dolore ad obcaecati, distinctio sunt minus eveniet vitae? Nemo, aperiam iste ipsam numquam repellendus corrupti sed non!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quod consequuntur adipisci voluptates velit eveniet quia";
  const toggleAccordion = (id) => {
    const accordionItem = document.getElementById(id);
    accordionItem.classList.toggle("hidden");
    setIsTruncated(!isTruncated);
  };
  return (
    <>
      <div className="root-query-section">
        <section className="queries-header-root">
          <h4>Queries</h4>
        </section>
        <div className="parent-queries-container">
          <div className="aside1">
            <div className="comment-box-container_new">
              <div className="question-box-root">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => (
                  <div className="question-box-container">
                    <div className="source-image-box">
                      <img src={reactSvg} />
                    </div>
                    <div className="question-mid-box">
                      <h5 className="text-sm text-justify font-semibold">
                        Need help with deploying a Spring Boot application to a
                        server in the AWS Cloud .
                      </h5>
                      <span className="inline-flex items-center w-max rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-black-600 ring-1 ring-inset ring-gray-500/10">
                        24 January 2024
                      </span>
                    </div>
                    <div className="question-tag-box">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 custom-chipclass">
                        React
                      </span>
                    </div>
                  </div>
                ))}
                {/* <Comment/> */}
              </div>
            </div>
          </div>
          <div className="question-details-comment-section">
            <div className="question-details">
              <div className="question-box-card">
                <div
                  id="accordion-collapse"
                  data-accordion="collapse"
                  className="accordion-question-area"
                >
                  <div id="accordion-collapse-heading-3">
                  {text.length > 150 ? text.slice(0, 150) + "..." : text}
                    <button
                      type="button"
                      className="text-blue-500"
                      data-accordion-target="#accordion-collapse-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-collapse-body-1"
                      onClick={() =>
                        toggleAccordion("accordion-collapse-body-1")
                      }
                    >
                      {isTruncated ? "Read More" : "Read Less"}
                    </button>
                    <div className="question-details-footer">
                      <span className="inline-flex items-center w-max rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-black-600 ring-1 ring-inset ring-gray-500/10">
                        24 January 2024
                      </span>
                      <span className="inline-flex items-center w-max rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-black-600 ring-1 ring-inset ring-gray-500/10">
                        React
                      </span>
                    </div>
                  </div>
                  <div
                    id="accordion-collapse-body-1"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-1"
                  >
                    <div className="p-5 border border-b-0 border-gray-200 ">
                      <div className="question-text-area">
                        <h5 className="text-sm text-justify font-semibold">
                        {text}
                        </h5>

                        <img
                          src="https://mdbcdn.b-cdn.net/docs/react/extended/comments/assets/featured.jpg"
                          alt=""
                          className="img-in-question"
                        />
                      </div>
                    </div>
                  </div>
                  {/* More accordion items go here */}
                </div>
              </div>

              <div className="comment-sections">
                <div>
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                </div>
              </div>
              <div>
                <ChatInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueriesSection;
