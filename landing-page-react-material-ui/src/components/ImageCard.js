import React from 'react'
import {
   Card,
   CardContent,
   CardMedia,
   Collapse,
   makeStyles,
   Typography,
} from '@material-ui/core'

const useStyles = makeStyles({
   root: {
      maxWidth: 645,
      background: 'rgba(0,0,0,0.7)',
      color: '#fff',
      margin: '20px',
   },
   media: {
      height: 440,
   },
   title: {
      fontFamily: 'Nunito',
      fontWeight: 'bold',
      fontSize: '2rem',
   },
   desc: {
      fontFamily: 'Nunito',
      fontSize: '1.1rem',
      color: '#ddd',
   }
})

const ImageCard = ({ place, checked }) => {
   const classes = useStyles()

   return (
      <Collapse 
         in={checked}
         {... (checked ? {timeout: 1000 } : {})}
      >
         <Card className={classes.root}>
            <CardMedia
               className={classes.media}
               image={place.imageUrl}
               title="image"
            />
            <CardContent>
               <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
               >
                  {place.title}
               </Typography>
               <Typography 
                  variant="body2" 
                  color="textSecondary" 
                  component="p"
                  className={classes.desc}
               >
                  {place.description}
               </Typography>
            </CardContent>
         </Card>
      </Collapse>
   )
}

export default ImageCard
