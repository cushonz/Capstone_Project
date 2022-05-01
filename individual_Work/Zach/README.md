# Database Functionality

This projects database uses a SQLite3 relational database. 

The database should be capable of the following : 

* Storing login info of business owners

* Storing general employee information

* Storing employee Availability

* Storing employees prefferred days off

* Finding employees to fit specific gaps  by allowing employer to make their own queries

# Database Design

In it's current state the database consist of 4 tables

* Employee

* Availability

* Login

* PrefferedOff

## Employee Table Schema

* employee_id(PRIMARY KEY)

* first_name

* last_name

* rank

* role

## Availability Table

* avail_id(PRIMARY KEY)

* employee_id(FOREIGN KEY)

* start_time

* end_time

* weekday

## Login Table

* Username(PRIMARY_KEY)

* password

* email


