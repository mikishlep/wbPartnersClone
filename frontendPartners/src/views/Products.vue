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
                            v-for="(tab, index) in tabs" 
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
                        <th>Название</th>
                        <th>Отзывы</th>
                        <th>Остаток</th>
                        <th>Размеры</th>
                        <th>Штрих-коды</th>
                        <th>Теги</th>
                        <th>Дата обновления</th>
                        <th>Цвета</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in filteredProducts" :key="product.id">
                        <td>{{ product.name }}</td>
                        <td>{{ product.reviews }}</td>
                        <td>{{ product.stock }}</td>
                        <td>{{ product.sizes }}</td>
                        <td>{{ product.barcodes }}</td>
                        <td>{{ product.tags }}</td>
                        <td>{{ product.updatedAt }}</td>
                        <td>{{ product.colors }}</td>
                        <td><button @click="editProduct(product.id)">Редактировать</button></td>
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
                { label: 'Все товары', count: 32, testid: 'all-goods-tab-link' },
                { label: 'Можно улучшить', count: 3, testid: 'improve-cards-tab-link' },
                { label: 'Черновики', count: 2, testid: 'error-cards-tab-link' },
                { label: 'Корзина', count: 0, testid: 'basket-cards-tab-link' }
            ],
            products: [
                {
                    id: 1,
                    name: "Товар 1",
                    reviews: 4.5,
                    stock: 20,
                    sizes: "M, L, XL",
                    barcodes: "1234567890",
                    tags: "новинка, распродажа",
                    updatedAt: "2025-02-05",
                    colors: "Красный, Синий"
                },
                {
                    id: 2,
                    name: "Товар 2",
                    reviews: 4.2,
                    stock: 10,
                    sizes: "S, M, L",
                    barcodes: "0987654321",
                    tags: "популярный, летний",
                    updatedAt: "2025-02-04",
                    colors: "Черный, Белый"
                }
            ]
        };
    },
    computed: {
        filteredProducts() {
            return this.products;
        }
    },
    methods: {
        selectTab(index) {
            this.selectedTab = index;
        },
        editProduct(id) {
            console.log("Редактирование товара с ID:", id);
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
.table-container {
    padding-top: 25px;
}

.products-table {
    width: 100%;
    border-collapse: collapse;
}

.products-table th,
.products-table td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
