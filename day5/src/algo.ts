import * as fs from "fs";


const words = fs.readFileSync('assets/input.txt', 'utf-8');
const wordList = words.split('\n');

const seeds = wordList[0].replace("seeds: ", "").split(" ").map(str => Number(str))

function getMap(firstLine: number, lastLine?: number) {
  return wordList.slice(firstLine-1, lastLine ? lastLine-1 : undefined)
}

const seedToSoilMap = getMap(4, 28);

const soilToFertilizerMap = getMap(31, 39);

const fertilizerToWaterMap = getMap(42, 74);

const waterToLightMap = getMap(77, 122);

const lightToTemperatureMap = getMap(125, 159);

const temperatureToHumidityMap = getMap(162, 181);

const humidityToLocationMap = getMap(184);

function getMappingAsObject(line: string) {
  const values = line.split(" ");
  return {
    destination: Number(values[0]),
    source: Number(values[1]),
    range: Number(values[2]),
  }
}