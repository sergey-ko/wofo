'use client';

import ReactPlayer from 'react-player/lazy'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _mock } from 'src/_mock';
import { useBoolean } from 'src/hooks/use-boolean';
import Player, { PlayerDialog } from 'src/components/player';

// ----------------------------------------------------------------------
  const SERVICES = [
    {
      title: 'Leo, Client Service Expert',
      description:
        "I'm Leo, your dedicated client service strategist. From nurturing leads in ClickUp to sealing the deal, I ensure seamless CRM management.",
      icon: '/assets/images/avatar/avatar_2.jpg',
      special: false,
    },
    {
      title: 'Jess, Supply Chain Innovator',
      description:
        "Hello, I'm Jess, orchestrating your supply network. I continually refine our supplier list to secure top-notch deals for our clientele.",
      icon: '/assets/images/avatar/avatar_1.jpg',
      special: false,
    },
    {
      title: 'Your Custom AI Partner',
      description:
        "Ready to tailor an AI specialist for you. Together, we'll build an AI workforce that's the perfect fit for your business's unique needs.",
      icon: '/assets/images/avatar/avatar_5.jpg',
      special: true,
    },
  ];

export default function SellingPoints() {
  const videoOpen = useBoolean();

  return (
     <Box
      sx={{
        textAlign: 'center',
        bgcolor: 'background.neutral',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Container>
      {/* <Typography variant="h2">AI Teamwork in Motion</Typography> */}
      <Typography variant="h2">Custom AI Team</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        Seamless Integration, Tangible Outcomes
        {/* Effortless Collaboration, Real Results */}
        {/* Discover the simplicity of working with AI agents — like connecting with a remote colleague. <br /> */}
        {/* Explore our demo video to see the future of teamwork. */}
      </Typography>

      {/* <Player controls url='https://www.youtube.com/watch?v=BD4sofjqj8s' /> */}

      {/* <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} /> */}

      {/* <Grid container alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <ReactPlayer url='https://www.youtube.com/watch?v=BD4sofjqj8s' />
      </Grid> */}

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
            </Box>
      </Container>
    </Box>
  );
}
