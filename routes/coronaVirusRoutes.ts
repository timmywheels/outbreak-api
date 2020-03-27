export {};
const apiController = require('../controllers/apiController');
const authenticated = require('../middlewares/authenticated');

module.exports = (app: any) => {
    app.set('trust proxy', 1);
    app.get('/api/corona-virus/states/all', apiController.healthChecks);
    app.get('/api/corona-virus/states/:state', authenticated, apiController.currentUser);
};
