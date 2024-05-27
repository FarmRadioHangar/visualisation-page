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
import photo1 from "../img/OAD24Feature2.jpg";
import photo2 from "../img/OAD24Feature6.jpg";
import photo4 from "../img/OAD24Feature7.jpg";
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
                  {t("SUMMARY_P_24i")}
                </Heading>
                <Text fontSize={"xl"} >
                  {t("SUMMARY_P_24ii")}
                </Text>


                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={1}
                  mt={10}
                  py={30}
                >
                  <Box
                    bg={`url(${photo1})`}
                    backgroundSize="cover"
                    backgroundPosition="center center"
                    minHeight="550px"
                    borderRadius="5px"
                    my={{ base: 10, md: 0 }}
                  />
                  <Box display="flex" alignItems="center" px={{base: 5, md: 5}}>
                    <Text fontSize="1.4em" color="gray" textAlign="justify">
                      <Trans i18nKey="SUMMARY_P_3i">
                      <b>Women generally spend more time on unpaid care work 
                        compared to men,</b> although there are variations across 
                        countries. For example, in the first On Air Dialogue episode, 
                        women in Ethiopia were more likely to tell us that they spend 
                        most of their day on unpaid care work, while men reported spending 
                        only a small part of their day on these activities. Nigeria and Tanzania, 
                        meanwhile, showed a more balanced distribution between genders.
                      </Trans>
                    </Text>
                  </Box>

                  <Box
                    bg={`url(${photo2})`}
                    display={{md: "none"}}
                    backgroundSize="cover"
                    backgroundPosition="center center"
                    minHeight="550px"
                    borderRadius="5px"
                    my={{ base: 10, md: 0 }}
                  />
        
                  <Box display="flex" alignItems="center" px={{base: 5, md: 5}}>
                    <Text fontSize="1.4em" color="gray" textAlign="justify">
                      <Trans i18nKey="SUMMARY_P_4">
                      Across most countries, <b>both men and women acknowledge the need 
                      for a more equal sharing of household work between genders.</b> This 
                      sentiment is particularly strong in Ethiopia, Malawi and Tanzania. 
                      A significant percentage in each country believes that the work 
                      should be made easier for women to manage, suggesting an awareness 
                      of the challenges women face in household responsibilities. 
                      </Trans>
                    </Text>
                  </Box>
                  <Box
                    bg={`url(${photo2})`}
                    display={{base: "none", md: "block"}}
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
                  <Box display="flex" alignItems="center" px={{base: 5, md: 5}}>
                    <Text fontSize="1.4em" color="gray" textAlign="justify">
                      <Trans i18nKey="SUMMARY_P_5">
                      <b>The top priority for governments</b> to make care work 
                        easier for women varies. In Nigeria and Tanzania, improving 
                        safety and security, especially for women and girls, is seen 
                        as a significant priority. Malawi prioritizes making more health 
                        care services available, and Burkina Faso making more childcare 
                        centres available. Ethiopia emphasizes both childcare centres 
                        and health care services.
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
