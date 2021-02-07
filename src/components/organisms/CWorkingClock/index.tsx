import React from 'react'
import { CClock, CHand,CTypography } from '../../index'
import { makeStyles } from '@material-ui/core'
interface Props {
  angle: string,
  hourAngle:number,
  minuteAngle:number,
  secondAngle:number
}
const useStyles = makeStyles(theme => ({
  center: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    borderRadius: '50%',
    backgroundColor: 'white',
    height: '3%',
    width: '3%',
    margin: 'auto'
  },
  pie: {
    width: '5em',
    height: '5em',
    display: 'block',
    borderRadius: '50%',
    backgroundColor: 'green',
    marginLeft: '-34.5px',
    marginTop: '-33.5px',
    float: 'left',
    color: 'white',
    backgroundImage: (props: Props) => (Math.abs(Math.ceil(props.hourAngle - 90) - Math.ceil(props.minuteAngle - 90)) < 180)?
    `linear-gradient(${Math.min(Math.ceil(props.hourAngle - 90),Math.ceil(props.minuteAngle - 90))}deg, transparent 50%, white 50%),linear-gradient(${Math.max(Math.ceil(props.hourAngle - 90),Math.ceil(props.minuteAngle - 90))}deg, white 50%, transparent 50%)`
    :`linear-gradient(${Math.max(Math.ceil(props.hourAngle - 90),Math.ceil(props.minuteAngle - 90))}deg, transparent 50%, white 50%),linear-gradient(${Math.min(Math.ceil(props.hourAngle - 90),Math.ceil(props.minuteAngle - 90))}deg, white 50%, transparent 50%)`
  },
}))
const CWorkingClock = (props: Props) => {
  const { angle,hourAngle,minuteAngle,secondAngle } = { ...props }
  const classes = useStyles(props)
  return (
   <>
    <CClock>
        <CHand height="27%" width="1%" angle={hourAngle} color="#F57C00" />
        <CHand height="36%" width=".9%" angle={minuteAngle} color="#FFD600" />
        <CHand height="38%" width=".5%" angle={secondAngle} color="#AEEA00" />
        <div className={classes.center}>
          <div className={classes.pie}>
          <CTypography variant='h6' font='Bold' paragraph>{angle}</CTypography>
        </div>
        </div>

    </CClock>
   </>
  )
}

export default CWorkingClock
