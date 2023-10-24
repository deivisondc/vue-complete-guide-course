const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  // watch: {
  //   name(value) {
  //     this.fullname = value + " " + "Cardoso";
  //   },
  // },
  computed: {
    fullname() {
      if (!this.name || !this.lastName) {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    outputFullname(lastname) {
      console.log("teste");
      if (!this.name) {
        return "";
      }

      return this.name + " " + lastname;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
