
/*****************************************************************************/
/* Dergiler: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.dergiler.events({
  'click #dergiEkle': function(theEvent, theTemplate){
    theEvent.preventDefault();
    var dergiIsmi = theTemplate.find('#dergiIsmi').value;
    var user = Meteor.userId();
    if(!user){
     alert("Lütfen e-mail adresiyle giriş yapınız.") 
    }
    else if(dergiIsmi){
    Dergiler.insert({
        ismi: dergiIsmi,
        createdBy: user
    });
    }
    console.log('Form submitted');
    theTemplate.find('#dergiIsmi').value = "";
  }
});

Template.dergiler.helpers({

  dergiler: function () {
    return Dergiler.find();
  },
  count: function(){
    return Makaleler.find().count();
  }
});

/*****************************************************************************/
/* Dergiler: Lifecycle Hooks */
/*****************************************************************************/
Template.dergiler.created = function () {
};

Template.dergiler.rendered = function () {

};

Template.dergiler.destroyed = function () {
};


