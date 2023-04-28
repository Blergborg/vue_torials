// Call Vue.createApp(), pass it an obj w/ a "data" property that's a function.
// data() returns an obj version of the previous const product = "Socks"

// The obj we passs to Vue.createApp() is called the "options object". Must always pass in at least an empty obj.
// Vue.createApp() makes a Vue instance, which powers everything else.
const app = Vue.createApp({
    data() {        // this line shorthad for ( data: function() { )
        return {
            product: "Socks",
            description: "Stop sniffing them. Don't be weird.",
            image: './assets/images/socks_green.jpg',
            socks_link: 'https://en.wikipedia.org/wiki/Sock',
        }
    }
})