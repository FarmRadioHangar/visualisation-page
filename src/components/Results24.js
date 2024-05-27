import "@brainhubeu/react-carousel/lib/style.css";
import React, { useState, useContext } from "react";
import MapChart from "./MapChart";
import { ChatIcon } from "@chakra-ui/icons";
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
  HStack,
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
import e1q1 from "../img/OAD24/OAD24E1Q1.png"
import e1q2 from "../img/OAD24/OAD24E1Q2.png";
import e1q3 from "../img/OAD24/OAD24E1Q3.png";
import e1q4 from "../img/OAD24/OAD24E1Q4.png";
import e2q1 from "../img/OAD24/OAD24E2Q1.png";
import e2q2 from "../img/OAD24/OAD24E2Q2.png";
import e2q3 from "../img/OAD24/OAD24E2Q3.png";
import e2q4 from "../img/OAD24/OAD24E2Q4.png";
import e3q1 from "../img/OAD24/OAD24E3Q1.png";
import e3q2 from "../img/OAD24/OAD24E3Q2.png";
import e3q3 from "../img/OAD24/OAD24E3Q3.png";
import { Trans, useTranslation } from "react-i18next";

function getResults(country, question) {
  switch (question) {
    case "1":
      switch (country) {
        case "ep1":
          return {
            quest: ["HOW MUCH OF YOUR DAY GOES TOWARD DOING UNPAID ACTIVITIES TO ENSURE THE CARE AND SAFETY OF YOUR FAMILY?"],
            stat: [e1q1],
            cap: ["Responses to amount of time spent on unpaid care activities"],
          };
        case "ep2":
          return {
            quest: ["HOW MUCH OF YOUR DAY GOES TOWARD DOING UNPAID ACTIVITIES TO ENSURE THE CARE AND SAFETY OF YOUR FAMILY?"],
            stat: [e2q1],
            cap: ["Responses to the amount of time spent on unpaid care activities by gender"],
          };
        case "ep3":
          return {
            quest: ["HOW MUCH OF YOUR DAY GOES TOWARD DOING UNPAID ACTIVITIES TO ENSURE THE CARE AND SAFETY OF YOUR FAMILY?"],
            stat: [e3q1],
            cap: ["Responses to amount of time spent on unpaid care activities"],
          };  
        default:
          return {};
      }
    case "2":
      switch (country) {
        case "ep1":
          return {
           quest: ["WHICH OF THESE DO YOU THINK IS CATEGORIZED AS UNPAID CARE WORK?"],
           stat: [e1q2],
           cap: ["Which of these do you think is categorized as unpaid care work?"],
          };
          case "ep2":
          return {
            quest: ["WHO, IN YOUR VIEW, SHOULD BE RESPONSIBLE FOR DOING UNPAID  CARE TASKS AND DOMESTIC WORK AT HOME?"],
            stat: [e2q2],
            cap: ["Response to who is responsible for unpaid care tasks by gender"],
          };
          case "ep3":
          return {
            quest: ["WHAT WOULD YOU CHANGE IN YOUR HOUSEHOLD, IF ANYTHING, TO MAKE THE WORK OF CARING FOR YOUR FAMILY EASIER AND MORE MANAGEABLE FOR WOMEN?"],
            stat: [e3q2],
            cap: ["Responses to what changes in the household would make unpaid care easier by gender"],
          };
        default:
          return {};
      }
      case "3":
        switch (country) {
          case "ep1":
          return {
            quest: ["THINK ABOUT THE AMOUNT OF WORK THAT IS INVOLVED FOR YOU IN CARING FOR THE NEEDS OF YOUR FAMILY AT HOME. IT IS:"],
            stat: [e1q3],
            cap: ["Responses to the amount of unpaid care work done at home by gender"],
          };
          case "ep2":
          return {
            quest: ["IN YOUR COMMUNITY, WHO AMONG THE FOLLOWING IS DOING MOST OF THE UNPAID CARE TASKS AND DOMESTIC WORK AT HOME?"],
            stat: [e2q3],
            cap: ["Response to who does most unpaid care tasks at home by age"],
          };
          case "ep3":
          return {
            quest: ["WHICH OF THE FOLLOWING ACTIONS SHOULD BE A TOP PRIORITY FOR GOVERNMENTS TO MAKE CARE WORK EASIER, ESPECIALLY FOR WOMEN?"],
            stat: [e3q3],
            cap: ["Response to top priority for governments to make unpaid care easier for women"],
          };
          default:
            return {};
        }
        case "4":
        switch (country) {
          case "ep1":
          return {
            quest: ["DOES YOUR SOCIETY RECOGNIZE AND APPRECIATE UNPAID DOMESTIC AND CARING WORK?"],
            stat: [e1q4],
            cap: ["Responses to recognition and appreciation of unpaid care"],
          };
          case "ep2":
          return {
            quest: ["IN YOUR COMMUNITY, HOW ARE FAMILIES PERCEIVED WHEN MEN AND WOMEN SHARE THE UNPAID CARE TASKS AND DOMESTIC WORK AT HOME?"],
            stat: [e2q4],
            cap: ["Response to perception of families when unpaid care work is shared"],
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
        return t("EPISODE 1 (Introduction To Unpaid Care)");
      case "ep2":
        return t("EPISODE 2 (Social Norms Related To Unpaid Care Work)");
      case "ep3":
        return t("EPISODE 3 (Making Change)");
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
                {t("What rural people think about unpaid care")}
              </Heading>
              <Text color={"white"} fontSize={"2xl"}>
                {t(
                  "Click on the dropdown menu below to explore the responses of listeners for each episode."
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
                  <QuestionCard
                    question={4} 
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
                  document.location.href="/On_Air_Dialogues_2024.pdf";
                } else {
                  document.location.href='/On_Air_Dialogues_2024.pdf';
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

