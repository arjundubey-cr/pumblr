import { AppBar, Container, Typography, Grow, Grid } from '@mui/material';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import memories from './images/memories.png';
import { style } from './styles';

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar sx={style.appBar} position="static" color="inherit">
        <Typography sx={style.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
