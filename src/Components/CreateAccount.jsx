import React, { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Box,
  FormGroup,
  Button,
} from "@material-ui/core";
import { signUp } from "../service/api";
import { useHistory } from "react-router-dom";

const initialValue = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const CreateAccount = () => {
  const [user, setUser] = useState(initialValue);
  const { name, email, password, confirmPassword } = user;

  const history = useHistory();

  const onValueChange = (e) => {
    //  console.log(e);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await signUp(user);
    history.push("/all");
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h5" align="center">
          Create Account
        </Typography>
        <FormGroup>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
            />
          </FormControl>
          <FormControl>
            <InputLabel>email</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="email"
              value={email}
            />
          </FormControl>
          <FormControl>
            <InputLabel>password</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="password"
              value={password}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Confirm Password</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="password"
              value={confirmPassword}
            />
          </FormControl>
          <Box my={3}>
            <Button
              variant="contained"
              onClick={() => addUserDetails()}
              color="primary"
              align="center"
            >
              Send
            </Button>
            <Button
              onClick={() => history.push("/all")}
              variant="contained"
              color="secondary"
              align="center"
              style={{ margin: "0px 20px" }}
            >
              Cancel
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </Container>
  );
};

export default CreateAccount;
