/**
 * https://github.com/jean-louis1776/natural-forest-parallax-nextjs/blob/main/styles/globals.css
 */

import Head from "next/head";
import { mouseLeave, mouseMove } from "../libs/mouseTracking";
import { Layers } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Galaxy Parallax 3D</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main onMouseMove={mouseMove} onMouseLeave={mouseLeave}>
        <section className="overflow-hidden perspective">
          <Layers />
        </section>
      </main>
    </>
  );
}
