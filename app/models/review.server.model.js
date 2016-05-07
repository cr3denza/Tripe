/**
 * Created by cr3denza on 5/7/16.
 */

// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new 'PlanSchema'
var ReviewSchema = new Schema({
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    },
    request_Index: {
        type: [],
    },
    plan_Index: {
        type: [],
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    photo: {
        type: Buffer
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    comment: {
        type: String,
        default: '',
        trim: true
    },
    like: {
        type: Number
    }
});

// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('Review', ReviewSchema);