import {
  ADD_ERROR_MESSAGE,
  MINIMUM_PRICE_INPUT,
  MINIMUM_QUANTITY_INPUT,
} from '../constant/constant.js';

function isNotEmptyName(name) {
  return name.trim() !== '';
}

function isAboveMinimum(value, minimum) {
  return +value >= minimum;
}

function isMultipleOf10(price) {
  return +price % 10 === 0;
}

function isValidPrice(price) {
  return isAboveMinimum(price, MINIMUM_PRICE_INPUT) && isMultipleOf10(price);
}

export default class Validator {
  static isValidAddInput({ name, price, quantity }) {
    if (
      isNotEmptyName(name)
      && isValidPrice(price)
      && isAboveMinimum(quantity, MINIMUM_QUANTITY_INPUT)
    ) {
      return true;
    }
    alert(ADD_ERROR_MESSAGE);
    return false;
  }
}
