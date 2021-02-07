import React from 'react'
import { AppBar, IconButton,makeStyles } from '@material-ui/core'
import  Logo   from 'assets/clock.svg'
const useStyles = makeStyles(theme => ({
  placeholder: {
    [theme.breakpoints.up('xs')]: {
      height: 64,
    },
    [theme.breakpoints.down('xs')]: {
      height: 56,
    },
  },
  typoStyle:{
    textAlign:'center'
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar color='transparent'>
        <IconButton>
          <img src={Logo} width={50} height={40}/> 
        </IconButton>
      </AppBar>

      <div className={classes.placeholder} />
    </>
  )
}
