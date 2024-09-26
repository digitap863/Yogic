import mongoose from 'mongoose';


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true

    },
    cardImg: {
        type: String,
        required: true
    },
    content1: {
        heading:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        Description:{
            type:String,
            required:true
        }
    },
    content2: {
        heading:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        Description:{
            type:String,
            required:true
        }
    },
    content3: {
        heading:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        Description:{
            type:String,
            required:true
        }
    },
    content4: {
        heading:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        Description:{
            type:String,
            required:true
        }
    }
}, { timestamps: true })

export const BlogModel = mongoose.model("Blog", blogSchema)