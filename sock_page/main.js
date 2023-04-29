// Call Vue.createApp(), pass it an obj w/ a "data" property that's a function.
// data() returns an obj version of the previous const product = "Socks"

// The obj we passs to Vue.createApp() is called the "options object". Must always pass in at least an empty obj.
// Vue.createApp() makes a Vue instance, which powers everything else.
const app = Vue.createApp({
    data() {        // this line shorthad for ( data: function() { )
        return {
            cart: 0,
            product: "Socks",
            brand: 'Vue Mastery',
            description: "Stop sniffing them. Don't be weird.",
            image: './assets/images/socks_green.jpg',
            socksLink: 'https://en.wikipedia.org/wiki/Sock',
            // inStock: false,
            inventory: 10,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
            ],
            // can also add styles object(s) w/in data property to prevent messy inline styling
            styles: {
                color: 'red',
                fontSize: '14px',
            }
        }
    },
    methods: {
        addToCart() {
            this.cart += 1  // "this.cart" references cart in our data.
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})