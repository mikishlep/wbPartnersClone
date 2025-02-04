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
                        <li class="tab-item">
                            <a class="tab-link tab-selected" href="/" data-testid="all-goods-tab-link">
                                Все товары
                                <span class="tab-count selected">
                                    <span class="counter">32</span>
                                </span>
                            </a>
                        </li>
                        <li class="tab-item">
                            <a class="tab-link" href="/" data-testid="improve-cards-tab-link">
                                Можно улучшить
                                <span class="tab-count">
                                    <span class="counter">3</span>
                                </span>
                            </a>
                        </li>
                        <li class="tab-item">
                            <a class="tab-link" href="/" data-testid="error-cards-tab-link">
                                Черновики
                                <span class="tab-count">
                                    <span class="counter">2</span>
                                </span>
                            </a>
                        </li>
                        <li class="tab-item">
                            <a class="tab-link" href="/basket-cards" data-testid="basket-cards-tab-link">
                                Корзина
                                <span class="tab-count">
                                    <span class="counter">0</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Products'
}
</script>

<style>
.main-wrapper {
    margin-top: 92px;
}

.add-cards-button {
    -webkit-text-size-adjust: 100%;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-transform: none;
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
    transition: .3s;
}

.add-cards-button__text {
    text-align: center;
}

.nav-goods {
    padding: 0 25px;
}

.all-goods-header {
    display: flex;
}

.tabs-container {
    display: flex;
}
</style>