import { useEffect, useState } from "react"
import { Link as Scroll } from 'react-scroll'

import { 
   AppBar,
   Collapse,
   IconButton,
   Toolbar,
   makeStyles,
} from "@material-ui/core"

import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Nunito',
   },
   appBar: {
      background: 'none',
   },
   appBarTitle: {
      flexGrow: '1',
   },
   appBarWrapper: {
      width: '80%',
      margin: '0 auto',
   },
   icon: {
      color: `#fff`,
      fontSize: '2rem',
   },
   colorText: {
      color: 'gold',
   },
   container: {
      textAlign: 'center',
   },
   title: {
      color: '#fff',
      fontSize: '4.5rem'
   },
   goDown: {
      color: 'gold',
      fontSize: '4rem',
   },
})) 

const Header = () => {
   const classes = useStyles()
   const [checked, setChecked] = useState(false)

   useEffect(() => {
      setChecked(true)
   },[])

   return (
      <div className={classes.root} id='header'>
         <AppBar className={classes.appBar} elevation={0}>
            <Toolbar className={classes.appBarWrapper}>
               <h1 className={classes.appBarTitle}>
                  My<span className={classes.colorText}>Island.</span>
               </h1>

               <IconButton>
                  <SortIcon className={classes.icon} />
               </IconButton>
            </Toolbar>
         </AppBar>
         <Collapse 
            in={checked}
            {... (checked ? {timeout: 1000 } : {})}
            collapseHeight={50}
         >
            <div className={classes.container}>
               <h1 className={classes.title}>
                  Welcome to <br />
                  My<span className={classes.colorText}>Island</span>
               </h1>
               <Scroll to='place-to-visit' smooth={true}>
                  <IconButton>
                     <ExpandMoreIcon className={classes.goDown} />
                  </IconButton>
               </Scroll>
            </div>
         </Collapse>
      </div>
   )
}

export default Header