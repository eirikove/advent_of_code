"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const words = fs.readFileSync('assets/input.txt', 'utf-8');
const wordList = words.split('\n');
function trimLine(line) {
    return line.split(": ")[1].trim();
}
function splitLine(line) {
    return line.split(" | ").map(part => part.trim());
}
function getLinePoints(matches) {
    if (matches === 0)
        return 0;
    if (matches === 1)
        return matches;
    return Math.pow(2, (matches - 1));
}
function findLineMatches(line) {
    const [w, p] = splitLine(trimLine(line));
    const winningNumbers = w.split(" ").map(el => el.replace(" ", "")).filter(Boolean);
    const playingNumbers = p.split(" ").map(el => el.replace(" ", "")).filter(Boolean);
    const numbersArray = [...new Set(winningNumbers), ...new Set(playingNumbers)];
    const uniqueNumbers = [...new Set(numbersArray)];
    return numbersArray.length - uniqueNumbers.length;
}
function solutionTaskOne() {
    let finalPointSum = 0;
    let idx = 1;
    for (const line of wordList) {
        const matches = findLineMatches(line);
        console.log(`Matches on line ${idx}: ${matches}`);
        finalPointSum += getLinePoints(matches);
        idx += 1;
    }
    console.log(finalPointSum);
}
// solutionTaskOne();
function solutionTaskTwo() {
    const cardsPerLine = {};
    for (const i of Array(190).keys()) {
        cardsPerLine[i + 1] = 1;
    }
    wordList.forEach((line, index) => {
        const matches = findLineMatches(line);
        if (matches > 0) {
            for (const key of Array(matches).keys()) {
                cardsPerLine[index + 1 + (key + 1)] += cardsPerLine[index + 1];
            }
        }
    });
    console.log(cardsPerLine);
    console.log(Object.values(cardsPerLine).reduce((a, b) => a + b));
}
solutionTaskTwo();
