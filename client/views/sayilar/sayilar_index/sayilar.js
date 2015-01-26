
/*****************************************************************************/
/* Sayilar: Event Handlers and Helpers.js*/
/*****************************************************************************/
Template.sayilar.events({
  'click #sayiEkle': function(theEvent, theTemplate){
    theEvent.preventDefault();
    var year = theTemplate.find('#year').value;
    console.log(year);
    var volume = theTemplate.find('#volume').value;
    console.log(volume);
    var issue = theTemplate.find('#issue').value;
    console.log(issue);
    var dergiID = Router.current().params._id;
    console.log(dergiID);
    var user = Meteor.userId();
    if(!user){
     alert("Lütfen e-mail adresiyle giriş yapınız.") 
    } else {
    if (year && volume && issue){
    Sayilar.insert({
        yili: year,
        cilt: volume,
        sayi: issue,
        dergiID: dergiID,
        createdBy: user
    }); }
    else {
      alert("Formda eksik alan.");
    }
  }}
});

Template.sayilar.helpers({
  
  baslik: function () {
    return Dergiler.findOne(Router.current().params._id).ismi;
  },
  sayilar: function(){
    return Sayilar.find({dergiID : Router.current().params._id});
  },
  count: function() {
    var id = Router.current().params._id;
    return Makaleler.find({"dergiID" : id}).count();
  }
  
});

/*****************************************************************************/
/* Sayilar: Lifecycle Hooks */
/*****************************************************************************/
Template.sayilar.created = function () {
};

Template.sayilar.rendered = function () {
};

Template.sayilar.destroyed = function () {
};


