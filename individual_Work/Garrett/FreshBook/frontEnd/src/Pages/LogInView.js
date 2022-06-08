//  Written by Garrett Marshall

import React from "react";
import styled from "styled-components";

export const LoginInView1 = ({}) => {
  const MahoganyFlexRowFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  
  return (
    <LoginInViewRoot>
      <PageBackground>
        <SidebarBackground>
          <ScheduleBackground>
            <ScheduleIcon
              src={"https://file.rendit.io/n/OXgiadnZPbdKbCIz4wIf.svg"}
            />
            <Text1>Schedule</Text1>
          </ScheduleBackground>
          <EmployeesBackground>
            <EmployeesIcon
              src={"https://file.rendit.io/n/uHl2bGxHjL4lWJBKLdRi.svg"}
            />
            <Text2>Employees</Text2>
          </EmployeesBackground>
          <WhiteFlexRow>
            <FreshProduceIcon
              src={"https://file.rendit.io/n/3kvZTZUNN859T2GeEfaD.png"}
            />
            <Text2>Fresh Produce</Text2>
          </WhiteFlexRow>
          <BusinessInfo1>
            <FlexRow>
              <BusinessInfoIcon
                src={"https://file.rendit.io/n/ap6RXqSifSWcRec4Fu1P.svg"}
              />
              <Text4 color={"#000000"}>Business Info</Text4>
            </FlexRow>
          </BusinessInfo1>
          <SettingsBackground>
            <SettingsIcon
              src={"https://file.rendit.io/n/n2njEm7ZlrX3ik0jr0TQ.svg"}
            />
            <Text4 color={"#ffffff"}>Settings</Text4>
          </SettingsBackground>
        </SidebarBackground>
        <FlexColumn>
          <Name1 src={"https://file.rendit.io/n/OjzQnjz8UbTS3wInKHgg.png"} />
          <Key src={"https://file.rendit.io/n/ROYzUOk9daSFUdOBMTDk.png"} />
        </FlexColumn>
        <FlexColumn1>
          <Background>
            <Text6 placeholder={"Login"} />
            <Text7>Sign in with your account </Text7>
          </Background>
          <SunsetOrangeFlexColumn margin={"0px 0px 43px 0px"}>
            <Background1>
              <Text8 width={"103px"}>Email</Text8>
            </Background1>
          </SunsetOrangeFlexColumn>
          <SunsetOrangeFlexColumn margin={"0px 0px 72px 0px"}>
            <Background1>
              <Text8 width={"180px"}>Password</Text8>
            </Background1>
          </SunsetOrangeFlexColumn>
          <MahoganyFlexRow
            onClick={(e) => MahoganyFlexRowFunction(e, "MahoganyFlexRow")}
          >
            <Login1 placeholder={"Login\n"} />
          </MahoganyFlexRow>
          <Paragraph>I forgot my password. Click here to reset</Paragraph>
          <SunglowFlexRow>
            <Text8 width={"410px"}>Register New Account </Text8>
          </SunglowFlexRow>
        </FlexColumn1>
      </PageBackground>
    </LoginInViewRoot>
  );
};
const LoginInViewRoot = styled.div`
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
  padding: 0px 4px;
`;
const SidebarBackground = styled.div`
  height: 1376px;
  background-color: #ffffff;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 2px;
  padding: 202px 40px 202px 60px;
  margin: 0px 230px 0px 0px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 20px 0px;
`;
const FlexRow = styled.div`
  width: 201px;
  background-image: url("https://file.rendit.io/n/KRceFvgdm7dTIDfX3ABI.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
  padding: 21px 22px 17px 22px;
`;
const BusinessInfoIcon = styled.img`
  width: 36px;
  height: 32px;
`;
const SettingsBackground = styled.div`
  width: 196.12px;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 26.46px;
  align-items: center;
  border-radius: 18px;
  padding: 21px 24.44px 17px 24.44px;
`;
const SettingsIcon = styled.img`
  width: 31.1px;
  height: 32px;
`;
const FlexColumn = styled.div`
  width: 54px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 104px;
  flex-grow: 1;
  align-items: center;
  padding: 453px 0px;
  margin: 0px 17px 0px 0px;
`;
const Name1 = styled.img`
  width: 45px;
  height: 40px;
  align-self: flex-start;
`;
const Key = styled.img`
  width: 54px;
  height: 72px;
`;
const FlexColumn1 = styled.div`
  width: 990px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: center;
  padding: 57px 0px;
`;
const Background = styled.div`
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  height: 129px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
  border-radius: 34px;
  padding: 19px 15px;
  margin: 0px 0px 191px 0px;
`;
const Text6 = styled.input`
  width: 130px;
  font-size: 50px;
  font-family: Raleway;
  font-weight: 400;
  padding: 0px;
  border-width: 0px;
  background: none;
  :: placeholder {
    color: undefined;
  }
  display: inline-block;
  outline-width: 0px;
`;
const Text7 = styled.div`
  width: 521px;
  font-size: 45px;
  font-family: Raleway;
  font-weight: 400;
  white-space: pre-wrap;
`;
const MahoganyFlexRow = styled.button`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 526px;
  background-color: #c12026;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 36px 0px 37px 0px;
  margin: 0px 0px 66px 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Login1 = styled.input`
  width: 117px;
  height: 44px;
  font-size: 45px;
  font-family: Raleway;
  font-weight: 400;
  padding: 0px;
  border-width: 0px;
  background: none;
  :: placeholder {
    color: undefined;
  }
  display: inline-block;
  outline-width: 0px;
`;
const Paragraph = styled.div`
  width: 743px;
  height: 55px;
  font-size: 40px;
  font-family: Raleway;
  font-weight: 400;
  margin: 0px 0px 66px 0px;
`;
const SunglowFlexRow = styled.div`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 990px;
  background-color: #fabb18;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 31px 0px;
`;
const Text2 = styled.div`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
`;
const Text4 = styled.div`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
  align-self: flex-start;
  margin: 4px 0px 0px 0px;
  color: ${(props) => props.color};
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
const Text8 = styled.div`
  height: 55px;
  font-size: 40px;
  font-family: Raleway;
  font-weight: 400;
  width: ${(props) => props.width};
`;
