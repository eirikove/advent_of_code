

CUBES = {
    "red": "12",
    "green": "13",
    "blue": "14"
}

# Main algo
file = open('input.txt')

lines = file.readlines()

def join_all_picks(string):
    delimiters = [",", ";"]
    for delimiter in delimiters:
        string = "".join(string.split(delimiter))
    
    return string

# Task 1
def task_one_game_is_possible(line): 
    game_is_possible = True
    line_without_game_id = line.split(":")[-1]
    all_picks = join_all_picks(line_without_game_id)

    # Replace all colors with numbers
    for key, value in CUBES.items():
        all_picks = all_picks.replace(key, value)

    # Split the string into an array
    all_picks_as_array = all_picks.split()

    # Check that the first of each pair of items in the array is smaller than the second one
    # Game is impossible if it is bigger
    i = 0
    while i < len(all_picks_as_array) and game_is_possible is True:
        if int(all_picks_as_array[i]) > int(all_picks_as_array[i+1]):
            game_is_possible = False
        i += 2
    
    return game_is_possible

# The line counter corresponds to the game ID
task_one_line_counter = 1
task_one_sum_of_possible_game_ids = 0
impossible_games_counter = 0
impossible_game_ids = []

for line in lines:
    if task_one_game_is_possible(line) is True:
        task_one_sum_of_possible_game_ids += task_one_line_counter
        impossible_games_counter += 1
        impossible_game_ids.append(task_one_line_counter)
        
    task_one_line_counter += 1
        
print(task_one_sum_of_possible_game_ids)
print(impossible_games_counter)
print(impossible_game_ids)

# Task 2
# def task_two_game_is_possible(line):
#     return True

# task_two_line_counter = 1
# task_two_sum_of_possible_game_ids = 0

# for line in lines:
#     if game_is_possible(line):
#         task_two_sum_of_possible_game_ids += task_two_line_counter
        
#     task_two_line_counter += 1

# print(task_two_sum_of_possible_game_ids)