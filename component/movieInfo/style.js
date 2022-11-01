import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    detailMovie:{
        width:'100vw',
        position:'relative',
        height:'43rem',
        [theme.breakpoints.down("sm")]: {
            height: 'calc(100vh + 100px)',
        },
        
    },
    grid:{
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'absolute',
        top: '0%',
        width: '100%',
        height: '100%',
        color: 'white',
        display: "flex",
        paddingTop: '10rem',
    },

    backGround:{
        width:'100vw',
        height: '100%',
    },
    contImg:{
        width:'30%',
        [theme.breakpoints.down("md")]: {
            width:'50%',
        },
        [theme.breakpoints.down("sm")]: {
            width:'40%',
        },
    },
    img:{
        width:'13rem',
        position: 'absolute',
        left: '0',
        marginLeft: '4%',
        [theme.breakpoints.down("sm")]: {
            width:'35%',
        },
    },
    discMovie:{
        width:'36%',
        [theme.breakpoints.down("md")]: {
            width:'57%',
        },
        [theme.breakpoints.down("sm")]: {
            width:'60%',
        },
    },
    inf:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50rem',
    },
    infGenre:{
        display: 'flex',
        alignItems: 'center',
        marginTop:'4%',
        flexWrap: 'wrap'
    },
    date:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'2%',
        marginTop: '2px',
        color:'rgb(149, 147, 147)',
    },
    prg:{
        width:'60%',
    },
    leftSide:{
        display: "flex",
        alignItems: "center",
        color:"white",
        justifyContent: "space-around",
    },
    iconSearch:{
        color:"white",
        fontSize: "1.4rem",
    },
    rightSide:{
        display: "flex",
        justifyContent: "space-around",
    },
	btnRgst:{
        background:' white',
        border: 'none',
        color: 'black',
        fontWeight: 'bold',
        '&:hover':{
            background:'white', 
        }
    },
    btnSng:{
        color: 'white',
    },
}));

export default useStyles