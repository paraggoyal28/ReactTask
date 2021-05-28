import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #0000000A',
        borderRadius: '12px',
        opacity: 1,
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '296px',
        height: '193px',
        justifyContent: 'space-evenly'
    },
    heading: {
        textAlign: 'center',
        font: 'normal normal medium 20px/28px Montserrat',
        fontSize: '20px',
        letterSpacing: '0px',
        color: '#537178',
        opacity: 1
    },
    modal: {
        marginTop: '100px'
    },
    outer: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default useStyles;