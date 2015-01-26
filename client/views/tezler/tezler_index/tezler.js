Template.Tezler.events({
  'click #tezEkle': function(theEvent, theTemplate){

    theEvent.preventDefault();
    var title = theTemplate.find('#title').value;
    console.log(title);
    var author = theTemplate.find('#author').value;
    console.log(author);
    var supervisor = theTemplate.find('#supervisor').value;
    console.log(supervisor);
    var year = theTemplate.find('#year').value;
    console.log(year);
    var type = theTemplate.find('#type').value;
    console.log(type);
    var user = Meteor.userId();
    if(!user){
     alert("Lütfen e-mail adresiyle giriş yapınız.") 
    }
    else {
      if (!(type === "YL" || type === "DR")) {
      alert("Lütfen tez tipini YL veya DR olarak giriniz.");  
      }
      else {
        if (title && author && supervisor && year && type){
        Tezler.insert({
            basligi: title,
            yazari: author,
            danismani: supervisor,
            yili: year,
            teztipi: type,
            createdBy: user
        });
        theTemplate.find('#title').value = "";
        theTemplate.find('#author').value = "";
        theTemplate.find('#supervisor').value = "";
        theTemplate.find('#year').value = "";
        theTemplate.find('#type').value = "";
        }
        else {
          alert("Formda eksik alan.");
        }
    }
    }
   }
});

Template.Tezler.helpers({
    tezler : function(){
        return Tezler.find();
    },
    count : function(){
      return Tezler.find().count();
    }
});

