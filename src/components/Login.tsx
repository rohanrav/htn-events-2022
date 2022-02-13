import { Page, Form, FormLayout, TextField, Button } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  isLoggedIn: boolean;
  setLoggedInCallback: (loggedIn: boolean) => void;
}

const Login: React.FC<Props> = ({ isLoggedIn, setLoggedInCallback }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(process.env.REACT_APP_EMAIL);
    console.log(process.env.REACT_APP_PASSWORD);
    console.log(email);
    console.log(password);
    if (
      email === process.env.REACT_APP_EMAIL &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      setLoggedInCallback(true);
    } else {
      setPassword("");
    }
  };

  const handlePasswordChange = useCallback((value) => setPassword(value), []);
  const handleEmailChange = useCallback((value) => setEmail(value), []);

  return (
    <>
      {isLoggedIn && <Navigate to="/" />}
      <Page>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              value={email}
              onChange={handleEmailChange}
              label="Email"
              type="email"
              autoComplete="email"
            />

            <TextField
              value={password}
              onChange={handlePasswordChange}
              label="Password"
              type="password"
              autoComplete="off"
            />
            <Button submit>Submit</Button>
          </FormLayout>
        </Form>
      </Page>
    </>
  );
};

export default Login;
