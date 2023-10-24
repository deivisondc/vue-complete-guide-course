Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
  methods: {
    selectBox(box) {
      this.boxASelected = box === "A";
      this.boxBSelected = box === "B";
      this.boxCSelected = box === "C";
    },
  },
}).mount("#styling");
