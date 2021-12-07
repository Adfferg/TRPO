import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";

function ConfirmationWindow(props) {
  const {changeShowWindow, createEvent,openWindow} = props

  return (
    <Dialog
      open={openWindow}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
      <FormattedMessage
          id="event.confirm"
          defaultMessage="Confirm"
        />
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        <FormattedMessage
          id="event.sure"
          defaultMessage="Are you sure? You won't be able to change this event"
        />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => {createEvent()}}>
        <FormattedMessage
          id="event.yes"
          defaultMessage="Yes"
        />
        </Button>
        <Button color="primary" autoFocus onClick={() => {changeShowWindow(false)}}>
        <FormattedMessage
          id="event.no"
          defaultMessage="No"
        />
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default ConfirmationWindow;
