import React, { useState } from "react";
import reactSvg from "../../assets/react.svg";
import "./JobDashboard.css";
const JobDashboard = () => {
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
      <div className="root-header">
        <section className="queries-header-root">
          <h4>Job Dashboard</h4>
        </section>
        {/* Job Card */}
        <div className="parent-job-dashboard-container">
          <div className="aside1">
            <div className="job-board-container">
              <div className="job-board-area">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => (
                  <div className="job-board-card">
                    <div className="source-image-box">
                      <img src={reactSvg} />
                    </div>
                    <div className="job-board-card-in">
                      <h5 className="text-sm text-justify font-semibold">
                        Role: Software Engineer
                      </h5>
                      <h6 className="text-xs text-justify font-semibold">
                        Company name: Google
                      </h6>
                      <h6 className="text-xs text-justify font-semibold">
                        Location : Hyderabad, India
                      </h6>
                      <span className="inline-flex items-center w-max rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-black-600 ring-1 ring-inset ring-gray-500/10">
                        24 January 2024
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Job description */}
          <div className="job-description-section">
            <div className="job-description-area">
              <div className="job-description-card">
                <div className="source-image-box">
                  <img src={reactSvg} />
                </div>
                <div className="job-description-card-in">
                  <h5 className="text-xl text-justify font-semibold">
                    Role: Software Engineer
                  </h5>
                  <p className="text-base text-justify font-semibold">
                    Company name: Google
                  </p>
                  <h6 className="text-base text-justify font-semibold">
                    Location : Hyderabad, India
                  </h6>
                  <span className="inline-flex items-center w-max rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-black-600 ring-1 ring-inset ring-gray-500/10">
                    24 January 2024
                  </span>
                  <h5 className="text-sm text-justify font-bold md:py-">
                  About the job
                  </h5>
                  <div className="job-detail-description-area">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate quibusdam at veritatis explicabo eum soluta
                    cupiditate deserunt impedit modi vitae voluptatibus, sequi
                    necessitatibus, ratione excepturi dolorem a obcaecati iste?
                    Rem. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ut explicabo, error deserunt dolorem molestiae labore
                    quasi itaque ex aperiam aspernatur excepturi rerum
                    consequuntur dicta inventore veniam adipisci, magni ipsum
                    commodi! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Aliquam vel ratione minus voluptas magnam sed nisi
                    quas quasi pariatur ducimus, laudantium ut, architecto
                    alias, nam minima impedit consectetur aliquid sint.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate quibusdam at veritatis explicabo eum soluta
                    cupiditate deserunt impedit modi vitae voluptatibus, sequi
                    necessitatibus, ratione excepturi dolorem a obcaecati iste?
                    Rem. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ut explicabo, error deserunt dolorem molestiae labore
                    quasi itaque ex aperiam aspernatur excepturi rerum
                    consequuntur dicta inventore veniam adipisci, magni ipsum
                    commodi! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Aliquam vel ratione minus voluptas magnam sed nisi
                    quas quasi pariatur ducimus, laudantium ut, architecto
                    alias, nam minima impedit consectetur aliquid sint.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate quibusdam at veritatis explicabo eum soluta
                    cupiditate deserunt impedit modi vitae voluptatibus, sequi
                    necessitatibus, ratione excepturi dolorem a obcaecati iste?
                    Rem. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ut explicabo, error deserunt dolorem molestiae labore
                    quasi itaque ex aperiam aspernatur excepturi rerum
                    consequuntur dicta inventore veniam adipisci, magni ipsum
                    commodi! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Aliquam vel ratione minus voluptas magnam sed nisi
                    quas quasi pariatur ducimus, laudantium ut, architecto
                    alias, nam minima impedit consectetur aliquid sint.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate quibusdam at veritatis explicabo eum soluta
                    cupiditate deserunt impedit modi vitae voluptatibus, sequi
                    necessitatibus, ratione excepturi dolorem a obcaecati iste?
                    Rem. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ut explicabo, error deserunt dolorem molestiae labore
                    quasi itaque ex aperiam aspernatur excepturi rerum
                    consequuntur dicta inventore veniam adipisci, magni ipsum
                    commodi! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Aliquam vel ratione minus voluptas magnam sed nisi
                    quas quasi pariatur ducimus, laudantium ut, architecto
                    alias, nam minima impedit consectetur aliquid sint.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDashboard;
