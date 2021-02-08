import React from 'react'
import { makeStyles } from '@material-ui/core'
import AngleCalculator from './AngleCalculator'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0 16px 0 16px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px'
    },
  },
}))

export default function Home(props: any) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      < AngleCalculator />
    </div>
  )
}
