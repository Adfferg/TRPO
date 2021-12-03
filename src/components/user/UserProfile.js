import React, { useContext, useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Context } from "../../index";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react-lite";
import { FormattedMessage } from "react-intl";
import CubeLoader from "../loaders/CubeLoader";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import ProfileService from "../../services/ProfileService";
import CloudinaryService from "../../services/CloudinaryService";
import { useParams} from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  const { store } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const classes = styles();
  const [newAvatar, setNewAvatar] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarId, setAvatarId] = useState("");
  const [email, setEmail] = useState("");
  const [lastLogin, setLastLogin] = useState("");
  
  useEffect(() => {
    let cleanupFunction = false;
    async function getDataFromServer() {
      try {
        const response = await ProfileService.getUserInfo(id);
        if (!cleanupFunction) {
          setAvatar(response.data.avatar);
          setAvatarId(response.data.avatar_id);
          setEmail(response.data.email);
          console.log(response.data.last_login)
          const day = new Date(response.data.last_login)
            .toLocaleString()
            .split(",")[0];
          const minutes = new Date(response.data.last_login)
            .toLocaleString()
            .split(",")[1];
          const date = minutes + " " + day;
          setLastLogin(date);
        }
      } catch (e) {
        console.log(e)
      } finally {
        if (!cleanupFunction) setLoading(false);
      }
    }

    if (store) {
      getDataFromServer();
    }
    return () => (cleanupFunction = true);
  }, [store, id]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setNewAvatar(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  async function uploadAvatar() {
    const response = await CloudinaryService.postImage(newAvatar);
    if (response) {
      const successUpload = await ProfileService.setAvatar(
        store.email,
        response.data
      );
      if (successUpload) {
        avatarId && (await ProfileService.cloudinaryDestroyOld(avatarId));
        setAvatar(response.data.secure_url);
        setAvatarId(response.data.public_id);
        setNewAvatar("");
      }
    }
  }
  function diclineAvatar() {
    setNewAvatar("");
  }
  if (loading) {
    return <CubeLoader></CubeLoader>;
  }

  return(
    <Container>
          <Container className={classes.userInfo}>
            <Grid container>
              <Grid container item xs={12} sm={12} md={2} justifyContent="center">
                <img
                  {...getRootProps()}
                  className={`${classes.avatar} ${
                    isDragActive ? classes.active : null
                  }`}
                  alt="Avatar"
                  src={
                    newAvatar
                      ? URL.createObjectURL(newAvatar)
                      : avatar
                      ? avatar
                      : 'https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png'
                  }
                ></img>
                {store.id === id && <input {...getInputProps()}></input>}
                {newAvatar && (
                  <Grid>
                    <IconButton onClick={() => uploadAvatar()}>
                      <CheckIcon style={{ color: "green" }} />
                    </IconButton>{" "}
                    <IconButton onClick={() => diclineAvatar()}>
                      <ClearIcon style={{ color: "red" }} />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
              <Grid container item xs={12} sm={12} md={10} justifyContent="start">
                <Box m={0.5}>
                  <Typography>
                    <FormattedMessage id="profile.email" defaultMessage="Email" />:{" "}
                    {email}
                  </Typography>
                  <Typography>
                    <FormattedMessage
                      id="profile.lastlogin"
                      defaultMessage="Last login"
                    />
                    : {lastLogin}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
          {store.id === id ? (
            !store.user.isActivated ? (
              <Container className={classes.events}>
                <Grid item xs={12}>
                  <Typography>
                    <FormattedMessage
                      id="profile.notactivated"
                      defaultMessage="Your account is not activated"
                    />
                  </Typography>
                  <Button
                    className={classes.button}
                    onClick={() => {
                      store.sendActivationLink();
                    }}
                    variant="contained"
                    color="primary"
                    style={{ height: "3rem", alignItems: "center" }}
                  >
                    <FormattedMessage
                      id="profile.sendlink"
                      defaultMessage="Send activation link again"
                    />
                  </Button>
                </Grid>
              </Container>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </Container>
  );      
}


export default observer(UserProfile);