CREATE TABLE employee(
    employee_id INTEGER PRIMARY KEY,
    first_name varchar[200],
    last_name varchar[200],
    prof_rank INTEGER
                     );

CREATE TABLE availability(
    avail_id INTEGER PRIMARY KEY,
    start_time varchar[13],
    end_time varchar[13],
    weekday varchar[10]
     );

CREATE TABLE login(
    username varchar[100],
    password varchar[100],
    email varchar[100]

);

CREATE TABLE login(
    username varchar[100],
    password varchar[100],
    email varchar[100]
);

create table preferredOff(
    employee_id int,
    pref_id int PRIMARY KEY,
    Weekday varchar[15],
    start_time varchar[12],
    end_time varchar[12],
    FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
);
