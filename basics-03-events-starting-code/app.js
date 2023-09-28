const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num){
      if(this.counter < 9){
        this.counter = this.counter + num;
      }
    },
    subtract(num){
      if(this.counter > 2){
        this.counter = this.counter - num;
      }
    }
  }
});

app.mount('#events');
