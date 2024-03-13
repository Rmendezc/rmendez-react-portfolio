import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faBehance,
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react"; 
import logoImage from "../images/RudyEMendezLogo.png"; 

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:rudymendez32@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Rmendezc",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/rudyemen/",
  },
  {
    icon: faCodepen,
    url: "https://codepen.io/Rudy-Mendez",
  },
  {
    icon: faBehance,
    url: "https://www.behance.net/rudymendez1",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack spacing={8}>
            {socials.map(({ icon, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={icon} size="2x" key={url} />
              </a>
            ))}
          </HStack>
          <img src={logoImage} alt="Logo" style={{ width: "300px" }} /> 
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
