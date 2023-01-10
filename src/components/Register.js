import {
  TextField,
  Box,
  FormControl,
  FormGroup,
  Button,
  //Card,
} from "@mui/material";
import React, { Component } from "react";

function UserReg({ props }) {
  return (
    <>
      <div>
        <h1>{props.username}, Registrado.</h1>
      </div>
    </>
  );
}

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    count: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.email && this.state.password) {
      this.setState({ count: true });
    } else {
      this.setState({ count: false });
    }
  };

  render() {
    return (
      <>
        <Box component="form">
          <h1>Register</h1>
          <FormGroup>
            <FormControl sx={{ m: 1, width: "25ch" }}>
              <TextField
                required
                label="Username"
                onChange={(e) => this.setState({ username: e.target.value })}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "25ch" }}>
              <TextField
                required
                label="Email"
                type="email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "25ch" }}>
              <TextField
                required
                type="password"
                label="Password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }}>
              <Button
                variant="contained"
                type="submit"
                onClick={this.handleSubmit}
              >
                Registrar
              </Button>
            </FormControl>
          </FormGroup>
        </Box>
        {this.state.count ? <UserReg key="1" props={this.state} /> : ""}
      </>
    );
  }
}
