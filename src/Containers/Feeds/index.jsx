import Post from '../../Components/Post/index';
import { FaRegQuestionCircle } from 'react-icons/fa';

const Feeds = () => {
  return (
    <div className="root-feeds-section">
      <section className="feeds-header-root">
        <h4>Feed</h4>
      </section>

      <section className="feeds-box-section">
        <div className="feeds-list">
          <Post />
        </div>
        <div className="feeds-asidebar">
          <div className="quiz-score-box">
            <h4 className=" text-justify font-semibold flex items-cente gap-4px text-xl">
              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xl font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                Daily Quiz Score : 780 / 1000
              </span>
            </h4>
            <h4 className=" text-justify font-semibold flex items-cente gap-4px text-xl">
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xl font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Rank : 46
              </span>
            </h4>
          </div>
          <div className="comment-box-aside">
            <div className="px-4 sm:px-0  w-full">
              <h3 className="text-lg flex w-full items-center gap-2	 font-semibold leading-7 text-gray-900">
                Your Queries
                <FaRegQuestionCircle />
              </h3>
              <p className="mt-1 max-w-2xl py-1 text-sm leading-6 text-gray-500">
                A quick glance of all the queries you have .
              </p>
              <div className="px-4 sm:px-0  w-full gap-3 flex flex-col">
                <h3 className="text-sm flex w-full items-center font-semibold leading-7 text-gray-900 link">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Recusandae quibusdam tempore iste quaerat
                  deleniti.
                </h3>
                <h3 className="text-sm flex w-full items-center font-semibold leading-7 text-gray-900 link">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Recusandae quibusdam tempore iste quaerat
                  deleniti.
                </h3>
                <h3 className="text-sm flex w-full items-center font-semibold leading-7 text-gray-900 link">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Recusandae quibusdam tempore iste quaerat
                  deleniti.
                </h3>
              </div>
              {/* <textarea
                id="about"
                name="about"
                rows="1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feeds;
