import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../Redux/contact/action";
import ContectChart from "./ContectChart";
import ContectChartBar from "./ContectChartBar";

const Dashboard = () => {
  const { contacts } = useSelector((store) => store.contact);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContact());
  }, []);
  let Contectlebals = [];
  let Lifecycle = [];
  let Leadstatus = [];
  contacts.forEach((element) => {
    Contectlebals.push(element.createdate);
    Lifecycle.push(element.Lifecycle);
    Leadstatus.push(element.LeadStatus);
  });
  function ContectData(Contectlebals) {
    let obj = {};
    let objkey = [];
    let objvalue = [];
    for (let i = 0; i < Contectlebals.length; i++) {
      if (obj[Contectlebals[i]] === undefined) {
        obj[Contectlebals[i]] = 1;
      } else {
        obj[Contectlebals[i]]++;
      }
    }
    for (let key in obj) {
      objvalue.push(obj[key]);
      objkey.push(key);
    }
    return [objvalue, objkey];
  }
  let ContectNum = ContectData(Contectlebals);
  let LifecycleData = ContectData(Lifecycle);
  let LeadstatusData = ContectData(Leadstatus);
  console.log(LeadstatusData[1]);

  return (
    <div>
      Dashboard
      {/* <Container maxW={"7xl"} border={"1px solid red"}> */}
      <SimpleGrid columns={[1, null, 2]} alignItems={"center"} spacing="40px">
        <Box>
          <ContectChart
            name={"Total Contect"}
            label={"Contect"}
            color={"#90CDF4"}
            labels={ContectNum[1]}
            dataNum={ContectNum[0]}
          />
        </Box>
        <Box>
          <ContectChart
            name={"Total Lifecycle"}
            label={"Lifecycle"}
            color={"#9AE6B4"}
            labels={LifecycleData[1]}
            dataNum={LifecycleData[0]}
          />
        </Box>
        <Box>
          <ContectChartBar
            name={"Total Lead status"}
            label={"Lead status"}
            color={"#FEB2B2"}
            labels={LeadstatusData[1]}
            dataNum={LeadstatusData[0]}
          />
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Dashboard;
