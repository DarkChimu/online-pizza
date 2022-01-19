const Login = ({ size }) => {
  return (
    <>
      <div className="container">
        <div className="centeredView">
          <div className="contentView">
            <h1>Hola</h1>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .centeredView {
            justify-content: center;
            align-items: center;
          }

          .contentView {
            width: 100%;
            height: 100%;
            margin: 20px;
            border-radius: 10px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Login;
