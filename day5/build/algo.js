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
const seeds = wordList[0].replace("seeds: ", "").split(" ").map(str => Number(str));
function getMap(firstLine, lastLine) {
    return wordList.slice(firstLine - 1, lastLine ? lastLine - 1 : undefined);
}
const seedToSoilMap = getMap(4, 28);
const soilToFertilizerMap = getMap(31, 39);
const fertilizerToWaterMap = getMap(42, 74);
const waterToLightMap = getMap(77, 122);
const lightToTemperatureMap = getMap(125, 159);
const temperatureToHumidityMap = getMap(162, 181);
const humidityToLocationMap = getMap(184);
function getMappingAsObject(line) {
    const values = line.split(" ");
    return {
        destination: Number(values[0]),
        source: Number(values[1]),
        range: Number(values[2]),
    };
}
console.log(getMappingAsObject(seedToSoilMap[0]));
