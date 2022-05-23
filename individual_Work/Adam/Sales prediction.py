
from bdb import effective
from datetime import date, timedelta
from math import ceil
from random import Random
from calendar import calendar

class salesData:
    product = ""
    daysToPredict = 0
    weekday = 0
    dataLastYear = []
    dataLastMonth = []
    dataCurrent = []

    def __init__(self, daysToPredict:int, product:str, workingdate:date):
        self.daysToPredict = daysToPredict
        self.product = product
        self.workingdate = workingdate

    def getData (self):
        self.weekday = self.workingdate.weekday()+1

        #figure out days since xth weekday
        calcFrom = [ceil(self.workingdate.day/7),((self.workingdate.month-1)%12)+1]
        calced = date(self.workingdate.year if calcFrom[1] < self.workingdate.month else self.workingdate.year -1, 
                        calcFrom[1], 1)

        #make safe
        months = [31,28 if calced.year%4 == 0 else 29,31,30,31,30,31,31,30,31,30,31]

        if 7*calcFrom[0] > months[calced.month]:
            calcFrom[0] -= 1

        calced2 = self.workingdate - date(calced.year, calced.month, (calcFrom[0]*7) - (calced.weekday() +1))

        lastyear = date.today() - date(self.workingdate.year-1, self.workingdate.month, self.workingdate.day)
        daysSince = date.today() - self.workingdate
        
        self.dataLastYear = self.getMockData(lastyear.days+7, lastyear.days-self.daysToPredict).copy() #the days from last year
        self.dataLastMonth = self.getMockData(calced2.days+7, calced2.days-self.daysToPredict) #xth weekday of the previous month
        self.dataCurrent = self.getMockData(daysSince.days+14+self.daysToPredict,
                                            daysSince.days).copy() #last 14 days

    def getMockData(self, i:int) -> list:
        return self.getMockData(self, i, i)

    def getMockData(self, fro:int, to:int) -> int:
        data = [0,2,2,2,5,3,0,
                0,1,2,3,4,2,0,
                0,1,2,2,4,3,0,
                0,1,2,2,3,2,0,
                0,1,2,6,5,7,0,
                0,3,5,6,7,5,0,
                0,2,3,5,5,4,0,
                0,3,3,5,8,7,0,
                0,2,5,6,7,5,0,
                0,3,3,3,5,5,0,
                0,3,2,6,4,3,0,
                0,2,4,6,5,5,0,
                0,2,3,5,5,6,0,
                0,2,2,5,6,5,0,
                0,2,2,4,7,5,0,
                0,2,3,4,6,3,0,
                0,2,2,5,6,4,0,
                0,2,2,3,5,4,0,
                0,2,2,3,3,2,0,
                0,2,2,4,3,4,0,
                0,2,2,3,5,5,0,
                0,1,3,3,5,4,0,
                0,2,2,3,4,4,0,
                0,2,3,4,4,4,0,
                0,1,2,4,4,2,0,
                0,2,3,4,4,3,0,
                0,3,3,5,4,5,0,
                0,3,2,5,5,5,0,
                0,2,2,4,7,5,0,
                0,1,3,5,6,5,0,
                0,3,2,5,6,3,0,
                0,2,2,3,5,3,0,
                0,1,3,4,3,4,0,
                0,2,3,5,5,3,0,
                0,1,3,5,3,5,0,
                0,2,3,5,4,3,0,
                0,2,3,5,4,5,0,
                0,3,2,4,6,3,0,
                0,2,2,5,6,5,0,
                0,3,3,3,4,4,0,
                0,3,2,6,6,4,0,
                0,2,3,6,7,6,0,
                0,2,4,5,5,6,0,
                0,3,3,7,9,7,0,
                0,3,5,5,11,6,0,
                0,5,5,8,11,9,0,
                0,5,4,7,10,8,0,
                0,4,4,7,8,6,0,
                0,2,4,6,7,6,0,
                0,3,5,5,8,6,0,
                0,4,4,5,6,6,0,
                0,4,3,6,5,6,0,
                0,2,2,5,4,4,0,
                0,2,3,4,4,4,0,
                0,2,3,4,6,3,0,
                0,2,2,4,4,4,0,
                0,2,2,3,11,9,0,
                0,3,3,7,12,6,0,
                0,3,4,9,8,10,0,
                0,3,4,7,8,6,0,
                0,3,5,7,8,5,0,
                0,3,4,6,6,8,0,
                0,3,3,4,8,6,0,
                0,4,5,7,6,4,0,
                0,3,5,7,9,6,0,
                0,2,4,7,6,4,0,
                0,3,5,5,5,7,0,
                0,2,4,4,7,6,0,
                0,3,3,7,6,6,0,
                0,3,3,5,7,6,0,
                0,2,2,4,5,5,0,
                0,2,3,4,4,4,0,
                0,3,2,4,4,5,0,
                0,2,3,6,5,3,0,
                0,3,2,4,7,6,0,
                0,3,2,6,8,4,0,
                0,2,3,6,5,5,0,
                0,2,4,4,6,5,0,
                0,3,4,6,6,4,0,
                0,3,4,6,8,6,0,
                0,2,5,4,8,5,0,
                0,3,4,6,5,5,0,
                0,3,5,4,6,5,0,
                0,2,3,4,5,5,0,
                0,2,3,4,4,5,0,
                0,2,4,4,5,4,0,
                0,2,4,5,4,3,0,
                0,3,3,4,9,7,0,
                0,3,4,5,8,5,0,
                0,2,4,4,5,5,0,
                0,3,3,5,5,7,0,
                0,3,4,7,7,4,0,
                0,3,5,4,10,5,0,
                0,4,3,4,10,7,0,
                0,4,3,7,7,6,0,
                0,3,5,7,15,8,0,
                0,4,5,12,12,12,0,
                0,6,6,7,14,11,0,
                0,3,5,9,9,11,0,
                0,4,5,9,9,8,0,
                0,5,6,8,11,9,0,
                0,5,6,8,9,6,0,
                0,4,4,6,14,6,0,
                0,5,5,6,10,10,0,
                0,4,3,6,5,4,0,
                0,2,4,4,6,4,0,
                0,2,3,6,8,4,0,
                0,3,3,5,4,5,0,
                0,2,2,4,5,8,0,
                0,3,5,7,10,8,0,
                0,6,6,10,14,8,0,
                0,4,7,12,10,12,0,
                0,4,7,6,9,10,0,
                0,4,4,11,9,6,0,
                0,5,6,7,11,9,0,
                0,4,7,8,13,7,0,
                0,4,5,8,13,9,0,
                0,4,3,9,10,7,0,
                0,3,5,6,7,8,0,
                0,4,5,6,11,7,0,
                0,3,5,6,9,8,0,
                0,3,4,6,6,6,0,
                0,3,4,4,5,4,0,
                0,3,4,4,5,5,0,
                0,3,4,5,9,5,0,
                0,3,4,5,8,7,0,
                0,3,5,7,5,4,0,
                0,2,4,4,7,5,0,
                0,4,3,4,10,7,0,
                0,3,3,5,7,4,0,
                0,5,5,9,7,6,0,
                0,3,4,7,8,9,0,
                0,4,5,5,7,7,0,
                0,5,4,7,11,8,0,
                0,2,3,7,9,6,0,
                0,2,5,5,9,5,0,
                0,2,4,6,5,6,0,
                0,3,5,4,9,5,0,
                0,2,4,8,7,7,0,
                0,3,4,9,8,9,0,
                0,4,4,5,8,8,0,
                0,4,5,8,11,5,0,
                0,3,5,5,10,9,0,
                0,5,5,6,11,9,0,
                0,4,6,10,8,8,0,
                0,3,4,6,10,11,0,
                0,4,5,6,11,7,0,
                0,4,6,10,8,14,0,
                0,5,8,8,14,15,0,
                0,4,7,13,12,11,0,
                0,7,6,10,11,11,0,
                0,5,7,12,12,15,0,
                0,5,8,12,17,13,0,
                0,4,6,13,11,12,0,
                0,5,8,13,11,12,0,
                0,4,5,13,17,9,0,]
        return data[len(data) - fro : len(data) - to:1]


class salesPredicter:
    weekdayMod = [0,0,0,0,0,0,0]
    predictions = []
    fit = 0.0 #for training purposes
    LastyearWeight = 1
    weekdayWeight = 1
    lastMonthWeight = 1
    effectiveLastyearWeight = 1
    effectiveLastMonthWeight = 1

    def __init__(self, data:salesData):
        self.data = data

    def predictSales(self) -> list:
        self.effectiveLastyearWeight = self.LastyearWeight
        self.effectiveLastMonthWeight = self.lastMonthWeight
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
        for x in range(14+self.data.daysToPredict):
            if (self.data.dataCurrent[x] > 0):
                sum += self.data.dataCurrent[x]
                divBy += 1
        sum /= divBy
        return sum

    def lastMonth(self) -> list:
        if len(self.data.dataLastMonth) == 0:
            self.effectiveLastMonthWeight = 0
            return 1
        
        sum = 0
        divBy = 0
        for x in range(min(7+self.data.daysToPredict, len(self.data.dataLastMonth))):
            if (self.data.dataLastMonth[x] > 0):
                sum += self.data.dataLastMonth[x]
                divBy += 1

        if (divBy == 0 | sum == 0):
                self.effectiveLastMonthWeight = 0
                return 1

        sum /= divBy
        ret = []
        for x in range(min(7+self.data.daysToPredict, len(self.data.dataLastMonth))):
            ret.append(self.data.dataLastMonth[x]/sum)
        
        return ret[7:7+self.data.daysToPredict:1]

    def lastYear(self) -> list:
        if len(self.data.dataLastMonth) == 0:
            self.effectiveLasMonthWeight = 0
            return 1
        
        sum = 0
        divBy = 0
        for x in range(min(7+self.data.daysToPredict, len(self.data.dataLastYear))):
            if (self.data.dataLastYear[x] > 0):
                sum += self.data.dataLastYear[x]
                divBy += 1

        if (divBy == 0 | sum == 0):
                self.effectiveLastyearWeight = 0
                return 1

        sum /= divBy
        ret = []
        for x in range(min(7+self.data.daysToPredict, len(self.data.dataLastYear))):
            ret.append(self.data.dataLastYear[x]/sum)
        
        return ret[7:7+self.data.daysToPredict:1]

    def calcWeekMod(self, avg):
        self.weekdayMod = [0,0,0,0,0,0,0]
        for x in range(len(self.data.dataCurrent))[::-1]:
            self.weekdayMod[(x+self.data.weekday+1)%7] += self.data.dataCurrent[x]
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
            result[x] += monthdata[x] * (self.effectiveLastMonthWeight/total)
        return result


class superEgo:
    def predict(self, sales):
        predictions = []
        sales.getData()
        for x in self.pop:
            x.data = sales
            predictions.append(x.predictSales())
        final = [0]*sales.daysToPredict
        for x in predictions:
            for y in range(len(x)):
                final[y] += x[y]
        
        for x in range(len(final)):
            final[x] /= len(self.pop)
            final[x] = round(final[x])

        return final

    def predictTop(self, sales):
        sales.getData()
        self.pop.sort(key= lambda x: x.fit)
        self.pop[0].data = sales
        return self.pop[0].predictSales()

    def train(self, gens:int, pop:int):
        self.rand = Random()
        self.rand.seed()
        self.generate(pop)
        for x in range(gens):
            self.evaluate()
            self.crossover()
            self.mutate()

    def crossover(self):
        self.pop.sort(key= lambda x: x.fit)
        for x in range(len(self.pop)):
            f = self.pop[x].fit
            w = (self.pop[x].weekdayWeight, self.pop[x].LastyearWeight, self.pop[x].lastMonthWeight)
            self.pop[x].weekdayWeight = self.pop[x].weekdayWeight if self.rand.random() < .4 else self.pop[self.rand.randrange(0,len(self.pop))].weekdayWeight 
            self.pop[x].LastyearWeight = self.pop[x].LastyearWeight if self.rand.random() < .4 else self.pop[self.rand.randrange(0,len(self.pop))].LastyearWeight 
            self.pop[x].lastMonthWeight = self.pop[x].lastMonthWeight if self.rand.random() < .4 else self.pop[self.rand.randrange(0,len(self.pop))].lastMonthWeight
            self.evaluateSingle(x)
            if self.pop[x].fit < f:
                self.pop[x].fit = f
                self.pop[x].weekdayWeight = w[0]
                self.pop[x].LastyearWeight = w[1]
                self.pop[x].lastMonthWeigh = w[2]

    def evaluate(self):
        for x in range(len(self.pop)):
            self.pop[x].fit = 0
            prediction = self.pop[x].predictSales()
            for y in range(14,14+self.pop[x].data.daysToPredict):
                self.pop[x].fit = abs(self.pop[x].data.dataCurrent[y] - prediction[y-14])

    def evaluateSingle(self, n:int):
            self.pop[n].fit = 0
            prediction = self.pop[n].predictSales()
            for y in range(14,14+self.pop[n].data.daysToPredict):
                self.pop[n].fit = abs(self.pop[n].data.dataCurrent[y] - prediction[y-14])

    def mutate(self):
        for x in range(len(self.pop)):
            if self.rand.random():
                f = self.pop[x].fit
                w = (self.pop[x].weekdayWeight, self.pop[x].LastyearWeight, self.pop[x].lastMonthWeight)
                self.pop[x].weekdayWeight = self.rand.random() if self.rand.random() < .8 else self.pop[x].weekdayWeight
                self.pop[x].LastyearWeight = self.rand.random() if self.rand.random() < .8 else self.pop[x].LastyearWeight 
                self.pop[x].lastMonthWeight = self.rand.random() if self.rand.random() < .8 else self.pop[x].lastMonthWeight
                self.evaluateSingle(x)
                if self.pop[x].fit < f:
                    self.pop[x].fit = f
                    self.pop[x].weekdayWeight = w[0]
                    self.pop[x].LastyearWeight = w[1]
                    self.pop[x].lastMonthWeigh = w[2]

    def generate(self, pop):
        data = salesData(365, "", date(2021,1,1))
        data.getData()
        self.pop = []
        for x in range(pop):
            n = salesPredicter(data)
            n.weekdayWeight = self.rand.random()
            n.effectiveLastyearWeight = self.rand.random()
            n.lastMonthWeight = self.rand.random()
            self.pop.append(n)
        data.daysToPredict = 7


tommorow = date.today() + timedelta(1)

super = superEgo()

super.train(200, 200)

print(super.predict(salesData(7, "", date.today())))
print(super.predictTop(salesData(7, "", date.today())))

findit = salesData(7, "", date.today())
findit.getData()
doit = salesPredicter(findit)
it = doit.predictSales()
print(it)



