import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Page,
  Form,
  FormLayout,
  TextField,
  Button,
  Stack,
  DisplayText,
  Toast,
} from "@shopify/polaris";

interface Props {
  isLoggedIn: boolean;
  setLoggedInCallback: (loggedIn: boolean) => void;
}

const Login: React.FC<Props> = ({ isLoggedIn, setLoggedInCallback }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isToastActive, setToastActive] = useState(false);
  const navigate = useNavigate();
  const toggleToast = useCallback(
    () => setToastActive((isToastActive) => !isToastActive),
    []
  );

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn]);

  const toastMarkup = isToastActive ? (
    <Toast
      content="Error: Incorrect Login Credentials"
      error
      onDismiss={toggleToast}
    />
  ) : null;

  const handleSubmit = () => {
    if (
      email === process.env.REACT_APP_EMAIL &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      setLoggedInCallback(true);
    } else {
      setPassword("");
      toggleToast();
    }
  };

  const handlePasswordChange = useCallback((value) => setPassword(value), []);
  const handleEmailChange = useCallback((value) => setEmail(value), []);

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <div
        style={{
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Page>
          <Stack vertical>
            <Stack.Item>
              <DisplayText size="large">Sign In</DisplayText>
            </Stack.Item>
            <Stack.Item>
              <Form onSubmit={handleSubmit}>
                <FormLayout>
                  <TextField
                    value={email}
                    onChange={handleEmailChange}
                    label="Email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@domain.com"
                  />

                  <TextField
                    value={password}
                    onChange={handlePasswordChange}
                    label="Password"
                    type="password"
                    autoComplete="off"
                    placeholder="Password"
                  />
                  <Button submit primary fullWidth size="large">
                    Login
                  </Button>
                </FormLayout>
              </Form>
            </Stack.Item>
          </Stack>
          {toastMarkup}
        </Page>
      </div>
    </div>
  );
};

export default Login;
