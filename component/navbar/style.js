import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
    navbar:{
        padding: '12px 1%',
        position: 'fixed',
        zIndex: "11",
        display: 'flex',
        width:'100%',
    },
    active:{
        position: 'fixed',
        zIndex:'1001',
        width: '100%',
        background: '#10141f',
        padding: '12px 1%',
        height: '72px',
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
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            justifyContent: "flex-start",
        },
    },
    browser:{
        marginRight: '25%',
        [theme.breakpoints.down("md")]: {
            display:'none'
        },
    },
    iconSearch:{
        color:"#dbd5d5",
        fontSize: "1.4rem",
    },
    rightSide:{
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            justifyContent: "flex-end",
        },
        [theme.breakpoints.down("sm")]: {
            justifyContent: "flex-start",
        },
    },
	btnRgst:{
        background:' #dbd5d5',
        border: 'none',
        color: 'black',
        fontWeight: 'bold',
        '&:hover':{
            background:'#dbd5d5', 
        },
        
    },
    btnSng:{
        color: '#dbd5d5',
        display: 'block ruby',
		
    },
    inputForm:{
        width: '75%',
        [theme.breakpoints.down("md")]: {
            width: '100%',
        },
    },
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "#8e8e8e"
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