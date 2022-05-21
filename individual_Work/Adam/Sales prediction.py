
from audioop import reverse
from datetime import datetime

class salesData:
    product = ""
    daysToPredict = 0
    weekday = 0
    dataLastYear = []
    dataLastMonth = []
    dataCurrent = []

    def __init__(self, daysToPredict:int, product:str):
        self.daysToPredict = daysToPredict
        self.product = product

    def getData (self):
        self.weekday = datetime.today().weekday()+1
        self.dataLastYear = self.getMockData(365,(365-self.daysToPredict)).copy() #the days from last year
        #dataLastMonth = self.getMockData(,-self.daysToPredict) #xth weekday of the previous month
        self.dataCurrent = self.getMockData(22-self.weekday,8-self.weekday).copy() #last 14 days

    def getMockData(self, i:int) -> list:
        return self.getMockData(self, i, i)

    def getMockData(self, fro:int, to:int) -> int:
        data = [0,1,1,1,1,1,0,
                0,1,0,1,1,1,0,
                0,1,1,1,2,1,0,
                0,1,1,1,1,1,0,
                0,1,1,2,3,2,0,
                0,1,2,3,3,3,0,
                0,1,1,2,2,3,0,
                0,1,1,2,2,2,0,
                0,1,1,2,2,2,0,
                0,1,1,1,3,1,0,
                0,1,1,2,3,2,0,
                0,1,1,2,3,1,0,
                0,1,1,1,3,1,0,
                0,1,1,1,2,2,0,
                0,1,1,2,3,2,0,
                0,1,1,1,2,1,0,
                0,1,1,1,2,1,0,
                0,1,1,1,1,2,0,
                0,1,1,1,2,1,0,
                0,1,1,2,2,2,0,
                0,1,1,2,2,1,0,
                0,1,1,1,2,1,0,
                0,0,1,2,2,2,0,
                0,0,1,1,2,2,0,
                0,1,1,1,2,1,0,
                0,0,1,1,1,1,0,
                0,1,1,2,1,1,0,
                0,1,1,1,3,2,0,
                0,1,1,2,2,1,0,
                0,1,1,2,1,2,0,
                0,1,1,1,2,1,0,
                0,1,1,2,2,1,0,
                0,0,1,1,1,1,0,
                0,1,1,1,2,1,0,
                0,0,1,2,2,1,0,
                0,1,1,1,3,2,0,
                0,1,1,2,2,2,0,
                0,1,1,1,1,1,0,
                0,1,1,2,2,1,0,
                0,1,1,1,3,2,0,
                0,1,1,2,3,2,0,
                0,1,1,1,3,2,0,
                0,1,1,2,2,2,0,
                0,1,1,2,4,3,0,
                0,1,2,2,4,2,0,
                0,2,1,3,3,2,0,
                0,1,2,3,3,2,0,
                0,1,2,3,4,3,0,
                0,2,2,3,3,3,0,
                0,1,1,2,3,2,0,
                0,1,2,3,3,2,0,
                0,1,1,3,3,2,0,
                0,1,1,2,2,1,0,
                0,1,1,2,2,2,0,
                0,1,1,1,2,2,0,
                0,1,1,2,1,2,0,
                0,1,1,2,4,3,0,
                0,1,2,4,3,2,0,
                0,1,2,4,4,4,0,
                0,2,1,4,3,3,0,
                0,1,2,3,3,3,0,
                0,1,2,2,2,3,0,
                0,1,2,3,4,2,0,
                0,1,2,2,3,2,0,
                0,1,2,2,2,3,0,
                0,1,1,2,2,3,0,
                0,1,2,2,2,3,0,
                0,1,1,2,3,2,0,
                0,1,1,2,3,2,0,
                0,1,1,2,3,2,0,
                0,1,1,2,3,1,0,
                0,1,1,1,2,2,0,
                0,1,1,2,3,2,0,
                0,1,1,1,3,1,0,
                0,1,1,2,2,2,0,
                0,1,1,2,3,2,0,
                0,1,1,1,2,2,0,
                0,1,1,2,2,2,0,
                0,1,2,2,2,2,0,
                0,1,1,2,2,2,0,
                0,1,1,2,2,2,0,
                0,1,1,2,2,3,0,
                0,1,2,1,2,2,0,
                0,1,1,2,2,2,0,
                0,1,1,2,3,2,0,
                0,1,1,2,2,2,0,
                0,1,1,2,2,2,0,
                0,1,2,2,3,3,0,
                0,1,1,2,2,2,0,
                0,1,1,2,2,2,0,
                0,1,1,2,3,2,0,
                0,1,2,2,3,2,0,
                0,1,2,3,3,2,0,
                0,1,2,2,2,2,0,
                0,1,2,2,3,3,0,
                0,1,2,3,6,3,0,
                0,2,3,3,6,3,0,
                0,2,2,3,6,4,0,
                0,1,2,4,4,3,0,
                0,2,2,3,4,3,0,
                0,1,3,2,5,3,0,
                0,2,3,2,5,3,0,
                0,2,2,4,4,2,0,
                0,2,2,4,3,3,0,
                0,1,1,2,3,2,0,
                0,1,1,2,2,2,0,
                0,1,1,2,2,2,0,
                0,1,1,2,2,2,0,
                0,1,1,2,2,3,0,
                0,2,3,3,6,4,0,
                0,2,3,3,3,4,0,
                0,2,2,3,6,3,0,
                0,2,2,3,4,3,0,
                0,2,2,3,5,3,0,
                0,2,1,4,5,3,0,
                0,1,2,2,3,4,0,
                0,2,1,4,4,3,0,
                0,2,2,2,2,2,0,
                0,1,2,2,4,2,0,
                0,1,2,2,3,2,0,
                0,1,2,2,3,2,0,
                0,1,2,2,2,2,0,
                0,1,2,3,3,2,0,
                0,1,2,2,3,2,0,
                0,1,1,2,2,2,0,
                0,1,2,3,2,2,0,
                0,1,1,2,2,2,0,
                0,1,2,2,2,3,0,
                0,1,2,2,3,2,0,
                0,1,1,2,4,3,0,
                0,2,1,3,4,3,0,
                0,1,1,2,3,3,0,
                0,1,2,3,3,3,0,
                0,2,2,3,3,2,0,
                0,1,2,2,3,3,0,
                0,1,2,2,2,2,0,
                0,1,1,2,2,3,0,
                0,1,2,2,3,2,0,
                0,1,1,2,3,2,0,
                0,2,2,2,2,3,0,
                0,1,2,3,3,3,0,
                0,1,2,2,3,3,0,
                0,1,2,2,2,2,0,
                0,2,1,3,4,3,0,
                0,2,2,4,4,2,0,
                0,1,2,3,3,3,0,
                0,1,1,3,4,3,0,
                0,2,1,3,4,6,0,
                0,2,2,5,6,4,0,
                0,2,3,3,4,5,0,
                0,2,4,3,7,5,0,
                0,2,2,6,4,4,0,
                0,3,3,4,6,4,0,
                0,2,2,4,5,4,0,
                0,2,3,4,5,5,0,
                0,1,2,4,6,3,0]
        return data[len(data) - fro : len(data) - to:1]


class salesPredicter:
    weekdayMod = [0,0,0,0,0,0,0]
    predictions = []
    weekdayWeight = 1
    effectiveLastyearWeight = 1
    lastMonthWeight = 0

    def __init__(self, data:salesData):
        self.data = data

    def predictSales(self) -> list:
        avgSales = self.averageSales()
        self.calcWeekMod(avgSales);
        results = self.weigh()
        for x in range(len(results)):
            results[x] = round(results[x] * avgSales)
            if self.weekdayMod[(x + self.data.weekday)%7] == 0:
                results[x] = 0
        return results

    def averageSales(self) -> float:
        sum = 0
        divBy = 0
        for x in self.data.dataCurrent:
            if (x > 0):
                sum += x
                divBy += 1
        sum /= divBy
        return sum

    def lastMonth(self) -> list:
        self.lastMontWeight = 0
        return [0] * self.data.daysToPredict

    def lastYear(self) -> list:

        if len(self.data.dataLastYear) == 0:
            self.effectiveLastyearWeight = 0
            return 1
        
        sum = 0
        divBy = 0
        t = 0
        for x in self.data.dataLastYear:
            if (x > 0):
                sum += x
                divBy += 1

        if (divBy == 0 | sum == 0):
                self.effectiveLastyearWeight = 0
                return 1

        sum /= divBy
        ret = []
        for x in self.data.dataLastYear:
            ret.append(x/sum)
        
        return ret


    def calcWeekMod(self, avg):
        self.weekdayMod = [0,0,0,0,0,0,0]
        for x in range(len(self.data.dataCurrent))[::-1]:
            self.weekdayMod[(x+self.data.weekday-1)%7] += self.data.dataCurrent[x]
        for x in range(len(self.weekdayMod)):
            self.weekdayMod[x] /= 2
            self.weekdayMod[x] /= avg
    
    def dayMod(self, i:int):
        return self.weekdayMod[(i+self.data.weekday)%7]

    def train(self):
        pass

    def weigh(self) -> list:
        total = self.weekdayWeight + self.effectiveLastyearWeight + self.lastMonthWeight
        if total == 0:
            return 0

        yeardata = self.lastYear() 
        monthdata = self.lastMonth() 
        result = [0] * self.data.daysToPredict
        for x in range(self.data.daysToPredict):
            result[x] += self.dayMod(self.data.weekday+x) * (self.weekdayWeight/total)
            result[x] += yeardata[x] * (self.effectiveLastyearWeight/total)
            result[x] += monthdata[x] * (self.lastMonthWeight/total)
        return result


findit = salesData(14, "")
findit.getData()
doit = salesPredicter(findit)
it = doit.predictSales()
print(it)



