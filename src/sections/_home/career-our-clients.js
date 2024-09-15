import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function CareerOurClients({ brands }) {


  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >

      {/* <Carousel {...carousel.carouselSettings}> */}
        {brands.map((brand) => (
          // <Box key={brand.id} sx={{ px: 1.5 }}>
            <Stack
              component={Paper}
              alignItems="center"
              justifyContent="center"
              variant="outlined"
              sx={{
                py: 3,
                borderRadius: 2,
                bgcolor: 'background.default',
              }}
            >
              <Image
                alt={brand.name}
                src={brand.image}
                sx={{
                  width: 136,
                  height: 32,
                  mx: 'auto',
                }}
              />
            </Stack>
          // </Box>
        ))}
      {/* </Carousel> */}
    </Container>
  );
}

CareerOurClients.propTypes = {
  brands: PropTypes.array,
};
