<template>
  <form @submit.prevent="submitForm">
    <div>
      <label>Name</label>
      <input name="name" v-model="name" />
    </div>

    <div>
      <label>Phone number</label>
      <input name="phoneNumber" v-model="phoneNumber" />
    </div>

    <div>
      <label>Email Address</label>
      <input type="email" name="emailAddress" v-model="emailAddress" />
    </div>

    <div>
      <label>Is Favorite?</label>
      <input type="checkbox" name="isFavorite" v-model="isFavorite" />
    </div>

    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  emits: ["submit-form"],
  data() {
    return {
      id: "",
      name: "",
      phoneNumber: "",
      emailAddress: "",
      isFavorite: false,
    };
  },
  methods: {
    submitForm() {
      this.$emit("submit-form", {
        name: this.name,
        phoneNumber: this.phoneNumber,
        emailAddress: this.emailAddress,
        isFavorite: this.isFavorite,
      });

      this.name = "";
      this.phoneNumber = "";
      this.emailAddress = "";
      this.isFavorite = false;
    },
  },
};
</script>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
