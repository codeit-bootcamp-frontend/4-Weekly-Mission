import Head from 'next/head'
import { Inter } from 'next/font/google'
import HomePage from "./home-page"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "My Page Title",
};

export default function Page() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
    </>
  );
}