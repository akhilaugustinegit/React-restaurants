import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import CustomButton from '../../components/CustomButton/CustomButton';
import welcome from '../../assets/welcome.png';


const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center", // Corrected from "centre"
  gap: theme.spacing(5),
  
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center", // Corrected from "centre"
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#fff",
  fontWeight: "bold", // Corrected from "fonttWeight"
  margin: theme.spacing(4, 0, 4, 0), // Corrected from theme.soacing
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

const Welcome = () => {
  return (
    <Box sx={{ backgroundColor: "#FED801", minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px", // Added "px"
                color: "#687769", // Corrected color value
                fontWeight: "500", // Corrected from "fonttWeight"
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Daily Fresh
            </Typography>
            <Title variant="h1"> {/* Corrected from "varient" */}
              Discover a place where you'll love to Eat
            </Title>
            <Typography
              variant="body2" // Corrected from "varient"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }} // Added "px"
            >
              immers yourself in the elegant ambiance as you savor each bite

            </Typography>
            <CustomButton
              Backgroundcolor="#0f1B4C"
              color="#fff"
               buttonText="More about Us"
              welcomeBtn={true}
            >
            </CustomButton>
            
          </Box>
          <Box  sx={{flex:"1.25"}}
          
          >
            <img
            src={welcome}
            alt="welcome"
            style={{maxWidth:"100%",marginBottm:"2rem"}}/>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Welcome;
