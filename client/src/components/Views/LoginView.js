import React from 'react'
import { TextField, Typography, Button, Box, Grid } from '@material-ui/core'

const LoginView = () => {
    return (
        <Box>
            <Grid container spacing={4}>
                <Typography variant="h5">Přihlasení do systému</Typography>
                <Grid item xs="12">
                    <TextField label="Uživatel:" required fullWidth />
                </Grid>
                <Grid item xs="12">
                    <TextField label="Heslo:" required fullWidth />
                </Grid>
                <Grid item xs="12">
                    <Button variant="contained" fullWidth>
                        Login
                    </Button>
                </Grid>
                <Typography variant="body1">Chcete změnit své heslo?</Typography>
            </Grid>
        </Box>
    )
}

export default LoginView
