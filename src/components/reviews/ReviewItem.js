import React,{useContext, useState} from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import { observer } from "mobx-react-lite";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router";
import { Context } from "../../index";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { FormattedMessage } from "react-intl";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import ReviewService from "../../services/ReviewService";

function ReviewItem(props) {
  const { review, deleteReview } = props;
  const { store } = useContext(Context);
  const classes = styles();
  const day = new Date(review.date)
  .toLocaleString()
  .split(",")[0];
  const minutes = new Date(review.date)
  .toLocaleString()
  .split(",")[1];
  const date = minutes + " " + day;
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false)
  const [newReview, setNewReview] = useState(review.review)
  const [error, setError] = useState("");

  const editReview = async()=>{
    try{
      if(newReview === review.review){
        declineEdit();
      }
      else if(newReview){
        const response = await ReviewService.edit(review._id, newReview);
        if(response){
          review.review = newReview;
          review.edited = true;
          setIsEdit(false)
          setError("")
        }
      }
      else{
        setError(<FormattedMessage
          id="reviews.error"
          defaultMessage="Empty field!"
        />);
      }
    }
    catch(e){
      console.log(e)
    }
  }

  const declineEdit=()=>{
    setError("")
    setIsEdit(false)
    setNewReview(review.review)
  }

  return(
        <Grid item className = {classes.grid} style={{background:"rgb(238, 238, 245)"}}>
          <Grid style={{display:"flex"}}>
            <Typography onClick={() => {
                navigate(`../profile/${review.user_id}`, { replace: false });
              }}

            className={classes.text} style={{cursor: "pointer"}}>{review.user_email}{" "}{date}</Typography>
            {review.edited && ( 
              <FormattedMessage
                id="reviews.edited"
                defaultMessage="edited"
              />)}
            {(store.id === review.user_id|| store.user.role === 'ADMIN') &&(
              isEdit?(
                <Grid style={{display:"flex"}}>
                  <IconButton size={"small"} onClick ={()=>{editReview()}}> 
                    <CheckIcon style={{ color: "green" }} />
                  </IconButton>
                  <IconButton size={"small"} onClick={()=>{declineEdit()}}>
                    <ClearIcon style={{ color: "red" }}  />
                  </IconButton>
                </Grid>)
              :(
                <Grid style={{display:"flex"}}>
                  <IconButton size={"small"} onClick={() => {setIsEdit(true)}}>
                      <EditIcon></EditIcon>
                </IconButton>
                <IconButton size={"small"} onClick={() => {deleteReview(review._id)}}>
                  <DeleteIcon></DeleteIcon>
                </IconButton>
              </Grid>))}
          </Grid>
          {isEdit?(
            <Grid className = {classes.grid}>
              <TextField
                variant="outlined"
                multiline
                fullWidth
                value={newReview}
                className={classes.text}
                onChange={(e) => e.target.value.length < 501 && setNewReview(e.target.value)}>
              </TextField>
            </Grid>
          ):(
            <Grid className = {classes.grid}>
              <Typography className={classes.text} style={{wordWrap: "break-word"}} >
                {review.review}
              </Typography>
            </Grid>
          )}
          <Grid className={classes.error}>{error}</Grid>
        </Grid>
  );      
}

export default observer(ReviewItem);