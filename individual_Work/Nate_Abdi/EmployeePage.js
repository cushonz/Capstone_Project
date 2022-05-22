import React from "react";
import styled from "styled-components";
export const EmployeePage = ({}) => {
  const EllipseFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <EmployeePageRoot>
      <PageBackground>
        <SidebarBackground>
          <ScheduleBackground>
            <ScheduleIcon
              src={"https://file.rendit.io/n/P2DuTBqyEEOaCDpTZxbH.svg"}
            />
            <Text1>Schedule</Text1>
          </ScheduleBackground>
          <EmployeesBackground>
            <EmployeesIcon
              src={"https://file.rendit.io/n/UXgI08gFsuYxKNjoSure.svg"}
            />
            <Text2>Employees</Text2>
          </EmployeesBackground>
          <WhiteFlexRow>
            <FreshProduceIcon
              src={"https://file.rendit.io/n/ZwqTOyMlg7qPRAz6NsA5.png"}
            />
            <Text3>Fresh Produce</Text3>
          </WhiteFlexRow>
          <BusinessInfo1 />
          <SettingsBackground>
            <SettingsIcon
              src={"https://file.rendit.io/n/74PrDEUPIItx7cSjmLbU.svg"}
            />
            <Text4>Settings</Text4>
          </SettingsBackground>
        </SidebarBackground>
        <FlexColumn>
          <Background>
            <Employees>
              Employees
              <br />
            </Employees>
          </Background>
          <Background1>
            <Text5 placeholder={"Search Employees..."} />
            <Image1 src={"https://file.rendit.io/n/zMToVY4NIsfWnjacl1j0.svg"} />
          </Background1>
          <EmployeePanels>
            <Element3>
              <FlexColumn1>
                <FlexRow>
                  <Text6>Nate</Text6>
                  <Text7>Edit Employee</Text7>
                  <EmployeesIcon
                    src={"https://file.rendit.io/n/eVIIzirFlaPEAyJIcTN6.svg"}
                  />
                </FlexRow>
                <FlexRow1>
                  <Text8>Contact info:</Text8>
                  <Text9>123-456-7890</Text9>
                </FlexRow1>
                <FlexRow2>
                  <Text10>Roles:</Text10>
                  <Text11 width={"210px"}>Server, Busser</Text11>
                </FlexRow2>
                <FlexRow3>
                  <Text12>Weekly Scheduled Hours:</Text12>
                  <Text13>36</Text13>
                </FlexRow3>
                <FlexRow4>
                  <Text11 width={"165px"}>Availability:</Text11>
                  <Background2>
                    <M margin={"0px 17px 0px 0px"}>M{"  "}</M>
                    <Text15>TU</Text15>
                    <M margin={"0px 14px 0px 0px"}>W</M>
                    <M margin={"0px 14px 0px 0px"}>TH</M>
                    <M margin={"0px 16px 0px 0px"}>F</M>
                    <Text19 margin={"0px 13px 0px 0px"}>SA</Text19>
                    <Text19 margin={"0"}>SU</Text19>
                  </Background2>
                </FlexRow4>
                <FlexRow5>
                  <Text21>Proficiency Score:</Text21>
                  <Element4>
                    <StarBorder
                      src={"https://file.rendit.io/n/mAFcWzbEITYEhSgZAZwf.svg"}
                    />
                    <Star
                      src={"https://file.rendit.io/n/Z6V5rXcpgE0OtkFmvLYj.svg"}
                    />
                    <Star1
                      src={"https://file.rendit.io/n/Z6V5rXcpgE0OtkFmvLYj.svg"}
                    />
                    <Star2
                      src={"https://file.rendit.io/n/Z6V5rXcpgE0OtkFmvLYj.svg"}
                    />
                    <StarHalf
                      src={"https://file.rendit.io/n/euCZHwkkeNdxk1nd6EEE.svg"}
                    />
                  </Element4>
                </FlexRow5>
              </FlexColumn1>
              <EmployeePanel position={"absolute"}>
                <SunsetOrangeFlexRow padding={"8px 0px 28px 0px"}>
                  <Text22 width={"86px"}>Abdi</Text22>
                </SunsetOrangeFlexRow>
              </EmployeePanel>
            </Element3>
            <EmployeePanel position={"relative"}>
              <SunsetOrangeFlexRow padding={"9px 0px 27px 0px"}>
                <Text22 width={"116px"}>Garett</Text22>
              </SunsetOrangeFlexRow>
            </EmployeePanel>
            <EmployeePanel position={"relative"}>
              <SunsetOrangeFlexRow padding={"10px 0px 26px 0px"}>
                <Text22 width={"112px"}>Adam</Text22>
              </SunsetOrangeFlexRow>
            </EmployeePanel>
            <EmployeePanel position={"relative"}>
              <SunsetOrangeFlexRow padding={"10px 0px 26px 0px"}>
                <Text22 width={"114px"}>Manni</Text22>
              </SunsetOrangeFlexRow>
            </EmployeePanel>
            <EmployeePanel position={"relative"}>
              <SunsetOrangeFlexRow padding={"7px 0px 29px 0px"}>
                <Text22 width={"95px"}>Zach</Text22>
              </SunsetOrangeFlexRow>
            </EmployeePanel>
          </EmployeePanels>
          <Ellipse onClick={(e) => EllipseFunction(e, "Ellipse")}>
            <PlusMath
              src={"https://file.rendit.io/n/ITAS6dAdolbTtIpwIAtb.png"}
            />
          </Ellipse>
        </FlexColumn>
      </PageBackground>
    </EmployeePageRoot>
  );
};
const EmployeePageRoot = styled.div`
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
  background-color: #f8f8f8;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 231px;
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
  background-color: #ffffff;
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
  align-self: flex-end;
  margin: 0px 0px 3px 0px;
`;
const EmployeesBackground = styled.div`
  width: 195px;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 26px;
  align-items: center;
  border-radius: 18px;
  padding: 25px 25px 24px 25px;
  margin: 0px 0px 10px 0px;
`;
const Text2 = styled.div`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
  color: #ffffff;
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
const Text3 = styled.div`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
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
  width: 1097px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: center;
  padding: 57px 0px;
`;
const Background = styled.div`
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 516px;
  height: 61.8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  padding: 53.44px 0px 51.76px 0px;
  margin: 0px 0px 66px 0px;
`;
const Employees = styled.div`
  width: 259px;
  height: 61.8px;
  font-size: 50px;
  font-family: Raleway;
  font-weight: 400;
`;
const Background1 = styled.div`
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 847px;
  align-items: center;
  border-radius: 34px;
  padding: 6px 17px 5px 20px;
  margin: 0px 0px 63px 0px;
`;
const Text5 = styled.input`
  font-size: 20px;
  font-family: Raleway;
  font-weight: 400;
  padding: 0px;
  border-width: 0px;
  background: none;
  width: 100%;
  :: placeholder {
    color: undefined;
  }
  display: inline-block;
  outline-width: 0px;
`;
const Image1 = styled.img`
  width: 29px;
  height: 29px;
`;
const EmployeePanels = styled.div`
  height: 937px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 31px;
  align-items: center;
  margin: 0px 0px 23px 0px;
`;
const Element3 = styled.div`
  height: 68px;
  position: relative;
  min-width: 934px;
`;
const FlexColumn1 = styled.div`
  height: 418px;
  background-image: url("https://file.rendit.io/n/2wHp519StVgtqkBSm8nE.svg");
  background-size: cover;
  position: absolute;
  top: -485px;
  left: -13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25px 31px 25px 86px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 0px 27px 0px;
`;
const Text6 = styled.div`
  width: 94px;
  height: 54px;
  font-size: 40px;
  font-family: Raleway;
  font-weight: 400;
  margin: 0px 173px 0px 0px;
`;
const Text7 = styled.div`
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  align-self: flex-end;
  margin: 0px 11px 10px 0px;
`;
const FlexRow1 = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: flex-start;
  padding: 0px 230px 0px 201px;
  margin: 0px 0px 19px 0px;
`;
const Text8 = styled.div`
  width: 185px;
  height: 32px;
  font-size: 32px;
  font-family: Raleway;
  font-weight: 400;
  align-self: flex-end;
`;
const Text9 = styled.div`
  width: 203px;
  height: 33px;
  font-size: 32px;
  font-family: Raleway;
  font-weight: 400;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  padding: 0px 223px 0px 296px;
  margin: 0px 0px 13px 0px;
`;
const Text10 = styled.div`
  width: 90px;
  height: 32px;
  font-size: 32px;
  font-family: Raleway;
  font-weight: 400;
  align-self: flex-start;
`;
const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
  margin: 0px 0px 15px 0px;
`;
const Text12 = styled.div`
  width: 386px;
  height: 32px;
  font-size: 32px;
  font-family: Raleway;
  font-weight: 400;
`;
const Text13 = styled.div`
  font-size: 32px;
  font-family: Raleway;
  font-weight: 400;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 24px;
  align-items: center;
  padding: 0px 89px;
  margin: 0px 0px 12px 0px;
`;
const Background2 = styled.div`
  box-shadow: 0px 16px 31px 0px rgba(0, 0, 0, 0.01);
  width: 312px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 34px;
  padding: 1px 15px 3px 17px;
`;
const Text15 = styled.div`
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: #ffc805;
  margin: 0px 14px 0px 0px;
`;
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
  padding: 0px 125px;
`;
const Text21 = styled.div`
  width: 261px;
  height: 38px;
  font-size: 32px;
  font-family: Raleway;
  font-weight: 400;
`;
const Element4 = styled.div`
  width: 234px;
  height: 50px;
  position: relative;
  flex-grow: 1;
`;
const StarBorder = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 184px;
`;
const Star = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
`;
const Star1 = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 46px;
`;
const Star2 = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 92px;
`;
const StarHalf = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 138px;
`;
const Ellipse = styled.button`
  background-image: url("https://file.rendit.io/n/ZXaUlZ9yDOPDZZVUDHyM.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 24px 30px 24px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
  background-color: transparent;
`;
const PlusMath = styled.img`
  width: 79px;
  height: 71px;
`;
const EmployeesIcon = styled.img`
  width: 31px;
  height: 31px;
`;
const Text11 = styled.div`
  height: 35px;
  font-size: 32px;
  font-family: Raleway;
  font-weight: 400;
  width: ${(props) => props.width};
`;
const M = styled.div`
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: #35b906;
  white-space: pre-wrap;
  margin: ${(props) => props.margin};
`;
const Text19 = styled.div`
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: #ff0000;
  margin: ${(props) => props.margin};
`;
const EmployeePanel = styled.div`
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: ${(props) => props.position};
`;
const SunsetOrangeFlexRow = styled.div`
  border-width: 1px;
  border-style: solid;
  width: 934px;
  background-color: #ff6868;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: ${(props) => props.padding};
`;
const Text22 = styled.div`
  height: 32px;
  font-size: 40px;
  font-family: Raleway;
  font-weight: 400;
  width: ${(props) => props.width};
`;
