import React from "react";

const Landing = () => {
  return (
    <div className="overflow-hidden">
      <img
        className="hidden md:block"
        src="/images/landing_desktop.png"
        alt="landing"
      />
      <video
        className="md:hidden"
        playsInline
        muted
        autoPlay
        loop
        aria-label="Video player"
      >
        <source src="/videos/landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Landing;
