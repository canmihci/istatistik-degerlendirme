
/*****************************************************************************/
/* Makalekriteri: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Makalekriteri.events({

  'click .remove-makale-kriteri': function (e, tmpl) {
  e.preventDefault();
  var makale = tmpl.view.parentView.parentView.parentView._templateInstance.data;
  var makaleId = makale._id
  console.log(makale)
  console.log(makaleId);
  var removedKriter = this
  console.log(removedKriter);
  var removedKriterID = removedKriter[1];
  console.log(removedKriterID);
  Makaleler.update({_id : makaleId}, {$pull: {kriterMap : removedKriter}})
  var query = {};
  query["kriterler." + removedKriterID] = "";
  Makaleler.update({_id : makaleId}, {$unset: query})

  },
  'click .kaydet' :function(e, tmpl){
      console.log(this);
      var note = tmpl.find('.note').value;
      var MakaleID = this[0];
      var KriterID = this[1];
      var querystring = "kriterler." + KriterID + ".notlar";
      var query = {};
      query[querystring] = note;
      Makaleler.update({_id : MakaleID}, {$set : query});
  }

});

Template.Makalekriteri.helpers({
    rules: function(){
        var map = this;
        var MakaleID = this[0];
        var kriterID = this[1];
        return Makaleler.findOne(MakaleID).kriterler[kriterID].rulesMap;
    },
    title: function(){
        var kriterID = this[1];
        return Kriterler.findOne(kriterID).title;
    },

});

/*****************************************************************************/
/* Makalekriteri: Lifecycle Hooks */
/*****************************************************************************/
Template.Makalekriteri.created = function () {
};

Template.Makalekriteri.rendered = function () {
  
    $(".remove-makale-kriteri").hide();
    $(".makalekriteri").mouseover(function(){
        $(this).find('.remove-makale-kriteri').show();
    });
    $(".makalekriteri").mouseleave(function(){
        $(this).find('.remove-makale-kriteri').hide();
    });
  
  
    $(".remove").mouseover(function(){
        $(this).addClass('red');
    });
    $(".remove").mouseleave(function(){
        $(this).removeClass('red');
    });
    $(".ok").mouseover(function(){
        $(this).addClass('green');
    });
    $(".ok").mouseleave(function(){
        $(this).removeClass('green');
    });
    
    $('.duzenle').click(function(e){
        e.preventDefault();
        console.log("ekmek");
        $('.note').prop("disabled", false);
    });
    $('.kaydet').click(function(e){
        e.preventDefault();
        console.log("ekmek");
        $('.note').prop("disabled", true);
    });
    var makaleID1 = this.data[0];
    var kriterID1 = this.data[1];
    var note1 = Makaleler.findOne(makaleID1).kriterler[kriterID1].notlar;
    $('.note').val(note1);
};

Template.Makalekriteri.destroyed = function () {
};
