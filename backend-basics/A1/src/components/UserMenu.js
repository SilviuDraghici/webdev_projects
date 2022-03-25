import { useState, useContext, useEffect } from 'react';

import { Link } from "react-router-dom";

import { signOut } from "firebase/auth";

import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import UserContext from './UserContext';
import { auth, storage } from "../firebase";
import { ref, getDownloadURL } from 'firebase/storage';

const UserMenu = () => {
    const { user, } = useContext(UserContext);

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (user) {
            const imgRef = ref(storage, `images/${user.uid}`);
            getDownloadURL(imgRef).then((url) => {
                setImageUrl(url);
                console.log(`image found! url: ${imageUrl}`);
            }).catch((error) => {
                console.log(`Error getting image url: ${error.message}`);
            });
        }
    }, [user]);

    const [anchorEl, setanchorEl] = useState(null);

    const handleMenu = (event) => {
        setanchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setanchorEl(null);
    };

    const signOutUser = () => {
        console.log("signing out");
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("sign out successful");
        }).catch((error) => {
            // An error happened.
            console.log("sign out error");
        });
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
                {user ?
                    <Avatar alt="Remy Sharp" src={imageUrl} />
                    :
                    <AccountCircle sx={{ fontSize: 40 }} />
                }
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
                {user ? [
                    <MenuItem onClick={signOutUser} key="sign_out">Sign Out</MenuItem>
                ] : [
                    <MenuItem component={Link} to={'/login'} key="login">Login</MenuItem>,
                    <MenuItem component={Link} to="/createAccount" onClick={handleClose} key="create_account">Create Account</MenuItem>
                ]}
            </Menu>
        </>
    )
}

export default UserMenu