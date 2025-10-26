import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { useState, MouseEvent } from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const settings = ['Profile', 'Settings', 'Logout'];
const THE_LIFE_LIST_LABEL = 'THE LIFE LIST';

export const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    return(
    <AppBar sx={{ background: 'radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(193, 194, 201, 1) 0%, rgba(189, 81, 97, 1) 100%)'}}>
      <Container maxWidth="xl">
        <Toolbar  sx={{ display : 'grid', gridTemplateColumns :'95% 5%', width: '100%'}} disableGutters>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <LocalFloristIcon  />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: '.3rem',
              justifySelf: 'center'
            }}
          >
            {THE_LIFE_LIST_LABEL}
          </Typography>
          </Box>
          <Box>
            <Tooltip title="Open settings" children={<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PermIdentityIcon fontSize='large' sx={{ color : "white"}}/>
              </IconButton>} />
            <Menu
              sx={{ mt: '2rem' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    )
}