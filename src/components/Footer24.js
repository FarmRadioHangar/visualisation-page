import React, { useContext } from "react";
import {
  Grid,
  GridItem,
  Text,
  Img,
  SimpleGrid,
  Link,
  Box,
  Container,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import gac from "../img/GAC.png";
import unwomen from "../img/UN Women.png";
import femnet from "../img/femnet.png";
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

        <Grid templateColumns={{ sm: "2fr", md: "4fr " }} >
          <GridItem >
            <Box>
              <SimpleGrid
                columns={{ base: 2, lg: 4 }}
              >
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Link isExternal href="https://www.ifad.org">
                    <Img src={farmRadioLogo} />
                  </Link>
                </Box>
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Link isExternal href="https://farmradio.org">
                    <Img src={gac} />
                  </Link>
                </Box>
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Link isExternal href="https://www.worldvision.ca">
                    <Img src={femnet} style={{ mixBlendMode: "multiply" }} />
                  </Link>
                </Box>
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Link isExternal
                    href="https://cooperation.ca/canadian-food-security-policy-group"
                  >
                    <Img src={unwomen} />
                  </Link>
                </Box>
 
                
              </SimpleGrid>
            </Box>

          </GridItem>
         
        </Grid>






        <Text fontSize={"xs"} pt={5}>© 2024 All rights reserved</Text>
      </Container>
    </Box>
  );
}

export default Footer;
