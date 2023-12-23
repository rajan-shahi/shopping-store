import React from "react";

const Terms = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex justify-center flex-col gap-6 md:w-10/12 w-full md:px-0 px-4 pb-5 md:pt-24 pt-16">
        <div className=" flex flex-col  gap-1">
          <h1 className=" md:text-3xl text-2xl text-black font-bold">
            TERMS & CONDITIONS.
          </h1>
          <h1>
            We use your data to provide and improve the Service. By using the
            Service, you agree to the collection and use of information in
            accordance with this policy. Unless otherwise defined in this
            Privacy Policy, Information Collection And Use We collect several
            different types of information for various purposes to provide and
            improve our Service to you. terms used in this Privacy Policy have
            the same meanings as in our Terms and Conditions, accessible from
            anywhere.
          </h1>
        </div>
        <div className=" md:text-2xl text-xl text-black font-semibold">
          Types of Data Collected
        </div>
        <div className=" flex flex-col gap-1">
          <h1 className=" md:text-2xl text-xl text-black font-semibold">Personal Data</h1>
          <h2>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you Personal Data. Personally identifiable information may
            include, but is not limited to:
          </h2>
          <div className=" px-16 text-black font-semibold">
            <h1>Email address </h1>
            <h1>First name and last name </h1>
            <h1> Cookies and Usage Data</h1>
          </div>
        </div>
        <div className=" flex flex-col gap-1">
          <h1  className="  md:text-2xl text-xl text-black font-semibold">Usage Data</h1>
          <h2>
            We may also collect information how the Service is accessed and used
            Usage Data. This Usage Data may include information such as your
            computers Internet Protocol address (e.g. IP address), browser type,
            browser version, the pages of our Service that you visit, the time
            and date of your visit, the time spent on those pages, unique device
            identifiers and other diagnostic data.
          </h2>
        </div>
        <div className=" flex flex-col gap-1">
          <h1  className="  md:text-2xl text-xl text-black font-semibold">Tracking & Cookies Data</h1>
          <h2>
            We use cookies and similar tracking technologies to track the
            activity on our Service and hold certain information. Cookies are
            files with small amount of data which may include an anonymous
            unique identifier. Cookies are sent to your browser from a website
            and stored on your device. Tracking technologies also used are
            beacons, tags, and scripts to collect and track information and to
            improve and analyze our Service. You can instruct your browser to
            refuse all cookies or to indicate when a cookie is being sent.
            However, if you do not accept cookies, you may not be able to use
            some portions of our Service.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Terms;
