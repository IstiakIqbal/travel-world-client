import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  return (
    <section className="flex py-28 items-center h-full p-16 dark:bg-coolGray-900 dark:text-coolGray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-coolGray-600">
            <span className="sr-only">Error</span><span className=" text-green-500">404</span>
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-coolGray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <button
            onClick={() => history.push("/home")}
            href="/"
            className="px-8 py-3 text-green-500 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900"
          >
            Back to homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
