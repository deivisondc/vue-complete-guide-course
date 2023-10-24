const app = Vue.createApp({
  data() {
    return {
      text: "",
      confirmedText: "",
    };
  },
  methods: {
    showAlert() {
      alert("done");
    },
    handleInput(e) {
      this.text = e.target.value;
    },
    handleConfirmInput(e) {
      this.confirmedText = e.target.value;
    },
  },
});

app.mount("#assignment");
