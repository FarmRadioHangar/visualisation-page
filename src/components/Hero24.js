import React, { useState, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import Spinner from "react-spinkit";
import resultsBf from "../data/bf24.json";
import Header from "./Header24";
import { BiPlay, BiPause } from "react-icons/bi";
import { Link, VStack, IconButton, Box, Heading, Text, Container, SimpleGrid, Button } from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";
import hero from "../img/OAD24Hero1.jpg"
import lbg from "../img/layoutBG.png"

function Hero() {
  const [overlayExpanded, setOverlayExpanded] = useState(true);
  const [audioSrc, setAudioSrc] = useState();
  const [responseInfo, setResponseInfo] = useState();
  const [transcriptionLang, setTranscriptionLang] = useState("en");
  const [playing, setPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const { t } = useTranslation();

  const playerRef = useRef();

  const audioApi = () => {
    return playerRef.current.audioEl.current;
  };

  const handleClick = () => {
    const getResultsSet = () => {
      switch (Math.floor(2 * Math.random())) {
        case 0:
        default:  
          return resultsBf;
      }
    };

    const getResponse = () => {
      const results = getResultsSet();
      return results[Math.floor(results.length * Math.random())];
    };

    const response = getResponse();

    setAudioSrc(`${process.env.PUBLIC_URL}/audio24/${response.ID}.wav`);

    setResponseInfo({
      transcription_en: response["Transcription (ENG)"],
      transcription_fr: response["Transcription (FR)"],
      question_en: response["Corresponding Uliza poll question"],
      question_fr: response["Corresponding Uliza poll question (FR)"],
    });

    setCanPlay(false);
    audioApi().load();
    setPlaying(true);
  };

  const onLoaded = (container) => {
    container.addClickHandler(handleClick);
  };

  const toggleOverlayExpanded = () => {
    setOverlayExpanded(!overlayExpanded);
  };

  const pause = () => {
    audioApi().pause();
    setPlaying(false);
  };

  const play = () => {
    audioApi().play();
    setPlaying(true);
  };

  const handlePlaybackEnded = () => {
    setAudioSrc(null);
    setPlaying(false);
  };

  return (
    <>
      {audioSrc && (
        <IconButton
          icon={playing ? <BiPause size={32} /> : <BiPlay size={32} />}
          color="white"
          cursor="pointer"
          bottom="40px"
          right="40px"
          width="70px"
          height="70px"
          position="fixed"
          zIndex={4000}
          borderRadius="50%"
          background="rgb(239 65 42)"
          onClick={playing ? pause : play}
          boxShadow="0 4px 10px #00000050"
          _hover={{
            background: "rgb(239 65 42)",
          }}
        />
      )}
      <Box>
        <ReactAudioPlayer
          ref={playerRef}
          src={audioSrc}
          autoPlay={true}
          onEnded={handlePlaybackEnded}
          onError={(err) => {
            console.log(err);
          }}
          onCanPlay={() => {
            setCanPlay(true);
          }}
        />


                <Box
                  bg={`linear-gradient(0deg, rgb(0 0 0 / 89%), rgb(36 36 36 / 31%)),url(${hero})`}
                  backgroundSize="cover"
                  backgroundPosition={{base: "center bottom", md:"bottom top"}}
                  color={"white"}
                  verticalAlign="center"
                  minHeight={{base: "700px", md:"800px"}}
                  pb={{base:30, md:100}}
                  
                >
                
                <Container maxW={"6xl"} zIndex={10} position={"relative"} mb={35}>
                  <Header  bg={"transparent"} mb={20}/>
                  <SimpleGrid columns={{base: 1, md: 3}} spacing={0}  minHeight={{base: "300px", md:"500px"}} alignItems={"left"}>
                    
                    <Box mt={{base:"200px", md:"0px"}} >
                      <Heading mb={2} width={{base: "80%", md: "100%" }}fontFamily="BebasB" fontSize={{base: "55px", md:"85px"}} lineHeight={{base: "60px", md:"90px"}} fontWeight={"400"} textTransform={"Uppercase"}>
                        {t("Listening to Rural People 2024")}
                      </Heading>
                      <Text fontFamily={"heading"} fontSize={"md"} fontWeight={{base: 400, md: 300}} mb={3}>{t("HERO_INTRO_24")}</Text>
                      <Button
                          onClick={handleClick}
                          px={8}
                          py={8}
                          mt={2}
                          size="md"
                          color="white"
                          bg="#4c9f38"
                          border={"1px solid #4c9f38"}
                          _hover={{ bg: "transparent", border:"1px solid #fff" }}
                        >
                          {t("Click to listen to their voices*")}
                      </Button>
                      <Text fontSize={"xs"} textAlign="left" pt={2}> * Click repeatedly to shuffle playback</Text>
                    </Box>

                  
                    
                  </SimpleGrid>
                 
                {audioSrc && playing && (
                    <>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        bg="#121212"
                        px={3}
                        color="#f8f8f8"
                        minHeight="52px"
                        fontSize="pt"
                        mt={10}
                        borderRadius={"5px"}
                      >
                        {playing && (
                          <>
                            <Box mx={3} h="100%">
                              {canPlay ? (
                                <Spinner
                                  fadeIn="none"
                                  color="white"
                                  name="line-scale-pulse-out"
                                  style={{
                                    width: "40px",
                                    height: "100%",
                                    marginTop: "6px",
                                  }}
                                />
                              ) : (
                                <Spinner
                                  fadeIn="none"
                                  color="white"
                                  name="three-bounce"
                                  style={{
                                    width: "40px",
                                    height: "100%",
                                    marginTop: "6px",
                                  }}
                                />
                              )}
                            </Box>
                            <Box mx={2}>
                              {responseInfo && (
                                <>
                                  <VStack spacing={0} align="left">
                                    <Box fontSize="0.7em" py={3}>
                                      <Link
                                        color={
                                          transcriptionLang === "en" ? "white" : "grey"
                                        }
                                        mr={2}
                                        onClick={() => {
                                          setTranscriptionLang("en");
                                        }}
                                      >
                                        EN
                                      </Link>
                                      <Link
                                        color={
                                          transcriptionLang === "fr" ? "white" : "grey"
                                        }
                                        onClick={() => {
                                          setTranscriptionLang("fr");
                                        }}
                                      >
                                        FR
                                      </Link>
                                    </Box>
                                    <Box>
                                      {transcriptionLang === "en" ? (
                                        <>
                                          <Text fontSize="10.5pt" pb={3} color="gray">
                                            <b>Question:</b>
                                            <br />
                                            {responseInfo.question_en}
                                          </Text>
                                          <Text
                                            fontSize="10.5pt"
                                            pb={3}
                                            color="white.700"
                                          >
                                            {responseInfo.transcription_en}
                                          </Text>
                                        </>
                                      ) : (
                                        <>
                                          <Text fontSize="10.5pt" pb={3} color="gray">
                                            <b>Question:</b>
                                            <br />
                                            {responseInfo.question_fr}
                                          </Text>
                                          <Text
                                            fontSize="10.5pt"
                                            pb={3}
                                            color="white.700"
                                          >
                                            {responseInfo.transcription_fr}
                                          </Text>
                                        </>
                                      )}
                                    </Box>
                                  </VStack>
                                </>
                              )}
                            </Box>
                          </>
                        )}
                      </Box>
                    </>
                  )}
                  </Container>
                </Box>

                <Box
                  bg={`url(${lbg})`} backgroundSize="contain"
                  mt={{base: "0px", md:"-75px"}}
                  color="white"
                  fontFamily={"BebasR"}
                  textTransform={"Uppercase"}
                >
                <Container maxW={"6xl"} zIndex={10} position={"relative"} bg='#4c9f38' borderRadius={{base: "0px", md: "5px"}}>

                  <SimpleGrid columns={{base: 2, md: 6}} spacingY='50px' minHeight='90px' py={{ base: "10", md: "5"}}>
                    <Box  borderRight="1px solid #fff" textAlign="center" > 
                        <Text fontSize={"60px"} lineHeight={"70px"} fontWeight={"600"} letterSpacing={1} mb={2}>5</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"25px"} lineHeight={"30px"}>Countries</Text>
                        </Trans>
                    </Box>
                    <Box borderRight={{ base: "0px", md: "1px solid #fff"}}  textAlign="center" >
                        <Text fontSize={"60px"} lineHeight={"70px"} fontWeight={"600"} letterSpacing={1} mb={2}>16</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"25px"} lineHeight={"30px"}>Radio Stations</Text>
                        </Trans>
                    </Box>
                    <Box borderRight="1px solid #fff"  textAlign="center" >
                        <Text fontSize={"60px"} lineHeight={"70px"} fontWeight={"600"} letterSpacing={1} mb={2}>48</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"25px"} lineHeight={"30px"}>Original Episodes</Text>
                        </Trans>
                    </Box>
                    <Box borderRight={{ base: "0px", md: "1px solid #fff"}}  textAlign="center" >
                        <Text fontSize={"60px"} lineHeight={"70px"} fontWeight={"600"} letterSpacing={1} mb={2}>20,355</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"25px"} lineHeight={"30px"}>Respondents</Text>
                        </Trans>
                    </Box>
                    <Box borderRight="1px solid #fff"  textAlign="center" >
                        <Text fontSize={"60px"} lineHeight={"70px"} fontWeight={"600"} letterSpacing={1} mb={2}>95,951</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"25px"} lineHeight={"30px"}>Poll Responses</Text>
                        </Trans>
                    </Box>
                    <Box textAlign="center" >
                        <Text fontSize={"60px"} lineHeight={"70px"} fontWeight={"600"} letterSpacing={1} mb={2}>13,937</Text>
                        <Trans i18nKey="SUMMARY_P_6">
                        <Text fontSize={"25px"} lineHeight={"30px"}>Audio Comments</Text>
                        </Trans>
                    </Box>
                  </SimpleGrid>
                </Container> 
                </Box>

      </Box>
    </>
  );
}

export default Hero;
