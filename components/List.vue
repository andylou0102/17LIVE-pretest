<template>
  <div
    v-if="data.length > 0"
    class="list-container"
    :class="{ dark: dataType === 'winner' }"
  >
    <div
      v-if="dataType === 'winner'"
      class="title"
    >
      Top 3 Winners
    </div>
    <template
      v-for="(item, index) in listData"
      :key="index"
    >
      <template v-if="getItemsType(item) === 'student'">
        <div class="single-card single-card-md">
          <span>Student: {{ item.name }}</span>
          <span>Year: {{ item.year }}, Room: {{ item.class }}</span>
        </div>
      </template>
      <template v-else-if="getItemsType(item) === 'book'">
        <div class="single-card single-card-md">
          <span>Title: {{ item.title }}</span>
          <span>Category: {{ item.category }} | {{ item.rating }} likes</span>
        </div>
      </template>
      <template v-else-if="getItemsType(item) === 'winner'">
        <div class="single-card single-card-sm">
          {{ `${index + 1} ${item.winner}` }}
        </div>
      </template>
    </template>
  </div>
  <div
    v-else
    class="empty-view"
  >
    No Content
  </div>
</template>

<script setup lang="ts">
import { type PropType, toRefs } from 'vue';
import { deepClone } from '../utils'

export type Student = {
  name?: string
  year?: number
  class?: string
}
export type Book = {
  title?: string
  category?: string
  rating?: number
}
export type Winner = {
  winner?: string
  rank?: number
}
export type Item = Student & Book & Winner

const props = defineProps({
  data: {
    type: Array as PropType<Item[]>,
    required: true,
  }
})

const { data } = toRefs(props)

function getItemsType (item: Item) {
  const keyList = Object.keys(item)
  if (keyList.every((key) => ['winner', 'rank'].includes(key))) {
    return 'winner'
  }
  if (keyList.every((key) => ['name', 'year', 'class'].includes(key))) {
    return 'student'
  }
  if (keyList.every((key) => ['title', 'category', 'rating'].includes(key))) {
    return 'book'
  }
  return null
}

const dataType = computed(() => {
  const dataTypeSet = [...new Set(data.value.map((item) => getItemsType(item)))]
  if (dataTypeSet.length > 1) {
    return null
  }
  return dataTypeSet[0]
})

const listData = computed(() => {
  if (dataType.value === 'winner') {
    return deepClone(data.value).sort((a, b) => (a.rank ?? 1) - (b.rank ?? 0))
  }
  return data.value
})


</script>

<style lang="scss" scoped>
.list-container {
  width: 70%;
  padding: 12px;
  background-color: rgb(223, 223, 223);
  margin: 0 auto;
  font-weight: 500;

  &:not(:first-of-type) {
    margin-top: 10px;
  }

  .title {
    color: #fff;
    font-size: large;
    font-weight: 700;
    padding: 10px 0;
  }

  .single-card {
    border-radius: 8px;
    background-color: #fff;

    &:not(:first-of-type) {
      margin-top: 10px;
    }
    span {
      &:first-of-type {
        display: block;
        margin-bottom: 16px;
      }
    }
    &-sm {
      padding: 5px 10px;
    }
    &-md {
      padding: 12px;
    }
  }
}
.dark {
  background-color: black;
}

.empty-view {
  width: 70%;
  margin: 0 auto;
  padding: 12px;
  font-size: large;
}
</style>