import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, Button, Container, Input } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

export default function App(): JSX.Element {
  const classes = useStyles();

  const handleClick = () => {
    alert('handle click')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={2}>
          {
            [...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.`
              )
              .join('\n')
          }
        </Box>
        <Box my={3}>
          <Input placeholder="input text" />
          <Button variant="contained" size="small" color="primary" onClick={handleClick} >API</Button>
        </Box>
      </Container>
    </div>
  );
}
