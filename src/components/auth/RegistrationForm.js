import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";
import styles from "./styles";
import DualRing from "../loaders/DualRing";
import { useNavigate } from "react-router";
function RegistrationForm() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");
    const [registrationIsGoing, setRegistrationIsGoing] = useState(false);
    const { store } = useContext(Context);
    const classes = styles();
    const navigate = useNavigate();

    const registrationFail = (e) => {
        setError(e);
        setPassword("");
        setRepeatPassword("");
      };
      async function registration(event) {
        event.preventDefault();
        if (password === repeatPassword) {
          setRegistrationIsGoing(true);
          const res = await store.registration(email, password,name,surname);
          if (res === true) {
            navigate('../', { replace: true });
          }
          else{
            registrationFail(res.response?.data?.message);
            setRegistrationIsGoing(false);
          }
        } else registrationFail("Password mismatch");
      }

    return(
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              <FormattedMessage
                id="registrationform.title"
                defaultMessage="Sign up"
              />
            </Typography>
            <form className={classes.form} onSubmit={registration}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label={
                      <FormattedMessage
                        id="registrationform.email"
                        defaultMessage="Email"
                      />
                    }
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="surname"
                    label={
                      <FormattedMessage
                        id="registrationform.surname"
                        defaultMessage="Surname"
                      />
                    }
                    name="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label={
                      <FormattedMessage
                        id="registrationform.name"
                        defaultMessage="Name"
                      />
                    }
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label={
                      <FormattedMessage
                        id="registrationform.password"
                        defaultMessage="Password"
                      />
                    }
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label={
                      <FormattedMessage
                        id="registrationform.repeatpassword"
                        defaultMessage="Repeat password"
                      />
                    }
                    type="password"
                    id="reppassword"
                    autoComplete="current-password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid className={classes.error}>{error}</Grid>
              <Grid container justifyContent="center">
              {registrationIsGoing ? (
                <DualRing></DualRing>
              ) : (
                <Button
                  disabled={registrationIsGoing}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  <FormattedMessage
                    id="registrationform.signup"
                    defaultMessage="Sign up"
                  />
                </Button>
              )}
             </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2"   style={{ textDecoration: "inherit", color: "inherit" }}>
                    <FormattedMessage
                      id="registrationform.signin"
                      defaultMessage="Sign in"
                    />
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      );
}


export default observer(RegistrationForm);