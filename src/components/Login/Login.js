import React from 'react';

const Login = () => {
    return (
        <div>
           <h3>Please LogIn</h3>
            <form>
              
                <input type="email" placeholder='Your Email' />
                <br /> <br />
                <input type="password" placeholder='Your Password' />
                <br /> <br />
                <input type="submit" value="LogIn" />
                
            </form>
        </div>
    );
};

export default Login;