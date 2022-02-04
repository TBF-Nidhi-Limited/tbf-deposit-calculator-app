import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppBar } from '@mui/material';
import '../index.css'




const BottomBar=()=> {

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <BottomNavigation   value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        color="secondary"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        color="secondary"
        icon={<FavoriteIcon />}
      />
     
    </BottomNavigation>
    </AppBar>
    
  );
}

export default BottomBar