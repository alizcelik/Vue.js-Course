const app = Vue.createApp({
  data() {
    return {
      tasksAreVisible: true,
      enteredTaskValue: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    hideOrShowTasks() {
      this.tasksAreVisible = !this.tasksAreVisible;
    },
  },
});

app.mount("#assignment");
