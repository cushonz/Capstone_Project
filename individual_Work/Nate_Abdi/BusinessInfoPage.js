import React from "react";
import styled from "styled-components";
export const BusinessInfoPage = ({}) => {
  const EllipseFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <BusinessInfoPageRoot>
      <PageBackground>
        <SidebarBackground>
          <ScheduleBackground>
            <ScheduleIcon
              src={"https://file.rendit.io/n/mpBXibZ02uFCu6nVwQhk.svg"}
            />
            <Text1>Schedule</Text1>
          </ScheduleBackground>
          <EmployeesBackground>
            <EmployeesIcon
              src={"https://file.rendit.io/n/S0yxXys9KBUjNZ5vR73i.svg"}
            />
            <Text2>Employees</Text2>
          </EmployeesBackground>
          <WhiteFlexRow>
            <FreshProduceIcon
              src={"https://file.rendit.io/n/WBYQfLUGUZF5Q7qucwiU.png"}
            />
            <Text2>Fresh Produce</Text2>
          </WhiteFlexRow>
          <BusinessInfo1 />
          <SettingsBackground>
            <SettingsIcon
              src={"https://file.rendit.io/n/GepRevAyidxj7bDXPpGF.svg"}
            />
            <Text4>Settings</Text4>
          </SettingsBackground>
        </SidebarBackground>
        <FlexColumn>
          <WhiteText>Business Information</WhiteText>
          <WeeklyRoleView>
            <DateTiles>
              <MonClosed>
                Mon
                <br />
                Closed
              </MonClosed>
              <TuePMPM>
                Tue
                <br />
                4PM-9PM
              </TuePMPM>
              <WedPMPM>
                Wed
                <br />
                12PM-9PM
              </WedPMPM>
              <ThurPMPM>
                Thur
                <br />
                12PM-9PM
              </ThurPMPM>
              <FriAMPM>
                Fri
                <br />
                11AM-9PM
              </FriAMPM>
              <FriAMPM>
                Sat
                <br />
                11AM-9PM
              </FriAMPM>
              <SunAMPM>
                Sun
                <br />
                11AM-7PM
              </SunAMPM>
            </DateTiles>
            <Role3 margin={"0px 0px 17px 0px"}>
              <Background33 padding={"0px 9px 0px 10px"}>
                <Text5 width={"129px"}>Managers</Text5>
              </Background33>
              <Background32 />
              <WhiteText1 width={"177px"}>1</WhiteText1>
              <WhiteText1 width={"178px"}>1</WhiteText1>
              <WhiteText1 width={"177px"}>1</WhiteText1>
              <WhiteText1 width={"177px"}>1</WhiteText1>
              <WhiteText1 width={"177px"}>1</WhiteText1>
              <WhiteText6>1</WhiteText6>
            </Role3>
            <Role3 margin={"0px 0px 17px 0px"}>
              <Background9>
                <Text5 width={"82px"}>Cooks</Text5>
              </Background9>
              <Background32 />
              <WhiteText1 width={"177px"}>1-2</WhiteText1>
              <WhiteText8>1-2</WhiteText8>
              <WhiteText1 width={"177px"}>1-2</WhiteText1>
              <WhiteText1 width={"177px"}>2-3</WhiteText1>
              <WhiteText1 width={"177px"}>2-3</WhiteText1>
              <WhiteText6>1-2</WhiteText6>
            </Role3>
            <Role3 margin={"0px 0px 17px 0px"}>
              <Background9>
                <Text5 width={"89px"}>Dishes</Text5>
              </Background9>
              <Background32 />
              <WhiteText1 width={"177px"}>1</WhiteText1>
              <WhiteText1 width={"178px"}>1</WhiteText1>
              <WhiteText1 width={"177px"}>1</WhiteText1>
              <WhiteText1 width={"177px"}>1</WhiteText1>
              <WhiteText1 width={"177px"}>1</WhiteText1>
              <WhiteText6>1</WhiteText6>
            </Role3>
            <Role3 margin={"0px 0px 17px 0px"}>
              <Background33 padding={"0px 24px 0px 25px"}>
                <Text5 width={"99px"}>Servers</Text5>
              </Background33>
              <Background32 />
              <WhiteText1 width={"177px"}>1-3</WhiteText1>
              <WhiteText1 width={"178px"}>1-4</WhiteText1>
              <WhiteText1 width={"177px"}>1-4</WhiteText1>
              <WhiteText1 width={"177px"}>2-4</WhiteText1>
              <WhiteText1 width={"177px"}>3-4</WhiteText1>
              <WhiteText6>2-3</WhiteText6>
            </Role3>
            <Role3 margin={"0"}>
              <Background33 padding={"0px 22px 0px 23px"}>
                <Text5 width={"103px"}>Bussers</Text5>
              </Background33>
              <Background32 />
              <WhiteText1 width={"177px"}>1</WhiteText1>
              <WhiteText1 width={"178px"}>1</WhiteText1>
              <WhiteText1 width={"177px"}>1</WhiteText1>
              <WhiteText1 width={"177px"}>1-2</WhiteText1>
              <WhiteText1 width={"177px"}>2</WhiteText1>
              <WhiteText6>1</WhiteText6>
            </Role3>
          </WeeklyRoleView>
          <Ellipse onClick={(e) => EllipseFunction(e, "Ellipse")}>
            <PlusMath
              src={"https://file.rendit.io/n/MrJlxDUSjco3VLiAfjCj.png"}
            />
          </Ellipse>
        </FlexColumn>
      </PageBackground>
    </BusinessInfoPageRoot>
  );
};
const BusinessInfoPageRoot = styled.div`
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
  background-image: url("https://file.rendit.io/n/HnGEu3tYoKlsamAandWf.svg");
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
  width: 1507px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: center;
  padding: 57px 0px;
`;
const WhiteText = styled.div`
  display: flex;
  font-size: 50px;
  font-family: Raleway;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.96);
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 482px;
  height: 167px;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  border-radius: 34px;
  padding: 0px 17px;
  margin: 0px 0px 158px 0px;
`;
const WeeklyRoleView = styled.div`
  height: 869px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 38px 0px;
`;
const DateTiles = styled.div`
  width: 1301px;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 15px 14px 0px;
`;
const MonClosed = styled.div`
  text-align: center;
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: #ffffff;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 148px;
  height: 66px;
  background-color: #000000;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  padding: 10px 0px 11px 0px;
  margin: 0px 44px 0px 0px;
`;
const TuePMPM = styled.div`
  text-align: center;
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: #ffffff;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 128px;
  height: 87px;
  background-color: #000000;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  padding: 0px 10px;
  margin: 0px 45px 0px 0px;
`;
const WedPMPM = styled.div`
  text-align: center;
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: #ffffff;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 139px;
  height: 87px;
  background-color: #000000;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  padding: 0px 4px 0px 5px;
  margin: 0px 44px 0px 0px;
`;
const ThurPMPM = styled.div`
  text-align: center;
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: #ffffff;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 139px;
  height: 66px;
  background-color: #000000;
  flex-direction: column;
  border-radius: 10px;
  padding: 9px 4px 12px 5px;
  margin: 0px 44px 0px 0px;
`;
const SunAMPM = styled.div`
  text-align: center;
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: #ffffff;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 136px;
  height: 66px;
  background-color: #000000;
  flex-direction: column;
  border-radius: 10px;
  padding: 9px 6px 12px 6px;
`;
const WhiteText8 = styled.div`
  display: flex;
  font-size: 36px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 49px;
  height: 42px;
  background-color: #ffffff;
  flex-direction: row;
  border-radius: 34px;
  padding: 49px 61px 49px 68px;
  margin: 0px 15px 0px 0px;
`;
const Ellipse = styled.button`
  background-image: url("https://file.rendit.io/n/3CB965i8HGflvFadpDuV.svg");
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
const Text2 = styled.div`
  font-size: 18px;
  font-family: Raleway;
  font-weight: 400;
`;
const FriAMPM = styled.div`
  text-align: center;
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  color: #ffffff;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 138px;
  height: 66px;
  background-color: #000000;
  flex-direction: column;
  border-radius: 10px;
  padding: 9px 5px 12px 5px;
  margin: 0px 44px 0px 0px;
`;
const Role3 = styled.div`
  width: 1507px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Background33 = styled.div`
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  height: 87px;
  background-color: #ff6868;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 0px 29px 0px 0px;
  padding: ${(props) => props.padding};
`;
const Text5 = styled.div`
  height: 32px;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  width: ${(props) => props.width};
`;
const Background32 = styled.div`
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 177px;
  height: 140px;
  background-color: #ffffff;
  border-radius: 34px;
  margin: 0px 15px 0px 0px;
`;
const WhiteText1 = styled.div`
  display: flex;
  font-size: 36px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  height: 42px;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: center;
  border-radius: 34px;
  padding: 49px 0px;
  margin: 0px 15px 0px 0px;
  width: ${(props) => props.width};
`;
const WhiteText6 = styled.div`
  display: flex;
  font-size: 36px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 177px;
  height: 42px;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: center;
  border-radius: 34px;
  padding: 49px 0px;
`;
const Background9 = styled.div`
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 148px;
  background-color: #ff6868;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 27px 0px 28px 0px;
  margin: 0px 29px 0px 0px;
`;
