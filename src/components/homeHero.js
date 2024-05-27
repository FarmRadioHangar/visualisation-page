import { Stack, Box, Heading, Text, Container, SimpleGrid, Grid, GridItem, useColorModeValue, Img,} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { BsArrowRightCircle } from 'react-icons/bs';
import { useTranslation } from "react-i18next";
import Header from "./homeHeader";
import hero from "../img/Hero3.jpg"
import oad24bg from "../img/oad24Tilebg.jpg"
import oad23bg from "../img/oad23Tilebg.jpg"
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
                  backgroundPosition={{base: "center top", md:"bottom top"}}
                  color={"white"}
                  verticalAlign="center"
                  minHeight={{base: "700px", md:"800px"}}
                  pb={{base:30, md:100}}  
                >
                
                  <Container maxW={"7xl"} zIndex={10} position={"relative"} mb={35}>
                  <Header  bg={"transparent"} mb={20}/>
                  <SimpleGrid columns={{base: 1, md: 3}} spacing={0}  minHeight={{base: "300px", md:"500px"}} alignItems={"left"}>
                        
                        <Box mt={{base:"200px", md:"0px"}} pt={{ base:"0px", md:"200"}} >
                          <Heading mb={2} width={{base: "90%", md: "100%" }}fontFamily="BebasB" fontSize={{base: "55px", md:"85px"}} lineHeight={{base: "60px", md:"90px"}} fontWeight={"400"} textTransform={"Uppercase"}>
                            <Text as='span' fontWeight={600}>Rural People</Text>
                            <br/>
                            Have Plenty To Say.
                            </Heading>
                            <Text fontFamily={"heading"} fontSize={"md"} fontWeight={{base: 400, md: 300}} mb={3}>{t("HOME_INTRO")}</Text>
                          
                          </Box>

                      </SimpleGrid>
                  </Container>
                </Box>
      </Box>

      <Box bg={`url(${lbg})`} backgroundSize="cover" position={"relative"}>
        <Container maxW={"7xl"} zIndex={10} position={"relative"} py={{sm: 15, md: 20,}}>
          <Grid templateColumns={{ sm: "2fr", md: "4fr " }} >
            <GridItem fontFamily={"OSansM"} >
                <Box mb={{ base: 10, md: 20 }}>
                  <Heading
                    mt={{ base: 14, md: 0,}}
                    mb={5}
                    fontSize={{ base: "2xl", md: "5xl" }}
                    fontFamily={"OSansB"} 
                    letterSpacing={"-1px"} 
                    lineHeight={{ base:"1.15", md: "1.2"}} 
                    >
                    <Text as='span' color={"#4c9f38"}>On Air Dialogues </Text>  
                    are a Farm Radio International service that combines the power of radio with mobile phones.
                  </Heading>
                </Box>

            </GridItem>  
          </Grid>


        <Grid templateColumns={{ sm: '2fr', md: 'repeat(12, 1fr)' }}  pb={{sm: 20, md: 10}}
          >
            <GridItem colSpan={{sm:"12", md: "4"}} fontFamily={"OSansR"} >
              <Text fontSize={"20px"} lineHeight={"22px"} > More than </Text>
              <Text fontFamily={"OSansB"} fontSize={"82px"} lineHeight={"95px"} > 17K<Text as='span' color={"#4c9f38"}>+</Text> </Text>
              <Text fontSize={"18px"} lineHeight={"33px"} fontFamily={"OSansR"} >
              <Text as='span' fontWeight={"700"}>rural people</Text> have shared their thoughts, opinions, needs and ideas for a better future since the beginning of On Air Dialogues.
              </Text>
            </GridItem>  

            <GridItem colSpan={{sm:"12", md: "8"}} fontFamily={"OSansR"} pt={{ base: "40px", md: "80px",}}> 
              <Text fontSize={"20px"} lineHeight={"32px"} >
                When farmers’ voices and perspectives are amplified, we can base decisions, policies, and programs on what people really need and want. Learning from farmers’ vast knowledge and experience can bring the world one step closer to ensuring solutions are equitable, sustainable, and productive for all.
              </Text>
            </GridItem>

        </Grid>

          </Container>
          </Box>

          
      <Box bg={`url(${lbg})`} backgroundSize="cover" position={"relative"} id="aboutoad">
        
        <Container maxW={"7xl"} zIndex={10} position={"relative"} >
          <Grid
            templateColumns={{ sm: '2fr', md: 'repeat(12, 1fr)' }}
            gap={10}
            pt={{ base: 10, md:2}}
            pb={{ base: 4, md: 10, }}
          >
            <GridItem colSpan={{sm:"12", md: "6"}}>

                <Box>
                  <Img
                    src={oadfeat}
                    objectFit="cover"
                  />
                </Box>
            </GridItem>  

            <GridItem colSpan={{sm:"12", md: "6"}} fontFamily={"OSansM"}>
            <Box mt={{ base: 4, md: 20 }}>
                  <Heading
                    mb={5}
                    fontSize={{ base: "2xl", md: "4xl" }}
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
                      returns the call, free of charge. Uliza presents the caller with a series of multiple-choice questions. Callers respond by pressing numbers on the keypad. Uliza also presents the caller with an open-ended question. Callers record a voice message in response. Responses to multiple-choice questions are analyzed and disaggregated to shed light on key themes by country, age, and gender. Voice messages are similarly analyzed and documented. 
                      </Text>
                    </Stack>
                </Box>




        </Container>
        </Box>



      <Box bg={`url(${lbg})`} backgroundSize="contain" bgColor={"#f6f6f6"} position={"relative"} py={5} id="resultsoad">
        <Container maxW={"7xl"} zIndex={10} position={"relative"} pt={10}>

        <Grid
            templateColumns='(12, 1fr)'
            gap={1}
            pt={{ base: 4, md: 10, }}
          >
            <GridItem colSpan={{sm:"6", md: "5"}} fontFamily={"OSansM"} >
                <Box>
                  <Heading
                    mb={5}
                    fontSize={{ base: "2xl", md: "5xl" }}
                    fontFamily={"OSansB"} 
                    letterSpacing={"-1px"} 
                    lineHeight={{ md: "1.2"}} 
                    >
                    Explore what rural people have had to say, and listen to their own voices:
                  </Heading>
                </Box>

            </GridItem>  
 
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
                  <Link to={`/oad2024`} >  
                    <Box 
                      minHeight="680px"
                      p={{base:10, md:20}}
                      pt={{base:40, md:20}}
                      border={"1px solid #fffff"}
                      borderRadius="5px"
                      bgColor={{base:"transparent", md:"#ffffff"}}
                      bg={{base:`linear-gradient(0deg, rgb(0 0 0), rgb(36 36 36 / 31%)),url(${oad24bg})`, md:"white"}}
                      bgPosition="center"
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      color={{base:"#ffffff", md:"#1a202c"}}
                      position={"relative"}
                      transition={'padding 0.8s ease, background 0.8s ease'}
                      _hover={{ 
                        pt:"40",
                        bgColor: "transparent",
                        color:"white",
                        bg:`linear-gradient(0deg, rgb(0 0 0), rgb(36 36 36 / 7%)),url(${oad24bg})`,
                        bgPosition:"center",
                        bgSize:"cover",
                        bgRepeat:"no-repeat",
                        
                      }}
                    >
                      <Text fontSize={{base:"18px", md:"23px"}} fontFamily={"OSansSB"} letterSpacing={"-1px"} pt={"50px"}>
                        Listening to Rural Africans 2024 
                      </Text>
                      <Text  fontSize={{base:"3.0rem", md:"6xl"}} fontFamily={"OSansB"} 
                      letterSpacing={"-3px"} color={"#4c9f38"} 
                      lineHeight={{base:"3.1rem", md:"4.1rem"}}  pb={"40px"}>
                        Unpaid Care Work
                      </Text>
                      <Text fontSize={{base:"15px", md:"18px"}} >
                      In partnership with Global Affairs Canada, national governments, UN Women, 
                      FEMNET and national women's rights organizations, we asked thousands of women, 
                      men and youth about their understanding of unpaid care work, the social norms 
                      surrounding it and the necessary steps for effecting change.
                      </Text>
                      <Text 
                        fontSize="20px" fontFamily={"OSansM"} 
                        letterSpacing={"-1px"} color={"#818181"}
                        position={"absolute"}
                        bottom={"14"}
                      >
                        April 2024
                      </Text>
                    </Box>
                  </Link>

                  <Link to={`/oad2023`} >  
                  <Box 
                      minHeight="680px"
                      p={{base:10, md:20}}
                      pt={{base:60, md:20}}
                      border={"1px solid #fffff"}
                      borderRadius="5px"
                      bgColor={{base:"transparent", md:"#ebebeb"}}
                      bg={{base:`linear-gradient(0deg, rgb(0 0 0), rgb(36 36 36 / 31%)),url(${oad23bg})`, md:"#ebebeb"}}
                      bgPosition="center"
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      color={{base:"#ffffff", md:"#1a202c"}}
                      position={"relative"}
                      transition={'padding 0.8s ease, background 0.8s ease'}
                      _hover={{ 
                        pt:"40",
                        bgColor: "transparent",
                        color:"white",
                        bg:`linear-gradient(0deg, rgb(0 0 0), rgb(36 36 36 / 7%)),url(${oad23bg})`,
                        bgPosition:"center",
                        bgSize:"cover",
                        bgRepeat:"no-repeat",
                        
                      }}>
                       <Text fontSize={{base:"18px", md:"23px"}} fontFamily={"OSansSB"} letterSpacing={"-1px"} pt={"50px"}>
                        Listening to Rural Africans 2023 
                      </Text>
                      <Text  fontSize={{base:"3.0rem", md:"6xl"}} fontFamily={"OSansB"} 
                      letterSpacing={"-3px"} color={"#4c9f38"} 
                      lineHeight={{base:"3.1rem", md:"4.1rem"}}  pb={"40px"}>
                        Food Systems
                      </Text>
                      <Text fontSize={{base:"15px", md:"18px"}} >
                      Two years after our first On Air Dialogue for the 2021 United Nations Food Systems Summit, 
                      we checked back in with farmers in Burkina Faso, Ghana, Tanzania and Uganda to see what, 
                      if anything, has changed and what their priorities are for 2023 and beyond.
                      </Text>
                      <Text 
                        fontSize="20px" fontFamily={"OSansM"} 
                        letterSpacing={"-1px"} color={"#818181"}
                        position={"absolute"}
                        bottom={"14"}
                      >
                        July 2023
                      </Text>
                    </Box>
                  </Link>
                  <Link to={`/oad2022`} > 
                  <Box 
                      minHeight="680px"
                      p={{base:10, md:20}}
                      pt={{base:60, md:20}}
                      border={"1px solid #fffff"}
                      borderRadius="5px"
                      bgColor={{base:"transparent", md:"#dddddd"}}
                      bg={{base:`linear-gradient(0deg, rgb(0 0 0), rgb(36 36 36 / 31%)),url(${oad22bg})`, md:"#dddddd"}}
                      bgPosition="center"
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      color={{base:"#ffffff", md:"#1a202c"}}
                      position={"relative"}
                      transition={'padding 0.8s ease, background 0.8s ease'}
                      _hover={{ 
                        pt:"40",
                        bgColor: "transparent",
                        color:"white",
                        bg:`linear-gradient(0deg, rgb(0 0 0), rgb(36 36 36 / 7%)),url(${oad22bg})`,
                        bgPosition:"center",
                        bgSize:"cover",
                        bgRepeat:"no-repeat",
                        
                      }}>
                      <Text fontSize={{base:"18px", md:"23px"}} fontFamily={"OSansSB"} letterSpacing={"-1px"} pt={"50px"}>
                        Listening to Rural Africans 2022 
                      </Text>
                      <Text  fontSize={{base:"3.0rem", md:"6xl"}} fontFamily={"OSansB"} 
                      letterSpacing={"-3px"} color={"#4c9f38"} 
                      lineHeight={{base:"3.1rem", md:"4.1rem"}}  pb={"30px"}>
                        Climate Change
                      </Text>
                      <Text fontSize={{base:"15px", md:"18px"}} >
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
                    </Box>
                  </Link>  
                  <Link to={`/oad2021`}>
                  <Box 
                      minHeight="680px"
                      p={{base:10, md:20}}
                      pt={{base:60, md:20}}
                      border={"1px solid #fffff"}
                      borderRadius="5px"
                      bgColor={{base:"transparent", md:"#cccccc"}}
                      bg={{base:`linear-gradient(0deg, rgb(0 0 0), rgb(36 36 36 / 31%)),url(${oad21bg})`, md:"#cccccc"}}
                      bgPosition="center"
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      color={{base:"#ffffff", md:"#1a202c"}}
                      position={"relative"}
                      transition={'padding 0.8s ease, background 0.8s ease'}
                      _hover={{ 
                        pt:"40",
                        bgColor: "transparent",
                        color:"white",
                        bg:`linear-gradient(0deg, rgb(0 0 0), rgb(36 36 36 / 7%)),url(${oad21bg})`,
                        bgPosition:"center",
                        bgSize:"cover",
                        bgRepeat:"no-repeat",
                        
                      }}>
                        <Text fontSize={{base:"18px", md:"23px"}} fontFamily={"OSansSB"} letterSpacing={"-1px"} pt={"50px"}>
                          Listening to Rural Africans 2021 
                        </Text>
                        <Text  fontSize={{base:"3.0rem", md:"6xl"}} fontFamily={"OSansB"} 
                        letterSpacing={"-3px"} color={"#4c9f38"} 
                        lineHeight={{base:"3.1rem", md:"4.1rem"}}  pb={"30px"}>
                          Food Systems
                        </Text>
                        <Text fontSize={{base:"15px", md:"18px"}} >
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
        <Text fontSize={14} fontWeight={`600`} pt={0}>© 2024 Farm Radio International | Radios Rurales Internationales, All rights reserved | On Air Dialogues</Text>
      </Container>
    </Box>
    </>
  );
}

export default Hero22;
