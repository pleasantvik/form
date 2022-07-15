import React, { useContext } from "react";
import { AuthContext } from "../../store/authContext";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = () => {
  const authctx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authctx.onLogOut}>Submit</Button>
    </Card>
  );
};

export default Home;
