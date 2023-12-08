import re

# Task 2 solution
numbers = {
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
}

def convert_to_number(digit_or_written_number):
    if len(digit_or_written_number) > 1:
        return numbers.get(digit_or_written_number)
    return digit_or_written_number

regex = r'(?=(\d|one|two|three|four|five|six|seven|eight|nine))'

def get_regex_matches(line):
    matches = re.findall(regex, line)
    final_matches = []

    if len(matches) is 1:
        final_matches = [convert_to_number(matches[0]), convert_to_number(matches[0])]
    else:
        final_matches = [convert_to_number(matches[0]), convert_to_number(matches[-1])]
    
    return ''.join(final_matches)

# Task 1 solution
def get_first_and_last_digit(line): 
    first_digit = ""
    last_digit = ""
    first_digit_found = False
    last_digit_found = False
    for char in line:
        if not first_digit_found and char.isdigit():
            first_digit_found = True
            first_digit = char
        elif first_digit_found and char.isdigit():
            last_digit = char
            last_digit_found = True
    
    if not last_digit_found:
        last_digit = first_digit
    
    return first_digit + last_digit

# Main program
file = open('input.txt')

lines = file.readlines()

print("TASK 1")
totalTaskOne = 0
for line in lines: 
    # print(line)
    # print(get_first_and_last_digit(line))
    totalTaskOne += int(get_first_and_last_digit(line))

print(totalTaskOne)
print("END TASK 1")

print("TASK 2")

# Task 2
totalTaskTwo = 0
for line in lines:
    # print(line)
    # print(get_regex_matches(line))
    totalTaskTwo += int(get_regex_matches(line))

print(totalTaskTwo)
print("END TASK TWO")