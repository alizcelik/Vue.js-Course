const app = Vue.createApp({
  data() {
    return{
        string:'',
        displayedString:''
    }
  },
  methods: {
    showAlert() {
      alert("Welcome!");
    },
    setString(event){
        this.string = event.target.value;
    },
    displayString(){
        this.displayedString= this.string;
    }
  },
});
app.mount("#assignment");
