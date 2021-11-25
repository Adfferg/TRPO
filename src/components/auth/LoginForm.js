import React,{ useState, useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Context } from "../../index";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "./styles";
import { useNavigate } from "react-router";
function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { store } = useContext(Context);
    const classes = styles();
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
          const res = await store.login(email, password);
          if (res === true) {
            navigate('../', { replace: true });
          }
           else {
            setError(res.response?.data?.message);
            setPassword("");
          }
        } catch (e) {
          console.log(e.response?.data?.message);
        }
    }

    return(
        <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            <FormattedMessage id="loginform.title" defaultMessage="Sign in" />
          </Typography>
          <form className={classes.form} onSubmit={login}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={
                <FormattedMessage
                  id="loginform.emailaddress"
                  defaultMessage="Email Address"
                />
              }
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={
                <FormattedMessage
                  id="loginform.password"
                  defaultMessage="Password"
                />
              }
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Grid className={classes.error}>{error}</Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <FormattedMessage id="loginform.signin" defaultMessage="Sign in" />
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="/registration"
                  variant="body2"
                  style={{ textDecoration: "inherit", color: "inherit" }}
                >
                  <FormattedMessage
                    id="loginform.signup"
                    defaultMessage="Sign up"
                  />
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
}


export default LoginForm;