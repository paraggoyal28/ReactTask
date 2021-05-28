import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        marginTop: '100px'
    },
    secondContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '100px',
        justifyContent: 'center',
    },
    flexBox: {
        marginTop: '44px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chart: {

        position: 'relative',
    },
    flexInBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    tableContainer: {
        marginTop: '16px',
    },
    checkbox: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '4px',
        opacity: 1,
        width: '19px',
        height: '19px',

    },
    first: {
        padding: '25px 25px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #0000000A',
        borderRadius: '12px',
        opacity: 1,
        width: '304px',
        height: '120px',

    },
    second: {
        padding: '25px 25px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #0000000A',
        borderRadius: '12px',
        opacity: 1,
        width: '304px',
        height: '120px',
        display: 'flex',
        alignItems: 'center',


    },
    cell: {
        textAlign: 'left',
        font: 'normal normal medium 20px/24px Montserrat',
        fontSize: '20px',
        letterSpacing: '0px',
        color: '#5285EC',
        opacity: 1
    },
    row: {
        height: '75px',
    },
    modifiers: {
        marginLeft: '100px',
    },
    searchBox: {
        background: '#D9DFEB 0% 0% no-repeat padding-box',
        borderRadius: '8px',
        opacity: 1,
        paddingLeft: '10px',
        display: 'flex',
        alignItems: 'center',
        marginRight: '16px'
    },
    latest: {
        textAlign: 'left',
        font: 'normal normal medium 14px/26px Montserrat',
        letterSpacing: '0px',
        color: '#8F9EA2',
        opacity: 1
    },
    completedLatest: {
        textAlign: 'left',
        font: 'normal normal medium 14px/26px Montserrat',
        letterSpacing: '0px',
        color: '#8F9EA2',
        opacity: 1,
        textDecoration: 'line-through',
    },
    completed: {
        textAlign: 'left',
        font: 'normal normal medium 20px/24px Montserrat',
        letterSpacing: '0px',
        fontSize: '20px',
        color: '#537178',
        opacity: 1,
        textDecoration: 'line-through',
    },
    title: {
        textAlign: 'left',
        font: 'normal normal medium 20px/24px Montserrat',
        fontSize: '20px',
        lineHeight: '24px',
        letterSpacing: '0px',
        color: '#537178',
        opacity: 1,
        marginBottom: '20px'
    },
    bullet: {
        display: 'inline-block',
        marginRight: '10px',
        transform: 'scale(0.8)',
    },
    modal: {
        marginTop: '100px'
    },
    highlight: {
        textAlign: 'left',
        font: 'normal normal medium 64px/78px Montserrat',
        fontSize: '64px',
        lineHeight: '78px',
        letterSpacing: '0px',
        color: '#5285EC',
        opacity: 1,
        position: 'relative',
        bottom: '5px',
    },
});

export default useStyles;