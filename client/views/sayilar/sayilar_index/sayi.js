Template.sayi.rendered = function(){
    $(".trash").hide();
    $(".post").mouseover(function(){
        $(this).find('.trash').show();
    });
    $(".post").mouseleave(function(){
        $(this).find('.trash').hide();
    });
}

Template.sayi.events({
    'click .trash': function(theEvent, theTemplate){
    theEvent.preventDefault();
    Sayilar.remove(this._id);
  }
});

Template.sayi.helpers({
    count: function(){
     var id = this._id;
     return Makaleler.find({"sayiID" : id}).count();
        
    }
});