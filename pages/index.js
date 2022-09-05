import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import Hero from "components/sections/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lineax</title>
        <meta name="description" content="Software Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
