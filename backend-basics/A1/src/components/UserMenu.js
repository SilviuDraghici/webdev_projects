import { useState } from 'react';

import { Link } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const UserMenu = () => {
    const [anchorEl, setanchorEl] = useState(null);

    const handleMenu = (event) => {
        setanchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setanchorEl(null);
    };

    return (
        <>
            <IconButton
                sx={{ p: 0 }}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle sx={{ fontSize: 40 }} />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                sx={{ mt: '55px' }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem component={Link} to={'/login'}>Login</MenuItem>
                <MenuItem component={Link} to="/createAccount" onClick={handleClose}>Create Account</MenuItem>
            </Menu>
        </>
    )
}

const headerStyle = {
    backgroundColor: '#34282C',
    color: 'white',
    width: '100%'
}

export default UserMenu