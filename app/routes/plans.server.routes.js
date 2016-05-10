/**
 * Created by cr3denza on 5/9/16.
 */

var plans = require('../../app/controllers/plans.server.controller');

module.exports = function(app){
    app.route('/plans')
        .post(plans.create)
        .get(plans.list);
};
