import React from "react";
import styled from "styled-components";
export const DailySchedulePage = ({}) => {
  return (
    <DailySchedulePageRoot>
      <PageBackground>
        <SidebarBackground>
          <ScheduleBackground>
            <ScheduleIcon
              src={"https://file.rendit.io/n/qrgnpuYM5Giv1slE32H2.svg"}
            />
            <Text1>Schedule</Text1>
          </ScheduleBackground>
          <EmployeesBackground>
            <EmployeesIcon
              src={"https://file.rendit.io/n/AdaFuzKl43XYqgLTvHws.svg"}
            />
            <Text2>Employees</Text2>
          </EmployeesBackground>
          <WhiteFlexRow>
            <FreshProduceIcon
              src={"https://file.rendit.io/n/N0lHTqiemhHoovhjzRrb.png"}
            />
            <Text2>Fresh Produce</Text2>
          </WhiteFlexRow>
          <BusinessInfo1 />
          <SettingsBackground>
            <SettingsIcon
              src={"https://file.rendit.io/n/RXYMWA8kcGNqpqef123c.svg"}
            />
            <Text4>Settings</Text4>
          </SettingsBackground>
        </SidebarBackground>
        <FlexColumn>
          <Background>
            <Text5>Today’s Schedule</Text5>
            <Element1>
              <Friday>Friday - 4/18{"  "}</Friday>
              <ArrowLeft
                src={"https://file.rendit.io/n/oC4fCT5mzzCiOaNwebs1.svg"}
              />
              <ArrowRight
                src={"https://file.rendit.io/n/IbFvQJQom7Sgb7sElchw.svg"}
              />
            </Element1>
          </Background>
          <WeekDaySelector>
            <WhiteText backgroundColor={"#ffe8e8"}>Week</WhiteText>
            <WhiteText backgroundColor={"#ffffff"}>Day</WhiteText>
          </WeekDaySelector>
          <DailyCalendar>
            <TimeTiles>
              <BlackText>10 AM</BlackText>
              <BlackText1>11 AM</BlackText1>
              <BlackText2>12 PM</BlackText2>
              <BlackText3>1 PM</BlackText3>
              <BlackText4>2 PM</BlackText4>
              <BlackText5>3 PM</BlackText5>
            </TimeTiles>
            <EmployeeBar>
              <SunsetOrangeFlexRow position={"relative"}>
                <Text6 width={"63px"}>Nate</Text6>
              </SunsetOrangeFlexRow>
              <WhiteFlexRow1>
                <MahoganyRectangle width={"945px"} />
              </WhiteFlexRow1>
            </EmployeeBar>
            <EmployeeBar>
              <SunsetOrangeFlexRow position={"relative"}>
                <Text6 width={"61px"}>Abdi</Text6>
              </SunsetOrangeFlexRow>
              <WhiteFlexRow2>
                <MahoganyRectangle width={"870px"} />
              </WhiteFlexRow2>
            </EmployeeBar>
            <EmployeeBar2>
              <ScheduleBar2
                src={"https://file.rendit.io/n/2NMWp70ijwJps5kDQsPL.svg"}
              />
              <SunsetOrangeFlexRow position={"absolute"}>
                <Text6 width={"91px"}>Garrett</Text6>
              </SunsetOrangeFlexRow>
            </EmployeeBar2>
            <EmployeeBar3>
              <SunsetOrangeFlexRow position={"relative"}>
                <Text6 width={"77px"}>Adam</Text6>
              </SunsetOrangeFlexRow>
              <WhiteFlexRow3>
                <MahoganyRectangle width={"1112px"} />
              </WhiteFlexRow3>
            </EmployeeBar3>
            <EmployeeBar>
              <SunsetOrangeFlexRow position={"relative"}>
                <Text6 width={"79px"}>Manni</Text6>
              </SunsetOrangeFlexRow>
              <WhiteFlexRow4>
                <MahoganyRectangle width={"1112px"} />
              </WhiteFlexRow4>
            </EmployeeBar>
            <EmployeeBar5>
              <SunsetOrangeFlexRow position={"relative"}>
                <Text6 width={"65px"}>Zach</Text6>
              </SunsetOrangeFlexRow>
              <WhiteFlexRow5>
                <MahoganyRectangle width={"1112px"} />
              </WhiteFlexRow5>
            </EmployeeBar5>
          </DailyCalendar>
        </FlexColumn>
      </PageBackground>
    </DailySchedulePageRoot>
  );
};
const DailySchedulePageRoot = styled.div`
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  min-width: 1920px;
  align-items: center;
`;
const PageBackground = styled.div`
  width: 1912px;
  background-image: url("https://file.rendit.io/n/BJqduGPb1Pkzx6sFoArE.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 26px;
  align-items: center;
  padding: 0px 4px;
`;
const SidebarBackground = styled.div`
  height: 1376px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  padding: 202px 40px 202px 60px;
`;
const ScheduleBackground = styled.div`
  width: 191px;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 29px;
  align-items: center;
  border-radius: 18px;
  padding: 21px 27px;
  margin: 0px 0px 15px 0px;
`;
const ScheduleIcon = styled.img`
  width: 26px;
  height: 28px;
`;
const Text1 = styled.div`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
  color: #ffffff;
  align-self: flex-end;
  margin: 0px 0px 3px 0px;
`;
const EmployeesBackground = styled.div`
  width: 195px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 26px;
  align-items: center;
  border-radius: 18px;
  padding: 25px 25px 24px 25px;
  margin: 0px 0px 10px 0px;
`;
const EmployeesIcon = styled.img`
  width: 31px;
  height: 31px;
`;
const WhiteFlexRow = styled.div`
  width: 209px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  border-radius: 18px;
  padding: 13px 18px;
  margin: 0px 0px 20px 0px;
`;
const FreshProduceIcon = styled.img`
  width: 44px;
  height: 44px;
`;
const BusinessInfo1 = styled.div`
  box-shadow: 0px 16px 31px 0px rgba(0, 0, 0, 0.01);
  width: 245px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 20px 0px;
`;
const SettingsBackground = styled.div`
  width: 196.12px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 26.43px;
  align-items: center;
  border-radius: 18px;
  padding: 21px 24.44px 17px 24.44px;
`;
const SettingsIcon = styled.img`
  width: 31.13px;
  height: 32px;
`;
const Text4 = styled.div`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
  align-self: flex-start;
  margin: 4px 0px 0px 0px;
`;
const FlexColumn = styled.div`
  width: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 35px;
  flex-grow: 1;
  align-items: center;
  padding: 57px 0px;
`;
const Background = styled.div`
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  height: 125px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5px;
  align-items: center;
  border-radius: 34px;
  padding: 21px 113px 21px 114px;
`;
const Text5 = styled.div`
  font-size: 36px;
  font-family: Raleway;
  font-weight: 400;
`;
const Element1 = styled.div`
  height: 58px;
  position: relative;
  min-width: 289px;
  align-items: center;
`;
const Friday = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  width: 264px;
  height: 33px;
  background-image: url("https://file.rendit.io/n/X8z8P9au0R0awEfmW1uW.svg");
  background-size: cover;
  position: absolute;
  top: 5px;
  left: 12px;
  flex-direction: row;
  justify-content: center;
  padding: 8px 0px;
  white-space: pre-wrap;
`;
const ArrowLeft = styled.img`
  width: 54px;
  height: 58px;
  position: absolute;
  left: 8px;
`;
const ArrowRight = styled.img`
  width: 50px;
  height: 58px;
  position: absolute;
  left: 227px;
`;
const WeekDaySelector = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin: 0px 43px 0px 0px;
`;
const DailyCalendar = styled.div`
  height: 817px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TimeTiles = styled.div`
  width: 1101px;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 138px 43px 0px;
`;
const BlackText = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.96);
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 79px;
  height: 33px;
  background-color: #000000;
  flex-direction: row;
  border-radius: 10px;
  padding: 6px 34px 7px 38px;
  margin: 0px 42px 0px 0px;
`;
const BlackText1 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.96);
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 74px;
  height: 33px;
  background-color: #000000;
  flex-direction: row;
  border-radius: 10px;
  padding: 6px 35px 7px 42px;
  margin: 0px 35px 0px 0px;
`;
const BlackText2 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.96);
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 76px;
  height: 33px;
  background-color: #000000;
  flex-direction: row;
  border-radius: 10px;
  padding: 6px 34px 7px 41px;
  margin: 0px 34px 0px 0px;
`;
const BlackText3 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.96);
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 62px;
  height: 33px;
  background-color: #000000;
  flex-direction: row;
  border-radius: 10px;
  padding: 6px 41px 7px 48px;
  margin: 0px 32px 0px 0px;
`;
const BlackText4 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.96);
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 151px;
  height: 33px;
  background-color: #000000;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  padding: 6px 0px 7px 0px;
  margin: 0px 52px 0px 0px;
`;
const BlackText5 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.96);
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 65px;
  height: 33px;
  background-color: #000000;
  flex-direction: row;
  border-radius: 10px;
  padding: 6px 40px 7px 46px;
`;
const WhiteFlexRow1 = styled.div`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 1094px;
  background-color: #ffffff;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 14px 100px 15px 100px;
  margin: 0px 0px 9px 0px;
`;
const WhiteFlexRow2 = styled.div`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 964px;
  background-color: #ffffff;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
  padding: 14px 165px 15px 165px;
  margin: 0px 0px 10px 0px;
`;
const EmployeeBar2 = styled.div`
  width: 1492px;
  height: 68px;
  align-self: flex-start;
  position: relative;
  margin: 0px 0px 64px 0px;
`;
const ScheduleBar2 = styled.img`
  width: 1320px;
  height: 73px;
  position: absolute;
  top: -9px;
  left: 185px;
`;
const EmployeeBar3 = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 64px 0px;
`;
const WhiteFlexRow3 = styled.div`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 1268px;
  background-color: #ffffff;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 14px 13px 15px 13px;
  margin: 0px 0px 10px 0px;
`;
const WhiteFlexRow4 = styled.div`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 1286px;
  background-color: #ffffff;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
  padding: 14px 4px 15px 4px;
  margin: 9px 0px 0px 0px;
`;
const EmployeeBar5 = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
const WhiteFlexRow5 = styled.div`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 1256px;
  background-color: #ffffff;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 14px 19px 15px 19px;
  margin: 7px 0px 0px 0px;
`;
const Text2 = styled.div`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
`;
const WhiteText = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 234px;
  height: 33px;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  padding: 27px 0px 28px 0px;
  background-color: ${(props) => props.backgroundColor};
`;
const EmployeeBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 64px 0px;
`;
const SunsetOrangeFlexRow = styled.div`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 184px;
  background-color: #ff6868;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 18px 0px;
  position: ${(props) => props.position};
`;
const Text6 = styled.div`
  height: 32px;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  width: ${(props) => props.width};
`;
const MahoganyRectangle = styled.div`
  border-width: 1px;
  border-style: solid;
  height: 18px;
  background-color: #c12026;
  border-radius: 10px;
  width: ${(props) => props.width};
`;
