Vue.createApp({
  data() {
    return {
      taskInput: "",
      tasks: [],
      isTaskListVisible: true,
    };
  },
  computed: {
    buttonLabel() {
      return `${this.isTaskListVisible ? "Hide" : "Show"} List`;
    },
  },
  methods: {
    handleTaskInput() {
      this.tasks.push(this.taskInput);
      this.taskInput = "";
    },
    toggleTaskListVisibility() {
      this.isTaskListVisible = !this.isTaskListVisible;
    },
  },
}).mount("#assignment");
