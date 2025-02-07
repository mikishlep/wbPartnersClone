<template>
  <div class="layout-view">
    <div class="app-content">
      <div class="app-content-children">
        <div class="base-page-layout">
          <div class="base-page-layout-components">
            <div class="card">
              <div class="card-form">
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
                  <form class="card-form-form" @submit.prevent>
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
                Добавьте фото, название, описание и категорию продавца
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
                                <div class="media-dnd-files">
                                  <div class="uploader-button">
                                    <button class="uploader-button-button-icon" type="button">
                                      <div class="uploader-button-icon">
                                        <svg fill="none" height="112" viewBox="0 0 145 112" width="145"
                                             xmlns="http://www.w3.org/2000/svg">
                                          <rect fill="#F7F7FA" height="67.9879" rx="7.11874" stroke="#D1CFD7"
                                                stroke-dasharray="2 2" stroke-width="0.5"
                                                transform="rotate(-9.33849 0.7228 38.6241)" width="52.0605" x="0.7228"
                                                y="38.6241"></rect>
                                          <g filter="url(#filter0_d_2035_118574)">
                                            <rect fill="#F7F7FA" height="68.4879" rx="7.36874"
                                                  transform="rotate(4.51004 39.666 20.7344)" width="52.5605" x="39.666"
                                                  y="20.7344"></rect>
                                            <rect height="67.9879" rx="7.11874" stroke="#D1CFD7" stroke-dasharray="2 2"
                                                  stroke-width="0.5" transform="rotate(4.51004 39.8956 21.0033)"
                                                  width="52.0605" x="39.8956" y="21.0033"></rect>
                                          </g>
                                          <g filter="url(#filter1_d_2035_118574)">
                                            <rect fill="#F7F7FA" height="68.4879" rx="7.36874"
                                                  transform="rotate(16.9159 83.2754 6)" width="52.5604" x="83.2754"
                                                  y="6"></rect>
                                            <rect height="67.9879" rx="7.11874" stroke="#D1CFD7" stroke-dasharray="2 2"
                                                  stroke-width="0.5" transform="rotate(16.9159 83.4418 6.31193)"
                                                  width="52.0604" x="83.4418" y="6.31193"></rect>
                                          </g>
                                          <defs>
                                            <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"
                                                    height="97.2969" id="filter0_d_2035_118574" width="82.6719" x="21.8359"
                                                    y="14.2891">
                                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix"
                                                             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                              <feOffset dy="6"></feOffset>
                                              <feGaussianBlur stdDeviation="6.5"></feGaussianBlur>
                                              <feColorMatrix type="matrix"
                                                             values="0 0 0 0 0.125417 0 0 0 0 0.142829 0 0 0 0 0.232917 0 0 0 0.1 0"></feColorMatrix>
                                              <feBlend in2="BackgroundImageFix" mode="normal"
                                                       result="effect1_dropShadow_2035_118574"></feBlend>
                                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2035_118574" mode="normal"
                                                       result="shape"></feBlend>
                                            </filter>
                                            <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"
                                                    height="103.172" id="filter1_d_2035_118574" width="92.5664" x="52.1719"
                                                    y="0.824219">
                                              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix"
                                                             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                              <feOffset dy="6"></feOffset>
                                              <feGaussianBlur stdDeviation="6.5"></feGaussianBlur>
                                              <feColorMatrix type="matrix"
                                                             values="0 0 0 0 0.125417 0 0 0 0 0.142829 0 0 0 0 0.232917 0 0 0 0.1 0"></feColorMatrix>
                                              <feBlend in2="BackgroundImageFix" mode="normal"
                                                       result="effect1_dropShadow_2035_118574"></feBlend>
                                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2035_118574" mode="normal"
                                                       result="shape"></feBlend>
                                            </filter>
                                          </defs>
                                        </svg>
                                      </div>
                                      <div class="uploader-button-add">Загрузите файлы или перетащите их сюда</div>
                                      <div class="uploader-button-requirements-tooltip">
                                        <div class="requirements-tooltip">
                                          <div class="requirements-tooltip-trigger" role="button" tabindex="-1">
                                            <div class="requirements-tooltip-text">Какими должны быть фото и видео</div>
                                            <div class="requirements-tooltip-icon">
                                              <svg fill="none" height="16" viewBox="0 0 16 16" width="16"
                                                   xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.33398 4.66536H8.66732V5.9987H7.33398V4.66536ZM7.33398
                                    7.33203H8.66732V11.332H7.33398V7.33203ZM8.00065 1.33203C4.32065 1.33203 1.33398
                                    4.3187 1.33398 7.9987C1.33398 11.6787 4.32065 14.6654 8.00065 14.6654C11.6807
                                    14.6654 14.6673 11.6787 14.6673 7.9987C14.6673 4.3187 11.6807 1.33203 8.00065
                                    1.33203ZM8.00065 13.332C5.06065 13.332 2.66732 10.9387 2.66732 7.9987C2.66732
                                    5.0587 5.06065 2.66536 8.00065 2.66536C10.9407 2.66536 13.334 5.0587 13.334
                                    7.9987C13.334 10.9387 10.9407 13.332 8.00065 13.332Z" fill="#D1CFD7"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="uploader-button-choose">
                                        <button class="choose-media btn-settings" @click="triggerFileInput">
                                          <span class="caption">Выбрать</span>
                                        </button>
                                      </div>
                                    </button>
                                    <input
                                        ref="fileInput"
                                        @change="handleFileUpload"
                                        accept="image/jpg,image/png,image/jpeg,image/webp,video/mp4,video/quicktime"
                                        autocomplete="off"
                                        class="media-upload-input"
                                        id="photo"
                                        multiple name="photo"
                                        type="file"
                                    >
                                  </div>
                                  <div class="card-media-files-editor-media-files">
                                    <div v-for="(file, index) in selectedFiles" :key="index">
                                      {{ file.name }}
                                    </div>
                                  </div>
                                </div>
                                <div class="card-media-files-editor-open-photo">
                                  <button class="photo-edit-gradient-button" type="button">
                                    <svg fill="none" height="20" viewBox="0 0 21 20" width="21"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M16.334 7.49967L17.3757 5.20801L19.6673 4.16634L17.3757 3.12467L16.334 0.833008L15.2923 3.12467L13.0007 4.16634L15.2923 5.20801L16.334 7.49967Z"
                                          fill="currentColor"></path>
                                      <path
                                          d="M16.334 12.4997L15.2923 14.7913L13.0007 15.833L15.2923 16.8747L16.334 19.1663L17.3757 16.8747L19.6673 15.833L17.3757 14.7913L16.334 12.4997Z"
                                          fill="currentColor"></path>
                                      <path
                                          d="M10.084 7.91634L8.00065 3.33301L5.91732 7.91634L1.33398 9.99967L5.91732 12.083L8.00065 16.6663L10.084 12.083L14.6673 9.99967L10.084 7.91634ZM8.82565 10.8247L8.00065 12.6413L7.17565 10.8247L5.35898 9.99967L7.17565 9.17467L8.00065 7.35801L8.82565 9.17467L10.6423 9.99967L8.82565 10.8247Z"
                                          fill="currentColor"></path>
                                    </svg>
                                    <span class="photo-edit-text" data-name="text">
                          Открыть редактор
                        </span>
                                  </button>
                                </div>
                                <div class="card-media-files-editor-studio">
                                  <div class="laag-tooltip">
                                    <button class="photo-studio-btn" disabled type="button">
                                      <svg fill="none" height="20" viewBox="-2 -3 28 28" width="20"
                                           xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd"
                                              d="M20.625 20H1.375C1.01033 20 0.66059 19.8495 0.402727 19.5816C0.144865 19.3137 0 18.9503 0 18.5714V4.28571C0 3.90683 0.144865 3.54347 0.402727 3.27556C0.66059 3.00765 1.01033 2.85714 1.375 2.85714H4.8125L7.5625 0H14.4375L17.1875 2.85714H20.625C20.9897 2.85714 21.3394 3.00765 21.5973 3.27556C21.8551 3.54347 22 3.90683 22 4.28571V18.5714C22 18.9503 21.8551 19.3137 21.5973 19.5816C21.3394 19.8495 20.9897 20 20.625 20ZM19.9375 5H16.3329L13.5829 2.14286H8.41706L5.66706 5H2.0625V17.8571H19.9375V5ZM11 5.71429C11.9518 5.71429 12.8823 6.00753 13.6737 6.55694C14.4651 7.10635 15.0819 7.88725 15.4462 8.80088C15.8104 9.71451 15.9057 10.7198 15.72 11.6897C15.5343 12.6596 15.076 13.5505 14.403 14.2498C13.7299 14.9491 12.8724 15.4253 11.9389 15.6182C11.0053 15.8111 10.0377 15.7121 9.15833 15.3337C8.27896 14.9552 7.52736 14.3144 6.99855 13.4921C6.46975 12.6699 6.1875 11.7032 6.1875 10.7143C6.1875 9.3882 6.69453 8.11644 7.59705 7.17876C8.49957 6.24108 9.72365 5.71429 11 5.71429ZM11 13.5714C11.5439 13.5714 12.0756 13.4039 12.5278 13.0899C12.9801 12.776 13.3325 12.3297 13.5407 11.8077C13.7488 11.2856 13.8033 10.7111 13.6972 10.1569C13.5911 9.60265 13.3291 9.09356 12.9445 8.69398C12.56 8.2944 12.0699 8.0223 11.5365 7.91205C11.0031 7.80181 10.4501 7.85837 9.94762 8.07462C9.44513 8.29087 9.01563 8.65708 8.71346 9.12694C8.41128 9.59679 8.25 10.1492 8.25 10.7143C8.25 11.472 8.53973 12.1988 9.05545 12.7346C9.57118 13.2704 10.2707 13.5714 11 13.5714Z"
                                              fill="#fff" fill-rule="evenodd"></path>
                                      </svg>
                                      <span class="caption">Фотостудия</span>
                                    </button>
                                  </div>
                                </div>
                                <div class="card-media-files-tag-edit">
                                  <div class="laag-tooltip">
                                    <button class="photo-studio-btn tag-studio-btn" disabled type="button">
                                      <svg fill="none" height="20" viewBox="-2 -3 28 28" width="20"
                                           xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd"
                                              d="M15.7479 4.74768C15.3489 4.74768 14.9662 4.90621 14.6841 5.18834C14.4019 5.47048 14.2434 5.85313 14.2434 6.25214C14.2434 6.54969 14.3316 6.84057 14.497 7.08797C14.6623 7.33538 14.8972 7.52822 15.1721 7.64209C15.4471 7.75597 15.7495 7.78572 16.0414 7.72768C16.3332 7.66963 16.6013 7.52633 16.8117 7.31593C17.0221 7.10553 17.1654 6.8375 17.2234 6.54566C17.2815 6.25382 17.2517 5.9513 17.1378 5.6764C17.0239 5.40149 16.8311 5.16652 16.5837 5.00121C16.3363 4.83589 16.0454 4.74768 15.7479 4.74768Z"
                                              fill="currentColor" fill-rule="evenodd"></path>
                                        <path clip-rule="evenodd"
                                              d="M10.8234 21.5595L21.5592 10.8237C21.699 10.6839 21.8099 10.518 21.8855 10.3354C21.9611 10.1527 22.0001 9.95695 22 9.75929V1.50446C22 1.10545 21.8415 0.722806 21.5594 0.440666C21.2772 0.158529 20.8946 0 20.4955 0H12.24C11.841 8.52052e-05 11.4584 0.158645 11.1763 0.440806L0.440484 11.1766C0.158441 11.4588 0 11.8414 0 12.2403C0 12.6392 0.158457 13.0218 0.4405 13.304L8.69604 21.5595C8.97817 21.8416 9.36077 22 9.75969 22C10.1586 22 10.5412 21.8415 10.8234 21.5595ZM5.56788 9.34556L12.5828 2.33068H19.6693V9.41724L12.6551 16.4321L5.56788 9.34556ZM2.67315 12.2403L3.92006 10.9934L11.0073 18.08L9.7597 19.3275L2.67315 12.2403Z"
                                              fill="currentColor" fill-rule="evenodd"></path>
                                      </svg>
                                      <span class="caption">Отметить товар</span>
                                      <div class="subscribe-item">
                                        <svg fill="none" height="12" viewBox="0 0 12 12" width="12"
                                             xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="6" cy="6" fill="url(#paint0_linear_3084_36177)" fill-opacity="0.4"
                                                  r="6"></circle>
                                          <circle cx="6" cy="6" fill="url(#paint1_linear_3084_36177)" r="3.75"></circle>
                                          <defs>
                                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3084_36177"
                                                            x1="0" x2="12" y1="0" y2="12">
                                              <stop stop-color="#FF9649"></stop>
                                              <stop offset="1" stop-color="#FF5E62"></stop>
                                            </linearGradient>
                                            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3084_36177"
                                                            x1="2.25" x2="9.75" y1="2.25" y2="9.75">
                                              <stop stop-color="#FF9649"></stop>
                                              <stop offset="1" stop-color="#FF5E62"></stop>
                                            </linearGradient>
                                          </defs>
                                        </svg>
                                        <div class="subscribe-item-text">
                              <span class="subscribe-text-inside">
                                Джем
                              </span>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                                <div class="card-media-files-editor-upload-by-link">
                                  <div class="media-upload-by-link">
                                    <div class="media-upload-by-link-label">
                                      <label class="media-label" data-name="Label" for="upload-by-link">
                                        или добавить по ссылке
                                      </label>
                                    </div>
                                    <div class="media-upload-by-link-fields">
                                      <div class="media-upload-by-link-input">
                                        <div class="simple-input" data-name="SimpleInput">
                                          <input autocomplete="off" class="simple-input-field" name="upload-by-link"
                                                 placeholder="https://">
                                        </div>
                                      </div>
                                      <div class="media-upload-by-link-button">
                                        <button class="button-link">
                              <span class="button-link-icon">
                                <svg fill="none" height="24" viewBox="-2 -3 24 24" width="24"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path clip-rule="evenodd"
                                        d="M14.5858 10.0001H0V8.00008H14.5858L8.29289 1.70718L9.70711 0.292969L18.4142 9.00008L9.70711 17.7072L8.29289 16.293L14.5858 10.0001Z"
                                        fill="#4e4e53" fill-rule="evenodd"></path>
                                </svg>
                              </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
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
                            <svg :class="{'rotated': isWidgetContentVisible}" fill="none" height="16" viewBox="-3 -7 24 24"
                                 width="16" xmlns="http://www.w3.org/2000/svg">
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
                            <h4 class="requirements-title" style="grid-column: span 2; margin-bottom: 8px; margin-top: 20px;">
                              Требования к видео</h4>
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
      isWidgetContentVisible: false,
      selectedFiles: []
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
        return {backgroundColor: '#f96666'};
      }
    },
    toggleWidgetContent() {
      this.isWidgetContentVisible = !this.isWidgetContentVisible;
    },
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    handleFileUpload(event) {
      this.selectedFiles = Array.from(event.target.files)
      // Здесь можно добавить обработку файлов, превью и т.д.
      console.log('Selected files:', this.selectedFiles)
    }
  }
}
</script>

<style scoped>
:root {
  --header-height: 60px;
  --footer-height: 0;
}

.layout-view {
  position: relative;
}

.app-content {
  background-color: #f7f7fa;
  box-sizing: border-box;
  min-height: calc(100vh - var(--header-height, 0px) - var(--footer-height, 0px));
  position: relative;
  width: 100%;
  padding-top: var(--header-height);
}

.base-page-layout {
  background-color: #f0f0f3;
  box-sizing: border-box;
  height: 100%;
  min-height: 100vh;
  padding: 12px 24px;
}

.card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.add-product-components {
  display: grid;
  grid-template-columns: 300px minmax(0, 1240px) 300px;
  gap: 16px;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.add-product-components::-webkit-scrollbar {
  display: none;
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
  max-width: min(1240px, max(345px, calc(100vw - 680px)));
  width: 100%;
  background: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  bottom: 0;
  box-shadow: 0 7px 20px 0 #0000001a;
  box-sizing: border-box;
  height: 64px;
  padding: 12px 24px;
  position: fixed;
  z-index: 50;

  /* Центрирование контента */
  left: 50%;
  transform: translateX(-50%);
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

.card-media-files-editor-open-photo {
  margin-bottom: 12px;
  margin-top: 12px;
}

.card-media-files-editor-studio {
  margin-bottom: 12px;
}

.card-media-files-tag-edit {
  margin-bottom: 32px;
}

/* ----------ОКНО ЗАГРУЗКИ ФОТО-------- */

.uploader-button {
  align-items: center;
  border: 1px dashed #d1cfd7;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: center;
  margin-bottom: 4px;
  width: 312px;
}

.card-media-files-editor-media-files {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.uploader-button-button-icon {
  align-items: center;
  background: #0000;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  outline: none;
  padding: 32px;
  position: relative;
  width: 100%;
}

.media-upload-input {
  display: none;
}

.uploader-button-add {
  color: #000;
  font-family: latobold, arial, sans-serif;
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 32px;
}

.uploader-button-requirements-tooltip {
  margin-top: 8px;
  width: 100%;
}

.uploader-button-choose {
  margin-top: 16px;
}

.requirements-tooltip-trigger {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.requirements-tooltip-text {
  box-sizing: border-box;
  color: #77767e;
  font-family: lato, arial, sans-serif;
  font-size: 13px;
  line-height: 13px;
  text-align: center;
}

.requirements-tooltip-icon {
  box-sizing: border-box;
  height: 16px;
  margin-left: 2px;
}

.btn-settings {
  gap: 4px;
  height: 36px;
  padding: 10px 12px;
}

.choose-media {
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

.caption {
  flex-shrink: 0;
  font-weight: 400;
  opacity: 1;
  transition-duration: .2s;
  transition-property: color;
  white-space: nowrap;
}

.btn-settings .caption {
  font-size: 13px;
  line-height: 16px;
}

/* -------GRADIENT BUTTON--------*/

.photo-edit-gradient-button {
  align-items: center;
  align-self: stretch;
  animation: gradientShift__UeVAokpGM2 25s ease infinite;
  background-image: linear-gradient(270deg, #def2ff, #eadaff, #def2ff);
  background-size: 200% 200%;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 0 #0000000d;
  color: #4e4e53;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 44px;
  justify-content: center;
  outline: none;
  padding: 12px 16px;
  transition: background-position .5s, filter .5s, transform .3s;
  width: 100%;
}

@keyframes gradientShift__UeVAokpGM2 {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.photo-edit-text {
  text-decoration: none;
  color: #4e4e53;
  font-family: lato, arial, sans-serif;
  font-size: 16px;
  line-height: 20px;
  word-wrap: break-word;
  margin: 0;
  text-decoration: inherit;
  text-transform: none;
}

/* ---------PHOTO SUDIO BTN----------*/

.photo-studio-btn {
  opacity: .32;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
  justify-content: center;
  width: 100%;
  gap: 6px;
  height: 44px;
  padding: 12px 16px;
  align-items: center;
  background-color: #4a4a59;
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

.subscribe-item {
  align-items: center;
  display: flex;
}

.subscribe-item-text {
  -webkit-text-fill-color: #0000;
  background: linear-gradient(135deg, #ff9649, #ff5e62);
  background-clip: text;
  height: 100%;
  margin-left: 2px;
}

.tag-studio-btn {
  background-color: #fafafd !important;
  color: #000 !important;
}

/* -----------UPLOAD BY LINK---------*/

.card-media-files-editor-upload-by-link {
  margin-top: 12px;
}

.media-upload-by-link {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.media-upload-by-link-label {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  width: 100%;
}

.media-upload-by-link-fields {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.media-label {
  color: #77767e;
  font-size: 13px;
  display: inline-block;
  font-style: normal;
  font-weight: 440;
  line-height: 20px;
}

.media-upload-by-link-input {
  width: 100%;
}

.media-upload-by-link-button {
  margin-left: 8px;
}

.simple-input {
  position: relative;
}

.simple-input-field {
  border-radius: 4px;
  border: 1px solid #e3e4ea;
  box-sizing: border-box;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  outline: none;
  padding: 11px 12px;
  transition-duration: .15s;
  transition-property: border, background-color;
  width: 100%;
}

.button-link {
  opacity: .4;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border: 1px solid #d1cfd7;
  text-decoration: none;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: flex-start;
  outline: none;
  position: relative;
  transition: opacity .3s;
  padding: 9px;
}

.button-link-icon {
  padding: 0;
  align-items: center;
  display: inline-flex;
  justify-content: center;
}

.button-link-icon > svg {
  height: 24px;
  width: 34px;
}
</style>