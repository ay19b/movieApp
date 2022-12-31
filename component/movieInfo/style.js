import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    detailMovie:{
        width:'100vw',
        position:'relative',
        height:'43rem',
		[theme.breakpoints.down("md")]: {
            height: 'calc( 70vh + 10rem)',
        },
        [theme.breakpoints.down("sm")]: {
            height: '20rem',
        },
        
    },
    grid:{
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'absolute',
        top: '0%',
        width: '100%',
		height: '100%',
        color: 'white',
        paddingTop: '10rem',
		[theme.breakpoints.down("md")]: {
            flexDirection: 'column',
            justifyContent: 'center',
			overflow: 'hidden'
        },
        [theme.breakpoints.down("sm")]: {
            overflow: 'initial'
        },
    },
    contentMovie:{
		display: "flex",
		width: '90%',
        margin: 'auto',
		[theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
        },
	},
    backGround:{
        width:'100vw',
        height: '100%',
    },
    contImg:{
        position: 'relative',
		[theme.breakpoints.down("sm")]: {
            marginLeft: '-1rem',
        },
    },
    img:{
        width:'13rem',
        [theme.breakpoints.down("sm")]: {
            width:'12rem',
			transform: 'translate(10%)',
        },
    },
    discMovie:{
        width:'50%',
		marginLeft: '5rem',
        [theme.breakpoints.down("md")]: {
            width:'auto',
			marginLeft: '2rem',
        },
        [theme.breakpoints.down("sm")]: {
			width: '100%',
            marginLeft: 'auto',
			marginBottom: '15px',
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
        flexWrap: 'wrap',
    },
    quality:{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        marginLeft: '4px',
        marginTop:"12px",
    },
    pg:{
        fontSize: '11px',
        textTransform: 'uppercase',
        color: '#21232b',
        background: '#fff',
        fontWeight: '700',
        padding: '7px 11px',
        lineHeight: '1', 
    },
    hd:{
        background: 'transparent',
        color: '#fff',
        marginLeft: '9px',
        border: '2px solid #fff',
        padding: '5px 10px',
        textTransform: 'uppercase',
        lineHeight: '1', 
        fontSize: '11px',
        fontWeight: '700',
    },
    date:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'2%',
        marginTop: '2px',
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
	divider:{
		background: '#5b5b5b',
        width: '100%',
        display:'none',
        [theme.breakpoints.down("sm")]: {
            display:'block',
        },
	},
}));

export default useStyles