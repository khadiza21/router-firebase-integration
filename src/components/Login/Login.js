import React from "react";
import useFirebase from "../../hooks/useFirebae";

const Login = () => {
    const {signInWithGoogle} = useFirebase();
  return (
    <div>
      <h3>Please LogIn</h3>

      <div style={{ margin: "20px" }}>
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>

      <form>
        <input type="email" placeholder="Your Email" />
        <br /> <br />
        <input type="password" placeholder="Your Password" />
        <br /> <br />
        <input type="submit" value="LogIn" />
      </form>
    </div>
  );
};

export default Login;
