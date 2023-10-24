Vue.createApp({
  data() {
    return {
      classInput: "",
      isVisible: true,
      colorInput: "",
    };
  },
  computed: {
    pClass() {
      // let result = "";
      // if (["user1", "user2"].includes(this.classInput)) {
      //   result += this.classInput;
      // } else {
      //   result += "";
      // }
      // result += " ";
      // result += this.isVisible ? "visible" : "hidden";
      // return result;
      return {
        user1: this.classInput === "user1",
        user2: this.classInput === "user2",
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount("#assignment");
