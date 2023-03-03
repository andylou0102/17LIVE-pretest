<template>
  <div class="recipes-container">
    <div class="code-block">
      // input
      <br />
      {{ `recipes_1 = ${JSON.stringify(recipes_1)}` }}
      <br />
      <br />
      solution(recipes_1)
      <br />
      <br />
      //output
      <br />
      {{ JSON.stringify(output_1) }}
    </div>
    <div class="code-block">
      // input
      <br />
      {{ `recipes_2 = ${JSON.stringify(recipes_2)}` }}
      <br />
      <br />
      solution(recipes_2)
      <br />
      <br />
      //output
      <br />
      {{ JSON.stringify(output_2) }}
    </div>
  </div>
</template>

<script setup lang="ts">
function solution (recipes: string[][]) {
  const res: Record<string, string[]> = {}
  recipes.forEach((arr) => {
    let dish: string | null = null
    arr.forEach((recipe, index) => {
      if (index === 0) {
        dish = recipe
      } else if (dish != null) {
        if (res[recipe] == null) {
          res[recipe] = [dish]
        } else {
          res[recipe].push(dish)
        }
      }
    })
  })
  for (let key in res) {
    res[key].sort((a, b) => a.localeCompare(b))
  }
  return Object.keys(res)
    .sort((a, b) => a.localeCompare(b))
    .map((recipe) => [recipe, ...res[recipe]])
}
const recipes_1 = [
  ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
  ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
  ["Quesadilla", "Chicken", "Cheese", "Sauce"],
  ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
]
const output_1 = solution(recipes_1)
const recipes_2 = [
  ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
  ["Chicken Curry", "Chicken", "Curry Sauce"],
  ["Fried Rice", "Rice", "Onions", "Nuts"],
  ["Salad", "Spinach", "Nuts"],
  ["Sandwich", "Cheese", "Bread"],
  ["Quesadilla", "Chicken", "Cheese"]
]
const output_2 = solution(recipes_2)
</script>

<style lang="scss" scoped>
.recipes-container {
  width: 70%;
  padding: 12px;
  margin: 0 auto;
  font-weight: 500;

  .code-block {
    border: 1px solid gray;
    background-color: rgb(243, 243, 243);
    border-radius: 5px;
    padding: 5px 25px;
    white-space: pre-line;

    &:not(:first-of-type) {
      margin-top: 10px;
    }
  }
}
</style>
