import React from "react";
import styled from "styled-components";
export const SettingsPage = ({}) => {
  return (
    <SettingsPageRoot>
      <PageBackground>
        <SidebarBackground>
          <ScheduleBackground>
            <ScheduleIcon
              src={"https://file.rendit.io/n/z12vx9aEXdjVShzOaSCR.svg"}
            />
            <Text1>Schedule</Text1>
          </ScheduleBackground>
          <EmployeesBackground>
            <EmployeesIcon
              src={"https://file.rendit.io/n/RSuuyKJlRYBVNJNv6uAL.svg"}
            />
            <Text2>Employees</Text2>
          </EmployeesBackground>
          <WhiteFlexRow>
            <FreshProduceIcon
              src={"https://file.rendit.io/n/H5PZjrXqfOOxEy8bJoyJ.png"}
            />
            <Text2>Fresh Produce</Text2>
          </WhiteFlexRow>
          <BusinessInfo1 />
          <SettingsBackground>
            <SettingsIcon
              src={"https://file.rendit.io/n/MST9BkKL7lj0FJXg6B5S.svg"}
            />
            <Text4>Settings</Text4>
          </SettingsBackground>
        </SidebarBackground>
        <FlexColumn>
          <WhiteText>Settings</WhiteText>
          <SettingsPanels>
            <SunsetOrangeFlexRow>
              <Text5 placeholder={"email: testemail@test.com"} />
              <Text6>change email</Text6>
              <Image1
                src={"https://file.rendit.io/n/wvvpuij3yD0roh295CWZ.svg"}
              />
            </SunsetOrangeFlexRow>
            <SunsetOrangeFlexRow1>
              <FlexColumn1>
                <Text7>change phone number</Text7>
                <Text8 width={"554px"}>Phone Number: 123-456-7890</Text8>
              </FlexColumn1>
              <Image1
                src={"https://file.rendit.io/n/wvvpuij3yD0roh295CWZ.svg"}
              />
            </SunsetOrangeFlexRow1>
            <SunsetOrangeFlexRow2>
              <Text8 width={"333px"}>Change Password</Text8>
            </SunsetOrangeFlexRow2>
            <SunsetOrangeFlexRow2>
              <Text8 width={"146px"}>Log out</Text8>
            </SunsetOrangeFlexRow2>
          </SettingsPanels>
        </FlexColumn>
      </PageBackground>
    </SettingsPageRoot>
  );
};
const SettingsPageRoot = styled.div`
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
  gap: 284px;
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
  width: 196.12px;
  background-color: #000000;
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
const SettingsPanels = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
  justify-content: space-between;
  align-items: center;
`;
const SunsetOrangeFlexRow = styled.div`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 974px;
  height: 80px;
  background-color: #ff6868;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 10px;
  padding: 6px 8px 31px 8px;
`;
const Text5 = styled.input`
  width: 483px;
  height: 55px;
  font-size: 40px;
  font-family: Raleway;
  font-weight: 400;
  align-self: flex-end;
  margin: 0px 94px 0px 0px;
  padding: 0px;
  border-width: 0px;
  background: none;
  :: placeholder {
    color: undefined;
  }
  display: inline-block;
  outline-width: 0px;
`;
const Text6 = styled.div`
  font-size: 20px;
  font-family: Raleway;
  font-weight: 400;
  margin: 0px 5px 0px 0px;
`;
const SunsetOrangeFlexRow1 = styled.div`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 982px;
  background-color: #ff6868;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 9px;
  align-items: flex-start;
  border-radius: 10px;
  padding: 7px 4px 31px 4px;
`;
const FlexColumn1 = styled.div`
  align-self: stretch;
  width: 738px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  justify-content: center;
  flex-grow: 1;
  align-items: flex-start;
`;
const Text7 = styled.div`
  font-size: 20px;
  font-family: Raleway;
  font-weight: 400;
  align-self: flex-end;
`;
const Text2 = styled.div`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
`;
const Image1 = styled.img`
  width: 21px;
  height: 21px;
  margin: 1px 0px 0px 0px;
`;
const Text8 = styled.div`
  height: 55px;
  font-size: 40px;
  font-family: Raleway;
  font-weight: 400;
  width: ${(props) => props.width};
`;
const SunsetOrangeFlexRow2 = styled.div`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 990px;
  background-color: #ff6868;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 31px 0px;
`;
