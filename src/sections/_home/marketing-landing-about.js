import Iconify from '@iconify/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const ROWS = [
  {
    icon: '/assets/icons/ic_chip.svg',
    label: 'architecture',
    total: 20,
    title: 'Customized Solution Architecture',
    content: 'We tailor AI-driven solutions that resonate with your business\'s unique rhythm, optimizing workflows with precision.',
  },
  {
    icon: '/assets/icons/ic_analysis.svg',
    label: 'ai agents',
    total: 32000,
    title: 'AI Implementation and Integration',
    content: 'Our seamless implementation equips your team with AI agents that intuitively collaborate and elevate your operational efficiency.',
  },
  {
    icon: '/assets/icons/ic_software_development.svg',
    label: 'future proofing',
    total: 20,
    title: 'Future-Proofing Your Workflow',
    content: 'We\'re creating a scalable low-code platform to centralize and streamline your business processes, paving the way for technological evolution.',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 5, md: 10 },
      }}
    >
      <Container>



      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >

        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            What we do
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Services
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Step into the future of business efficiency with our Services and Solutions.
            Our consulting services bridge your company to AI-driven automation,
            customizing AI agents within your existing systems for seamless, intelligent task management.
          </Typography>

          <Button
            size="large"
            color="inherit"
            // variant="contained"
            sx={{ my: 5 }}
            // endIcon={<Iconify icon="carbon:chevron-right" />}
            href="mailto:sales@reqq.ai?subject=[Feedback] from Customer"
          >
            Start conversation {'>'}
          </Button>

        </Grid>

        <Grid xs={12} md={7}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                  <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                  <SvgColor
                    src={row.icon}
                    sx={{
                      width: 88,
                      height: 88,
                      mx: 'auto',
                      opacity: 0.48,
                      color: 'primary.main',
                    }}
                  />


                    {/* <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box> */}
                  </Stack>
                  </Stack>

                {/* <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}> */}
                <Stack spacing={1} >
                  {/* <Stack direction="row">
                    <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack> */}

                  <Typography variant="h5" >
                    {row.title}
                  </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {row.content}
                </Typography>

                </Stack>

              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
}
