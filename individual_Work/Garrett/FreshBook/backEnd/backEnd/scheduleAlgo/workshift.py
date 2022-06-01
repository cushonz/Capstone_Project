from calendar import week
from employee import Employee

class workshift:
    def __init__(self, start:int, end:int, day:str, role:str, employee:Employee = None):
        self._start = start
        self._end = end
        self._day = day
        self._role = role
        self._employee = employee
        self._hours = start-end

    def __str__(self):
        # string representation of a 'workshift' object
        return f'''
        Today: {self._day},
        Employee Name: {self._employee.NAME()},
        Employee Role: {self._role},
        Start Time: {self._start},
        End Time: {self._end},
        Total Hours for Today: {self._hours}
        '''

    def checkConflict(self, employee:Employee) -> bool:
        if (employee._role == self._role &
            employee.availabilities[self.day,0] >= self.start & 
            employee.availabilities[self.day,1] <= self.end):
            return False
        return True

    def checkConflict(self) -> bool:
        if (self.employee.role == self.role &
            self.employee.availabilities[self.day,0] >= self.start & 
            self.employee.availabilities[self.day,1] <= self.end):
            return False
        return True
    
    def shiftTime(self, i:int):
        self.start += i
        self.end += i

    def isCovered(self, d:str, t:int) -> bool:
        if t >= self.start & t <= self.end & d == self.day:
            return True
        return False
