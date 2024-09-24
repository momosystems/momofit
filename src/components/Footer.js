import React from 'react';
import { Box, Stack } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px" pb="24px">
      <a href="https://momosystems.netlify.app"><img src={Logo} alt="logo" style={{ width: '200px', height: '200px' }} /></a>
    </Stack>
  </Box>
);

export default Footer;
