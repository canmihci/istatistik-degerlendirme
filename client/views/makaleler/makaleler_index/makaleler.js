
/*****************************************************************************/
/* Makaleler: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.makaleler.events({
  'click #makaleEkle': function(theEvent, theTemplate){
    theEvent.preventDefault();
    var title = theTemplate.find('#title').value;
    console.log(title);
    var author = theTemplate.find('#author').value;
    console.log(author);
    var url = theTemplate.find('#url').value;
    console.log(url);
    var sayiID = Router.current().params._id;
    console.log(sayiID);
    var sayi = Sayilar.findOne(sayiID);
    var dergiID = Dergiler.findOne(sayi.dergiID)._id;
    var user = Meteor.userId();
    if(!user){
     alert("Lütfen e-mail adresiyle giriş yapınız.") 
    }
    else {
      if (title && author && url){
      Makaleler.insert({
          basligi: title,
          yazari: author,
          url: url,
          sayiID: sayiID,
          dergiID: dergiID,
          createdBy: user
      });
      theTemplate.find('#title').value = "";
      theTemplate.find('#author').value = "";
      theTemplate.find('#url').value = "";
      }
      else {
        alert("Formda eksik alan.");
      }
    }
    
  }
});

Template.makaleler.helpers({

  dergi: function () {
    var sayi = Sayilar.findOne(Router.current().params._id);
    return Dergiler.findOne(sayi.dergiID);
  },
  sayi: function () {
    return Sayilar.findOne(Router.current().params._id);
  },
  makaleler: function(){
    return Makaleler.find({sayiID : Router.current().params._id});
  },
  count: function(){
    return Makaleler.find({sayiID : Router.current().params._id}).count();
  }
});

/*****************************************************************************/
/* Makaleler: Lifecycle Hooks */
/*****************************************************************************/
Template.makaleler.created = function () {
};

Template.makaleler.rendered = function () {
};

Template.makaleler.destroyed = function () {
};


