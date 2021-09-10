import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from "../media/icons/ospia.svg";
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

/*
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { StylesContext } from '@material-ui/styles';
*/

/* function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        OSPIA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
} */

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
  logo: {
    transform: 'scale(0.5)',
  }

}));

export default function SignUp() {

  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  
  /* ReCAPTCHA  
  const verifyCallback = function (response) {
    console.log(response);
  };

  const callback = function () {
    console.log('Done!!!!');
  }; 
  */
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* Check Logo Animation on Scroll */}
        <div className={classes.logo}>
          <Logo alt="OSPIA"/>
        </div>

        <Typography component="h1" variant="h5">
          Registro de Usuario
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
          
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="firstName"
                  variant="outlined"
                  inputRef={register("usuario")}
                  required
                  fullWidth
                  id="usuario"
                  label="Nombre y Apellido o Razón Social"
                  autoFocus
                />
              </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                inputRef={register("email")}
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                inputRef={register("email")}
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              <ReCAPTCHA
                sitekey="6LfG3FkcAAAAAG-ijamNanUtajZwipn_6ACldiIz"
                render="explicit"
                /* verifyCallback={verifyCallback}
                onloadCallback={callback} */
              />
            </Grid>
            
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarme
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Recuperar mi contraseña
              </Link>
            </Grid>
            <Grid item>
              Ya tengo cuenta.&nbsp;
              <Link href="#" variant="body2">
                <strong>Iniciar Sesión</strong>
              </Link>
            </Grid>

          </Grid>

        </form>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}