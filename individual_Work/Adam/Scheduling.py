
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


#final pass, check that requirements are met