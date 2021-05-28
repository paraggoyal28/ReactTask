import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    grid: {
        display: 'flex',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    root: {
        background: '#FFFFFF 0% 0 % no - repeat padding- box',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '12px',
        opacity: 1,
    },
    text: {
        background: '#EEF1F8 0% 0% no-repeat padding-box',
        borderRadius: '8px',
        opacity: 1,
        marginTop: '12px',
        height: '40px',
        flex: 1,
        padding: '0px 10px'
    },
    title: {
        textAlign: 'left',
        font: 'normal normal medium 20px/24px Montserrat',
        letterSpacing: '0px',
        color: '#537178',
        opacity: 1,
    },
    button: {
        marginTop: '12px',
        borderRadius: '8px',
        opacity: 1,
    },
});

export default useStyles;