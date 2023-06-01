import { Stack, Box, Heading, Text, Container, SimpleGrid, Grid, GridItem, useColorModeValue, Img,} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { BsArrowRightCircle } from 'react-icons/bs';
import { useTranslation } from "react-i18next";
import Header from "./homeHeader";
import hero from "../img/Hero2.jpg"
import oad22bg from "../img/oad22Tilebg.jpg"
import oad21bg from "../img/oad21Tilebg.jpg"
import lbg from "../img/layoutBG.png"
import oadfeat from "../img/oad22Tilebgi.jpg";


function Hero22() {
  const { t } = useTranslation();

  

  return (
    <>
      <Box>
                <Box
                  bg={`linear-gradient(45deg, rgb(0 0 0), rgb(36 36 36 / 7%)),url(${hero})`}
                  backgroundSize="cover"
                  backgroundPosition="center top"
                  color={"white"}
                  verticalAlign="center"
                  minHeight="800px"
                  pb={100}  
                >
                
                  <Container maxW={"7xl"} zIndex={10} position={"relative"} mb={35}>
                    <Header  bg={"transparent"} mb={20}/>
                      <SimpleGrid columns={2} spacing={0} alignItems={"left"} >
                        
                          <Box pt={200} >
                            <Heading mb={2} fontFamily="BebasB" fontSize={"85px"} lineHeight={"90px"} fontWeight={"400"} textTransform={"Uppercase"}>
                            <Text as='span' fontWeight={600}>Rural People</Text>
                            <br/>
                            Have Much To Say.
                            </Heading>
                            <Text fontFamily={"OSansR"} fontSize={"20px"} fontWeight={400} pr={30}>{t("HOME_INTRO")}</Text>
                          
                          </Box>

                      </SimpleGrid>
                  </Container>
                </Box>
      </Box>

      <Box bg={`url(${lbg})`} backgroundSize="cover" position={"relative"}>
        <Container maxW={"7xl"} zIndex={10} position={"relative"} py={{sm: 15, md: 20,}}>
          <Grid
            templateColumns='repeat(12, 1fr)'
            gap={1}
            // pt={{ base: 4, md: 10, }}
          >
            <GridItem colSpan={{sm:"12", md: "11"}} fontFamily={"OSansM"} >
                <Box mb={{ base: 8, md: 20 }}>
                  <Heading
                    mb={5}
                    fontSize={{ base: "4xl", md: "5xl" }}
                    fontFamily={"OSansB"} 
                    letterSpacing={"-1px"} 
                    lineHeight={{ md: "1.2"}} 
                    >
                    <Text as='span' color={"#4c9f38"}>On Air Dialogues </Text>  
                    are a Farm Radio International service that combines the power of radio with mobile phones.
                  </Heading>
                </Box>

            </GridItem>  

            <GridItem colSpan={{ sm:"12", md:"1"}} fontFamily={"OSansR"} /> 
          </Grid>


          <Grid
            templateColumns='repeat(12, 1fr)'
            gap={1}
            pb={{sm: 15, md: 10,}}
          >
            <GridItem colSpan={{sm:"12", md: "4"}} fontFamily={"OSansR"} >
              <Text fontSize={"20px"} lineHeight={"22px"} >
              More than
              </Text>
              <Text fontFamily={"OSansB"} fontSize={"82px"} lineHeight={"95px"} >
              17K<Text as='span' color={"#4c9f38"}>+</Text>
              </Text>
              <Text fontSize={"18px"} lineHeight={"33px"} fontFamily={"OSansR"} >
              <Text as='span' fontWeight={"700"}>rural people</Text> have shared their thoughts, opinions, needs and ideas for a better future since the beginning of On Air Dialogues.
              </Text>
            </GridItem>  
            <GridItem colStart={6} colEnd={13} fontFamily={"OSansR"} pt={ "40px" }> 
              <Text fontSize={"22px"} lineHeight={"34px"} >
                When farmers’ voices and perspectives are amplified, we can base decisions, policies, and programs on what people really need and want. Learning from farmers’ vast knowledge and experience can bring the world one step closer to ensuring solutions are equitable, sustainable, and productive for all.
              </Text>
            </GridItem>
          </Grid>
          </Container>
          </Box>

          
      <Box bg={`url(${lbg})`} backgroundSize="cover" position={"relative"} id="aboutoad">
        <Container maxW={"7xl"} zIndex={10} position={"relative"} >

          <Grid
            templateColumns='repeat(12, 1fr)'
            gap={10}
            pb={{ base: 4, md: 10, }}
          >
            <GridItem colSpan={{sm:"12", md: "6"}} fontFamily={"OSansM"} >

            <Box>
                <Img
                  src={oadfeat}
                  objectFit="cover"
                />
              </Box>

            </GridItem>  

            <GridItem colSpan={{sm:"12", md: "6"}} fontFamily={"OSansM"}>
            <Box mt={{ base: 8, md: 20 }}>
                  <Text fontSize={"15px"} fontWeight={"600"} pb={"10px"}  >
                    01 - About OAD
                  </Text>
                  <Heading
                    mb={5}
                    fontSize={{ base: "4xl", md: "4xl" }}
                    fontFamily={"OSansB"} 
                    letterSpacing={"-1px"} 
                    lineHeight={{ md: "1.2"}} 
                    >
                    What are <Text as='span' color={"#4c9f38"}>On Air Dialogues </Text>
                  </Heading>
                    <Stack spacing={3} > 
                      <Text fontSize={"18px"} lineHeight={"28px"} fontFamily={"OSansR"} >
                      Working with partners and local radio stations that rural communities know and trust, several original episodes of radio programming are created. Alongside these programs – that interest listeners and create buzz – a mobile-phone based polling system is created using Farm Radio’s Uliza suite of services. 
                      </Text>
                      <Text fontSize={"18px"} lineHeight={"28px"} fontFamily={"OSansR"} >
                      On air, broadcasters invite local experts, farmers and guests to speak and share their knowledge. Off air, listeners join in the conversation by participating in the polling and sharing their own thoughts.  
                      </Text>
                    </Stack>
                </Box>
            </GridItem> 
          </Grid>

          <Box mb={{ base: 8, md: 20 }} >
                    <Stack spacing={3} > 
                      <Text fontSize={"18px"} lineHeight={"28px"} fontFamily={"OSansR"} >
                      Each episode of the On Air Dialogues posed a series of questions to listeners. As advertised 
                      on the radio program, listeners can use any mobile phone to leave a missed call (or “beep”) 
                      on a number advertised on the radio program. When they end the call, Uliza, Farm Radio’s polling tool, 
                      returns the call, free of charge. Uliza presents the caller with a series of multiple-choice questions. Callers respond by pressing numbers on the keypad. Uliza also present the caller with an open-ended question. Callers record a voice message in response. Responses to multiple-choice questions are analyzed and disaggregated to shed light on key themes by country, age, and gender. Voice messages are similarly analyzed and documented. 
                      </Text>
                    </Stack>
                </Box>




        </Container>
        </Box>



      <Box bg={`url(${lbg})`} backgroundSize="contain" bgColor={"#f6f6f6"} position={"relative"} py={5} id="resultsoad">
        <Container maxW={"7xl"} zIndex={10} position={"relative"} pt={10}>

        <Grid
            templateColumns='repeat(6, 1fr)'
            gap={1}
            pt={{ base: 4, md: 10, }}
          >
            <GridItem colSpan={{sm:"12", md: "5"}} fontFamily={"OSansM"} >
                <Box>
                <Text fontSize={"15px"} fontWeight={"600"} pb={"10px"}  >
                    02 - Results
                </Text>
                  <Heading
                    mb={5}
                    fontSize={{ base: "4xl", md: "5xl" }}
                    fontFamily={"OSansB"} 
                    letterSpacing={"-1px"} 
                    lineHeight={{ md: "1.2"}} 
                    >
                    Explore what rural people have had to say, and listen to their own voices:
                  </Heading>
                </Box>

            </GridItem>  

            <GridItem colSpan={{ sm:"12", md:"1"}} fontFamily={"OSansR"} /> 
          </Grid>
          
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              justify={{ lg: "center" }}
            >
              <Box mb={{ base: 8, md: 20 }}>
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={4}
                  mt={10}
                  py={30}
                >
                  <Link to={`/oad2022`} >  
                    <Box 
                      minHeight="680px"
                      p={20}
                      pt={40}
                      border={"1px solid #fffff"}
                      borderRadius="5px"
                      bgColor={"#ffffff"}
                      position={"relative"}
                      transition={'padding 0.8s ease, background 0.8s ease'}
                      _hover={{
                        pt:"52",
                        bgColor: "transparent",
                        color:"white",
                        bg:`linear-gradient(0deg, rgb(0 0 0), rgb(36 36 36 / 7%)),url(${oad22bg})`,
                        bgPosition:"center",
                        bgSize:"cover",
                        bgRepeat:"no-repeat",
                        
                      }}
                    >
                      <Text fontSize="23px" fontFamily={"OSansSB"} letterSpacing={"-1px"} pt={"50px"}>
                        OAD: Listening to Rural Africans 2022 
                      </Text>
                      <Text  fontSize="6xl" fontFamily={"OSansB"} 
                      letterSpacing={"-3px"} color={"#4c9f38"} 
                      lineHeight={"8xl"} pb={"40px"}>
                        Climate Change
                      </Text>
                      <Text fontSize="18px">
                      We asked rural people in Burkina Faso and Ethiopia about climate change: how it’s impacting 
                      them; what changes they’ve made on their farms; and what governments can do to support the 
                      most vulnerable when it comes to adapting to climate change.
                      </Text>
                      <Text 
                        fontSize="20px" fontFamily={"OSansM"} 
                        letterSpacing={"-1px"} color={"#818181"}
                        position={"absolute"}
                        bottom={"14"}
                      >
                        October 2022
                      </Text>
                      {/* <Text 
                        fontSize="40px" fontFamily={"OSansM"} 
                        letterSpacing={"-1px"} color={"#818181"}
                        position={"absolute"}
                        bottom={"40px"}
                        right={"80px"}
                      >
                      <BsArrowRightCircle color="#818181" />
                      </Text> */}
                    </Box>
                  </Link>  
                  <Link to={`/oad2021`}>
                  <Box 
                      minHeight="680px"
                      p={20}
                      pt={40}
                      border={"1px solid #fffff"}
                      borderRadius="5px"
                      bgColor={"#E8E9EA"}
                      position={"relative"}
                      transition={'padding 0.8s ease, background 0.8s ease'}
                      _hover={{
                        pt:"52",
                        bgColor: "transparent",
                        color:"white",
                        bg:`linear-gradient(0deg, rgb(0 0 0), rgb(36 36 36 / 7%)),url(${oad21bg})`,
                        bgPosition:"center",
                        bgSize:"cover",
                        bgRepeat:"no-repeat",
                        
                      }}
                    >
                        <Text fontSize="23px" fontFamily={"OSansSB"} letterSpacing={"-1px"} pt={"50px"}>
                          OAD: Listening to Rural Africans 2021 
                        </Text>
                        <Text  
                          fontSize="6xl" fontFamily={"OSansB"} 
                          letterSpacing={"-3px"} color={"#4c9f38"} 
                          lineHeight={"8xl"} pb={"40px"}
                        >
                          Food Systems
                        </Text>
                        <Text fontSize="18px">
                        Over the course of three weeks, and in partnership with IFAD, World Vision Canada, and the Food 
                        Security Policy Group, Farm Radio International gathered thousands of small-scale farmers’ and 
                        other rural peoples’ perspectives on how to create equitable, sustainable, and productive food systems.
                        </Text>
                        <Text 
                          fontSize="20px" fontFamily={"OSansM"} 
                          letterSpacing={"-1px"} color={"#818181"}
                          position={"absolute"}
                          bottom={"14"}
                        >
                          June 2021
                        </Text>
                        {/* <Text 
                          fontSize="40px" fontFamily={"OSansM"} 
                          letterSpacing={"-1px"} color={"#818181"}
                          position={"absolute"}
                          bottom={"40px"}
                          right={"80px"}
                        >
                        <BsArrowRightCircle color="#818181" />
                        </Text> */}
                      </Box>
                  </Link>
                </SimpleGrid>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
      <Container as={Stack} maxW={"7xl"} py={8}>
        <Text fontSize={14} fontWeight={`600`} pt={0}>© 2023 Farm Radio International | Radios Rurales Internationales, All rights reserved | On Air Dialogues(OAD) </Text>
      </Container>
    </Box>
    </>
  );
}

export default Hero22;
