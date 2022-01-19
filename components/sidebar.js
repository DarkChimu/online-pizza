import bg from "/public/pizza_online_bg.jpg";
import Image from "next/image";

const Sidebar = ({ size }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="container">
      <div className="asideView">
        <div className="logoImg">
        <Image alt='pizza online logo' src='/pizza_online_logo.png' 
        width={100} height={100}/>
        </div>
        <h1 className="mainTitle">Online Pizza! :D</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>

      <style jsx>{`

        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 15px;
        }
        input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
        }
        button {
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #eee;
          background: #FFA500;
          color: #fff;
          cursor: pointer;
          border-radius: 5px;
          width: 100%;
        }

        .logoImg {
          margin: auto;
          text-align: center;
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
};

export default Sidebar;
