import React, { useState } from "react"
import {
  Grid,
  Typography,
  Button,
  useTheme,
  TextField,
  InputAdornment,
  useMediaQuery,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"

import Layout from "../components/ui/layout"
import validate from "../components/ui/validator"

import address from "../images/address.svg"
import Phone from "../images/PhoneAdornment.js"
import nameAdornment from "../images/name-adornment.svg"
import Email from "../images/EmailAdornment.js"
import send from "../images/send.svg"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: "45rem",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "10rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "8rem",
      height: "90rem",
    },
  },
  formWrapper: {
    height: "100%",
    [theme.breakpoints.down("md")]: {
      height: "50%",
      marginTop: "-8rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
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
    [theme.breakpoints.down("sm")]: {
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
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
    [theme.breakpoints.down("xs")]: {
      height: "15.25rem",
    },
  },
  iconContainer: {
    borderRight: "2px solid #fff",
    height: "7rem",
    width: "8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: "6rem",
      height: "5rem",
    },
  },
  middleInfo: {
    borderTop: "2px solid #fff",
    borderBottom: "2px solid #fff",
  },
  textField: {
    width: "30rem",
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
    },
  },
  input: {
    color: "#fff",
  },
  textFieldContainer: {
    marginBottom: "1rem",
  },
  multilineContainer: {
    marginTop: "1rem",
  },
  emailAdornment: {
    height: 17,
    width: 22,
    marginBottom: 10,
  },
  phoneAdornment: {
    height: 25.122,
    width: 25.173,
  },
  multiline: {
    border: "2px solid #fff",
    borderRadius: 10,
    padding: "1rem",
  },
  multilineError: {
    border: `2px solid ${theme.palette.error.main}`,
  },
  buttonDisabled: {
    backgroundColor: theme.palette.grey[600],
  },
  sendMessage: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  "@global": {
    ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid #fff",
    },
    ".MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  },
}))

const Contact = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const fields = {
    name: {
      helperText: "you must enter a name",
      placeholder: "Name",
      adornment: <img src={nameAdornment} alt="name icon" />,
    },
    email: {
      helperText: "you must enter a valid email",
      placeholder: "Email",
      adornment: (
        <div className={classes.emailAdornment}>
          <Email color={theme.palette.secondary.main} />
        </div>
      ),
    },
    phone: {
      helperText: "you must enter a valid phone number",
      placeholder: "Phone Number",
      adornment: (
        <div className={classes.phoneAdornment}>
          <Phone color={theme.palette.secondary.main} />
        </div>
      ),
    },
    message: {
      helperText: "you must enter a message",
      placeholder: "Message",
      inputClasses: {
        multiline: classes.multiline,
        error: classes.multilineError,
      },
    },
  }

  const info = [
    {
      label: <span> Egerton,Nakuru {matchesXS ? <br /> : null}Viewpoint </span>,
      icon: <img className={classes.contactIcon} src={address} alt="address" />,
    },
    {
      label: "0723275041",
      icon: (
        <div className={classes.contactIcon}>
          <Phone />
        </div>
      ),
    },
    {
      label: (
        <span> dedan@ {matchesXS ? <br /> : null}developer.gmail.com </span>
      ),
      icon: (
        <div className={classes.contactEmailIcon}>
          <Email color={theme.palette.common.white} />
        </div>
      ),
    },
  ]

  const disabled =
    Object.keys(errors).some(field => errors[field] === true) ||
    Object.keys(errors).length !== 4

  return (
    <Layout>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        classes={{ root: classes.mainContainer }}
        direction={matchesMD ? "column" : "row"}
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
            <Grid item>
              <Grid container direction="column">
                {Object.keys(fields).map(field => {
                  const validateHelper = event => {
                    return validate({ [field]: event.target.value })
                  }
                  return (
                    <Grid
                      item
                      key={field}
                      classes={{
                        root:
                          field === "message"
                            ? classes.multilineContainer
                            : classes.textFieldContainer,
                      }}
                    >
                      <TextField
                        placeholder={fields[field].placeholder}
                        value={values[field]}
                        onChange={e => {
                          const valid = validateHelper(e)

                          if (errors[field] || valid[field] === true) {
                            setErrors({ ...errors, [field]: !valid[field] })
                          }

                          setValues({ ...values, [field]: e.target.value })
                        }}
                        onBlur={e => {
                          const valid = validateHelper(e)
                          setErrors({ ...errors, [field]: !valid[field] })
                        }}
                        error={errors[field]}
                        helperText={errors[field] && fields[field].helperText}
                        classes={{ root: classes.textField }}
                        multiline={field === "message"}
                        minRows={field === "message" ? 8 : undefined}
                        maxRows={field === "message" ? 8 : undefined}
                        InputProps={{
                          classes: {
                            input: classes.input,
                            ...fields[field].inputClasses,
                          },
                          disableUnderline: field === "message",
                          startAdornment:
                            field === "message" ? null : (
                              <InputAdornment position="start">
                                {fields[field].adornment}
                              </InputAdornment>
                            ),
                        }}
                      />
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
            <Grid
              item
              component={Button}
              disabled={disabled}
              classes={{
                root: clsx(classes.blockContainer, classes.buttonContainer, {
                  [classes.buttonDisabled]: disabled,
                }),
              }}
            >
              <Typography variant="h4" classes={{ root: classes.sendMessage }}>
                send message
              </Typography>
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
            {info.map(({ label, icon }, i) => (
              <Grid
                item
                container
                key={i}
                alignItems="center"
                classes={{ root: i === 1 ? classes.middleInfo : undefined }}
              >
                <Grid item classes={{ root: classes.iconContainer }}>
                  {icon}
                </Grid>
                <Grid item>
                  <Typography
                    classes={{ root: classes.contactInfo }}
                    variant="h2"
                  >
                    {label}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Contact
