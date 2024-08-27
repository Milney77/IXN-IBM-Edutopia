import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Backdrop } from '@mui/material';

const LoginOverlay = ({ handleClose, handleLogin, message }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Prevent submission if either field is empty
        if (username.trim() === '' || password.trim() === '') {
            setError('Username and password cannot be blank.');
            return;
        }
        handleLogin(username, password);

         // Prevent submission if either field is empty
         if (username.trim() === '' || password.trim() === '') {
            setError('Username and password cannot be blank.');
            return;
        }

        // Reset error before trying to log in
        setError('');

        handleLogin(username, password);
           
    };


    return (
        <Backdrop open={true} sx={{ zIndex: 2000, color: '#fff' }}>
            <Box sx={{padding: '2rem', backgroundColor: 'black', borderRadius: '8px',
                backgroundImage: 'url(/images/other/background_lightfabric.jpg)',
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
            }}>
                <Typography variant="h6" gutterBottom sx={{color:'black'}}>
                    Admin Login
                </Typography>
                 {/* Display error message */}
                 {error && (
                    <Typography variant="body2" color="error" gutterBottom>
                        {error}
                    </Typography>
                )}
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Box display="flex" justifyContent="space-between" mt={2}>
                        <Button variant="contained" color="primary" type="submit">
                            Login
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Box>
                </form>
                {message && <Typography sx={{color:'red'}}>{message}</Typography>}  
            </Box>
        </Backdrop>
    );
};

export default LoginOverlay;