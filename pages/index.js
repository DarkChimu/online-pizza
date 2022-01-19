import Head from "next/head";
import Login from "./login";
import useWindowSize from "/hooks/resize";

export default function Home() {
  const size = useWindowSize();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Online Pizza! an App developed in NextJS" />
        <meta name="author" content="DarkChimu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Login size={size}/>
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

        .container {
          margin-top: ${size.width > 768 ? 0 : 30}%;
          display: flex;
          flex-direction: column;
        }
        
        .mainTitle {
            text-align: center;
            margin: 0
          }
          .twoColumns {
            flex-direction: row,
            justify-content: space-around,
            align-items: center;
          }

          a{
            text-decoration: none;
            color: #096dd9;
          }

          .asideView {
            border-radius: ${ size.width < 768 ? '30px 30px 0 0' : 0};
            padding: 15px;
            min-height: ${size.width > 767 ? 100 : 77}vh;
            background-color: #fff;
            width: ${size.width > 768 ? '50vh' : '100%'};
          }
      `}</style>
    </div>
  );
}
