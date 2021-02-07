import React from 'react';
import analogClock from 'assets/analogClock.svg'
import { makeStyles } from '@material-ui/core'

const styles = makeStyles(theme => ({
    clock: {
        borderRadius: '50%',
        position: 'relative',
        background: `black url(${analogClock})`,
        backgroundSize: '100% 100%',
        height: '20em',
        width: '20em',
        margin: '2em auto',
    }
}))
interface Props {
    children: React.ReactNode
}
const CClock = (props: Props) => {
    const classes = styles()
    return (
        <div className={classes.clock}>
            {props.children}
        </div>
    )
}
export default CClock;