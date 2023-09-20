import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full pt-3 mb-10">
        <a href="">
          <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        </a>

        <button
          className="black_btn"
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/YassmineElwProjects/AI-summarizer.git"
            )
          }
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAi GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lenghty articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
