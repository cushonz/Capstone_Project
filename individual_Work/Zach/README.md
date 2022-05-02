# Database Functionality

This projects database uses a SQLite3 relational database. Using SQLite enabled us to rapidly prototype and remove the complexity of hosting the data.

SQLite is built into Python and will allow my group members to work with the database conveniently.

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

These 4 tables allow for the rapid recall and querying of data, employee availability will be able to be looked up
easily in the event of needing a stand-in employee.

## Employee Table Schema

* employee_id(PRIMARY KEY)

* first_name

* last_name

* rank

* role

This table is the primary index for employee infromation, this table will likely expand as Manni and Adam need more
specific data. As of right now it is used to relate employees to their respective
availability entries in the availability table.

## Availability Table

* avail_id(PRIMARY KEY)

* employee_id(FOREIGN KEY)

* start_time

* end_time

* weekday

This table holds all entries for each employee's weekly availability, using an availability ID in conjunction with
employee ID employees can log their availability.

## Login Table

* Username(PRIMARY_KEY)

* password

* email

This table is the most simple of the 3 and will not need to reference data
outside of itself, passwords will be hashed using php.

