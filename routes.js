const routes = require('next-routes')

module.exports = routes()

    .add('home', '/', 'index')     // description   routes  page
    .add('About Us', '/about', 'aboutUs')
    .add('Contact Us', '/contact', 'contactUs')
    .add('User List', '/user', 'user')