Template.dergi.rendered = function(){
    $(".trash").hide();
    $(".post").mouseover(function(){
        $(this).find('.trash').show();
    });
    $(".post").mouseleave(function(){
        $(this).find('.trash').hide();
    });
}

Template.dergi.events({
    'click .trash': function(theEvent, theTemplate){
    theEvent.preventDefault();
    Dergiler.remove(this._id);
  }
});

Template.dergi.helpers({
    count: function(){
        var id =  this._id;
        return Makaleler.find({"dergiID" : id}).count();
        
    }
    
});