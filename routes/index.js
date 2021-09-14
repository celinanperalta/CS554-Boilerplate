const newRouter = require('./router');

const constructorMethod = (app) => {
    app.use('/', newRouter);

    app.use('*', (req, res) => {
        res.render('notfound', {pageTitle: "404", path: req.baseUrl + req.path});
    });
};

module.exports = constructorMethod;