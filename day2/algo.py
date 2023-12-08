

# Main algo
file = open('input.txt')

lines = file.readlines()


# Task 1
CUBES = {
    "red": "12",
    "green": "13",
    "blue": "14"
}

def join_all_picks(string, delimiters):
    for delimiter in delimiters:
        string = "".join(string.split(delimiter))
    
    return string

def task_one_game_is_possible(line): 
    game_is_possible = True
    line_without_game_id = line.split(":")[-1]
    all_picks = join_all_picks(line_without_game_id, [",", ";"])

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

def task_one():
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

def task_two():
    total_sum_of_powers = 0
    
    for line in lines:
        power_of_sets = 0
        line_without_game_id = line.split(":")[-1].strip()
        current_lowest_picks = {
            "blue": 0,
            "red": 0,
            "green": 0
        }

        all_picks = line_without_game_id.replace(";", ",")

        all_picks_as_array = all_picks.split(", ")

        for pick in all_picks_as_array:
            number, color = pick.split(" ")
            for color_name, lowest in current_lowest_picks.items():
                if color == color_name and int(number) > lowest:
                    current_lowest_picks[color] = int(number)

        power_of_current_lowest_picks = 1
        for color_name, lowest in current_lowest_picks.items():
            power_of_current_lowest_picks *= lowest
        
        total_sum_of_powers += power_of_current_lowest_picks
    
    print(total_sum_of_powers)


task_one()

task_two()
