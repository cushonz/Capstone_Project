
from calendar import week


class Employee:
    def __init__(self, name, age, email, employee_id):
        self._name = name
        self._email = email
        self._employee_id = employee_id
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
    
    def __str__(self) -> str:
        return(f'''
        Name: {self._name}
        Email: {self._email}
        Employee ID: {self._employee_id}
        Availability: {self.availabilities}
        ''')