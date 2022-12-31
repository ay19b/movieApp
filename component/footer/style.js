import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
	footer:{
        marginTop: '7%',
		[theme.breakpoints.down("sm")]: {
			position: 'absolute',
			bottom: '0',
			width: '100%',
        },
	},
	titleFooter:{
		color:'white'
	},
	nameSite:{
		fontFamily: 'Sonsie One cursive',
	},
	headFooter:{
		display: 'flex',
        justifyContent: 'space-between',
		margin:'2rem 0 1rem 0',
		alignItems: 'baseline',
		[theme.breakpoints.down("md")]: {
            justifyContent: 'space-evenly',
        },
		[theme.breakpoints.down("sm")]: {
			justifyContent: 'center',
        },
	},
	socialMedia:{
		[theme.breakpoints.down("sm")]: {
            display: 'none',
        },
	},
    icons:{
		display: 'flex',
        alignItems: 'center',
		listStyle:'none',
	},
	icon:{
		width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '3%',
        cursor: 'pointer',
		'&:hover':{
         color:'black',
		 backgroundColor:'white'
        },
		
	},
	centerFooter:{
		[theme.breakpoints.down("sm")]: {
            display: 'none',
        },
	},
	headerList:{
		color:'white',
	},
	listItem:{
		listStyle:'none',
	},
	item:{
		color: '#bbb',
	},
	lastFooter:{
		textAlign: 'center',
		marginTop:'1%',
		color:'#aaa'
	},
	divider:{
		background: '#5b5b5b',
        width: '100%',
		[theme.breakpoints.down("sm")]: {
            display: 'none',
        },
	},
}));

export default useStyles