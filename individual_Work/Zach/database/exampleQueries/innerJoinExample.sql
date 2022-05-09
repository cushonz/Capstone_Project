select first_name,start_time,end_time,weekday,role from avail
INNER JOIN employee e on e.employee_id = avail.employee_id

