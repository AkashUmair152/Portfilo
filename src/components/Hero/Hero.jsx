import React from "react";
import style from "./Hero.module.css";

const Hero = (props) => {
  console.log(props.color);

  return (
    <section
      className={`${style.hero} text-5xl text-center`}
      style={{ backgroundColor: props.color }}
    >
      Hero
    </section>
  );
};

export default Hero;
