module.exports = app => {
    app.resources("order.v2", "/api/v2/order", app.controller.order)
}