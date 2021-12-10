import { $ } from '../view/initView.js';
import {
  PRODUCT_ADD_BUTTON_ID,
  PRODUCT_NAME_INPUT_ID,
  PRODUCT_PRICE_INPUT_ID,
  PRODUCT_QUANTITY_INPUT_ID,
} from '../view/initProductAdd.js';

function onAdd(vendingMachine) {
  const product = {
    name: $(`#${PRODUCT_NAME_INPUT_ID}`).value,
    price: $(`#${PRODUCT_PRICE_INPUT_ID}`).value,
    quantity: $(`#${PRODUCT_QUANTITY_INPUT_ID}`).value,
  };

  vendingMachine.addProduct(product);
}

export default function addProductHandler(vendingMachine) {
  const $button = $(`#${PRODUCT_ADD_BUTTON_ID}`);

  $button.addEventListener('click', () => onAdd(vendingMachine));
}