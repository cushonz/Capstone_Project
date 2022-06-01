# This is a sample Python script.

'''
* assignment: we are working with a restaurant and we wanna make an app for them that takes the employee’s availabilities
and makes a schedule
* algorithm should be in Python
* make an algorithm that takes the availabilities of the employees from the DB or user input and makes a schedule out
of them where there is no overlapping things going on
'''

from calendar import weekday
from functools import total_ordering
#from tkinter.tix import DisplayStyle
from urllib.robotparser import RobotFileParser
from employee import Employee # importing our 'Employee' class
import sqlite3 # importing SQLite3 for Python so we can work with our database 'newDB'
import random
from workshift import workshift

DB_PATH = "./newDB.sqlite3" # relative path to our database

def database_connection(path):
    conn = sqlite3.connect(path)  # connection to our DB
    return conn

# (24-hr time, 8 = 8am, 18 = 6pm, basically if it's > 12 it's PM and restaurant isn't open @ like 1am)
# we want to create the logic for the schedule, another teammate will read the employee/schedule info from the database

week = ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday") # all the working days in a week

def insert_employee(employees: list):
    days = ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday") # tuple of weekdays to iterate through
    # step 1: read in the employee info (name, email, hours, employee ID, role, availabilities, etc.)
    name = input("Employee Name: ")
    age = input("Employee Age: ")
    email = input("Employee Email: ")
    ID = int(input("5-Digit Employee ID: "))
    role = input("Employee Role: ")
    hours = int(input("Hours per Day: "))
    weekly_hours = int(input("Hours per Week: "))
    # step 2: create an Employee obj with all the user-entered data so far
    new_employee = Employee(name, age, role, email, ID, hours, weekly_hours)
    # step 3: fill in the dictionary of employee's availabilities (key == weekday, value == timeslot(s) they're available that day)
    for day in days:
        start_time = int(input(f"Enter starting time for {day} (24-hr time): "))
        end_time = int(input(f"Enter ending time for {day} (24-hr time):"))
        new_employee.add_availability(start_time, end_time, day) # add employee's time slot to their list of time slots for that day
    # step 4: add this employee to given 'employees' list
    employees.append(new_employee)

def add_to_schedule(EMP: Employee, day: str, SCHEDULE: dict):
    # add the employee's shifts for the given day to the schedule
    total_shifts = EMP.SHIFTS() # employee's 'availabilities' dictionary
    today = total_shifts[day] # employee's shift for the given day -> a tuple (start_time, end_time)
    role = EMP.ROLE() # employee's role
    work_shift = workshift(today[0], today[1], day, role, EMP) # employee's work shift for that day
    SCHEDULE[day].append(work_shift) # add employee's work shift for the given day to that day's list in the 'schedule' dictionary

if __name__ == "__main__":
    opening_time = 8 # store opens @ 8am
    closing_time = 20 # store closes @ 8pm
    # note for shifts: start time cannot be < opening time, end time cannot be > closing time
    num_employees = int(input("Number of Employees at Company: ")) # num of employees working here
    EMPLOYEES = [] # list of employees @ the company
    # schedule of shifts (key: weekday, value: list of all employees' workshifts that day (list of 'workshift' objects))
    schedule = {
        "Monday": [],
        "Tuesday": [],
        "Wednesday": [],
        "Thursday": [],
        "Friday": []
    }
    for i in range(num_employees):
        insert_employee(EMPLOYEES) # add each employee to 'EMPLOYEES' list
    # add all employees to the schedule
    for emp in EMPLOYEES:
        # we will need to add all the available work shifts for each day of the week, so we'll need a nested for-loop
        for day in week:
            add_to_schedule(emp, day, schedule) # for each employee in the company, we'll add their available shifts for the whole week
    # print the schedule
    print("----------------------SCHEDULE----------------------")
    for day, shifts in schedule.items():
        print(day)
        for shift in shifts:
            print(shift) # print each work shift of the day, then move on to next day after the line
        print("----------------------")

'''
start = 8
end = 18
bias = [("Monday",12),("Tuesday",12),("Wednesday",13),("Thursday",12),("Friday",12),("Friday",14)]
roles = [("Front", 2), ("Back",2)]

employees = [Employee("Alice", 21, "Front", "Alice@Alice.Alice", 100001, 40, 8),
             Employee("Bob", 23, "Front", "Alice@Alice.Alice", 200001, 24, 8),
             Employee("Carol", 22, "Front", "Alice@Alice.Alice", 300001, 24, 8),
             Employee("Dave", 21, "Back", "Alice@Alice.Alice", 400001, 40, 8),
             Employee("Evelyn", 25, "Back", "Alice@Alice.Alice", 50001, 20, 4),
             Employee("Guy", 22, "Back", "Alice@Alice.Alice", 600001, 20, 4)]

e1 = employees[0] # this is Alice
    
avail= [("Monday",8,18),("Tuesday",8,18),("Wednesday",8,18),("Thursday",8,18),("Friday",8,18),
        ("Monday",8,16),("Tuesday",8,16),("Wednesday",8,16),("Thursday",8,16),("Friday",8,16),
        ("Monday",10,18),("Tuesday",10,18),("Wednesday",10,18),("Thursday",10,18),("Friday",10,18),
        ("Monday",8,18),("Tuesday",8,18),("Wednesday",8,18),("Thursday",8,18),("Friday",8,18),
        ("Monday",8,14),("Tuesday",8,14),("Wednesday",8,14),("Thursday",8,14),("Friday",8,14),
        ("Monday",12,18),("Tuesday",12,18),("Wednesday",12,18),("Thursday",12,18),("Friday",12,18)]

shifts = []

for x in range(4):
    employees[0].add_availability(avail[x][1],avail[x][2],avail[x][0]) 
    employees[1].add_availability(avail[x+5][1],avail[x+5][2],avail[x+5][0]) 
    employees[2].add_availability(avail[x+10][1],avail[x+10][2],avail[x+10][0]) 
    employees[3].add_availability(avail[x+15][1],avail[x+15][2],avail[x+15][0]) 
    employees[4].add_availability(avail[x+20][1],avail[x+20][2],avail[x+20][0]) 
    employees[5].add_availability(avail[x+25][0],avail[x+25][1],avail[x+25][2]) 
    
for x in employees:
    y = 0
    while(y < x.week/x.day):
        shifts.append(workshift(0,x.hours,"",x.role,x))
        y+=1

day = ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
hour = range(start, end)
scheduled = []

#First pass, make sure someone is there at all times of the day (not aware of breaks)
for r in roles:
    for d in day:
        for h in hour:
            total = 0
            for s in shifts:
                if s.isCovered(r[0],d,h):
                    total+=1
            if total == 0:
                for s in shifts:
                    if (s.day == d & s.role == r[0] 
                      & s.employee.isAvailable(d, h, h+s.hours)):
                        s.shiftTime(h-s.start)
                        scheduled.append(s)
                        shifts.remove(s)
                        break
'''

#final pass, check that requirements are met

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
