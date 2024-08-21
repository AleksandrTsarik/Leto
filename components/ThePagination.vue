<template>
  <div class="pagination">
    <div class="pagination-arrow pagination-arrow__prev">
      <svg width="13.000000" height="12.000000" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

      <defs/>
      <path id="Vector" d="M5.14 10.57L0 5.42L5.14 0.28M0 5.42L12 5.42" stroke="#3C3A3A" stroke-opacity="1.000000" stroke-width="1.714293" stroke-linejoin="round"/>
    </svg>

    </div>
    <div class="pagination__numb">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>...</button>
      <button>23</button>
    </div>
    <div class="pagination-arrow pagination-arrow__next">
      <svg width="13.000000" height="12.000000" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs/>
      <path id="Vector" d="M6.85 10.57L12 5.42L6.85 0.28M12 5.42L0 5.42" stroke="#3C3A3A" stroke-opacity="1.000000" stroke-width="1.714293" stroke-linejoin="round"/>
    </svg>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .pagination {
    display: flex;
    align-items: center;
    button {
      font-size: 18px;
      font-weight: 400;
      padding: 0 4px;
    }
    &__numb {
      padding: 0 10px;
    }
  }
  .pagination-arrow {
    display: block;
    cursor: pointer;
    position: relative;
    text-align: center;
    line-height: 22px;
  }
</style>