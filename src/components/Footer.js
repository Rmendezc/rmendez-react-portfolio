import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import logoImage from "../images/RudyEMendezemblem.png"; 

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px={12}
          color="white"
          maxWidth="1024px"
          margin="0 auto"
          py={4}
        >
          {/* Your Logo */}
          <img src={logoImage} alt="Logo" style={{ width: "100px" }} /> 
          
          {/* Your Footer Content */}
          <p>Rudy E. Mendez • © 2022</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
