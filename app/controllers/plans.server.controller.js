/**
 * Created by cr3denza on 5/9/16.
 */

var Plan = require('mongoose').model('Plan');

exports.create = function(req, res, next){
    var plan = new Plan(req.body);

    plan.save(function(err){
        if(err){
            return next(err);
        }else{
            res.json(plan);
        }
    });
};