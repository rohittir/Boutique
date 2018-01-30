


module.exports = function(app) {

    app.get('/login', function (req, res) {
        res.send('Login page opened...');
        // res.redirect('/');
    });

    app.get('/signup', function (req, res) {
        res.send('signup page opened...');
        // res.redirect('/');
    });

    app.get('/logout', function (req, res) {
        res.send('logout page opened...');
        // res.redirect('/');
    });

    app.get('/home', function (req, res) {
        res.send('home page opened...');
        // res.redirect('/');
    });

    app.get('/products', function (req, res) {
        res.send('products page opened...');
        // res.redirect('/');
    });

    app.get('/orders', function (req, res) {
        res.send('orders page opened...');
        // res.redirect('/');
    });

    app.get('/profile', function (req, res) {
        res.send('orders page opened...');
        // res.redirect('/');
    });



}




