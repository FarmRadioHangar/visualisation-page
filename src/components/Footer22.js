import React, { useContext } from "react";
import {
  Text,
  Img,
  SimpleGrid,
  Link,
  Box,
  Container,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import ifadLogo from "../img/ifad-logo.svg";
import fidaFr from "../img/fida_fr.png";
import farmRadioLogo from "../img/FRI_logo_BI.png";
import { AppContext } from "../contexts/App";


function Footer() {
  const { language } = useContext(AppContext);

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
              <SimpleGrid
                columns={{ sm: 2, lg: 3 }}
                spacing="0px"
                // mr={[0, null, 10]}
                alignItems={"center"}
              >
                <Box>

                  <SimpleGrid
                    columns={{ sm: 1, lg: 2 }}
                    spacing="10px"
                    mr={[0, null, 10]}
                    alignItems={"center"}
                  >
                    <Box
                      maxWidth={100}
                      // display="flex"
                      alignItems="left"
                      justifyContent="left"
                      p={0}
                    >
                      <Link isExternal href="https://www.ifad.org">
                        <Img src={'fr' === language ? fidaFr : ifadLogo} style={{ width: '300px' }} />
                      </Link>
                    </Box>

                    <Box
                      maxWidth={400}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      pt={3}
                    >
                      <Link isExternal href="https://farmradio.org">
                        <Img src={'fr' === language ? farmRadioLogo : farmRadioLogo} />
                      </Link>
                    </Box>

                  </SimpleGrid>

                </Box>
                
                
              </SimpleGrid>
        <Text fontSize={"xs"} pt={5}>© 2022 All rights reserved</Text>
      </Container>
    </Box>
  );
}

export default Footer;
