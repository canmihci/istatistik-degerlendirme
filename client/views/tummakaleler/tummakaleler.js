
/*****************************************************************************/
/* Tummakaleler: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Tummakaleler.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Tummakaleler.helpers({
   tummakaleler: function () {
    return Makaleler.find();
  },
  count: function(){
    return Makaleler.find().count();
  }
 
});

/*****************************************************************************/
/* Tummakaleler: Lifecycle Hooks */
/*****************************************************************************/
Template.Tummakaleler.created = function () {
};

Template.Tummakaleler.rendered = function () {
};

Template.Tummakaleler.destroyed = function () {
};


