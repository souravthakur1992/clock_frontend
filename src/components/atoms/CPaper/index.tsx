import React from 'react'
import { Paper, PaperProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: (props: Props) => (props.square ? 5 : undefined),
    borderColor: () => theme.palette.primary.light,
    border: (props: Props) => (props.borderless ? 'none' : undefined),
    boxSizing: 'border-box',
    overflow: 'hidden',
    padding: '20px 16px',
    textAlign: (props: Props) => props.textAlign || 'center',
    transition: theme.transitions.create(['background-color', 'color'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.shortest,
    }),
    color: (props: Props) => theme.palette.text[props.color || 'primary'],
  },
  primary: {},
  secondary: {
    backgroundColor: theme.palette.background.default,
  },
}))

interface Props extends PaperProps {
  color?: 'primary' | 'secondary'
  textAlign?: React.CSSProperties['textAlign']
  borderless?: boolean
}

export default function CPaper(props: Props) {
  const { color, className, textAlign, ...restProps } = props
  const classes = useStyles(props)
  const paperProps = {
    classes: restProps.classes,
    component: restProps.component,
    elevation: restProps.elevation,
    square: restProps.square,
    variant: restProps.variant,
    onClick: restProps.onClick
  }
  return (
    <Paper
      className={classnames(classes.root, classes[color || 'primary'], className)}
      variant='outlined'
      {...paperProps}
    >
      {props.children}
    </Paper>
  )
}
