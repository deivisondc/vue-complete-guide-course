<template>
  <div>
    <h2>Name: {{ user.name }}</h2>
    <h3>Age: {{ user.age }}</h3>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>
