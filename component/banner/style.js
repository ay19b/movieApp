import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    banner:{
        width:'100%',
        height:'32rem',
        position: 'relative',
        marginBottom: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
		overflow: 'hidden',
		[theme.breakpoints.down("sm")]: {
            paddingTop: '7rem',
        },
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
        width: '8rem',
        backgroundColor: '#A00940',
        fontWeight:'bold',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        border: '1px solid #b00940',
        '&:hover':{
            cursor:'pointer',
            backgroundColor: 'rgba(176, 9, 64,0.7)',
            color:"white",
        }
    },
    disc:{
        width: '40%',
        fontSize: '1.05rem',
        [theme.breakpoints.down("md")]: {
            width: '70%',
        },
        [theme.breakpoints.down("sm")]: {
            width: '95%',
        },
    },
}));

export default useStyles