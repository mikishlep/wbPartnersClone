<template>
  <div class="main-wrapper">
    <div class="nav-goods">
      <div class="all-goods-header">
        <router-link to="/add-product">
          <button class="add-cards-button" data-testid="add-cards-button-link" type="button">
            <span class="add-cards-button__text" data-testid="text">Добавить...</span>
          </button>
        </router-link>
        <div class="tabs-container">
          <ul class="tabs-list" data-name="Tabs">
            <li
                v-for="(tab, index) in tabsWithCounts"
                :key="index"
                :class="['tab-item', { 'tab-selected': selectedTab === index }]"
                @click="selectTab(index)"
            >
              <a class="tab-link" href="#" :data-testid="tab.testid">
                {{ tab.label }}
                <span class="tab-count">
                  <span class="counter">{{ tab.count }}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Таблица -->
    <div class="table-container">
      <table class="products-table">
        <thead>
        <tr>
          <th class="hasCheckbox" style="width: 48px; max-width: 48px; min-width: 48px;">
            <input type="checkbox" @change="toggleAllProducts" :checked="isAllSelected" class="checkboxGoods">
          </th>
          <th style="width: 431px; max-width: 431px; min-width: 431px; padding-right: 16px" class="filter-input">
            <div class="input-container">
              <input
                  type="search"
                  class="input-field"
                  placeholder="Артикул продавца, артикул WB, баркод"
              />
              <button class="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </th>
          <th style="width: 125px; max-width: 125px; min-width: 125px;">Отзывы</th>
          <th style="width: 100px; max-width: 100px; min-width: 100px;">Остаток</th>
          <th style="width: 150px; max-width: 150px; min-width: 150px;">Размеры</th>
          <th style="width: 150px; max-width: 150px; min-width: 150px;">Баркоды</th>
          <th style="width: 120px; max-width: 120px; min-width: 120px;">Ярлыки</th>
          <th style="width: 150px; max-width: 150px; min-width: 150px;">Изменено</th>
          <th style="width: 100px; max-width: 100px; min-width: 100px;">Цвета</th>
          <th style="width: 75px; max-width: 75px; min-width: 75px;" class="goodRedactHeader"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td class="hasCheckbox">
            <input type="checkbox" :value="product.id" v-model="selectedProducts" class="checkboxGoods">
          </td>
          <td class="product-info-cell">
            <div class="product-info">
              <div class="product-image" role="button" tabindex="0">
                <img
                    :alt="product.name"
                    :src="product.image"
                    class="product-image__img"
                    :data-testid="'product-image-' + product.id"
                />
              </div>
              <div class="product-details" style="padding-left: 16px; width: 100%;">
                <div class="product-title" data-testid="product-title" style="color: #4a4a59; line-height: 20px; font-size: 16px; margin-bottom: 4px;">
                  {{ product.name }}
                </div>
                <div class="product-meta">
                    <span class="product-subcategory" data-testid="product-subcategory">
                      {{ product.subcategory }}
                    </span>
                  <span class="product-brand" data-testid="product-brand">
                      {{ product.brand }}
                    </span>
                </div>
                <div class="product-codes">
                    <span class="product-wb" data-testid="product-wb">
                      Артикул WB: {{ product.wbArticle }}
                    </span>
                  <span class="product-vendor" data-testid="product-vendor">
                      Артикул продавца: {{ product.vendorCode }}
                    </span>
                </div>
                <div class="product-rating" data-testid="product-rating">
                  <div class="rating-tag" :style="getRatingStyle(product.rating)">
                      {{ product.rating }}
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td style="color: #bbb7c9;">{{ product.reviews }}</td>
          <td style="color: #77767e;">{{ product.stock }}</td>
          <td style="color: #77767e;">{{ product.sizes }}</td>
          <td style="color: #77767e;">{{ product.barcodes }}</td>
          <td style="color: #bbb7c9;">{{ product.tags }}</td>
          <td style="color: #bbb7c9;">{{ product.updatedAt }}</td>
          <td class="colorTag" style="color: #77767e;">{{ product.colors }}</td>
          <td class="goodRedact">
            <div class="goodRedactContent">
              <div class="goodRedactButtons">
                <button class="buttonEdit" type="button" data-testid="edit-button-{{ product.id }}">
                  <svg fill="none" height="24" viewBox="-1 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.9557 0.227529L13.7721 2.04386C14.0755 2.34723 14.0755 2.84119 13.7721 3.14456L12.3486 4.56808L9.43153 1.65104L10.855 0.227529C11.1584 -0.0758429 11.6524 -0.0758429 11.9557 0.227529ZM0 13.9999V11.0829L8.60719 2.47568L11.5242 5.39272L2.91704 13.9999H0Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                </button>
                <button class="buttonDelete" type="button" data-testid="delete-button-{{ product.id }}">
                  <svg fill="none" height="24" viewBox="-2 -1 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M7 0H13C14.1046 0 15 0.89543 15 2V3H18C19.1046 3 20 3.89543 20 5V7C20 8.10457 19.1046 9 18 9H17.9199L17 20C17 21.1046 16.1046 22 15 22H5C3.89543 22 3 21.1046 3.00345 20.083L2.07987 9H2C0.89543 9 0 8.10457 0 7V5C0 3.89543 0.89543 3 2 3H5V2C5 0.89543 5.89543 0 7 0ZM2 5H5H15H18V7H2V5ZM4.08649 9H15.9132L15.0035 19.917L15 20H5L4.08649 9ZM13 2V3H7V2H13Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                </button>
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      selectedTab: 0,
      tabs: [
        {label: 'Все товары', count: 0, testid: 'all-goods-tab-link'},
        {label: 'Можно улучшить', count: 0, testid: 'improve-cards-tab-link'},
        {label: 'Черновики', count: 0, testid: 'error-cards-tab-link'},
        {label: 'Корзина', count: 0, testid: 'basket-cards-tab-link'}
      ],
      products: [
        {
          id: 1,
          name: "Сварочный аппарат опто-волоконного кабеля аккумуляторный",
          image:
              "https://basket-19.wbbasket.ru/vol3257/part325771/325771037/images/c516x688/1.webp?1738745907760",
          subcategory: "Сварочные аппараты",
          brand: "Сварка полуавтомат",
          wbArticle: "325771037",
          vendorCode: "wb673331i9",
          rating: "9.5",
          reviews: 'Нет отзывов',
          stock: 0,
          sizes: "",
          barcodes: "2042741959214",
          tags: "",
          updatedAt: "4.02 15:52",
          colors: "Красный, Синий",
          status: "active"
        },
        {
          id: 2,
          name: "Шторы",
          image: "https://basket-19.wbbasket.ru/vol3210/part321011/321011232/images/c516x688/1.webp?1738745907760",
          subcategory: "Шторы интерьерные",
          brand: "ШТОРЫ ТУТ",
          wbArticle: "321011232",
          vendorCode: "wb3dqo3zlp",
          rating: "6.2",
          reviews: "Нет отзывов",
          stock: 3,
          sizes: "46, 55, 67",
          barcodes: "2042676899647",
          tags: "",
          updatedAt: "4.02 9:15",
          colors: "Черный, Белый",
          status: "active"
        },
        {
          id: 2,
          name: "Сумка через плечо",
          image: "https://basket-19.wbbasket.ru/vol3219/part321911/321911829/images/c516x688/1.webp?1738767133714",
          subcategory: "Сумки",
          brand: "",
          wbArticle: "321911829",
          vendorCode: "wb6sy9uq6l",
          rating: "10",
          reviews: "Нет отзывов",
          stock: 10,
          sizes: "",
          barcodes: "2042676899647",
          tags: "",
          updatedAt: "31.01 23:44",
          colors: "Черный",
          status: "active"
        }
      ],
      selectedProducts: []
    };
  },
  computed: {
    filteredProducts() {
      return this.products;
    },
    isAllSelected() {
      return this.filteredProducts.length > 0 && this.selectedProducts.length === this.filteredProducts.length;
    },
    allProductsCount() {
      return this.products.length;
    },
    tabsWithCounts() {
      return [
        {label: 'Все товары', count: this.products.length, testid: 'all-goods-tab-link'},
        {
          label: 'Можно улучшить',
          count: this.products.filter(p => p.status === 'improvable').length,
          testid: 'improve-cards-tab-link'
        },
        {
          label: 'Черновики',
          count: this.products.filter(p => p.status === 'draft').length,
          testid: 'error-cards-tab-link'
        },
        {
          label: 'Корзина',
          count: this.products.filter(p => p.status === 'trash').length,
          testid: 'basket-cards-tab-link'
        }
      ];
    }
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;
    },
    editProduct(id) {
      console.log("Редактирование товара с ID:", id);
    },
    toggleAllProducts(event) {
      if (event.target.checked) {
        this.selectedProducts = this.filteredProducts.map(product => product.id);
      } else {
        this.selectedProducts = [];
      }
    },
    getRatingStyle(rating) {
      const numericRating = parseFloat(rating);
      if (numericRating === 10) {
        return {
          backgroundColor: '#f7f7fa',
          color: '#067b00'
        };
      } else if (numericRating > 7 && numericRating < 10) {
        return { backgroundColor: '#ff8058' };
      } else {
        return { backgroundColor: '#f96666' };
      }
    }
  }
}
</script>

<style>
.main-wrapper {
  margin-top: 92px;
}

.add-cards-button {
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 12px;
  background-color: #6c11c9;
  border: 1px solid #6c11c9;
  color: #fff;
  border-radius: 4px;
  outline: none;
  transition: .3s;
  text-decoration: none;
}

.add-cards-button:hover {
  background-color: #7927ce;
}

.nav-goods {
  padding: 0 25px;
}

.all-goods-header {
  display: flex;
}

.tabs-container {
  display: flex;
  margin-left: 24px;
  overflow-x: auto;
}

.tabs-list {
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
}

.tab-item {
  margin-right: 4px;
  border-radius: 20px;
  padding: 10px 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tab-selected {
  background-color: #e0dceb;
  border-color: #e0dceb;
}

.tab-link {
  color: #000;
}

.counter {
  color: #9d9d9d;
  font-weight: 300;
  margin-left: 3px;
}

/* Стили для таблицы */
table {
  table-layout: fixed;
}

.table-container {
  padding-top: 20px;
  overflow: auto;
}

.products-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 6px 20px #0000001a;
}

.products-table th,
.products-table td {
  padding: 8px;
  border: none;
  text-align: left;
}

.products-table tbody tr {
  height: 112px;
}

.products-table thead tr {
  height: 60px;
}

input[type="checkbox"] {
  cursor: pointer;
  width: 18px;
  height: 18px;
}

.hasCheckbox {
  padding: 8px !important;
  text-align: center !important;
  position: relative;
}

td {
  vertical-align: top;
  cursor: pointer;
}

tbody tr:hover {
  background-color: #f0f0f3;
}

thead th {
  color: #bbb7c9;
  font-weight: 400;
  font-size: 16px;
}

.input-container {
  display: flex;
  align-items: center;
  border: 1px solid #e3e4ea;
  border-radius: 6px;
  padding: 6px 10px;
  background-color: #fff;
  width: 100%;
  max-width: 100%;
}

.input-field {
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 5px;
}

.input-field::placeholder {
  color: #767386;
  font-size: 16px;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.icon {
  width: 22px;
  height: 22px;
  color: #d1cfd7;
}

.product-info {
  display: flex;
}

.product-image {
  flex-shrink: 0;
}

.product-image img {
  border-radius: 8px;
  height: 104px;
  width: 72px;
}

.rating-tag {
  align-items: center;
  border-radius: 6px;
  display: inline-block;
  font-family: lato, arial, sans-serif;
  font-size: 13px;
  font-weight: 550;
  height: 24px;
  line-height: 16px;
  padding: 4px 8px;
  background-color: #ff8058;
  color: #fff;
}

.product-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-details {
  max-width: calc(100% - 72px);
}

.colorTag {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  max-width: 76px;
  display: inline-block;
}

.product-meta, .product-codes {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: .01em;
  line-height: 16px;
  color: #77767e;
}

.product-meta {
  margin-bottom: 2px;
}

.product-codes {
  display: grid;
  margin-bottom: 4px;
  gap: 2px;
}

.goodRedactHeader {
  box-shadow: -10px 0 20px -10px #0000001a;
}

.goodRedact {
  padding: 12px;
  background-color: #fff;
}

td.goodRedact {
  border-top: 1px solid #f0f0f3;
  box-shadow: -10px 0 20px -10px #0000001a;
  vertical-align: middle;
}

.goodRedactContent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: center;
}

.goodRedactButtons {
  display: flex;
  gap: 8px;
}

.buttonEdit, .buttonDelete {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  min-width: 16px;
  min-height: 16px;
}

.buttonEdit svg, .buttonDelete svg {
  width: 16px;
  height: 16px;
  color: #b3b3b3;
  transition: fill 0.3s ease;
}

@media  {
  
}
</style>
