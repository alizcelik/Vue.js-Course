const app = Vue.createApp({
    data() {
        return{
            enteredValue: '',
            ageValue: 27,
            imageURL: 'https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256'
        };
    },
    methods: {
        addName(){
            return this.enteredValue;
        },
        addAge(){
            return this.ageValue;
        },
        addFiveAge(){
            return this.ageValue + 5;
        },
        favouriteNumber(){
            return Math.random();
        }
    }
});
app.mount('#assignment');