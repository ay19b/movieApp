import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    navbar:{
        padding: '1%',
        position: "absolute",
        zIndex: "11",
        display: 'flex',
        width:'100%',
    },
    NavSearch:{
        display: 'flex',
        padding: "25px 0 !important",
        zIndex: "11",
        position: "relative",
        marginBottom: '8%',
    },
    active:{
        position: 'fixed',
        zIndex:'1001',
        width: '100%',
        background: '#10141f',
        animationName: '$scrollNav',
        animationDuration: '.4s',
        padding: '1%',
        height: '72px',
    },
    ActiveSearch:{
        width: '100%',
        zIndex: '1001',
        position: 'fixed',
        background: '#10141f',
        paddingTop:' 5px !important',
        animationName: '$scrollNav',
        animationDuration: ".4s",
        marginTop: "-4%",
    },
    '@keyframes scrollNav':{
        '0%' :{
          opacity: 0,
          transform: 'translateY(-60px)',
        },
        '100%' :{
          opacity: 1,
          transform: 'translateY(0)',
        },
    },
    listNav:{
        alignItems: 'center',
        position: "fixed"
    },
    listNavActive:{
        backgroundColor: 'black',
        paddingBottom: '2%',
        alignItems: 'center',
        position: "fixed"
    },
    logo:{
        fontFamily: 'Sonsie One cursive',
    },
    leftSide:{
        display: "flex",
        alignItems: "center",
        color:"#dbd5d5",
        justifyContent: "space-around",
    },
    iconSearch:{
        color:"#dbd5d5",
        fontSize: "1.4rem",
    },
    rightSide:{
        display: "flex",
        justifyContent: "space-around",
    },
	btnRgst:{
        background:' #dbd5d5',
        border: 'none',
        color: 'black',
        fontWeight: 'bold',
        '&:hover':{
            background:'#dbd5d5', 
        }
    },
    btnSng:{
        color: '#dbd5d5',
    },
    inputForm:{
        width: '75%',
    },
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "#8e8e8e"
        },
        "& .MuiOutlinedInput-input": {
          color: "#dbd5d5"
        },
        "& .MuiInputLabel-outlined": {
          color: "#dbd5d5"
        },
        "& .MuiFormControl-root":{
            width: '22rem'
        },
      },
}));

export default useStyles