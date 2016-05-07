/**
 * Created by cr3denza on 5/7/16.
 */

// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new 'RequestSchema'
var RequestSchema = new Schema({
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    },
    travel_point: {
        type: Number,
        default: 0,
        trim: true,
    },
    concept: {
        type: String,
        default: '',
        trim: true,
    },
    start_date: {
        type: Date,
        default: Date.now,
        trim: true,
    },
    end_date: {
        type: Date,
        default: Date.now,
        trim: true,
    },
    plan_money: {
        type: Number,
        default: 0
    },
    fee: {
        type: Number,
        default: 0
    },
    deadline: {
        type: Date,
        default: Date.now,
        trim: true,
    },
    stage: {
        type: Number,
        default: 0
    },
    plan_index: {
        type: [],
        default: 0
    }
});
// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('Request', RequestSchema);