import React from "react";
import bannerJpg from "../assets/Banner.jpg";

const Banner = () => {
  return (
    <section>
      <div className="relative bg-cover">
        <picture>
          <img
            style={{ height: "500px", width: "100%", objectFit: "fill" }}
            src={bannerJpg}
            alt="SpaceX banner"
          />
        </picture>
        <h1 className="absolute text-3xl md:text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Welcome to SpaceX Database.
        </h1>
      </div>
    </section>
  );
};

export default Banner;
