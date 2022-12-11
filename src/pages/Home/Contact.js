import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Marvin Reginaldo",
    email: "reginaldo.is.now@gmail.com",
    mobile: "+63 9213944994",
    country: "Philippines",
  };

  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div classNme="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-white">{key} : </span>
              <span className="text-white">{user[key]}</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[400px]">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_7xuspsfv.json"
              background="transparent"
              speed="1"
              autoplay
            ></lottie-player>
          </div>
      </div>
    </div>
  );
}

export default Contact;
