--class salesData--
  product
    Name of the product the sales is for
  daysToPredict
    the number of days that will be predicted
  weekday
    the weekday of the date
  dataLastYear
    Data from the previous year
  dataLastMonth
    Data from last month
  dataCurrent
    Data of the previous days

__init__(self, daysToPredict:int, product:str, workingdate:date):
  constructor for the class
  daysToPredict: the number of days that will be predicted
  product: the product that will be predicted for
  workingdate: the first day that there is no data for

setData (self, data:list):
  Takes data from the given list, data, and loads the appropriate data to dataLastYear, dataLastMonth, and dataCurrent variables. days with no sales, and days that are closed should be represented.
  data int List, list of integers representing the sales of an item each day.

getMockData(self, i:int):
  returns a single day of mock data

getMockData(self, fro:int, to:int):
  returns a list of integers in a range from the mock data



--class salesPredicter--
  weekdayMod
    holds the found performance of the days of the week
  fit
    the fitness of the instance, ues by the SalesTrainer class
  LastyearWeight
    how much weight last year's data has once averaged
  weekdayWeight
    how much weight the weekday's data has once averaged
  lastMonthWeight
    how much weight last moth'ss data has once averaged
  effectiveLastyearWeight
    how much weight last year's data has once averaged, onlu changed if no data for last year is present.
  effectiveLastMonthWeight
    how much weight last month's data has once averaged, only changed if no data for last month is present.

__init__(self, data:salesData):
  Constructor, sets data with sales data object

predictSales(self) -> list:
  makes a prediction

averageSales(self) -> float:
  finds the average sales of a time

lastMonth(self) -> list:
  finds perfomance from the previous month
  if no data it removes last month's data from the final calculation

lastYear(self) -> list:
  finds performance from the previous year
  if no data it removes last year's data from the final calculation

calcWeekMod(self, avg):
  finds the performance of each weekday



--class SalesTrainer--

predict(self, sales:salesData, data:list)
  uses the average of the entire population to make a prediction with the data provided

predictTop(self, sales:salesData, data:list)
  uses the population member with the best fitness to make a prediction with the data provided
        
predictMock(self, sales:salesData)
  uses the average of the entire population to make a prediction with mock data

predictTopMock(self, sales:salesData)
  uses the population member with the best fitness to make a prediction based on mock data

train(self, gens:int, pop:int, data:list)
  train a population with data provided

trainMock(self, gens:int, pop:int)
  trains the a population with mockdata

crossover(self)
  Used by the train function
  performs crossover on members of the population with random members of the population, only replaces the member if the new version is better

evaluate(self, sold:int)
  Used by the train function
  finds the fitness values for the population

evaluateSingle(self, n:int)
  Used by the crossover and mutate functions
  finds the fitness value of a single member of the population  

mutate
  Used by the train function
  randomly mutates the population of SalesPrediction instances, only replaces the member if the new version is better

adjust
  Used by the train function
  advances through the training data.

generate(self, pop:int, gens:int, data):
  Used by the train function
  creates the population of sales data objects to be trained

generateMock(self, pop:int, gens:int):
  Used by the train function
  creates the population of sales data objects with mockdata

trainingSettings(self) -> list:
  creates a list of settings found by training.

restoreTraining(self, values:list, daysToPredict:int, product:str, day:date)
  recreates the settings found by a previous training for a date, product, and prediction days to predict.