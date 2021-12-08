const APP_ID = '#app';

const PRODUCT_ADD_TAB_TITLE = '상품 관리';
const MANAGE_MENU_TAB_TITLE = '잔돈 충전';
const PRODUCT_PURCHASE_TAB_TITLE = '상품 구매';

const PRODUCT_ADD_ID = 'product-add-menu';
const MANAGE_MENU_ID = 'vending-machine-manage-menu';
const PRODUCT_PURCHASE_ID = 'product-purchase-menu';

function $(domId) {
  return document.querySelector(domId);
}

export default class View {
  constructor() {
    this.$appDiv = $(APP_ID);
  }

  renderAppHeader() {
    const $header = document.createElement('div');

    $header.innerHTML = `
      <h1>🥤자판기🥤</h1>
      <button id="${PRODUCT_ADD_ID}">${PRODUCT_ADD_TAB_TITLE}</button>
      <button id="${MANAGE_MENU_ID}">${MANAGE_MENU_TAB_TITLE}</button>
      <button id="${PRODUCT_PURCHASE_ID}">${PRODUCT_PURCHASE_TAB_TITLE}</button>
    `;
    this.$appDiv.append($header);
  }
}
