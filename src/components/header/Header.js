import React,{useContext, useState} from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import styles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  const { store } = useContext(Context);
  
  const [language, setLanguage] = useState(
    store.locale === "ru-RU" ? false : true
  );

  const changeLanguage = () => {
    setLanguage(!language);
    store.setLocale();
  };

  const classes = styles();
    return(
      <Box className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
              <Toolbar>
                <Link to="/" className={classes.title}>
                <FormattedMessage id="header.home" defaultMessage="Home" />
                </Link>
                <Grid item className={classes.options}>
                  <Box>
                    <Link to="/reviews" className={classes.link}>
                        <Button color="inherit">
                          <FormattedMessage
                            id="header.reviews"
                            defaultMessage="Reviews"
                          />
                        </Button>
                    </Link>
                  </Box>
                  <Grid className={classes.option}>
                    <FormattedMessage id="header.ru" defaultMessage="ru" />
                    <Switch
                      checked={language}
                      onChange={() => {
                        changeLanguage();
                      }}
                      name="checked"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <FormattedMessage id="header.en" defaultMessage="en" />
                  </Grid>
                </Grid>
                <Grid>
                  {!store.isAuth ? (
                    <Box>
                      <Link to="/login" className={classes.link}>
                        <Button color="inherit">
                          <FormattedMessage
                            id="header.login"
                            defaultMessage="Login"
                          />
                        </Button>
                      </Link>
                      <Link to="/registration" className={classes.link}>
                        <Button color="inherit">
                          <FormattedMessage
                            id="header.registration"
                            defaultMessage="Registration"
                          />
                        </Button>
                      </Link>
                    </Box>
                  ) : (
                    <Box>
                      {store.id && (
                        <Link to={`/profile/${store.id}`} className={classes.link}>
                          <IconButton size="small">
                            <AccountCircleIcon />
                          </IconButton>
                        </Link>
                      )}
                      <Link to="/" className={classes.link}>
                        <Button
                          color="inherit"
                          onClick={() => store.logout()}
                        >
                          <FormattedMessage
                            id="header.logout"
                            defaultMessage="Logout"
                          />
                        </Button>
                      </Link>
                    </Box>
                  )}
                </Grid>
              </Toolbar>
            </AppBar>
          </Box>
    )
}


export default observer(Header);