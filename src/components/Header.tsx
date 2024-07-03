import { Link as RouterLink } from 'react-router-dom';

import {
  AppBar,
  Button,
  Container,
  Divider,
  Stack,
  Toolbar,
  useTheme,
} from '@mui/material';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      sx={{ opacity: 0.8 }}
      position='sticky'
      elevation={1}
      color='primary'
    >
      <Container maxWidth='lg'>
        <Toolbar>
          {/* Left */}
          <Stack
            direction={'row'}
            spacing={1}
            flexGrow={1}
          >
            <Button
              component={RouterLink}
              to='/'
              sx={{
                ...theme.typography.h6,
                fontWeight: 800,
              }}
              color='inherit'
            >
              SSUK
            </Button>
          </Stack>

          {/* Right */}
          <Stack
            direction={'row'}
            alignItems={'center'}
            gap={1}
          >
            <Button
              component={RouterLink}
              to='/login'
              color='inherit'
            >
              로그인
            </Button>
            <Divider
              flexItem
              orientation='vertical'
              variant='middle'
            />
            <Button
              component={RouterLink}
              to='/signup'
              color='inherit'
            >
              회원가입
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
