import React from 'react'

import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import CustomButton from '../../components/CustomButton/CustomButton';
import welcome from '../../assets/welcome.png';

import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/twitter.png";



const Footer = ()=> {
  const CustomContainer = styled(Container)(({theme}) =>({
    display:"flex",
    justifyContent:"space-around",
    gap:theme.spacing(5),
    [theme.breakpoints.down ("sm")]:{
      flexDirection:"column",
      textAlign:"centre"
    },
  }));

  const IconBox =styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"1rem",
    [theme.breakpoints.down ("sm")]:{
      justifyContent:"center",
    },
  }));

  const FooterLink = styled("span")(({theme}) => ({

    fontSize: "16px",
    color:"000066",
    fontweight:"300",
    cursor:"pointer",
    "&:hover":{
      color:"#66B2FF",
    },
  }));

  return (
    <>
    <Box sx={{ backgroundColor: '#F2B97F', py:10
    
    }}>
        <CustomContainer>

          <Box>
            <Typography
            sx={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#1C1C1D',
              mb:2,

            }}
            
            >
            Featured


            </Typography>
            <FooterLink>Guides</FooterLink>
            
            <br/>
            <FooterLink>Services</FooterLink>
            <br/>
            <FooterLink>Contact Us</FooterLink>
                     </Box>


                 <Box>
                  <Typography

                    
                    sx={{
                      fontSize: "20px",
                      color:"1c1c1d",
                      fontWeight: "700",
                      mb:2,
                    }}>

                    Overview

                 






                </Typography>

                <FooterLink>Location</FooterLink>
                <br/>               
                <FooterLink>Partnership</FooterLink>
                    <br/>
                 <FooterLink>Terms of use and Privacy policies</FooterLink>
                                   </Box>
 


                    <Box>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "1c1c1d",
                        fontWeight: "700",
                        mb:2,
                      }}>

                      Get in Touch
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "1c1c1d",
                        fontWeight: "700",
                        mb:2,
                      }}>

                      keep in Touch with our social media
                    </Typography>
                    <IconBox>
                      <img src={fbIcon} alt= "fbIcon" style={{cursor:"pointer"}}/>
                      <img src={twitterIcon}
                        alt="twitterIcon"
                        style={{cursor:"pointer"}}/>
                      <img src={linkedinIcon}
                        alt="linkedinIcon"
                        style={{cursor:"pointer"}}
                      />

                    </IconBox>

                    </Box>


        </CustomContainer>


          
    </Box>


    </>
  )
};

export default Footer