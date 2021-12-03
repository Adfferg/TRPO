import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../index";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styles from "./styles";
import { observer } from "mobx-react-lite";
import CubeLoader from "../loaders/CubeLoader";
import Typography from "@material-ui/core/Typography";
import { FormattedMessage } from "react-intl";
import TextField from "@material-ui/core/TextField";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import IconButton from "@material-ui/core/IconButton";
import ReviewService from "../../services/ReviewService";
import ReviewItem from "./ReviewItem";

function Reviews() {
  const maxLenOfReview = 500;
  const { store } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const classes = styles();
  const [reviewText, setReviewText] = useState("");
  const [reviewLength, setReviewLength] = useState(maxLenOfReview);
  const [reviews,setReviews] = useState();
  const [tryingToCreateReview, setTryingToCreateReview] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    let cleanupFunction = false;
    async function getDataFromServer() {
      try {
        const response = await ReviewService.getReviews();
        if (!cleanupFunction) {
          setReviews(response.data)
        }
      } catch (e) {
        console.log(e)
      } finally {
        if (!cleanupFunction) setLoading(false);
      }
    }
    getDataFromServer();

    return () => (cleanupFunction = true);
  }, [tryingToCreateReview]);

  const changeReviewText = (review) => {
    if (maxLenOfReview - review.length >= 0) {
      setReviewText(review);
      setReviewLength(maxLenOfReview - review.length);
    }
  };

  const createReview = async () =>{
    if (reviewText.length === 0){
      setError(<FormattedMessage
        id="reviews.error"
        defaultMessage="Empty field!"
      />);
    }
    if(!tryingToCreateReview && reviewText.length>0 && store.email){
      try{
        setTryingToCreateReview(true);
        const response = await ReviewService.create(store.email,reviewText);
        if(response){
          changeReviewText('')
        }
      }
      catch(e){

      }
      finally{
        setTryingToCreateReview(false);
        setError("");
      }
    }
    
  }

  const deleteReview = async(id) =>{
    try{
      if(id!=null && !tryingToCreateReview ){
        setTryingToCreateReview(true)
        await ReviewService.delete(id);
        setTryingToCreateReview(false)
      }
    }
    catch(e){

    }
    finally{
      
    }
  }

  if (loading) {
    return <CubeLoader></CubeLoader>;
  }

  return(
    
    <Container >
      {store.isAuth&&(
      <Grid item xs={12} className={classes.mainGrid}>
          <Typography component="h1" variant="h6" className={classes.headers}>
            <FormattedMessage
              id="reviews.new_review"
              defaultMessage="New review"
            />
            ({reviewLength})
          </Typography>
          <Grid style={{display:"flex"}}>
            <TextField
              variant="outlined"
              multiline
              fullWidth
              value={reviewText}
              onChange={(e) => changeReviewText(e.target.value)}
            ></TextField>
            <Grid>
              <IconButton size ="medium" onClick={() => createReview()} >
                <ArrowRightIcon  style={{ color: "green" }} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid className={classes.error}>{error}</Grid>
      </Grid>)}
      {reviews.length>0 ? (
      <Grid container className = {classes.mainGrid}>
            <Grid container item justifyContent="center">
            <Typography component="h1" variant="h5" className={classes.headers}>
              <FormattedMessage 
                id="reviews.review"
                defaultMessage="Reviews"/>
            </Typography>
            </Grid>
              {reviews.map((review) => {
                return (
                  <Grid item key={review._id} xs={12}>
                    <ReviewItem
                      review={review}
                      deleteReview = {deleteReview}
                    ></ReviewItem>
                  </Grid>
                );
              })}
            
      </Grid>):(
        <Grid container className = {classes.mainGrid} style = {{justifyContent:"center"}}>
         <Typography component="h1" variant="h6" className={classes.label}>
         <FormattedMessage
           id="reviews.no_reviews"
           defaultMessage="There are no reviews yet"
         />
       </Typography>
       </Grid>
      )}
    </Container>
  );      
}


export default observer(Reviews);