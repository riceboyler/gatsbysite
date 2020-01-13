import React, { ReactElement } from "react";
import Layout from "../components/Layout";

function Index(): ReactElement {
  return (
    <Layout>
      <div className="self-center w-1/2 md:w-3/4 bg-yellow-100 shadow-xl rounded p-4 md:p-10 mb-6">
        <h1 className="heroText">
          riceboyler <span className="text-lg">/'raɪsbɔɪlər/</span>
        </h1>
        <br />
        <h2>
          <div className="italic mt-2 mb-3">noun</div>
          1. A non-Asian compact car modified to increase performance.
          <br />
          2. The driver of such a car. <br />
          3. The online nickname of <strong>Jason Clark</strong>
          <br />
        </h2>
      </div>
      <hr className="mt-3 mb-3" />
      <p>
        Welcome to riceboyler.com, the online home of Jason Clark, currently a
        resident of Cedar City, Utah, USA. This site is an exercise in using
        GatsbyJS, along with the excellent Tailwind CSS Utility library. Using
        the links to the left, you can go to different pages to learn more about
        what I do for work, me (and my family) or even read some ramblings from
        my blog posts.
      </p>
      <p>
        This is still very much a work in progress as I learn how to make
        Tailwind do what I want it to and how to make Gatsby really sing.
      </p>
    </Layout>
  );
}

export default Index;
