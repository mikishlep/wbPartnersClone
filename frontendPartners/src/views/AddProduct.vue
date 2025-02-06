<template>
  <div class="main-wrapper">
    <div class="add-product-components">
      <div class="card-form-variants">
        <div class="variants-header">
          <span class="var-header-text" style="color: #000">
            Варианты
          </span>
          <span class="var-header-text-count" style="color: #bbb7c9">
            1 из 30
          </span>
        </div>
        <div class="variants-option">
          <div class="variants-option-card">
            <div class="variant-item">
              <div class="variant-item-image">
                <div class="variant-item-image-empty">
                  <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8391 17.6641L2.33906 1.16406L1.16406 2.33906L3.08906 4.2724V15.2474C3.08906 16.1641
                    3.83906 16.9141 4.75573 16.9141H15.7307L17.6557 18.8391L18.8391 17.6641ZM4.75573
                    15.2474V5.93906L10.4557 11.6391L9.75573 12.5141L8.08906 10.2474L5.58906 13.5807H12.3974L14.0641
                    15.2474H4.75573ZM7.11406 3.58073L5.4474 1.91406H16.4224C17.3391 1.91406 18.0891 2.66406 18.0891
                    3.58073V14.5557L16.4224 12.8891V3.58073H7.11406Z" fill="#D1CFD7"></path>
                  </svg>
                </div>
              </div>
              <div class="variant-item-content">
                <div class="variant-item-content-rate">
                  <div class="rating-tag" :style="getRatingStyle(product.rating)">
                    {{ product.rating }}
                  </div>
                </div>
                <div class="variant-item-content-title">
                  {{ variantItem.title }}
                </div>
                <div class="variant-item-content-vendor"></div>
                <div class="variant-item-content-charcs-wrapper"></div>
                <div class="variant-item-content-buttons"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form class="card-form-form">
        <div class="card-form-subject-selector">
          <div class="subject-selector">
            <div class="subject-selector-warning">
              <div class="subject-selector-warning-icon">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23
                  5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3
                  16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM13.0036
                  13.9983H14.003V15.9983H10.003V13.9983H11.003V11.9983H10.003V9.99835H13.0036V13.9983ZM13.0007
                  7.99835C13.0007 8.55063 12.5528 8.99835 12.0003 8.99835C11.4479 8.99835 11 8.55063 11 7.99835C11
                  7.44606 11.4479 6.99835 12.0003 6.99835C12.5528 6.99835 13.0007 7.44606 13.0007 7.99835Z"
                        fill="#5067DE" fill-rule="evenodd"></path>
                </svg>
              </div>
              <span class="subject-selector-warning-text">
                Добавьте фото, название, описание и категорию продавца и дима питух
              </span>
            </div>
          </div>
        </div>
        <div class="card-form-form-variants">
          <div class="variants">
            <div class="variants-variant">
              <div class="variants-media">
                <div data-error="false">
                  <div class="card-media-files-editor" id="media">
                    <div class="media-dnd-files"></div>
                    <div class="card-media-files-editor-open-photo"></div>
                    <div class="card-media-files-editor-studio"></div>
                    <div class="card-media-files-tag-edit"></div>
                    <div class="card-media-files-editor-upload-by-link"></div>
                  </div>
                </div>
              </div>
              <div class="variants-variant-fields">

              </div>
            </div>
          </div>
        </div>
        <div class="card-form-actions">
          <div class="form-actions">
            <div class="form-actions-cancel" style="margin-right: 16px;">
              <router-link to="/">
                <button class="action-back" type="button">
                <span class="back-btn-text">
                  К списку товаров
                </span>
                </button>
              </router-link>
            </div>
            <div class="form-actions-submit">
              <button class="submit-action-button" type="button">
                <span class="submit-action-btn-text">
                  Создать и завершить
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div class="card-form-widgets">
        <div class="widget-wrapper">
          <div class="widget-wrapper-header-wrapper" @click="toggleWidgetContent">
            <div class="widget-wrapper-header" :class="{'widget-opened': isWidgetContentVisible}">
              <div class="widget-wrapper-icon">
                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5013 10.832H12.5013C12.043 10.832 11.668 10.457 11.668 9.9987C11.668 9.54036
                  12.043 9.16536 12.5013 9.16536H17.5013C17.9596 9.16536 18.3346 9.54036 18.3346 9.9987C18.3346
                  10.457 17.9596 10.832 17.5013 10.832ZM17.5013 5.83203H12.5013C12.043 5.83203 11.668 6.20703
                  11.668 6.66536C11.668 7.1237 12.043 7.4987 12.5013 7.4987H17.5013C17.9596 7.4987 18.3346 7.1237
                  18.3346 6.66536C18.3346 6.20703 17.9596 5.83203 17.5013 5.83203ZM12.5013 14.1654H17.5013C17.9596
                  14.1654 18.3346 13.7904 18.3346 13.332C18.3346 12.8737 17.9596 12.4987 17.5013 12.4987H12.5013C12.043
                  12.4987 11.668 12.8737 11.668 13.332C11.668 13.7904 12.043 14.1654 12.5013 14.1654ZM10.0013
                  7.4987V12.4987C10.0013 13.4154 9.2513 14.1654 8.33464 14.1654H3.33464C2.41797 14.1654 1.66797
                  13.4154 1.66797 12.4987V7.4987C1.66797 6.58203 2.41797 5.83203 3.33464 5.83203H8.33464C9.2513
                  5.83203 10.0013 6.58203 10.0013 7.4987ZM8.2513 11.832L7.2013 10.432C7.03464 10.2154 6.70964 10.207
                  6.53464 10.4237L5.41797 11.882L4.70964 11.0237C4.54297 10.8154 4.2263 10.8237 4.05964 11.032L3.44297
                  11.8237C3.2263 12.0987 3.4263 12.4987 3.76797 12.4987H7.91797C8.25964 12.4987 8.45964 12.107 8.2513
                  11.832Z" fill="#6C11C9"></path>
                </svg>
              </div>
              <div class="widget-wrapper-title">
                <span class="widget-wrapper-title-text">
                  Требования к медиа
                </span>
              </div>
              <div class="widget-wrapper-toggle">
                <svg :class="{'rotated': isWidgetContentVisible}" fill="none" height="16" viewBox="-3 -7 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" d="M16.293 0.292969L17.7072 1.70718L9.00008 10.4143L0.292969
                  1.70718L1.70718 0.292969L9.00008 7.58586L16.293 0.292969Z" fill="#4e4e53" fill-rule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="widget-wrapper-content" v-show="isWidgetContentVisible">
            <div class="requirements-container">
              <div class="requirements-section">
                <h4 class="requirements-title">Требования к фото</h4>
                <div class="requirement-name">Формат</div>
                <div class="requirement-text">JPG, PNG, WEBP</div>
                <div class="requirement-name">Разрешение</div>
                <div class="requirement-text">от 700×900 px</div>
                <div class="requirement-name">Качество сжатия</div>
                <div class="requirement-text">от 65%</div>
                <div class="requirement-name">Размер</div>
                <div class="requirement-text">до 10 Мб</div>
                <div class="requirement-name">Количество</div>
                <div class="requirement-text">до 30 шт</div>
                <h4 class="requirements-title" style="grid-column: span 2; margin-bottom: 8px; margin-top: 20px;">Требования к видео</h4>
                <div class="requirement-name">Формат</div>
                <div class="requirement-text">MOV, MP4</div>
                <div class="requirement-name">Размер</div>
                <div class="requirement-text">до 50 Мб</div>
                <div class="requirement-name">Количество</div>
                <div class="requirement-text">1 шт</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data() {
    return {
      product: {
        rating: 0,
      },
      variantItem: {
        title: 'Укажите наименование'
      },
      isWidgetContentVisible: false
    }
  },
  methods: {
    getRatingStyle(rating) {
      const numericRating = parseFloat(rating);
      if (numericRating === 10) {
        return {
          backgroundColor: '#f7f7fa',
          color: '#067b00'
        };
      } else if (numericRating > 7 && numericRating < 10) {
        return {backgroundColor: '#ff8058'};
      } else if (numericRating == 0) {
        return {
          backgroundColor: '#f0f0f3',
          color: '#767386'
        }
      } else {
        return { backgroundColor: '#f96666' };
      }
    },
    toggleWidgetContent() {
      this.isWidgetContentVisible = !this.isWidgetContentVisible;
    }
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
}

.main-wrapper {
  margin-top: 60px;
  height: calc(100vh - 60px);
  padding: 12px 24px 0 24px;
  display: flex;
  overflow: hidden;
  background-color: #f0f0f3;
}

.add-product-components {
  display: grid;
  grid-template-columns: 300px minmax(0, 1240px) 300px;
  gap: 16px;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;
}

.card-form-variants {
  position: sticky;
  top: 50px;
  height: fit-content;
  align-self: start;
  max-width: 300px;
}

.variants-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.variants-option {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 384px;
  max-width: 300px;
  overflow: auto;
  height: 192px;
  background-color: #f7f7fa;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.variant-item {
  border: 1px solid #0000;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 192px;
  min-height: 192px;
  min-width: 300px;
  padding: 12px;
  position: relative;
  width: 100%;
}

.variant-item-image {
  border: .5px solid #f0f0f3;
  border-radius: 6px;
  height: 110px;
  position: relative;
  width: 76px;
}

.variant-item-image-empty {
  align-items: center;
  background: #f0f0f3;
  border: .5px solid #e3e4ea;
  border-radius: 6px;
  display: flex;
  height: 110px;
  justify-content: center;
  width: 76px;
}

.variant-item-content {
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  margin-left: 12px;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.colorTag {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  max-width: 76px;
  display: inline-block;
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
  margin-bottom: 5px;
  width: fit-content;
}

.variant-item-content-title {
  color: #000;
  font-family: latobold, arial, sans-serif;
  font-size: 13px;
  height: 16px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-weight: 600;
}

/* ----------WIDGET--------- */

.card-form-widgets {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: fit-content;
  max-width: 300px;
  position: sticky;
  top: 50px;
}

.widget-wrapper {
  min-width: 300px;
  background: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  width: 300px;
}

.widget-wrapper-header-wrapper {
  padding: 10px 10px 0;
}

.widget-wrapper-icon {
  margin-right: 12px;
  display: flex;
}

.widget-wrapper-header {
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  padding-bottom: 10px;
}

.widget-wrapper-toggle {
  display: flex;
  height: 16px;
  margin-left: auto;
}

.widget-wrapper-content {
  display: block;
  padding: 12px;
}

.rotated {
  transform: rotate(180deg);
}

.requirements-container {
  display: grid;
  gap: 16px;
}

.requirements-section {
  column-gap: 12px;
  display: grid;
  grid-template-columns: max-content 1fr;
  max-width: 100%;
  width: max-content;
}

.requirements-title {
  font-weight: 500;
  line-height: 20px;
  color: #000;
  grid-column: span 2;
  margin-bottom: 8px;
}

.requirement-name {
  font-size: 13px;
  line-height: 16px;
  color: #767386;
  min-width: max-content;
}

.requirement-text {
  font-size: 13px;
  line-height: 16px;
  color: #000;
}

.widget-wrapper-header.widget-opened {
  border-bottom: 1px solid #f0f0f3;
}

/* ---------MIDDLE FORM----------- */

.card-form-form {
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
}

.card-form-subject-selector {
  display: block;
  margin-bottom: 12px;
}

.subject-selector {
  background: #fff;
  border-radius: 8px;
  box-sizing: border-box;
}

.subject-selector-warning {
  align-items: center;
  display: flex;
  flex-direction: row;
  padding: 10px 18px;
}

.subject-selector-warning-icon {
  align-items: center;
  display: flex;
}

.subject-selector-warning-text {
  margin-left: 8px;
}

/* ---------СОХРАНЕНИЕ С ВЫХОДОМ СНИЗУ--------- */

.card-form-actions {
  width: 100%;
  background: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  bottom: 0;
  box-shadow: 0 7px 20px 0 #0000001a;
  box-sizing: border-box;
  height: 64px;
  max-width: inherit;
  padding: 12px 24px;
  position: fixed;
  z-index: 50;
}

.form-actions {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.action-back {
  gap: 6px;
  height: 44px;
  padding: 12px 16px;
  align-items: center;
  background-color: #4a4a5914;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  min-width: 0;
  outline: none;
  overflow: hidden;
  position: relative;
  transition-duration: .2s;
  transition-property: background-color, color;
}

.submit-action-button {
  gap: 6px;
  height: 44px;
  padding: 12px 16px;
  align-items: center;
  background-color: #9a41fe;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  min-width: 0;
  outline: none;
  overflow: hidden;
  position: relative;
  transition-duration: .2s;
  transition-property: background-color, color;
}

/* ----------MIDDLE FORM FORM----------*/

.card-form-form-variants {
  background: #fff;
  border-radius: 8px;
  margin-bottom: 100px;
  max-width: 1280px;
  padding: 20px 24px 24px;
}

.variants {
  display: flex;
  flex-direction: row;
}

.variants-variant {
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;
}

.variants-media {
  max-width: 312px;
  min-width: 312px;
}

.variants-variant-fields {
  overflow: hidden;
  width: 100%;
}

.card-media-files-editor {
  display: flex;
  flex-direction: column;
}

.media-dnd-files {
  display: inline-block;
  position: relative;
  width: 100%;
}
</style>