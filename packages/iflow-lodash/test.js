// @flow

var lodash = require('lodash');
var map = require('lodash').map;

var nums : number[] = [1,2,3,4,5,6];

var num : number;

var nativeSquares : number[];
var directSquares : number[];

var nativeStrings : string[];
var directStrings : string[];

// Array#map, lodash.map, lodash#map
nativeSquares = nums.map(function(num) {
  return num * num;
});
directSquares = map(nums, function(num) {
  return num * num;
});

num = lodash.first(nums);

// return type of iterator is reflected in result and chain
nativeStrings = nums.map(function(num) {
  return JSON.stringify(num);
});
directStrings = map(nums, function(num) {
  return JSON.stringify(num);
});
