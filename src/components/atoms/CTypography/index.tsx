import React from 'react'
import { TypographyProps, Typography, makeStyles } from '@material-ui/core'
import classnames from 'classnames'

interface Props extends Omit<TypographyProps, 'variant'> {
  variant?: TypographyProps['variant'] | 'bodyBold'
  font?:
    | 'Bold'
    | 'Bold Italic'
    | 'Bold Medium'
    | 'Italic'
    | 'Light Italic'
    | 'Medium Italic'
    | 'Regular'
    | 'Thin'
    | 'Light'
    | 'Thin Italic'
}

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: (props: Props) => (props.variant === 'bodyBold' ? '1.5rem' : undefined),
    [theme.breakpoints.down('xs')]: {
      fontSize: (props: Props) => (props.variant === 'bodyBold' ? '1.125rem' : undefined),
    },

    fontFamily: (props: Props) => 'Roboto ' + (props.font || 'Regular')
  },
}))

export default function CTypography(props: Props) {

  const classes = useStyles(props)
  const { variant, className, ...otherProps } = props
  //If variant is of our custom types, don't send the prop to Typography
  const typographyVariant = variant === 'bodyBold' ? undefined : variant

  return (
    <Typography
      color='textPrimary'
      className={classnames(classes.root, className)}
      variant={typographyVariant}
      {...otherProps}
    >
      {props.children}
    </Typography>
  )
}
