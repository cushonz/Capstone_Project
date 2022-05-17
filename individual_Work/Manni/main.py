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
from tkinter.tix import DisplayStyle
from urllib.robotparser import RobotFileParser
from employee import Employee # importing our 'Employee' class
import sqlite3 # importing SQLite3 for Python so we can work with our database 'newDB'
import random

from workshift import workshift

'''
DB_PATH = "./newDB.sqlite3" # relative path to our database

def database_connection(path):
    conn = sqlite3.connect(path)  # connection to our DB
    return conn

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    # get DB cursor so we can execute SQL queries to our DB
    db_conn = database_connection(DB_PATH) # our DB connection object
    db_cursor = db_conn.cursor() # our cursor obj
    
    # create a 'schedule' table with columns 'start_time' (int), 'end_time' (int), and 'weekday' (str), and a primary key column
    schedule = """
    CREATE TABLE IF NOT EXISTS schedule(
        id integer PRIMARY KEY, 
        start_time integer NOT NULL,
        end_time integer NOT NULL,
        weekday text NOT NULL
    )
    """
    db_cursor.execute(schedule)
    db_cursor.execute("SELECT name FROM sqlite_master WHERE type='table'") # this returns all the tables in the currently connected DB
    print(db_cursor.fetchall()) # prints the name of each table in the DB

    # insert some user availability data into 'schedule' table
    insert_data_query = "INSERT INTO schedule (start_time, end_time, weekday) VALUES (?, ?, ?)"
    choice = -1 # stores user's choice
    while (choice != 0):
        day = input("Enter weekday: ") # get weekday
        start = int(input("Enter start time of availability that day: ")) # get start time
        end = int(input("Enter end time of availability that day: ")) # get end time
        db_cursor.execute(insert_data_query, (start, end, day)) # insert time-slot data into our table
        db_conn.commit() # commit changes
        choice = int(input("Select any number but 0 to keep going; select 0 to quit."))
    
    # create an employee who will have the availabilities in the table
    id = random.randint(10000, 99999) # generates random 5-digit employee ID
    emp = Employee("Manni", 23, "singhman@cwu.edu", id) # creates new employee
    
    # select all availabilities from table
    select_all = """SELECT start_time, end_time, weekday FROM schedule"""
    db_cursor.execute(select_all)
    _timeslots_ = [(start_time, end_time, weekday) for start_time, end_time, weekday in db_cursor.fetchall()] # gets each timeslot and its weekday
    for slot in _timeslots_:
        emp.add_availability(slot[0], slot[1], slot[2]) # add each time slot to employee's schedule
    print(emp)
'''

#create schedule
start = 8
end = 18
bias = [("Monday",12),("Tuesday",12),("Wednesday",13),("Thursday",12),("Friday",12),("Friday",14)]
roles = [("Front", 2), ("Back",2)]

employees = [Employee("Alice", 21, "Front", "Alice@Alice.Alice", 000001, 40, 8),
             Employee("Bob", 23, "Front", "Alice@Alice.Alice", 000001, 24, 8),
             Employee("Carol", 22, "Front", "Alice@Alice.Alice", 000001, 24, 8),
             Employee("Dave", 21, "Back", "Alice@Alice.Alice", 000001, 40, 8),
             Employee("Evelyn", 25, "Back", "Alice@Alice.Alice", 00001, 20, 4),
             Employee("Guy", 22, "Back", "Alice@Alice.Alice", 000001, 20, 4)]

e1 = Employee("Alice", 21, "Front", "Alice@Alice.Alice", 000001, 40, 8)
    
avail= [("Monday",8,18),("Tuesday",8,18),("Wednesday",8,18),("Thursday",8,18),("Friday",8,18),
        ("Monday",8,16),("Tuesday",8,16),("Wednesday",8,16),("Thursday",8,16),("Friday",8,16),
        ("Monday",10,18),("Tuesday",10,18),("Wednesday",10,18),("Thursday",10,18),("Friday",10,18),
        ("Monday",8,18),("Tuesday",8,18),("Wednesday",8,18),("Thursday",8,18),("Friday",8,18),
        ("Monday",8,14),("Tuesday",8,14),("Wednesday",8,14),("Thursday",8,14),("Friday",8,14),
        ("Monday",12,18),("Tuesday",12,18),("Wednesday",12,18),("Thursday",12,18),("Friday",12,18)]

shifts = []

for x in range(4):
    employees[0].add_availability(avail[   x][0],avail[   x][1],avail[   x][2])
    employees[1].add_availability(avail[ x+5][0],avail[ x+5][1],avail[ x+5][2])
    employees[2].add_availability(avail[x+10][0],avail[x+10][1],avail[x+10][2])
    employees[3].add_availability(avail[x+15][0],avail[x+15][1],avail[x+15][2])
    employees[4].add_availability(avail[x+20][0],avail[x+20][1],avail[x+20][2])
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

#final pass, check that requirements are met

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
