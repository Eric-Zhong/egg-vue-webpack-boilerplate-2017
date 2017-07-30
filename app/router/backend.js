module.exports = app => {
    app.get('/backend', app.controller.backend.home.index);
}