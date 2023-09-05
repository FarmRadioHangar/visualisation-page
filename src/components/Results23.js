import "@brainhubeu/react-carousel/lib/style.css";
import React, { useState, useContext } from "react";
import MapChart from "./MapChart";
// import { ChatIcon } from "@chakra-ui/icons";
import { AiOutlineLineChart } from "react-icons/ai";
import { VscFilePdf } from "react-icons/vsc";
import { Doughnut, Pie, Bar } from "react-chartjs-2";
import {
  SimpleGrid,
  Box,
  Table,
  Tr,
  Td,
  Tbody,
  // HStack,
  Img,
  Button,
  Heading,
  Select,
  Icon,
  Container,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { AppContext } from "../contexts/App";
import { RiBook2Line } from "react-icons/ri";
import illustration from "../img/illustration.png";
import e1q1 from "../img/OAD2023E1Q1i.png";
import e1q2 from "../img/OAD2023E1Q2i.png";
import e1q3 from "../img/OAD2023E1Q3i.png";
import e2q1 from "../img/OAD2023E2Q1i.png";
import e2q2 from "../img/OAD2023E2Q2i.png";
import e2q3 from "../img/OAD2023E2Q3i.png";
import e3q1 from "../img/OAD2023E3Q1i.png";
import e3q2 from "../img/OAD2023E3Q2i.png";
import e3q3 from "../img/OAD2023E3Q3i.png";
import { Trans, useTranslation } from "react-i18next";


function getResults(country, question) {
  switch (question) {
    case "1":
      switch (country) {
        case "ep1":
          return {
            quest: ["WHICH OF THE FOLLOWING ARE YOU MOST WORRIED ABOUT, IF YOU THINK ABOUT THE SAFETY AND QUALITY OF THE FOOD YOUR FAMILY EATS? "],
            stat: [e1q1],
            cap: ["Responses to safety and quality of food by country"],
          };
        case "ep2":
          return {
            quest: ["WHICH OF THE FOLLOWING FIVE OPTIONS WOULD GIVE YOU THE MOST SUCCESS AS A FARMER?"],
            stat: [e2q1],
            cap: ["Which of the following five options would give you the most success as a farmer by country?"],
          };
        case "ep3":
          return {
            quest: ["WHERE WOULD YOU TURN TO FOR INFORMATION TO HELP YOU COPE WITH FUTURE THREATS TO YOUR FAMILY AND LIVELIHOOD?"],
            stat: [e3q1],
            cap: ["Where would you turn to for information to help you cope with future threats to your family and livelihood by country?"],
          };  
        default:
          return {};
      }
    case "2":
      switch (country) {
        case "ep1":
          return {
           quest: ["WHEN FOOD IS SCARCE, WHAT IS THE FIRST THING YOUR FAMILY DOES TO COPE?"],
           stat: [e1q2],
           cap: ["When food is scarce, what is the first thing your family does to cope by country?"],
          };
          case "ep2":
          return {
            quest: ["WHAT WILL FARMING LOOK LIKE IN THE FUTURE FOR TODAY’S CHILDREN?"],
            stat: [e2q2],
            cap: ["What will farming look like in the future for today’s children by country?"],
          };
          case "ep3":
          return {
            quest: ["CLIMATE CHANGE CAN HAVE A BIG EFFECT ON FARMING. WHICH OF THE FOLLOWING WOULD HELP YOU, AS A FARMER TO BEST DEAL WITH CHANGES IN THE WEATHER?"],
            stat: [e3q2],
            cap: ["Climate change can have a big effect on farming. Which of the following would help you as a farmer to best deal with changes in the weather?"],
          };
        default:
          return {};
      }
      case "3":
        switch (country) {
          case "ep1":
          return {
            quest: ["OVER THE PAST 18 MONTHS, HAS THE AFFORDABILITY OF QUALITY FOOD IN YOUR COMMUNITY"],
            stat: [e1q3],
            cap: ["Over the past 18 months, has the affordability of quality food in your community by country?"],
          };
          case "ep2":
          return {
            quest: ["WHICH OF THE FOLLOWING FIVE OPTIONS WOULD GIVE YOU THE MOST SUCCESS AS A FARMER?"],
            stat: [e2q3],
            cap: ["Over the past 18 months, has the availability of quality jobs in your community by country"],
          };
          case "ep3":
          return {
            quest: ["OVER THE PAST 18 MONTHS, HAS YOUR ABILITY TO GET THE INPUTS YOU NEED TO SUPPORT YOUR FARMING AND OTHER PRODUCTIVE ACTIVITIES"],
            stat: [e3q3],
            cap: ["Over the past 18 months, has your ability to get the inputs you need to support your farming and other productive activities by country"],
          };
          default:
            return {};
        }  
    default:
      return [];
  }
}

function SummaryCard({ title, subtitle, results, options, colors }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card maxW="2xl">
        <VStack>
          <Heading fontSize="xl" fontWeight={600}>
            {title}
          </Heading>
          <Heading fontSize="md" my={9}>
            {subtitle}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
            <Table size="sm" mb={6}>
              <Tbody>
                {options.map((option, i) => (
                  <Tr key={i}>
                    <Td fontSize="0.7em">
                      <Box
                        borderRadius="50%"
                        w="24px"
                        h="23px"
                        background={colors[i]}
                        d="flex"
                        color="white"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {i + 1}
                      </Box>
                    </Td>
                    <Td fontSize="0.8em">{option}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Box mt={5} height="190px" width="100%">
              <Chart2 data={results} labels={options} colors={colors} />
            </Box>
          </SimpleGrid>
        </VStack>
      </Card>
    </div>
  );
}

function QuestionCard({ episode, question, chart: Chart, options = [] }) {
  const [tabIndex, setTabIndex] = useState(0);
  const { country } = useContext(AppContext);
  const { t } = useTranslation();

  const results = getResults(country, `${question}`);

  const colors = [
    "#4c9f38",
    "#01558b",
    "#fdb714",
    "#862539",
    "#01add8",
    "#ef412a",
    "#d2a02a",
  ];

  return (
    <Card>
                <SimpleGrid
                  columns={{ base: 1, md: 1 }}
                  spacing={10}
                  mt={5}
                  py={30}
                >
                  <Box px={{ base: 2, md: 5}} >
                    
                    <Text fontFamily={"heading"} fontSize={{base:"sm", md:"md"}} fontWeight={400} mb={2}> Question {question}</Text>
                    <Text fontFamily={"heading"} fontSize={{base:"sm", md:"lg"}} width={{ base: "100%", md:"70%"}} fontWeight={500} mb={10} pr={{ base: "0px", md: "50px"}} > {results["quest"]} </Text>
                      <Text mb={4} fontSize={{base:"xs", md:"sm"}} color="gray" ><b>Figure{question} :</b> {results["cap"]}</Text>
                      <Img align={"center"} width={{ base: "100%", md: "60%"}} src={results["stat"]} />

                  </Box>
   
      </SimpleGrid>
    </Card>
  );
}

function Card({ children, ...props }) {
  return (
    <Box border="1px solid #e2e8f0" borderRadius={12} p={4} w="100%" {...props}>
      {children}
    </Box>
  );
}

function Chart1({ data, labels, colors }) {
  return (
    <Pie
      data={{
        labels,
        datasets: [
          {
            borderWidth: 0.5,
            data,
            borderColor: colors,
            backgroundColor: colors,
          },
        ],
      }}
      options={{
        animations: true,
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}

function Chart2({ data, labels, colors }) {
  return (
    <Bar
      data={{
        labels: labels || labels.map((_, i) => i + 1),
        datasets: [
          {
            data,
            borderColor: colors,
            backgroundColor: colors,
          },
        ],
      }}
      options={{
        animations: true,
        maintainAspectRatio: false,
        responsive: true,
        indexAxis: "x",
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          x: {
            grid: {
              display: true,
            },
            ticks: {
              display: false,
            },
          },
        },
      }}
    />
  );
}

function Chart3({ data, labels, colors }) {
  return (
    <Bar
      data={{
        labels: labels || data.map((_, i) => i),
        datasets: [
          {
            data,
            borderColor: colors,
            backgroundColor: colors,
          },
        ],
      }}
      options={{
        animations: true,
        maintainAspectRatio: false,
        responsive: true,
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: true,
              drawBorder: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      }}
    />
  );
}

function Chart4({ data, labels, colors }) {
  return (
    <Doughnut
      data={{
        labels,
        datasets: [
          {
            data,
            borderColor: colors,
            backgroundColor: colors,
          },
        ],
      }}
      options={{
        animations: true,
        maintainAspectRatio: false,
        responsive: true,
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}

function Results() {
  const { language, setLanguage , country, setCountry } = useContext(AppContext);
  const { t } = useTranslation();

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const getCountryName = (code) => {
    switch (code) {
      case "ep1":
        return t("EPISODE 1 (Ensuring Access To Safe & Nutritious Food For All)");
      case "ep2":
        return t("EPISODE 2 (Advancing Equitable Livelihoods)");
      case "ep3":
        return t("EPISODE 3 (Building Resilience To Vulnerabilities, Shocks & Stress)");
      default:
        return "";
    }
  };



  return (
    <Box bg="white" display="flex" flexDirection="column">
      
      <Box id="results" bg="#dfa400" px={0} py={0} position="relative">
        <Box
          position="absolute"
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"left"}>
              <Heading fontSize={"4xl"} color="white">
                {t("What rural people think about climate change")}
              </Heading>
              <Text color={"white"} fontSize={"2xl"}>
                {t(
                  "Click on the dropdown menu below to explore the responses of farmers for each episode."
                )}
              </Text>
              <Box>
                <Select
                  option={country}
                  onChange={handleChangeCountry}
                  bg="#ffffffa8"
                  color="#dfa400"
                  fontWeight="bold"
                  placeholder={t("Select an episode")}
                  border="none"
                  size="lg"
                >
                  <option value="ep1">
                    {t("Episode 1")}
                  </option>
                  <option value="ep2">
                    {t("Episode 2")}
                  </option>
                  <option value="ep3">
                    {t("Episode 3")}
                  </option>
                  

                </Select>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box>
          <Stack textAlign={"center"}>
            <Box>
              <MapChart selectedCountry={country.toUpperCase()} />
            </Box>
          </Stack>
        </Box>
      </Box>
      <Container maxW={"8xl"} my={10} pt={8} pb={10}>
        {country && (
          <>
            <Box>
              <Heading
                color="#4c9f38"
                mb={10}
                size="xl"
                display="flex"
                alignItems="center"
              >
                <Icon mr={3} my={5} as={AiOutlineLineChart} />
                 {getCountryName(country)}{" "}
              </Heading>
            </Box>
            <SimpleGrid
              columns={{ base: 1, md: 1 }}
              spacing={5}
              mb={10}
              mt={10}
            >

                  <VStack align={"start"} width="100%" spacing={3}>
                  <QuestionCard
                    question={1}
                  />
                  <QuestionCard
                    question={2}
                  />
                  <QuestionCard
                    question={3} 
                  />
                  
                </VStack>

         
            </SimpleGrid>
          </>
        )}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box
            align="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Img src={illustration} w="350px" />
            <Text color="gray" fontSize="12px">
              <a href="https://storyset.com/data">
                Data illustrations by Storyset
              </a>
            </Text>
          </Box>
          <Box
            id="report"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <Box>
              <Heading
                color="#4c9f38"
                size="xl"
                display="flex"
                alignItems="center"
              >
                <Icon mr={3} as={RiBook2Line} />
                {t("Report")}
              </Heading>
            </Box>
            <Text color="#4c9f38" py={4} fontSize="1.3em">
              <Trans i18nKey="RESULTS_P_1">
                Want a deep dive into the results?
              </Trans>
            </Text>
            <Button
              onClick={() => {
                if ('fr' === language) {
                  document.location.href="/On_Air_Dialogues_2023.pdf";
                } else {
                  document.location.href='/On_Air_Dialogues_2023.pdf';
                }
              }}
              py={8}
              mt={5}
              size="lg"
              color="white"
              bg="#01add8"
              _hover={{ bg: "#008db8" }}
            >
              <VscFilePdf size="33" style={{ marginRight: '8px' }} />
              {t("Download Report")} (PDF)
            </Button>
            
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Results;
