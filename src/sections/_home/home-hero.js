import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/lazy';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { alpha, styled, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import { HEADER } from 'src/layouts/config-layout';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const StyledInput = styled((props) => <TextField fullWidth {...props} />)(({ theme }) => ({
  [`& .${inputBaseClasses.input}`]: {
    color: theme.palette.common.white,
  },
  [`& .${inputLabelClasses.root}.${inputLabelClasses.shrink}`]: {
    color: theme.palette.grey[500],
    [`&.${inputLabelClasses.focused}`]: {
      color: theme.palette.grey[500],
    },
  },
}));

StyledInput.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      common: PropTypes.shape({
        white: PropTypes.string,
      }),
      grey: PropTypes.string,
    }),
  }),
};

// const SERVICES = [
//   {
//     title: 'Leo, Client Service Expert',
//     description:
//       "I'm Leo, your dedicated client service strategist. From nurturing leads in ClickUp to sealing the deal, I ensure seamless CRM management.",
//     icon: '/assets/images/avatar/avatar_2.jpg',
//     special: false,
//   },
//   {
//     title: 'Jess, Supply Chain Innovator',
//     description:
//       "Hello, I'm Jess, orchestrating your supply network. I continually refine our supplier list to secure top-notch deals for our clientele.",
//     icon: '/assets/images/avatar/avatar_1.jpg',
//     special: false,
//   },
//   {
//     title: 'Your Custom AI Partner',
//     description:
//       "Ready to tailor an AI specialist for you. Together, we'll build an AI workforce that's the perfect fit for your business's unique needs.",
//     icon: '/assets/images/avatar/avatar_5.jpg',
//     special: true,
//   },
// ];

// ...

export default function HomeHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
        position: 'relative',
        height: { md: `calc(80vh - ${HEADER.H_DESKTOP}px)` },
        textAlign: 'center',
      }}
    >
      <Container sx={{ height: 1 }}>
        {/* <Grid container alignItems="center" justifyContent="center" sx={{ height: 1 }}> */}
        <Grid container alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <Container>
            <Typography variant="h2">Goal Oriented Automation</Typography>

            <Typography variant="h4" sx={{ color: 'primary.main', mb: 5 }}>
              {' '}
              Redefining Workflows in the AI Era.{' '}
            </Typography>
            <Typography
              sx={{
                mt: 1,
                mx: 'auto',
                // maxWidth: 480,
                color: 'text.secondary',
                mb: { xs: 8, md: 10 },
              }}
            >
              {/* Create and manege your AI workforce with ease.<br />
              We help you automate your business processes<br /> */}
              Simplify your business automation with the clarity of plain English.
            </Typography>
            <Grid container alignItems="center" justifyContent="center" sx={{ height: 1 }}>
              <ReactPlayer url="https://www.youtube.com/watch?v=BD4sofjqj8s" />
            </Grid>
{/*
            <Box
              sx={{
                rowGap: 2,
                columnGap: 10,
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                },
              }}
            >
              {SERVICES.map((value) => (
                <div key={value.title}>
                  <Avatar
                    src={value.icon}
                    sx={{
                      width: 96,
                      height: 96,
                      opacity: 1, // value.special ? 1 : 0.48,
                      cursor: 'pointer',
                      mx: 'auto',
                      bgcolor: 'primary.main',
                    }}
                  />

                  <Typography
                    variant="h5"
                    sx={{ mt: 5, mb: 2 }}
                    color={value.special ? 'text.primary' : 'text.secondary'}
                  >
                    {' '}
                    {value.title}{' '}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
                </div>
              ))}
            </Box> */}
          </Container>
          {/* <Button variant="contained" size="large" color="primary">
              Unlock Your AI Workforce
            </Button> */}
        </Grid>
      </Container>
    </Box>
  );
}
