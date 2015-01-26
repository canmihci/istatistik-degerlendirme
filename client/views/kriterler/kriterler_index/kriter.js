Template.kriter.events({
    'click .trash': function(theEvent, theTemplate){
    theEvent.preventDefault();
    Kriterler.remove(this._id);
  },
    'click #maddeEkle': function(theEvent, theTemplate){
    theEvent.preventDefault();
    var content = theTemplate.find('.madde').value;
    console.log(content);
    var user = Meteor.userId();
    if(!user){
     alert("Lütfen e-mail adresiyle giriş yapınız.");
    }
    else {
      if (content){
        var kriterKuraliID = Kriterkurallari.insert({"content" : content});
        eklenenKriter = Kriterkurallari.findOne(kriterKuraliID);
        Kriterler.update({_id : this._id}, { $push : {rules : eklenenKriter }});
        theTemplate.find('.madde').value = "";
      }
      else {
        alert("Formda eksik alan.");
      }
    }
    
  },
    'click .kriter-sil' : function(theEvent, theTemplate){
    theEvent.preventDefault();
    var kriter = (this);
    console.log(kriter);
    Kriterler.update({_id : theTemplate.data._id}, { $pull : {rules : kriter }});
    Kriterkurallari.remove(kriter._id);
    },
    
    
    'keyup.madde' : function(theEvent, theTemplate){
      if (theEvent.keyCode === 13){
        var content = theTemplate.find('.madde').value;
        console.log(content);
        var user = Meteor.userId();
        if(!user){
         alert("Lütfen e-mail adresiyle giriş yapınız.");
        }
        else {
          if (content){
            var kriterKuraliID = Kriterkurallari.insert({"content" : content});
            eklenenKriter = Kriterkurallari.findOne(kriterKuraliID);
            Kriterler.update({_id : this._id}, { $push : {rules : eklenenKriter }});
            theTemplate.find('.madde').value = "";
          }
          else {
            alert("Formda eksik alan.");
          }
        }
      }
    }
});
    
Template.kriter.rendered = function () {
    console.log("ekmek");
    $(".trash").hide();
    $(".kriter-sil").hide();
    $(".post").mouseover(function(){
        $(this).find('.trash').show();
    });
    $(".kriter").mouseover(function(){
        $(this).find('.kriter-sil').show();
    });
    $(".post").mouseleave(function(){
        $(this).find('.trash').hide();
    $(".kriter").mouseleave(function(){
        $(this).find('.kriter-sil').hide();
    });
        
    });
    
};