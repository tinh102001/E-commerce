import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    product_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    image:{
        type: Object,
        required: true
    },
    imagesGallery:{
        type: Array,
        default: 0
    },
    category:{
        type: String,
        required: true
    },
    checked:{
        type: Boolean,
        default: false
    },
    sold:{
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true //important
})

export const Products = mongoose.model('Products', productSchema)