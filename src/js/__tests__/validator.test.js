
import Validator from '../validator';

test('Validator test', () => {
  const result = new Validator('Alena_26-91tt');

  expect(result.validateUsername()).toEqual(true);
});

test('Validator test error type 1', () => {
  const result = new Validator('_Alena_26-91tt');

  expect(result.validateUsername()).toEqual(false);
});

test('Validator test error type 2', () => {
  const result = new Validator('Alena_26-91tt-');

  expect(result.validateUsername()).toEqual(false);
});

test('Validator test error type 3', () => {
  const result = new Validator('Alena_26-91');

  expect(result.validateUsername()).toEqual(false);
});

test('Validator test error type 4', () => {
  const result = new Validator('Alena_26-9111');

  expect(result.validateUsername()).toEqual(false);
});

test('Validator test error type 5', () => {
  const result = new Validator('Алёна_26-9111');

  expect(result.validateUsername()).toEqual(false);
});
