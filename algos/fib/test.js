const { rFib , iFib } = require('./index');

/**********************Recursive************************/

test('Recursive Fib function is defined', () => {
  expect(typeof rFib).toEqual('function');
});

test('Recursive : calculates correct fib value for 1', () => {
  expect(rFib(1)).toEqual(1);
});

test('Recursive : calculates correct fib value for 2', () => {
  expect(rFib(2)).toEqual(1);
});

test('Recursive : calculates correct fib value for 3', () => {
  expect(rFib(3)).toEqual(2);
});

test('Recursive : calculates correct fib value for 4', () => {
  expect(rFib(4)).toEqual(3);
});

test('Recursive : calculates correct fib value for 39', () => {
  expect(rFib(39)).toEqual(63245986);
});

test('Recursive : calculates correct fib value for 100', () => {
  expect(rFib(100)).toEqual(354224848179262000000);
});

/**********************Iterative************************/
test('Iterative Fib function is defined', () => {
  expect(typeof iFib).toEqual('function');
});

test('Iterative : calculates correct fib value for 1', () => {
  expect(iFib(1)).toEqual(1);
});

test('Iterative : calculates correct fib value for 2', () => {
  expect(iFib(2)).toEqual(1);
});

test('Iterative : calculates correct fib value for 3', () => {
  expect(iFib(3)).toEqual(2);
});

test('Iterative : calculates correct fib value for 4', () => {
  expect(iFib(4)).toEqual(3);
});

test('Iterative : calculates correct fib value for 39', () => {
  expect(iFib(39)).toEqual(63245986);
});