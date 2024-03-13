import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, Im Rudy Mendez!"; 
const bio1 = "A frontend developer"; 
const bio2 = "& application developer"; 
const bio3= "specialized in React"; 
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365" 
 > 
   <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src="https://rmendezc.files.wordpress.com/2023/11/img_6547.jpg?w=683" 
         size="2x1" 
         name="Your Name" 
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio3} 
       </Heading>
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;