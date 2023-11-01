const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number > 37) {
        return "Too much!";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Not there yet.";
      }
    },
  },
  watch: {
    result() {
      console.log("watcher...");
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    },
  },
  methods: {
    add(val) {
      this.number = this.number + val;
    },
  },
});
app.mount("#assignment");
