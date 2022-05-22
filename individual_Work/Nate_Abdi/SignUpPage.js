import React from "react";
import styled from "styled-components";
export const SignUpPage = ({}) => {
  const MahoganyTextFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <SignUpPageRoot>
      <PageBackground>
        <SidebarBackground>
          <ScheduleBackground>
            <ScheduleIcon
              src={"https://file.rendit.io/n/lN8zNVsB5pKQs5TTnxSr.svg"}
            />
            <Text1>Schedule</Text1>
          </ScheduleBackground>
          <EmployeesBackground>
            <EmployeesIcon
              src={"https://file.rendit.io/n/Y6TQ0rvlPESJRzezgobB.svg"}
            />
            <Text2>Employees</Text2>
          </EmployeesBackground>
          <WhiteFlexRow>
            <FreshProduceIcon
              src={"https://file.rendit.io/n/wpdygVzQ0skdsrqoQ5dj.png"}
            />
            <Text2>Fresh Produce</Text2>
          </WhiteFlexRow>
          <BusinessInfo1 />
          <SettingsBackground>
            <SettingsIcon
              src={"https://file.rendit.io/n/2O6TEfWxEKjKn16wqVx2.svg"}
            />
            <Text4>Settings</Text4>
          </SettingsBackground>
        </SidebarBackground>
        <FlexColumn>
          <WhiteText>Sign Up</WhiteText>
          <SignUpPanels>
            <SunsetOrangeFlexColumn margin={"0px 0px 48px 0px"}>
              <Background1>
                <Text5 width={"103px"}>Email</Text5>
              </Background1>
            </SunsetOrangeFlexColumn>
            <SunsetOrangeFlexColumn margin={"0px 0px 48px 0px"}>
              <Background1>
                <Text5 width={"283px"}>Phone Number</Text5>
              </Background1>
            </SunsetOrangeFlexColumn>
            <SunsetOrangeFlexColumn margin={"0px 0px 48px 0px"}>
              <Background1>
                <Text5 width={"180px"}>Password</Text5>
              </Background1>
            </SunsetOrangeFlexColumn>
            <SunsetOrangeFlexColumn margin={"0px 0px 96px 0px"}>
              <Background1>
                <Text5 width={"336px"}>Confirm Password</Text5>
              </Background1>
            </SunsetOrangeFlexColumn>
            <MahoganyText
              onClick={(e) => MahoganyTextFunction(e, "MahoganyText")}
            >
              Sign Up
            </MahoganyText>
          </SignUpPanels>
        </FlexColumn>
      </PageBackground>
    </SignUpPageRoot>
  );
};
const SignUpPageRoot = styled.div`
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
  gap: 283px;
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
  width: 197px;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 26.87px;
  align-items: center;
  border-radius: 18px;
  padding: 21px 24px 17px 24px;
`;
const SettingsIcon = styled.img`
  width: 31.13px;
  height: 32px;
`;
const Text4 = styled.div`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
  color: #ffffff;
  align-self: flex-start;
  margin: 4px 0px 0px 0px;
`;
const FlexColumn = styled.div`
  width: 990px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 180px;
  flex-grow: 1;
  align-items: center;
  padding: 57px 0px;
`;
const WhiteText = styled.div`
  display: flex;
  font-size: 50px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 516px;
  height: 59px;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: center;
  border-radius: 34px;
  padding: 54px 0px;
`;
const SignUpPanels = styled.div`
  height: 825px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MahoganyText = styled.button`
  display: flex;
  font-size: 45px;
  font-family: Raleway;
  font-weight: 400;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 526px;
  height: 53px;
  background-color: #c12026;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  padding: 32px 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Text2 = styled.div`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
`;
const SunsetOrangeFlexColumn = styled.div`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  height: 117px;
  background-color: #ff6868;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0px 12px;
  margin: ${(props) => props.margin};
`;
const Background1 = styled.div`
  box-shadow: 0px 16px 31px 0px rgba(0, 0, 0, 0.01);
  width: 930px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 34px;
  padding: 18px 18px 17px 18px;
`;
const Text5 = styled.div`
  height: 55px;
  font-size: 40px;
  font-family: Raleway;
  font-weight: 400;
  width: ${(props) => props.width};
`;
