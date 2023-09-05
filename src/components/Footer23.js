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
import ifadLogo from "../img/ifad-logo.svg";
import fidaFr from "../img/fida_fr.png";
import farmRadioLogo from "../img/FRI_logo_BI.png";
import farmRadioLogoFr from "../img/FRI_fr.png";
import wvLogo from "../img/world_vision_ca.png";
import wvLogoFr from "../img/food_sec_grroup.png";
import logo from "../img/canadian_fgb.png";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { AppContext } from "../contexts/App";
import { useTranslation } from "react-i18next";

//function SocialButton({ children, label, href }) {
//  return (
//    <Button
//      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
//      rounded={"full"}
//      w={10}
//      h={10}
//      p={0}
//      cursor={"pointer"}
//      as={"a"}
//      href={href}
//      display={"inline-flex"}
//      alignItems={"center"}
//      justifyContent={"center"}
//      transition={"background 0.3s ease"}
//      _hover={{
//        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
//      }}
//    >
//      <VisuallyHidden>{label}</VisuallyHidden>
//      {children}
//    </Button>
//  );
//}

//function ListHeader({ children }) {
//  return (
//    <Text color="primary.500" fontWeight={"500"} fontSize={"lg"} mb={2}>
//      {children}
//    </Text>
//  );
//}

function Footer() {
  const { t } = useTranslation();
  const { language } = useContext(AppContext);

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"7xl"} py={5}>
        <Grid templateColumns={{ sm: "1fr 1fr", md: "3fr 1fr" }} spacing={8}>
          <GridItem spacing={6} pb={5} colSpan={{ sm: 2, md: 1 }}>
            <Box mb={5}>
              <SimpleGrid
                columns={{ sm: 2, lg: 5 }}
                spacing="20px"
                mr={[0, null, 10]}
              >
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Link isExternal href="https://www.ifad.org">
                    <Img src={'fr' === language ? fidaFr : ifadLogo} style={{ width: '300px' }} />
                  </Link>
                </Box>
                <Box
                  maxWidth={500}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  // p={6}
                >
                  <Link isExternal href="https://farmradio.org">
                    <Img src={'fr' === language ? farmRadioLogoFr : farmRadioLogo} />
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
                    <Img src={'fr' === language ? wvLogoFr : wvLogo} style={{ mixBlendMode: "multiply" }} />
                  </Link>
                </Box>
                <Box
                  maxWidth={200}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Link
                    isExternal
                    href="https://foodgrainsbank.ca"
                  >
                    <Img src={logo} />
                  </Link>
                </Box>
                <Box
                  maxWidth={500}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                >
                  <Link
                    isExternal
                    href="https://cooperation.ca/canadian-food-security-policy-group"
                  >
                    <Img src={wvLogoFr} />
                  </Link>
                </Box>
              </SimpleGrid>
            </Box>
            <Text fontSize={"xs"}>© 2023 All rights reserved</Text>
          </GridItem>
         
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
