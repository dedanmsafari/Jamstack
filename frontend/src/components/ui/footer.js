import React from "react"
import { Link, navigate } from "gatsby"
import { Typography, Grid, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import twitter from "../../images/twitter.svg"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: "2rem",
  },
  link: {
    color: theme.palette.common.white,
    fontSize: "1.25rem",
  },
  linkContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "3rem",
    },
  },
  linkColumn: {
    width: "20rem",
    [theme.breakpoints.down("xs")]: {
      width: "14rem",
    },
  },
  icon: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  "@global": {
    body: {
      margin: 0,
    },
    a: {
      textDecoration: "none",
    },
  },
}))

const SocialMedia = [
  {
    name: facebook,
    link: "https://facebook.com",
    alt: "facebook",
  },
  {
    name: instagram,
    link: "https://instagram.com",
    alt: "instagram",
  },
  {
    name: twitter,
    link: "https://twitter.com",
    alt: "twitter",
  },
]

const routes = {
  "Cantact Us": [
    { label: "0723275041", href: "tel:0723275041" },
    {
      label: "dedan.developer@gmail.com",
      href: "mailto:dedan.developer@gmail.com",
    },
  ],
  "Customer Service": [
    { label: "Contact Us", link: "/contact" },
    { label: "My Account", link: "/account" },
  ],
  Information: [
    { label: "Privacy Policy", link: "/privacy-policy" },
    { label: "Terms and Conditions", link: "/terms-and-conditions" },
  ],
}

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="space-between">
        {/* links */}
        <Grid item classes={{ root: classes.linkContainer }}>
          <Grid container>
            {Object.keys(routes).map(category => (
              <Grid
                item
                key={category}
                container
                direction="column"
                classes={{ root: classes.linkColumn }}
              >
                <Grid item>
                  <Typography variant="h5">{category}</Typography>
                </Grid>
                {routes[category].map(({ label, link, href }) => (
                  <Grid item key={label}>
                    {" "}
                    <Typography
                      component={link ? Link : "a"}
                      to={link ? link : undefined}
                      href={href ? href : undefined}
                      variant="body1"
                      classes={{ body1: classes.link }}
                    >
                      {label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* social icons */}
        <Grid item>
          <Grid container direction="column" alignItems="center">
            {SocialMedia.map(({ name, link, alt }) => (
              <Grid item key={alt}>
                <IconButton
                  classes={{ root: classes.icon }}
                  component="a"
                  href={link}
                  target="_blank"
                >
                  <img src={name} alt={alt} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
