import * as fs from "fs";


const words = fs.readFileSync('assets/input.txt', 'utf-8');
const wordList = words.split('\n');

function trimLine(line: string) {
  return line.split(": ")[1].trim();
}

function splitLine(line: string) {
  return line.split(" | ").map(part => part.trim())
}

function getLinePoints(matches: number) {
  if (matches === 0) return 0;
  if (matches === 1) return matches;
  return Math.pow(2, (matches - 1))
}

function findLineMatches(line: string) {
  const [w, p] = splitLine(trimLine(line));
  const winningNumbers = w.split(" ").map(el => el.replace(" ", "")).filter(Boolean);
  const playingNumbers = p.split(" ").map(el => el.replace(" ", "")).filter(Boolean);
  const numbersArray = [...new Set(winningNumbers), ...new Set(playingNumbers)]
  const uniqueNumbers = [...new Set(numbersArray)];
  return numbersArray.length - uniqueNumbers.length;
}

function solutionTaskOne() {
  let finalPointSum = 0;
  let idx = 1;

  for(const line of wordList) {
    const matches = findLineMatches(line)

    console.log(`Matches on line ${idx}: ${matches}`);

    finalPointSum += getLinePoints(matches)
    idx += 1;
  }
  console.log(finalPointSum)
}

// solutionTaskOne();


function solutionTaskTwo() {
  const cardsPerLine: Record<number, number> = {};
  
  for (const i of Array(190).keys()) {
    cardsPerLine[i+1] = 1;
  }

  wordList.forEach((line, index) => {
    const matches = findLineMatches(line);

    if(matches > 0) {
      for(const key of Array(matches).keys()) {
        cardsPerLine[index+1+(key+1)] += cardsPerLine[index+1];
      }
    }
    
  })

  console.log(cardsPerLine)
  
  console.log(Object.values(cardsPerLine).reduce((a, b) => a+b))
}

// solutionTaskTwo();