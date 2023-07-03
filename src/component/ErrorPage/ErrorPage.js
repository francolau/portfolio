import React from "react";

import fondo from "../../images/Fondo.png";

const ErrorPage = () => {
  return (
    <section class="max-h-screen my-auto w-full relative">
      <div class="w-[300px] h-full absolute inset-x-1/2 top-0 bottom-0">
        <img
          alt="fondo"
          src={fondo}
          class="w-full h-full blur object-cover opacity-40 select-none pointer-events-none"
        />
      </div>
      <div class="py-8 px-4 mx-auto max-w-screen lg:py-16 lg:px-6 z-30 relative">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <a
            href="/"
            class="inline-flex text-white duration-300 border-csy border-[1px] hover:scale-[1.15] hover:shadow-md hover:shadow-slate-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
