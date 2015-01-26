
/*****************************************************************************/
/* Tezkriteri: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Tezkriteri.events({
  'click .remove-tez-kriteri': function (e, tmpl) {
  e.preventDefault();
  var tez = tmpl.view.parentView.parentView.parentView._templateInstance.data;
  var tezId = tez._id
  console.log(tez)
  console.log(tezId);
  var removedKriter = this
  console.log(removedKriter);
  var removedKriterID = removedKriter[1];
  console.log(removedKriterID);
  Tezler.update({_id : tezId}, {$pull: {kriterMap : removedKriter}})
  var query = {};
  query["kriterler." + removedKriterID] = "";
  Tezler.update({_id : tezId}, {$unset: query})

  },
  'click .kaydet' :function(e, tmpl){
      console.log(this);
      var note = tmpl.find('.note').value;
      var tezID = this[0];
      var KriterID = this[1];
      var querystring = "kriterler." + KriterID + ".notlar";
      var query = {};
      query[querystring] = note;
      Tezler.update({_id : tezID}, {$set : query});
  }
});

Template.Tezkriteri.helpers({
    rules: function(){
        var map = this;
        var tezID = this[0];
        var kriterID = this[1];
        return Tezler.findOne(tezID).kriterler[kriterID].rulesMap;
    },
    title: function(){
        var kriterID = this[1];
        return Kriterler.findOne(kriterID).title;
    },
});

/*****************************************************************************/
/* Tezkriteri: Lifecycle Hooks */
/*****************************************************************************/
Template.Tezkriteri.created = function () {
};

Template.Tezkriteri.rendered = function () {
  
  
    $(".remove-tez-kriteri").hide();
    $(".tezkriteri").mouseover(function(){
        $(this).find('.remove-tez-kriteri').show();
    });
    $(".tezkriteri").mouseleave(function(){
        $(this).find('.remove-tez-kriteri').hide();
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
    var tezID1 = this.data[0];
    var kriterID1 = this.data[1];
    var note1 = Tezler.findOne(tezID1).kriterler[kriterID1].notlar;
    $('.note').val(note1);
};


Template.Tezkriteri.destroyed = function () {
};


