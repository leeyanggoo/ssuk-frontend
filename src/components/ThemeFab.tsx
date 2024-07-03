import { useThemeMode } from '../styles/ThemeProvider';

import { DarkMode, LightMode } from '@mui/icons-material';
import { Fab } from '@mui/material';

const ThemeFab = () => {
  const { toggleMode, mode } = useThemeMode();
  return (
    <Fab
      sx={{
        position: 'fixed',
        right: '5%',
        bottom: '10%',
        zIndex: 1,
      }}
      onClick={toggleMode}
    >
      {mode === 'dark' ? (
        <DarkMode htmlColor='navy' />
      ) : (
        <LightMode color='warning' />
      )}
    </Fab>
  );
};

export default ThemeFab;
