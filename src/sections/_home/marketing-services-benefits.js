import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const BENEFITS =[
  {
    "title": "Communication",
    "description": "Interact with your AI agents just like remote team members using platforms such as Slack and Discord. This seamless integration ensures that communications are efficient and effective.",
    "iconColor": "primary"
  },
  {
    "title": "Standard Operating Procedures (SOP)",
    "description": "SOPs form the framework enabling AI agents to operate consistently and reliably within your organization.",
    "iconColor": "success"
  },
  {
    "title": "Personalization",
    "description": "Customize AI agents to echo your company culture, ensuring they align perfectly with your team's ethos and values.",
    "iconColor": "secondary"
  },
  {
    "title": "Task Management Systems",
    "description": "Fully compatible with ClickUp, Jira, or your bespoke systems, ensuring that AI agents can manage and track tasks effectively.",
    "iconColor": "secondary"
  },
  {
    "title": "Effector",
    "description": "Empower AI agents to actively execute tasks across connected systems such as CRM, ERP, and more, enhancing productivity and integration.",
    "iconColor": "success"
  },
  {
    "title": "Access Management",
    "description": "Configure permissions for AI agents to access only the necessary systems for their tasks, ensuring security and efficiency.",
    "iconColor": "primary"
  }
];


// ----------------------------------------------------------------------

export default function MarketingServicesBenefits() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        // bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          AI Collaborators
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          Autonomous AI agents that work alongside you, enhancing your team’s capabilities without replacing the human touch. <br />
        </Typography>

        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { md: 'repeat(3, 1fr)' },
          }}
        >
          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(0, 3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} reverse />
            ))}
          </Stack>

          {/* {mdUp && <Image alt="benefits" src="/assets/illustrations/illustration_teams.svg" />} */}
          {mdUp && <Image alt="benefits" src="/assets/images/team_no_bg.png" />}

          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(-3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function BenefitItem({ benefit, reverse, index }) {
  const { title, description, iconColor } = benefit;

  return (
    <Stack
      spacing={1}
      direction={{ xs: 'row', md: reverse ? 'row-reverse' : 'row' }}
      sx={{
        ...(reverse && {
          textAlign: { md: 'right' },
        }),
        ...(index === 1 && {
          pl: { md: 6 },
          ...(reverse && {
            pl: { md: 0 },
            pr: { md: 6 },
          }),
        }),
      }}
    >
      <Box
        sx={{
          m: 1,
          width: 16,
          height: 16,
          flexShrink: 0,
          borderRadius: '50%',
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          ...(iconColor === 'secondary' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
          }),
          ...(iconColor === 'success' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.success.light}, ${theme.palette.success.main})`,
          }),
        }}
      />

      <Stack spacing={1}>
        <Typography variant="h5">{title}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}

BenefitItem.propTypes = {
  benefit: PropTypes.shape({
    description: PropTypes.string,
    iconColor: PropTypes.string,
    title: PropTypes.string,
  }),
  index: PropTypes.number,
  reverse: PropTypes.bool,
};
