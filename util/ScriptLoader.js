function loadScript(url, defer = true) {
    const script = $('<script>', {
        src: url,
        defer: defer,
        async: !defer
    });
    $('head').append(script);
}

loadScript('/db/DB.js');
loadScript('/util/CustomAlert.js');
loadScript('/util/GenerateNextID.js');
loadScript('/util/Validate.js');
loadScript('/util/CommonFunctions.js');
// loadScript('/models/User.js');
loadScript('/models/Customer.js');
loadScript('/models/Order.js');
loadScript('/models/OrderDetail.js');
loadScript('/models/Item.js');
loadScript('/controllers/IndexController.js');
// loadScript('/controllers/LoginController.js');
// loadScript('/controllers/SignupController.js');
// loadScript('/controllers/ForgotPasswordController.js');
loadScript('/controllers/HomeController.js');
loadScript('/controllers/CustomerController.js');
loadScript('/controllers/OrderController.js');
loadScript('/controllers/ItemController.js');
