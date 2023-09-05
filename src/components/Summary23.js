import React, { useContext } from "react";
import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  Container,
  Tag,
  Stack,
} from "@chakra-ui/react";
import photo1 from "../img/OAD23Feature5.jpg";
import photo2 from "../img/OAD23Feature2.jpg";
import photo4 from "../img/OAD23Feature3.jpg";
import lbg from "../img/layoutBG.png"
import { AppContext } from "../contexts/App";
import { Trans, useTranslation } from "react-i18next";

function SummaryItem({ heading, text, children }) {
  return (
    <Box mt={5} p={3} align="center">
      {children}
      <Tag
        bg="#4c9f38" 
        color="white"
        fontFamily={"heading"}
        fontSize={"6xl"}
        borderRadius={0}
        px={7}
        py={3}
        mb={3}
      >
        {heading}
      </Tag>
      <Text fontSize={"2xl"} color={"gray.800"}>
        {text}
      </Text>
    </Box>
  );
}

function Summary() {
  const { setAboutPageVisible } = useContext(AppContext);
  const { t } = useTranslation();

  const { language } = useContext(AppContext);

  return (
    <>

      <Box bg={`url(${lbg})`} backgroundSize="contain" position={"relative"}>
        <Container maxW={"6xl"} zIndex={10} position={"relative"} pt={10}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              justify={{ lg: "center" }}
              py={{ base: 4, md: 10, xl: 20 }}
            >
              <Box id="insights" mb={{ base: 8, md: 20 }}>
                <Heading
                  color={"#4c9f38"}
                  mb={5}
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontFamily="BebasR" textTransform={"uppercase"}
                >
                  {t("SUMMARY_P_23i")}
                </Heading>
                <Text fontSize={"xl"} >
                  {t("SUMMARY_P_23ii")}
                </Text>


                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={1}
                  mt={10}
                  py={30}
                >
                  <Box
                    bg={`url(${photo2})`}
                    backgroundSize="cover"
                    backgroundPosition="center center"
                    minHeight="550px"
                    borderRadius="5px"
                    my={{ base: 10, md: 0 }}
                  />
                  <Box display="flex" alignItems="center" px={10}>
                    <Text fontSize="1.4em" color="gray" textAlign="justify">
                      <Trans i18nKey="SUMMARY_P_3i">
                      Despite the impact of climate change felt across the continent, 
                      <b>94% of callers felt there was something they could do in their own community to cope.</b> 
                      Migration is the least viable option for farmers in 2023, just as it was in 2021.
                        
                      </Trans>
                    </Text>
                  </Box>
                  <Box display="flex" alignItems="center" px={10}>
                    <Text fontSize="1.4em" color="gray" textAlign="justify">
                      <Trans i18nKey="SUMMARY_P_4">
                      There’s good news! <b>More farmers are saying they are not worried about 
                      the safety and quality of their food, because they already eat safe and 
                      nutritious foods.</b> This, however, varied by region, and callers identified 
                      other threats to their food security. And, when it came to affordability, 
                      the availability of jobs and access to inputs, around half of respondents 
                      told us things were getting better, with only a third saying they had gotten worse.
                      </Trans>
                    </Text>
                  </Box>
                  <Box
                    bg={`url(${photo1})`}
                    backgroundSize="cover"
                    backgroundPosition="center center"
                    minHeight="550px"
                    borderRadius="5px"
                    my={{ base: 10, md: 0 }}
                  />
                  <Box
                    bg={`url(${photo4})`}
                    backgroundSize="cover"
                    backgroundPosition="top center"
                    minHeight="550px"
                    borderRadius="5px"
                    my={{ base: 10, md: 0 }}
                  />
                  <Box display="flex" alignItems="center" px={5}>
                    <Text fontSize="1.4em" color="gray" textAlign="justify">
                      <Trans i18nKey="SUMMARY_P_5">
                        In 2021, loans or credit were the top priority for farmers to
                         achieve success; however, in 2023, <b>callers told us 
                          there were many things that would bring them success alongside 
                          loans and credit: secure access to and control over lands and better information among them. </b>
                      </Trans>
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
     
      
    </>
  );
}

export default Summary;
