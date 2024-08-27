import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

const UsersPage = ({customFontSize}) => {
  
  const [users, setUsers] = useState([]);

  const [newUser, setNewUser] = useState({ username: '', password: '', confirmPassword: '' });
  const [newUsernameError, setNewUserNameError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [newConfirmPasswordError, setNewConfirmPasswordError] = useState('');
  const [newUserIsValid, setNewUserIsValid] = useState(true);

  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  
  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${baseUrl}/users`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleOpenDialog = (id) => {
    setUserToDelete(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setUserToDelete(null);
  };

  const handleDeleteUser = async () => {
    if (userToDelete) {
      try {
        await axios.delete(`${baseUrl}/users/${userToDelete}`);
        setUsers(users.filter(user => user.id !== userToDelete));
        handleCloseDialog();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const validateNewUser = () => {
    let isValid = true;
    // Reset errors
    setNewUserNameError('');
    setNewPasswordError('');
    setNewConfirmPasswordError('');

    // Username cannot be empty
    if (newUser.username.trim() === '') {
        setNewUserNameError('Username is required');
        isValid = false;
      }

    // Password cannot be empty
    if (newUser.password.trim() === '') {
        setNewPasswordError('Password is required');
        isValid = false;
      }

    // Passwords must match
    if (newUser.confirmPassword.trim() === '') {
        setNewConfirmPasswordError('Please confirm your password');
        isValid = false;
      } else if (newUser.password !== newUser.confirmPassword) {
        setNewConfirmPasswordError('Passwords do not match');
        isValid = false;
      }

      return isValid;
  }

  const handleAddUser = async () => {
    // Validation
    if (!validateNewUser()) {
        return;
      }

    try {
      const response = await axios.post(`${baseUrl}/users`, {
        username: newUser.username,
        password: newUser.password,
      });

      setUsers([...users, response.data]);
      setNewUser({ username: '', password: '', confirmPassword: '' });
      setShowAddUserForm(false);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <Box sx={{ padding: '2rem', maxWidth: '1200px', width: '80%'}}>
      <Typography variant="h4" sx={{fontSize:`${customFontSize*1.5}rem`}}>
        Users Management
      </Typography>

      {/* Scrollable Table */}
      <Box sx={{ overflowY: 'auto', maxHeight: '600px', marginBottom: '1rem'}}>
        <Table>
          <TableHead sx={{ borderBottom: '2px solid #ccc', backgroundColor: 'transparent' }}>
            <TableRow>
              <TableCell sx={{ textAlign: 'center' }}>Username</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>Password</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{ textAlign: 'center' }}>{user.username}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{'*'.repeat(user.password.length)}</TableCell>
                <TableCell>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" color="secondary" onClick={() => handleOpenDialog(user.id)} 
                        disabled={users.length === 1}>
                        Delete
                    </Button>
                    </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* Add User Button */}
      <Button variant="contained" color="primary" onClick={() => setShowAddUserForm(true)}>
        Add User
      </Button>

      {/* Add User Form */}
      {showAddUserForm && (
        <Box sx={{ marginTop: '1rem' }}>
          <TextField
            label="Username"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            fullWidth
            margin="normal"
            error={!!newUsernameError}
            helperText={newUsernameError}
          />
          <TextField
            label="Password"
            type="password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            fullWidth
            margin="normal"
            error={!!newPasswordError}
            helperText={newPasswordError}
          />
          <TextField
            label="Confirm Password"
            type="password"
            value={newUser.confirmPassword}
            onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })}
            fullWidth
            margin="normal"
            error={!!newConfirmPasswordError}
            helperText={newConfirmPasswordError}
          />
          <Button variant="contained" color="primary" onClick={handleAddUser}>
            Confirm
          </Button>
          <Button variant="contained" color="secondary" onClick={() => setShowAddUserForm(false)}>
            Cancel
        </Button>
        </Box>
      )}

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this user? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteUser} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      
    </Box>
  );
};

export default UsersPage;