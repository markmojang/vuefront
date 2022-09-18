<template>
  <div class="about">
    <h1 v-if="bool">ถูก</h1>
    <h1 v-else>ไม่ถูก</h1>
    <h4 v-for="i in list">
      {{i}}
    </h4>
    <input type="text" v-model="name">
    <h1> hello {{name}}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name :"Mark",
        list : ["A","B","C","D"],
        bool : true
      }
    },
  }

</script>
