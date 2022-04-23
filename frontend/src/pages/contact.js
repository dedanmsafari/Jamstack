import React from "react"
import {
  Grid,
  Typography,
  IconButton,
  Button,
  useTheme,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"

import Layout from "../components/ui/layout"

import address from "../images/address.svg"
import phone from "../images/phone-adornment.svg"
import Email from "../images/EmailAdornment.js"
import send from "../images/send.svg"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: "40rem",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "10rem",
  },
  formWrapper: {
    height: "100%",
  },
  formContainer: {
    height: "100%",
  },
  blockContainer: {
    backgroundColor: theme.palette.secondary.main,
    height: "8rem",
    width: "40rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginTop: "-4rem",
  },
  buttonContainer: {
    marginBottom: "-4rem",
    textTransform: "none",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },

  sendIcon: {
    marginLeft: "2rem",
  },
  contactInfo: {
    fontSize: "1.5rem",
    marginLeft: "1rem",
  },
  contactIcon: {
    height: "3rem",
    width: "3rem",
  },
  contactEmailIcon: {
    height: "2.25rem",
    width: "3rem",
  },
  infoContainer: {
    height: "21.25rem",
  },
  iconContainer: {
    borderRight: "2px solid #fff",
    height: "7rem",
    width: "8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  middleInfo: {
    borderTop: "2px solid #fff",
    borderBottom: "2px solid #fff",
  },
}))

const Contact = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <Layout>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        classes={{ root: classes.mainContainer }}
      >
        {/* contact form */}
        <Grid item classes={{ root: classes.formWrapper }}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            classes={{ root: classes.formContainer }}
          >
            <Grid
              item
              classes={{
                root: clsx(classes.blockContainer, classes.titleContainer),
              }}
            >
              <Typography variant="h4">Contact Us</Typography>
            </Grid>
            <Grid
              item
              component={Button}
              classes={{
                root: clsx(classes.blockContainer, classes.buttonContainer),
              }}
            >
              <Typography variant="h4">send message</Typography>
              <img src={send} className={classes.sendIcon} alt="send message" />
            </Grid>
          </Grid>
        </Grid>
        {/* contact address */}
        <Grid item>
          <Grid
            container
            direction="column"
            classes={{ root: classes.infoContainer }}
            justifyContent="space-between"
          >
            <Grid item container alignItems="center">
              <Grid item classes={{ root: classes.iconContainer }}>
                <img
                  className={classes.contactIcon}
                  src={address}
                  alt="address"
                />
              </Grid>
              <Grid item>
                <Typography
                  classes={{ root: classes.contactInfo }}
                  variant="h2"
                >
                  Nakuru @Egerton south St
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              classes={{ root: classes.middleInfo }}
            >
              <Grid item classes={{ root: classes.iconContainer }}>
                <img className={classes.contactIcon} src={phone} alt="phone" />
              </Grid>
              <Grid item>
                <Typography
                  classes={{ root: classes.contactInfo }}
                  variant="h2"
                >
                  0723275041
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item classes={{ root: classes.iconContainer }}>
                <div className={classes.contactEmailIcon}>
                  <Email color={theme.palette.common.white} />
                </div>
              </Grid>
              <Grid item>
                <Typography
                  classes={{ root: classes.contactInfo }}
                  variant="h2"
                >
                  dedan@developer.gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Contact
