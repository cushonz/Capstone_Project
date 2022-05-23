
from calendar import week
from operator import truediv


class Employee:
    def __init__(self, name: str, age: int, role: str, email: str, employee_id: int, weekhours: int, dayhours: int):
        self._name = name
        self._email = email
        self._employee_id = employee_id
        self._role = role
        self._week = weekhours
        self._hours = dayhours
        # employee's availabilities are in a dictionary
        # keys -> Monday-Friday, values -> time slots available that day (list of tuples)
        self.availabilities = {"Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [], "Friday": [], "Saturday": [], "Sunday": []}
    # availabilities: {"Monday": [(10, 2), (5, 9)], "Tuesday": [(7, 1), (3, 7)], ... , "Friday": [(8, 3)]}
    # DB header: [start_time end_time weekday]

    def add_availability(self, start_time: int, end_time: int, weekday: str) -> None:
        # value of each key: list of tuples where each tuple is a time slot available that day
        new_time_slot = (start_time, end_time) # new time slot in which employee is available
        time_slots = self.availabilities[weekday] # list of time slots currently available for the given day
        time_slots.append(new_time_slot) # add our new time slot to our list of available time slots
        self.availabilities[weekday] = time_slots # update our list of available time slots for given day in 'availabilities'
    
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

    def __str__(self) -> str:
        return(f'''
        Name: {self._name}
        Email: {self._email}
        Employee ID: {self._employee_id}
        Availability: {self.availabilities}
        ''')