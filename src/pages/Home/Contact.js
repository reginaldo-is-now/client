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

      <div className="flex sm:flex-col items-center justify-between">
        <div className="text-white flex-col gap-1">
          <p className="text-tertiary text-2xl">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-white text-2xl">{key} : </span>
              <span className="text-white text-2xl">{user[key]}</span>
            </p>
          ))}
          <h1 className="text-tertiary text-2xl">{"}"}</h1>
        </div>
        <div className="h-50vh">      
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
