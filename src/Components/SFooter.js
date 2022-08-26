import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function StickyFooter() {
  return (
    <>
      <Box
        className='sfooter'
        component="footer"
        sx={{
          py: 1,
          px: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm" >
          <Typography variant="body1" display="inline">
            For any query, contact us at <a href="https://www.google.com/intl/en_in/gmail/about/" target="_blank" rel="noreferrer">eshopmail@gmail.com</a>
          </Typography>
        </Container>
      </Box>
    </>
  );
}