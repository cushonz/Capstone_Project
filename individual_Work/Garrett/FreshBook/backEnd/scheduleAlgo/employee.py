
from calendar import week
from operator import truediv


class Employee:
    # new note: they are in 24-hour time, and we're not considering times past 12am (24), so 6pm would be 18
    # if we're given, say, 7pm, we just add 7 to 12 to get the time (19), so just do x+12 for any PM time x given
    def __init__(self, name: str, age: int, role: str, email: str, employee_id: int, weekhours: int, dayhours: int):
        self._name = name
        self._age = age
        self._email = email
        self._employee_id = employee_id
        self._role = role
        self._week = weekhours
        self._hours = dayhours
        # employee's availabilities are in a dictionary
        # keys -> Monday-Friday, values -> employee's time slot available that day (tuple), they start off as 'None'
        self.availabilities = {"Monday": None, "Tuesday": None, "Wednesday": None, "Thursday": None, "Friday": None}
    # availabilities: {"Monday": (10, 14), "Tuesday": (7, 14), ... , "Friday": (8, 15)}
    # DB header: [start_time end_time weekday]

    def add_availability(self, start_time: int, end_time: int, weekday: str) -> None:
        # value of each key: list of tuples where each tuple is a time slot available that day
        new_time_slot = (start_time, end_time) # new time slot in which employee is available
        self.availabilities[weekday] = new_time_slot # update the employee's available time slot for given day in 'availabilities'
    
    def is_available(self, day:str, hour:int) -> bool:
        if (self.availabilities[day][0] <= hour &
            self.availabilities[day][0] <= hour):
            return True
        return False
    
    def is_available(self, day:str, hourFrom:int, hourTo:int) -> bool:
        if (self.availabilities[day][0] <= hourFrom & 
            self.availabilities[day][0] <= hourTo):
            return True
        return False

    def NAME(self):
        return self._name

    def SHIFTS(self):
        return self.availabilities

    def ROLE(self):
        return self._role

    def __str__(self) -> str:
        return(f'''
        Name: {self._name}
        Age: {self._age}
        Role: {self._role}
        Email: {self._email}
        Employee ID: {self._employee_id}
        Availability: {self.availabilities}
        ''')
