import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    banner:{
        width:'100%',
        height:'32rem',
        position: 'relative',
        marginBottom: '1.5rem',
    },
    img:{
        height:'100%',
        width:'100%',
        objectFit: 'cover',
        objectPosition: '0% 20%',
    },
    grid:{
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        top: '0%',
        width: '100%',
        height: '100%',
        color: 'white',
        paddingTop: '8rem',
        paddingLeft: '5%',
    },
    title:{
        fontSize:'3rem',
        [theme.breakpoints.down("md")]: {
            fontSize:'2.5rem',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize:'2rem',
        },
    },
    button:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
    },
    svgPlay:{
        fontSize: '2.9rem',
        zIndex: '1',
        borderRadius: '50%',
        
    },
    btn:{
        width: '7rem',
        backgroundColor: '#b00940',
        color: 'white',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        '&:hover':{
            cursor:'pointer',
            backgroundColor: '#A00940',
        }
    },
    disc:{
        width: '40%',
        fontSize: '1.05rem',
        [theme.breakpoints.down("md")]: {
            width: '70%',
        },
        [theme.breakpoints.down("sm")]: {
            width: '80%',
        },
    },
}));

export default useStyles