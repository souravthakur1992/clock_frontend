import { makeStyles } from '@material-ui/core'
const styles = makeStyles(() => ({
    clockhand: {
        transformOrigin: 'bottom center',
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: '50%',
        margin: '0 auto',
        zIndex:3
    }
}))
interface Props {
    height: string,
    width: string,
    angle: number,
    color: string
}
const CHand = (props: Props) => {
    const classes = styles()
    return (
        <div className={classes.clockhand}
            style={{
                height: props.height, width: props.width, transform: 'rotate(' + props.angle + 'deg)', backgroundColor: props.color
            }}>
        </div>
    )
}
export default CHand