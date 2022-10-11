import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    error:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height:'100vh',
    },
    icon:{
        fontSize:'14rem',
        color:'white',
    },
    text:{
        marginBottom:'-24px',
    },
    btn:{
        backgroundColor: '#b00940',
        color: 'white',
        fontSize: '1.2rem',
        width: '12rem',
        padding:'2px',
        borderRadius:"2rem",
        padding:'8px',
        border:'none',
        cursor:"pointer"
    },
}));

export default useStyles;