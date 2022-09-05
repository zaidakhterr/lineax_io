import React from "react";
import Image from "next/image";
import heroImg from "assets/hero.png";
import Link from "next/link";

function Hero() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 bg-white px-6 py-10 md:grid-cols-2 md:px-8">
      <div className="flex flex-col justify-end">
        <h1 className="mb-8 text-4xl font-bold">
          Creating software to solve
          <br /> your problems
        </h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          excepturi? Animi inventore, placeat illum voluptate reiciendis itaque
          laborum. Iure dolorem doloremque, ipsam alias at facere quae earum
          debitis cumque voluptatem.
        </p>
        <div className=" flex flex-wrap items-start">
          <a
            href="#"
            className="mr-4 mb-4 block w-44 border border-black bg-black p-3 uppercase text-white"
          >
            Start a project
          </a>
          <Link href="/#projects" passHref>
            <a className="mb-4 block w-44 border border-black p-3 uppercase">
              View our work
            </a>
          </Link>
        </div>
      </div>
      <div className="relative mb-4 hidden h-80 w-full md:block">
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
