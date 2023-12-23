import React from 'react'

import { Toolbar, Container, Button, useMediaQuery, useTheme } from '@mui/material';
import Papers from './Papers'
import Practicals from './Practicals'
// import Notes from './Notes'
import Books from './Books'
import Playlists from './Playlists'
import Assignments from './Assignments'
import Quantum from "./Quantum";
import { useState } from "react";


function MyMenu() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedNavItem, setSelectedNavItem] = useState('quantums'); // Default selection
  
    const handleNavItemClick = (item) => {
        setSelectedNavItem(item);
      };
    return (
        <div className="container">
     <Container>
  <Toolbar>
    <Container spacing={2} sx={{ display: 'flex', justifyContent: 'space-around', alignContent: 'space-around', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
      <Button
        variant="contained"
        sx={{ width: '150px', marginBottom: isMobile ? '8px' : '0', marginRight: isMobile ? '0' : '8px', '&:hover': { backgroundColor: 'darkblue' } }}
        onClick={() => handleNavItemClick('books')}
        to="/books"
      >
        Books
      </Button>
      <Button
        variant="contained"
        sx={{ width: '150px', marginBottom: isMobile ? '8px' : '0', marginRight: isMobile ? '0' : '8px', '&:hover': { backgroundColor: 'darkblue' } }}
        onClick={() => handleNavItemClick('assignments')}
        to="/assignments"
      >
        Assignments
      </Button>
      <Button
        variant="contained"
        sx={{ width: '150px', marginBottom: isMobile ? '8px' : '0', marginRight: isMobile ? '0' : '8px', '&:hover': { backgroundColor: 'darkblue' } }}
        onClick={() => handleNavItemClick('quantums')}
        to="/quantums"
      >
        Quantums
      </Button>
      <Button
        variant="contained"
        sx={{ width: '150px', marginBottom: isMobile ? '8px' : '0', marginRight: isMobile ? '0' : '8px', '&:hover': { backgroundColor: 'darkblue' } }}
        onClick={() => handleNavItemClick('practicals')}
        to="/practicals"
      >
        Practicals
      </Button>
      <Button
        variant="contained"
        sx={{ width: '150px', marginBottom: isMobile ? '8px' : '0', marginRight: isMobile ? '0' : '8px', '&:hover': { backgroundColor: 'darkblue' } }}
        onClick={() => handleNavItemClick('papers')}
        to="/papers"
      >
        Papers
      </Button>
      <Button
        variant="contained"
        sx={{ width: '150px', marginBottom: isMobile ? '8px' : '0', marginRight: isMobile ? '0' : '8px', '&:clicked': { backgroundColor: 'darkblue' } }}
        onClick={() => handleNavItemClick('playlists')}
        to="/playlists"
      >
        Playlists
      </Button>
    </Container>
  </Toolbar>
</Container>


       <div>
        {selectedNavItem === 'books' && <Books />}
        {selectedNavItem === 'assignments' && <Assignments />}
        {selectedNavItem === 'quantums' && <Quantum />}
        {selectedNavItem === 'practicals' && <Practicals />}
        {selectedNavItem === 'papers' && <Papers />}
        {selectedNavItem === 'playlists' && <Playlists />}
      </div>
      </div>
    );
  }
  
  export default MyMenu;