import Head from "next/head";
import Login from "./login";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Online Pizza! an App developed in NextJS" />
        <meta name="author" content="DarkChimu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Login /> */}
      </main>

      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Roboto, sans-serif;
          background-image: url('/pizza_online_bg.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }

        .layout {
            display: flex;
            flex-direction: row;
          }

      `}</style>
    </div>
  );
}
