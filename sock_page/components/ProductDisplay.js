app.component('product-display', {
    // Add the props option
    props: {
        premium: {
            // can add validation for props!
            type: Boolean,
            required: true,
        }
    },
    template: 
    //this activates the es6 html string extension we installed earlier, makes html syntax highlighting happen on strings.
    /*html*/ 
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <!-- "v-bind:" DIRECTIVE in front of attr creates a relationship that allows us to pass it data() properties" -->
                <!-- specifically, it dynamically binds an ATTRIBUTE to an EXPRESSION -->
                <!-- NOTE: "" get treated like {{}} in this case, so we are using a JS expression. -->

                <!-- Long Syntax for attr binding -->
                <!-- <img v-bind:src="image" /> --> 

                <!-- Short hand syntax for attr binding is just prepend attr w/ ":" -->
                <img :src="image" /> 
            </div>
            
            <div class="product-info">
                <h1>{{ productTitle }}</h1>
                <!-- Conditional rendering with v-if and v-else directives -->
                <!-- NOTE: fallback v-else is not always requrired -->
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
                <p v-else>Out of Stock</p>
                <!-- Can also use v-show to toggle visibility (better performance for things that toggle often) 
                    instead of removing elements like above -->
                <p v-show="onSale">On Sale</p>
                <p>Shipping: {{ shipping }}</p>

                <!-- List rendering with v-for directive -->
                <!-- Like React, we should set keys on list items, do this w/ v-bind or ":" -->
                <product-details :details="details"></product-details>
                <div 
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }"
                    v-for="(variant, index) in variants" 
                    :key="variant.id" 
                    @mouseover="updateVariant(index)"
                >
                </div>
                <!-- NOTE for inline style-binding above: like in React, we need to use camelcase to reference css properties -->

                <!-- Attr-binding can be used for conditional styling, href setting, even enable/disable elements -->
                <!-- <a :href="socksLink" target="_blank">Learn about socks!</a> -->
                
                <!-- Event binding with v-on directive -->
                <!-- v-on:*event here*="*expression we want to trigger here*" -->
                <!-- Can inline expression for simple operations -->
                <!-- <button class="button" v-on:click="cart += 1">Add to Cart</button> -->

                <!-- Can also invoke more complex methods from a vue app's methods property-->
                <!-- NOTE: shorthand for v-on is "@" like ":" for v-bind -->
                <!-- Can conditionally disable button and conditionally add styling class to make the button look unclickable -->
                <!-- Could also use ternary operators to swap between style classes that conflict. -->
                <button 
                    class="button"
                    :class="{ disabledButton: inventory == 0 }" 
                    @click="addToCart"
                    :disabled="inventory == 0"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    </div>`,

    // data() returns an obj version of the previous const product = "Socks"
    data() {        // this line shorthad for ( data: function() { )
        return {
            product: "Socks",
            brand: 'Vue Mastery',
            description: "Stop sniffing them. Don't be weird.",
            selectedVariant: 0,
            socksLink: 'https://en.wikipedia.org/wiki/Sock',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: false},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: true},
            ],
            // can also add styles object(s) w/in data property to prevent messy inline styling
            styles: {
                color: 'red',
                fontSize: '14px',
            }
        }
    },
    methods: {
        // When first modularizing code, this stops working. Component no longer has access to the 'cart' property that stayed in its parent.
        addToCart() {
            //this.cart += 1  // "this.cart" references cart in our data.
            // props are used to funnel data down from parents to children.
            // children can't pass props back up to parents, to tell parents to change data children 'emit events'
            // an emitted event bubbles up and passes listeners that can respond to this event. (added in index.html)
            this.$emit('add-to-cart')
        },
        updateVariant(index){
            this.selectedVariant = index
            console.log(index);
        }
    },
    // Add computed proerties property to make composition functions. Can now just reference 'productTitle' as a property.
    // NOTE: Computed properties actually CACHE THEIR VALUES so they only update when the result changes. 
    // More performant than inline composition of data.
    computed: {
        productTitle() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inventory() {
            return this.variants[this.selectedVariant].quantity
        },
        onSale() {
            return this.variants[this.selectedVariant].onSale
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            } else {
                return '$2.99'
            }
        },
    }
})