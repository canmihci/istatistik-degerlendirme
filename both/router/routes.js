/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('dergiler', {path: '/'});
  this.route('sayilar', {path: '/dergiler/:_id'});
  this.route('makaleler', {path: '/sayilar/:_id'});
  this.route('kriterler', {path: '/kriterler'});
  this.route('tummakaleler', {path: '/tummakaleler'});
  this.route('GrafiklerIndex', {path: '/grafiklerindex'});
  this.route('Grafikler', {path: '/grafiklerindex/:_id'});
  this.route('Tezler', {path: '/tezler'});
  this.route('GrafiklertezIndex', {path: '/grafiklertezindex'});
  this.route('Grafiklertez', {path: '/grafiklertezindex/:_id'});
});
