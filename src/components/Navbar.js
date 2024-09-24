import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <a href="https://momosystems.netlify.app"> <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} /></a>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Start</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Trainer</a>
      <a href="https://momosystems.netlify.app/datenschutz" style={{ textDecoration: 'none', color: '#3A1212' }}>Datenschutz</a>
      <a href="https://momosystems.netlify.app/impressum" style={{ textDecoration: 'none', color: '#3A1212' }}>Impressum</a>
    </Stack>
  </Stack>
);

export default Navbar;
