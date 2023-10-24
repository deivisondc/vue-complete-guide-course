Vue.createApp({
  data() {
    return {
      sum: 0,
    };
  },
  computed: {
    result() {
      if (this.sum < 37) {
        return "Not there yet";
      } else if (this.sum > 37) {
        return "Too much!";
      }
      return this.sum;
    },
  },
  watch: {
    result(newValue, oldValue) {
      if (newValue !== "Not there yet" && newValue !== oldValue) {
        setTimeout(() => {
          this.sum = 0;
        }, 5000);
      }
    },
  },
  methods: {
    add(value) {
      this.sum += value;
    },
  },
}).mount("#assignment");
