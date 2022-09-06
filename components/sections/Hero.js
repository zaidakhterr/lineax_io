import React from "react";
import Image from "next/image";
import heroImg from "assets/hero.png";
import Link from "next/link";

function Hero() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 bg-white px-6 py-10 md:px-8 lg:grid-cols-2">
      <div className="flex flex-col justify-end">
        <h1 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">
          Creating software to solve
          <br className="hidden md:block" /> your problems
        </h1>
        <p className="mb-8 max-w-prose text-sm text-slate-800 sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          excepturi? Animi inventore, placeat illum voluptate reiciendis itaque
          laborum. Iure dolorem doloremque, ipsam alias at facere quae earum
          debitis cumque voluptatem.
        </p>
        <div className=" flex flex-wrap items-start">
          <a
            href="#"
            className="mr-4 mb-4 block border border-slate-900 bg-slate-900 p-2.5 text-center text-sm uppercase text-white sm:text-base md:w-44 md:p-3"
          >
            Start a project
          </a>
          <Link href="/#projects" passHref>
            <a className="mb-4 block border border-slate-900 p-2.5 text-center text-sm uppercase sm:text-base md:w-44 md:p-3">
              View our work
            </a>
          </Link>
        </div>
      </div>
      <div className="relative mb-4 hidden h-80 w-full lg:block">
        <Image
          src={heroImg}
          alt="Laptop, Phone, Notebook and a cup of coffee"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    </div>
  );
}

export default Hero;
