const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('Submitted!');
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
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
