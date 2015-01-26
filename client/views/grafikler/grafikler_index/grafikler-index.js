
/*****************************************************************************/
/* GrafiklerIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.GrafiklerIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.GrafiklerIndex.helpers({

    genel : function(){
        return Kriterler.find({type: "Genel Kriter"});
    },
    parametrik : function(){
        return Kriterler.find({type: "Parametrik Test"});
    },
    nonparametrik : function(){
        return Kriterler.find({type: "Non-Parametrik Test"});
    },
    posthoc : function(){
        return Kriterler.find({type: "Post-Hoc Testi"});
    },
    diger : function(){
        return Kriterler.find({type: "Diğer"});
    }
});

/*****************************************************************************/
/* GrafiklerIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.GrafiklerIndex.created = function () {
};

Template.GrafiklerIndex.rendered = function () {
};

Template.GrafiklerIndex.destroyed = function () {
};


