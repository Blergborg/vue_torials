app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true,
        }
    },
    template:
    /*html*/
    `<!-- List rendering with v-for directive -->
    <!-- Like React, we should set keys on list items, do this w/ v-bind or ":" -->
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>`
})