import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import { bgBlur } from 'src/theme/css';
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { useOffSetTop } from 'src/hooks/use-off-set-top';

import { HEADER } from '../config-layout';


// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const offset = useOffSetTop();

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ lineHeight: 0, position: 'relative' }}>

            {/* <Typography variant="h3">
                Req
                <Box component="span" sx={{ color: 'primary.main' }}>
                  `Q.`
                </Box>
              </Typography> */}

            <Logo />

            {/* <Link href="https://zone-docs.vercel.app/changelog" target="_blank" rel="noopener">
              <Label
                color="info"
                sx={{
                  ml: 0.5,
                  px: 0.5,
                  top: -14,
                  left: 60,
                  height: 20,
                  fontSize: 11,
                  cursor: 'pointer',
                  position: 'absolute',
                }}
              >
                v2.1.0
              </Label>
            </Link> */}
          </Box>

          {/* {mdUp && <NavDesktop data={navConfig} />} */}

          {/* <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
            <Stack spacing={1} direction="row" alignItems="center">
              <Searchbar />

              <SettingsButton />
            </Stack>

            {mdUp && (
              <Button
                variant="contained"
                color="inherit"
                href={paths.zoneStore}
                target="_blank"
                rel="noopener"
              >
                Buy Now
              </Button>
            )}
          </Stack> */}

              <Stack direction="row" alignItems="center">
                {_socials.map((social) => (
                  <IconButton key={social.value} color="primary" onClick={() => { window.location.href = social.link; }}>
                    <Iconify icon={social.icon} style={{ transform: 'scale(1.5)' }} />
                  </IconButton>
                ))}
              </Stack>

          {/* {!mdUp && <NavMobile data={navConfig} />} */}
        </Container>
      </Toolbar>

      {/* {offset && <HeaderShadow />} */}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
