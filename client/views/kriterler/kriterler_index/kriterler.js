
/*****************************************************************************/
/* Kriterler: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Kriterler.events({
 'click #kriterEkle': function(theEvent, theTemplate){
    theEvent.preventDefault();
    var title = theTemplate.find('#kriterAdi').value;
    console.log(title);
    var type = theTemplate.find("input[name=optionsRadios]:checked").value;
    console.log(type);
    var user = Meteor.userId();
    if(!user){
     alert("Lütfen e-mail adresiyle giriş yapınız.");
    }
    else {
      if (title && type){
      Kriterler.insert({
        title : title,
        type: type,
        rules: []
      });
      theTemplate.find('#kriterAdi').value = "";
      }
      else {
        alert("Formda eksik alan.");
      }
    }
    
  }
});

Template.Kriterler.helpers({

   kriterler: function () {
     return Kriterler.find({}, {sort : {type: 1}});
   }
    
});

/*****************************************************************************/
/* Kriterler: Lifecycle Hooks */
/*****************************************************************************/
Template.Kriterler.created = function () {
};

Template.Kriterler.rendered = function () {
};

Template.Kriterler.destroyed = function () {
};


