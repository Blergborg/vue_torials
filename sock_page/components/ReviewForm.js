app.component('review-form', {
    // v-bind: one way binding from data to template
    // v-model: two way binding between data and template
    // v-model is needed for forms because as the user types the data and the template need to be updated.
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">  <!-- .prevent here is another modifer that prevents the default browser refresh of submitting. submit will trigger our custom onSubmit() method. -->
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number ="rating">  <!-- .number is a modifier that typecasts the rating value as a number -->
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input class="button" type="submit" value="Submit">

    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
        }
    },
    methods: {
        onSubmit() {
            // basic validation
            if (this.name === '' || this.review === '' || this.rating === null) {
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            // make productReview obj
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
            }

            // send productReview obj as payload of 'review-submitted' event we emit here
            this.$emit('review-submitted', productReview)

            // clear form
            this.name = ''
            this.review = ''
            this.rating = null
        }
    }
})