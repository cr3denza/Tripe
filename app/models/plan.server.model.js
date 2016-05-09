/**
 * Created by cr3denza on 5/7/16.
 */

// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new 'PlanSchema'
var PlanSchema = new Schema({
    creator: {
        type: Schema.ObjectId,
        ref: 'Plan'
    },
    created: {
        type: Date,
        default: Date.now
    },
    date: {
        type: Date,
        default: Date.now,
        trim: true,
       // required: 'Title cannot be blank'
    },
    point: {
        type: Number,
        default: 0,
        trim: true,
        required: 'Title cannot be blank'
    },
    trans: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    price: {
        type: Number,
        default: 0,
        trim: true,
        required: 'Title cannot be blank'
    },
    hotel: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    etc: {
        type: String,
        default: ''
    },
    open: {
        type: Boolean,
        default: false
    },
    select: {
        type: Boolean,
        default: false
    }
});
// Create the 'Plan' model out of the 'PlanSchema'
mongoose.model('Plan', PlanSchema);