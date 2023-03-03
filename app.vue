<template>
  <div class="app">
    <h2>question 1</h2>
    <List
      :data="students"
    />
    <List
      :data="books"
    />
    <List
      :data="winners"
    />
    <h2>question 2</h2>
    <Recipes />
    <h2>question 3</h2>
    <div class="answer-block">
      <h4>3-1 請說明 Flux, Redux, Vuex 之間的差異?</h4>
      <p>Flux有各自的store對對應的view做處理，Redux、Vuex則是一個主要的store，Redux沒有dispatcher(集成進store裡)
        ，並多了reducer在每次dispatch action時觸發更新新的state(pure function方式)
        ，Vuex則多了mutations處理同步更新，異步由actions負責，得益於響應式不需要subscribe即可更新畫面，皆為單向資料流，概念是讓state更新後view產生變化。</p>
    </div>
    <div class="answer-block">
      <h4>3-2 請說明單向資料流與雙向資料流在處理資料更新上的異同</h4>
      <p>雙向資料流子組件可以更新父組件，意味能改動數據的入口很多，沒管理好容易產生bug
        ，單向資料流只能從父層到子層，可維護性高，但傳遞成本較高。</p>
    </div>
    <div class="answer-block">
      <h4>3-3 這些設計主要想要解決什麼樣的問題? 優缺點為何？</h4>
      <p>以上這些設計主要是要解決數據流到視圖更新的問題，store的出現可以協助我們處理高層次資料共用的問題，缺點是影響的範圍較大
        ，不小心容易影響到其他組件的顯示，單向資料流主要還是讓資料能被更好的追蹤也更直觀。</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

const students = [
  {
    name: "Anna",
    year: 10,
    class: "A"
  },
  {
    name: "Mark",
    year: 10,
    class: "M",
  }
]
const books = [
  {
    title: "Javascript Info",
    category: "book",
    rating: 10,
  },
  {
    title: "Fantasy",
    category: "movie",
    rating: 5,
  }
]
const winners = [
  {
    winner: 'Amy',
    rank: 1
  },
  {
    winner: 'Bob',
    rank: 2
  },
  {
    winner: 'Jack',
    rank: 2
  }
]

</script>

<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;

  h2 {
    text-align: center;
  }

  .answer-block {
    width: 70%;
    margin: 0 auto;
    padding-bottom: 10px;
  }
}
</style>
