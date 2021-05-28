import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
    },
    name: {
        marginLeft: '15px',
        textAlign: 'left',
        font: 'normal normal medium 16px/19px Montserrat',
        letterSpacing: '0px',
        color: '#6D8187',
        opacity: 1,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        marginLeft: '50px',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));