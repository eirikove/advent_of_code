

RED_CUBES = 12
GREEN_CUBES = 13
BLUE_CUBES = 14

# Main algo
file = open('input.txt')

lines = file.readlines()

# Task 1
def task_one_game_is_possible(line): 
    return True


task_one_line_counter = 1
task_one_sum_of_possible_game_ids = 0

for line in lines:
    if task_one_game_is_possible(line):
        task_one_sum_of_possible_game_ids += task_one_line_counter
        
    task_one_line_counter += 1
        
print(task_one_sum_of_possible_game_ids)

# Task 2
def task_two_game_is_possible(line):
    return True

task_two_line_counter = 1
task_two_sum_of_possible_game_ids = 0

for line in lines:
    if game_is_possible(line):
        task_two_sum_of_possible_game_ids += task_two_line_counter
        
    task_two_line_counter += 1

print(task_two_sum_of_possible_game_ids)