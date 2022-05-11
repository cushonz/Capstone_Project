#include <iostream>
#include <fstream>
#include <cmath>

int main (){
    
    std::ofstream file = std::ofstream("mockdata.csv");
    int average = 5;
    float monthMod[12] = {.4,.8,.7,.6,.5,
                          .5,.6,.5,.6,.7,
                           1,.9};
    float monthDays[12] = {31,28,31,30,31,
                           30,31,31,30,31,
                           30,31};
    float yearMod[3] = {.6, .8, 1};

    float weekdayMod[7] = {0, .4, .5, .8, 1, .8, 0};
    int values = 0;
    for (int k = 0; k < 3; k++){
        for (int i = 0; i < 12; i++){
            for (int j = 0; j < monthDays[i]; j++) {
                file << std::round((4+rand()%4) * monthMod[i] * weekdayMod[values%7] * yearMod[k]);
                file << ',';
                if (values % 7 == 0 && values > 0){
                    file << std::endl;
                }
                values++;
            }
        }
    }
    file.close();
    return 1;
}