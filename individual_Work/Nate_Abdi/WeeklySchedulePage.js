import React from "react";
import styled from "styled-components";
export const WeeklySchedulePage = ({}) => {
  return (
    <WeeklySchedulePageRoot>
      <PageBackground>
        <SidebarBackground>
          <ScheduleBackground>
            <ScheduleIcon
              src={"https://file.rendit.io/n/RTBVAQGQ0kgfKIiV8O1U.svg"}
            />
            <Text1>Schedule</Text1>
          </ScheduleBackground>
          <EmployeesBackground>
            <EmployeesIcon
              src={"https://file.rendit.io/n/Qo4yJ7JLLCIGDG2w3NDr.svg"}
            />
            <Text2>Employees</Text2>
          </EmployeesBackground>
          <WhiteFlexRow>
            <FreshProduceIcon
              src={"https://file.rendit.io/n/cyrv9bfR0P14Y41MKpae.png"}
            />
            <Text2>Fresh Produce</Text2>
          </WhiteFlexRow>
          <BusinessInfo1 />
          <SettingsBackground>
            <SettingsIcon
              src={"https://file.rendit.io/n/ANrViON0OIm2INm9720Y.svg"}
            />
            <Text4>Settings</Text4>
          </SettingsBackground>
        </SidebarBackground>
        <FlexColumn>
          <Background55>
            <Text5>This Week’s Schedule</Text5>
            <Element18>
              <Element17>4/18 - 4/24 </Element17>
              <ArrowRight
                src={"https://file.rendit.io/n/FGzlUJaiNQz36kB4Pq80.svg"}
              />
              <ArrowLeft
                src={"https://file.rendit.io/n/NGMCeTKCHiw56Jv1fp06.svg"}
              />
            </Element18>
          </Background55>
          <WeekDaySelector>
            <WhiteText backgroundColor={"#ffe8e8"}>Week</WhiteText>
            <WhiteText backgroundColor={"#ffffff"}>Day</WhiteText>
          </WeekDaySelector>
          <WeeklyCalendar>
            <DateTiles>
              {[
                {
                  childText: "Mon\n4/18",
                  margin: "0px 44px 0px 0px",
                },
                {
                  childText: "Tue\n4/19",
                  margin: "0px 45px 0px 0px",
                },
                {
                  childText: "Wed\n4/20",
                  margin: "0px 44px 0px 0px",
                },
                {
                  childText: "Thur\n4/21",
                  margin: "0px 44px 0px 0px",
                },
                {
                  childText: "Fri\n4/22",
                  margin: "0px 44px 0px 0px",
                },
                {
                  childText: "Sat\n4/23",
                  margin: "0px 44px 0px 0px",
                },
                {
                  childText: "Sun\n4/24",
                  margin: "0",
                },
              ].map((data) => (
                <Mon margin={data.margin}>{data.childText}</Mon>
              ))}
            </DateTiles>
            <Employee5 margin={"0px 0px 17px 0px"}>
              <Background50 margin={"0px 37px 0px 0px"}>
                <Text6 width={"63px"}>Nate</Text6>
              </Background50>
              <Background47 margin={"0px 15px 0px 0px"} />
              <WhiteText2>10:00 - 3:00</WhiteText2>
              <WhiteText3>10:00 - 3:00</WhiteText3>
              <WhiteText4 padding={"0px 14px 0px 13px"}>
                10:00 - 3:00
              </WhiteText4>
              <WhiteText4 padding={"0px 12px 0px 15px"}>
                10:00 - 3:00
              </WhiteText4>
              <Background47 margin={"0px 15px 0px 0px"} />
              <Background47 margin={"0"} />
            </Employee5>
            <Employee5 margin={"0px 0px 17px 0px"}>
              <Background50 margin={"0px 29px 0px 0px"}>
                <Text6 width={"60px"}>Abdi</Text6>
              </Background50>
              <Background47 margin={"0px 15px 0px 0px"} />
              <WhiteText6 padding={"0px 9px 0px 20px"}>5:00- Close</WhiteText6>
              <Background32 />
              <WhiteText7 margin={"0px 15px 0px 0px"}>4:00- 8:00</WhiteText7>
              <WhiteText8 margin={"0px 15px 0px 0px"}>4:30- 8:30</WhiteText8>
              <WhiteText9 margin={"0px 15px 0px 0px"}>On Call</WhiteText9>
              <WhiteText8 margin={"0"}>4:30- 8:30</WhiteText8>
            </Employee5>
            <Employee5 margin={"0px 0px 17px 0px"}>
              <Background50 margin={"0px 29px 0px 0px"}>
                <Text6 width={"90px"}>Garrett</Text6>
              </Background50>
              <Background47 margin={"0px 15px 0px 0px"} />
              <Background47 margin={"0px 15px 0px 0px"} />
              <WhiteText6 padding={"0px 9px 0px 21px"}>5:00- Close</WhiteText6>
              <Background47 margin={"0px 15px 0px 0px"} />
              <WhiteText8 margin={"0px 15px 0px 0px"}>4:30- 8:30</WhiteText8>
              <WhiteText8 margin={"0px 15px 0px 0px"}>4:30- 8:30</WhiteText8>
              <WhiteText7 margin={"0"}>4:00- 8:00</WhiteText7>
            </Employee5>
            <Employee5 margin={"0px 0px 17px 0px"}>
              <Background50 margin={"0px 29px 0px 0px"}>
                <Text6 width={"77px"}>
                  Adam
                  <br />
                </Text6>
              </Background50>
              <Background47 margin={"0px 15px 0px 0px"} />
              <Background47 margin={"0px 15px 0px 0px"} />
              <WhiteText15>4:00- 8:00</WhiteText15>
              <WhiteText6 padding={"0px 9px 0px 20px"}>5:00- Close</WhiteText6>
              <WhiteText7 margin={"0px 15px 0px 0px"}>4:00- 8:00</WhiteText7>
              <WhiteText7 margin={"0px 15px 0px 0px"}>4:00- 8:00</WhiteText7>
              <WhiteText19>5:00- Close</WhiteText19>
            </Employee5>
            <Employee5 margin={"0px 0px 17px 0px"}>
              <Background50 margin={"0px 29px 0px 0px"}>
                <Text6 width={"79px"}>Manni</Text6>
              </Background50>
              <Background47 margin={"0px 15px 0px 0px"} />
              <WhiteText7 margin={"0px 15px 0px 0px"}>4:00- 8:00</WhiteText7>
              <Background32 />
              <Background47 margin={"0px 15px 0px 0px"} />
              <WhiteText6 padding={"0px 9px 0px 20px"}>5:00- Close</WhiteText6>
              <WhiteText8 margin={"0px 15px 0px 0px"}>4:30- 8:30</WhiteText8>
              <Background47 margin={"0"} />
            </Employee5>
            <Employee5 margin={"0"}>
              <Background50 margin={"0px 29px 0px 0px"}>
                <Text6 width={"65px"}>
                  Zach
                  <br />
                </Text6>
              </Background50>
              <Background47 margin={"0px 15px 0px 0px"} />
              <Background47 margin={"0px 15px 0px 0px"} />
              <Background32 />
              <WhiteText8 margin={"0px 15px 0px 0px"}>4:30- 8:30</WhiteText8>
              <Background47 margin={"0px 15px 0px 0px"} />
              <WhiteText6 padding={"0px 9px 0px 20px"}>5:00- Close</WhiteText6>
              <WhiteText9 margin={"0"}>On Call</WhiteText9>
            </Employee5>
          </WeeklyCalendar>
        </FlexColumn>
      </PageBackground>
    </WeeklySchedulePageRoot>
  );
};
const WeeklySchedulePageRoot = styled.div`
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
  background-image: url("https://file.rendit.io/n/VYuJ342F2aJ9KjLXiJta.svg");
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
  width: 1507px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 35px;
  flex-grow: 1;
  align-items: center;
  padding: 57px 0px;
`;
const Background55 = styled.div`
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  height: 115px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 34px;
  padding: 26px 72px 26px 83px;
`;
const Text5 = styled.div`
  font-size: 36px;
  font-family: Raleway;
  font-weight: 400;
`;
const Element18 = styled.div`
  height: 58px;
  position: relative;
  min-width: 361px;
  align-items: center;
`;
const Element17 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  width: 148px;
  height: 33px;
  background-color: #c12026;
  position: absolute;
  top: 4px;
  left: 43px;
  flex-direction: row;
  border-radius: 24px;
  padding: 7px 53px 9px 63px;
  white-space: pre-wrap;
`;
const ArrowRight = styled.img`
  width: 50px;
  height: 58px;
  position: absolute;
  left: 252px;
`;
const ArrowLeft = styled.img`
  width: 54px;
  height: 58px;
  position: absolute;
  left: 43px;
`;
const WeekDaySelector = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin: 0px 50px 0px 0px;
`;
const WeeklyCalendar = styled.div`
  height: 1026px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const WhiteText2 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 150px;
  height: 33px;
  background-color: #ffffff;
  flex-direction: column;
  border-radius: 34px;
  padding: 49px 14px 58px 13px;
  margin: 0px 7px 0px 0px;
`;
const WhiteText3 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 150px;
  height: 33px;
  background-color: #ffffff;
  flex-direction: column;
  border-radius: 34px;
  padding: 49px 14px 58px 14px;
  margin: 0px 15px 0px 0px;
`;
const WhiteText15 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 130px;
  height: 140px;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  border-radius: 34px;
  padding: 0px 24px;
  margin: 0px 15px 0px 0px;
`;
const WhiteText19 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 148px;
  height: 140px;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  border-radius: 34px;
  padding: 0px 9px 0px 20px;
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
const Mon = styled.div`
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
  padding: 9px 0px 12px 0px;
  margin: ${(props) => props.margin};
`;
const Employee5 = styled.div`
  width: 1507px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Background50 = styled.div`
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 148px;
  background-color: #ff6868;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 27px 0px 28px 0px;
  margin: ${(props) => props.margin};
`;
const Text6 = styled.div`
  height: 32px;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  width: ${(props) => props.width};
`;
const Background47 = styled.div`
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 177px;
  height: 140px;
  background-color: #ffffff;
  border-radius: 34px;
  margin: ${(props) => props.margin};
`;
const WhiteText4 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 150px;
  height: 140px;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  border-radius: 34px;
  margin: 0px 15px 0px 0px;
  padding: ${(props) => props.padding};
`;
const WhiteText6 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 148px;
  height: 140px;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  border-radius: 34px;
  margin: 0px 15px 0px 0px;
  padding: ${(props) => props.padding};
`;
const Background32 = styled.div`
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 178px;
  height: 140px;
  background-color: #ffffff;
  border-radius: 34px;
  margin: 0px 15px 0px 0px;
`;
const WhiteText7 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 130px;
  height: 140px;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  border-radius: 34px;
  padding: 0px 24px 0px 23px;
  margin: ${(props) => props.margin};
`;
const WhiteText8 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 126px;
  height: 140px;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  border-radius: 34px;
  padding: 0px 24px 0px 27px;
  margin: ${(props) => props.margin};
`;
const WhiteText9 = styled.div`
  display: flex;
  font-size: 28px;
  font-family: Raleway;
  font-weight: 400;
  box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.06);
  width: 95px;
  height: 140px;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  border-radius: 34px;
  padding: 0px 37px 0px 45px;
  margin: ${(props) => props.margin};
`;
