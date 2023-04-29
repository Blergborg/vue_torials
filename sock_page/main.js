// Call Vue.createApp(), pass it an obj w/ a "data" property that's a function.


// The obj we passs to Vue.createApp() is called the "options object". Must always pass in at least an empty obj.
// Vue.createApp() makes a Vue instance, which powers everything else.
const app = Vue.createApp({
    data() {        // this line shorthad for ( data: function() { )
        return {
            // Moved all except cart into a component b/c cart was the only data that should remain global scope.
            cart: 0,
            premium: true,
        }
    },
    methods: {
        updateCart() {
            this.cart += 1
        },
    },
    
})