import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Link href="/folder">folder</Link>
      <Link href="/shared">shared</Link>
    </>
  );
}
