const app = Vue.createApp({
  data() {
    return {
      className: "",
      visibility: true,
      userBackgroundColor: "",
    };
  },
  methods: {
    setClass(event) {
      this.className = event.target.value;
    },
    setVisibility() {
      this.visibility = !this.visibility;
    },
  },
  computed: {
    reformatClasses() {
      return {
        user1: this.className === "user1",
        user2: this.className === "user2",
        visible: this.visibility,
        hidden: !this.visibility,
      };
    },
  },
});
app.mount("#assignment");
