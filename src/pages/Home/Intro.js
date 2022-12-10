import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi There! I am</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        Marvin Reginaldo
      </h1>
      <h1 className="text-5xl sm:text-3xl text-white font-semibold">
        I am a Full-stack Developer.
      </h1>
      <p className="text-white w-2/3">
        I build full-stack development for the web. I've been working with MERN
        stack, and most of my projects focus more on MERN frameworks. Also, I
        have a passion for learning new thing and trying new technologies, and I
        never stop!
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
