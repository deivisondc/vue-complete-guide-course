const app = Vue.createApp({
  data() {
    return {
      name: "Deivison",
      age: "31",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/888px-Vue.js_Logo_2.svg.png",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
