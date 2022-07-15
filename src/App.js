import React, { useContext } from "react";

import { AuthContext } from "./store/authContext";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const ctx = useContext(AuthContext);
  //////////////THIS IS MOVED TO THE AUTHCONTEXT FILE////////
  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // THIS IS MOVED TO THE CONTEXT OBJECT FILE
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways

  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
