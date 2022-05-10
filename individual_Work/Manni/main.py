# This is a sample Python script.

'''
* assignment: we are working with a restaurant and we wanna make an app for them that takes the employee’s availabilities
and makes a schedule
* algorithm should be in Python
* make an algorithm that takes the availabilities of the employees from the DB or user input and makes a schedule out
of them where there is no overlapping things going on
'''

from calendar import weekday
from employee import Employee # importing our 'Employee' class
import sqlite3 # importing SQLite3 for Python so we can work with our database 'newDB'
import random

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
    
    
    
# See PyCharm help at https://www.jetbrains.com/help/pycharm/
