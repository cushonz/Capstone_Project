class employee:

    def __init__(self,pr): # Sets up employee object

        self.prof_Rank = pr # Proficiency Rank

        self.availability = [ # a one means there is no conflict, a 0 means the employee is unavailable.
            [0,0,0,0,0,0,0,0,0,0,0,0], #Monday
            [0,0,0,0,0,0,0,0,0,0,0,0], #Tuesday
            [0,0,0,0,0,0,0,0,0,0,0,0], #Wednesday
            [0,0,0,0,0,0,0,0,0,0,0,0], #Thursday
            [0,0,0,0,0,0,0,0,0,0,0,0], #Friday
            [0,0,0,0,0,0,0,0,0,0,0,0], #Saturday
            [0,0,0,0,0,0,0,0,0,0,0,0], #Sunday
        ]

