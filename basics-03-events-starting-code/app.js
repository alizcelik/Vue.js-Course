const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(){
      if(this.counter < 10){
        this.counter++;
      }
    },
    subtract(){
      if(this.counter > 0){
        this.counter--;
      }
    }
  }
});

app.mount('#events');
