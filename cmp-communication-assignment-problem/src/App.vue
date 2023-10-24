<template>
  <h1>Assignment 6</h1>

  <active-user :user="activeUser" />
  <user-data @set-user="setActiveUser" />
</template>

<script>
export default {
  data() {
    return {
      activeUser: {
        name: "",
        age: 0,
      },
    };
  },
  methods: {
    setActiveUser(user) {
      this.activeUser = { ...user };
    },
  },
};
</script>
