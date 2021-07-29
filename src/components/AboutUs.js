import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid, Avatar } from "@material-ui/core";
import StockImageCarousel from "./ImageCarousel";
import Joanne from "../JS.jpg"


const useStyles = makeStyles((theme) => ({
    aboutUsPage: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center"
    },
    aboutUsHeadline: {
        backgroundColor: "#C8D5B9",
    },
    aboutUsHeader: {
        fontSize: 60,
        margin: 35,
        fontFamily: "Lemonade Stand"
    },
    aboutUsHeaderP: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10
    },
    aboutUsImage: {
        marginTop: 40,
        width: "50%"
    },
    imageCarousel: {
        padding: 30,
        marginTop: 40,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center"
    },
    aboutUsFooter: {
        backgroundColor: "#68B0AB"
    },
    avatar: {
        maxWidth: 200,
        width: 200,
        height: 200,
        margin: 20,
      },
      flow: {
        display: "flex",
        alignItems: "center",
        flexFlow: "wrap",
        padding: 10,
        justifyContent: "space-between"
      },
      divFlow: {
        width: 250,
        padding: 20,
        textAlign: "center",
      },
  }));


function AboutUs() {
    const classes = useStyles()

    return(
    <>
        <div className={classes.aboutUsHeadline}>
            <Container  className={classes.aboutUsPage}>
                <Grid>
                    <Typography className={classes.aboutUsHeader} component="h1" variant="h5">
                    About NinjaCoder
                    </Typography>
                    <div style={{paddingLeft: 20, paddingRight: 20}}>
                    <Typography className={classes.aboutUsHeaderP} component="h4" variant="h5">
                    We don't know what the future holds, but one thing is clear: digitization will continue to advance and become increasingly important in the future.
                    </Typography>
                    <Typography className={classes.aboutUsHeaderP} component="h4" variant="h5">
                    If you are a teacher with technical skills or a (hobby) developer, then you are very welcome to register on our site and upload videos in which you explain to children how to code, how they can playfully learn to code with existing websites or how the computer and the internet work. 
                    </Typography>
                    <Typography style={{marginBottom: 40}} className={classes.aboutUsHeaderP} component="h4" variant="h5">
                    If you are a parent, feel free to sign up here. Your child can create their own profile and learn to code through videos. We also have some free videos on our platform besides the courses of the teachers. Everything is explained in a child-friendly and playful way, see for yourself!
                    </Typography>
                    </div>
                </Grid>
            </Container>
        </div>
        <div  className={classes.imageCarousel}>
            <StockImageCarousel></StockImageCarousel>
            <Typography className={classes.aboutUsHeaderP} component="h2" variant="h5">
            Kids are having an incredible amount of fun learning with us.
            </Typography>
        </div>
        <div className={classes.aboutUsFooter}>
            <Container  className={classes.aboutUsPage}>
                <Grid>
              
                    <Typography className={classes.aboutUsHeader} component="h1" variant="h5">
                    About Us
                    </Typography>
                    <Container className={classes.flow}>
                    <div className={classes.divFlow}>
                <Avatar className={classes.avatar}>
                    <img src="" width='200px' alt="Anja" />
                </Avatar>
                <Typography className={classes.landingHeaderP} component="h2" variant="h5">
                Anja Ramihone
                </Typography>
                </div>
                <div className={classes.divFlow}>
                <Avatar className={classes.avatar}>
                    <img src={Joanne} width='200px' alt="Joanne" />
                </Avatar>
                <Typography className={classes.landingHeaderP} component="h2" variant="h5">
                Joanne Seiler
                </Typography>
                </div>
                </Container>
               
                </Grid>
                
            </Container>
        </div>
    </>
       
    )
}

export default AboutUs;