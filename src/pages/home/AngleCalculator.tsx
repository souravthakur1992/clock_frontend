import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Box,
  List,
  Divider,
  TextField
} from '@material-ui/core'
import { CTypography, CPaper,CWorkingClock } from 'components'

const margin = '15px'

const styles = makeStyles(theme => ({
  root: {
    padding: `${margin}`,
    backgroundColor: '#002658',
    '&::before': {
      content: '""',
      zIndex: -1,
      width: '100%',
      left: 0,
    },
  },
  boxStyle:{    
    display:'flex', 
    justifyContent:'space-around',
    [theme.breakpoints.down('sm')]: {
      display:'block',
      padding: 8,
    },
  },
  root2: {
    maxWidth: 350,
    margin: 16,
  },  
  paper: {
    minWidth: 230,
    width: 450,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    border: 'unset',
    borderRadius: '15px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0px',
      width: '100%',
      'align-items': 'center'
    },
  },
  rightHeading: {
    marginTop: 32,
  },
  list: {
    maxWidth: '80%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      maxWidth: '100%',
    },
  }, 
  time: {
    marginTop: '96px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}))
function AngleCalculator() {  
  const [date, setDate] = useState(new Date().toLocaleTimeString())
  const [secondAngle, setSecondAngle] = useState(0)
  const [minuteAngle, setMinutesAngle] = useState(0)
  const [hourAngle, setHourAngle] = useState(0)
  const angle = { minuteAngle, hourAngle }
  const classes = styles(angle)
  useEffect(() => {
    updateHands()
  }, [date])
  useEffect(() => {
    let tick = setInterval(() => {
      setDate(prevTime => {
        let todaydate = new Date().toISOString().slice(0, 10);
        let newDate = new Date(todaydate + " " + prevTime)
        newDate.setSeconds(newDate.getSeconds() + 1);
        return newDate.toLocaleTimeString()
      })
    }, 1000)
    return ()=>clearInterval(tick)
  }, [])

  const updateHands = () => {
    const sec = (parseInt(date.split(':')[2]) || 0)
    const min = parseInt(date.split(':')[1]) + sec / 60
    const hr = parseInt(date.split(':')[0]) + min / 60
    setSecondAngle((sec * 6) % 360)
    setMinutesAngle((min * 6) % 360)
    setHourAngle((hr * 30) % 360)
  }

  const getAngle = () => {
    const ans = Math.abs(hourAngle - minuteAngle)
    return Math.round(Math.min(360 - ans, ans))+'°'
  }
  return (
    <div className={classes.root}>
      <Box className={classes.boxStyle}>
      <CPaper className={classes.paper}>
        <div className={classes.root2}>
          <CTypography variant='h6' font='Bold' align='center'>
            Calculate Angle Between Clock Hands
          </CTypography>
          <Divider/>
          <br/>
          <CTypography paragraph align='left'>
            Kindly <b>Enter/Select</b> Time and See the result for Angle between Clock Hands
           </CTypography>
          <div className={classes.time}>
            <CTypography variant='h6' font='Bold' align='center'>
             Select Time
            </CTypography>
            <TextField
              type="time"
              variant="outlined"              
              className={classes.textField}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        </CPaper>
        <CPaper className={classes.paper}>
          <CTypography variant='h6' font='Bold' className={classes.rightHeading}>
            Calculated Angle
          </CTypography>
          <CTypography variant='h5' font='Bold' style={{color:'green'}}>
            {getAngle()}
          </CTypography>
          <List className={classes.list}>
         <CWorkingClock angle={getAngle()} secondAngle={secondAngle} minuteAngle={minuteAngle} hourAngle={hourAngle}/>
          </List>
        </CPaper>
      </Box>
    </div>
  )
}

export default AngleCalculator
