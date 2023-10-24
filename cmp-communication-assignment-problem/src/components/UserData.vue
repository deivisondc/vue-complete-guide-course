<template>
  <form @submit.prevent="submit">
    <div>
      <label>Name</label>
      <input v-model="user.name" />
    </div>
    <div>
      <label>Age</label>
      <input type="number" v-model="user.age" />
    </div>

    <button>Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["set-user"],
  data() {
    return {
      user: {
        name: "",
        age: 0,
      },
    };
  },
  methods: {
    submit() {
      this.$emit("set-user", this.user);
    },
  },
};
</script>
