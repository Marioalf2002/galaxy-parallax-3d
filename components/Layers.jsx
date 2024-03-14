import Link from "next/link";
import React from "react";
import { starts } from "../libs/starts";

const layers = () => {
  return (
    <div className="h-screen min-h[500px] transform-3d rotate-x-[var(--move-y)] rotate-y-[var(--move-x)] will-change-transform transition-transform ease-[var(--transition-timing-function)] duration-[var(--transition-duration)]">
      <div className="layer-bg bg-fondo -translate-z-[55px] scale-[1.1]" />
      <div className="layer-bg bg-asteoride1 translate-z-20 scale-[.88]" />
      <div className="layer-bg bg-asteroide2 translate-z-20 scale-[.88]" />
      <div className="layer-bg bg-asteroide3 translate-z-20 scale-[.88]" />
      <div className="layer-content translate-z-[180px] scale-[.8]">
        <div className="text-[calc(var(--index)*4.35)] text-center uppercase tracking-[calc(var(--index)*-.15)] leading-[.9em] mt-[calc(var(--index)*5.5)]">
          <h1 className="text-shadow">
            Galaxy Parallax 3D<span className="block">Next.js</span>
          </h1>
          <p className="normal-case hero-text tracking-normal text-[calc(var(--index)*.55)] leading-[3] text-shadow">
            The Star Generator is a JavaScript program that generates a random
            arrangement of stars on a canvas. It uses HTML5 canvas and
            JavaScript to create a visually appealing galaxy-like effect.
          </p>
        </div>
      </div>
      <div className="layer-bg bg-planetasminiatura pointer-events-none" />
      <div className="layer-content pointer-events-none">
        <canvas className="rain" id="starts" />
      </div>
      <div className="layer-bg bg-fondosub pointer-events-none" />
      <div className="layer-bg bg-planeta3 pointer-events-none translate-x-[-180px] translate-y-[80px]" />
      <div className="layer-bg bg-planeta2 pointer-events-none" />
      <div className="layer-bg bg-planeta1 pointer-events-none translate-y-[-60px]" />
      <div className="layer-bg bg-planeta4 pointer-events-none translate-y-[80px] translate-x-[-40px]" />
    </div>
  );
};

export default layers;
