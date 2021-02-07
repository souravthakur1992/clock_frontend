import React from 'react'
import { makeStyles } from '@material-ui/core'
import AngleCalculator from './AngleCalculator'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}))

export default function Home(props: any) {
  const classes = useStyles()
  return (
      <div className={classes.root}>
         < AngleCalculator/>
      </div>
  )
}
