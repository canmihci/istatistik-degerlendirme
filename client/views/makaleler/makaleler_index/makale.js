Template.makale.rendered = function(){
    $(".trash").hide();
    $(".post").mouseover(function(){
        $(this).find('.trash').show();
    });
    $(".post").mouseleave(function(){
        $(this).find('.trash').hide();
    });
    $(".btn-tag").hover(
    function() {
    $(this).removeClass("btn-default").addClass("btn-danger");
    $(this).find("span").removeClass("glyphicon-tag").addClass("glyphicon-trash");
        }, 
    function() {
    $(this).removeClass("btn-danger").addClass("btn-default");
    $(this).find("span").removeClass("glyphicon-trash").addClass("glyphicon-tag");
    });
}

Template.makale.events({
    'click .trash': function(theEvent, theTemplate){
    theEvent.preventDefault();
    Makaleler.remove(this._id);
  },
    "click .ekle": function(theEvent, theTemplate){
    theEvent.preventDefault();
    var kriter = this;
    console.log(this.title);
    var makale = theTemplate.data;
    var kriterler = theTemplate.data.kriterler 
    Makaleler.update({_id : makale._id}, { $push : {kriterler : kriter }});
    console.log(makale.kriterler);
  }

});

Template.makale.helpers({
    genel : function(){
        return Kriterler.find({type: "Genel Kriter"});
    },
    parametrik : function(){
        return Kriterler.find({type: "Parametrik Test"});
    },
    nonparametrik : function(){
        return Kriterler.find({type: "Non-Parametrik Test"});
    },
    posthoc : function(){
        return Kriterler.find({type: "Post-Hoc Testi"});
    },
    diger : function(){
        return Kriterler.find({type: "Diğer"});
    }

});


/* if(keyword){
    Makaleler.update({_id : this._id}, { $push : {keywords : keyword }});
    theTemplate.find('.keyword').value = "";
    }
    else {alert("Etiket alanı boş")}
  },
    'keyup #add-tag' : function(theEvent, theTemplate){
    if (theEvent.keyCode === 13) {
        var keyword = (theTemplate.find('.keyword').value);
        if(keyword){
            Makaleler.update({_id : this._id}, { $push : {keywords : keyword }});
            theTemplate.find('.keyword').value = "";
        }
        else {
            alert("Etiket alanı boş")
            
        }
    } */
    
    
/*
    'click .btn-tag' : function(theEvent, theTemplate){
    theEvent.preventDefault();
    var keyword = (this.toString());
    Makaleler.update({_id : theTemplate.data._id}, { $pull : {keywords : keyword }});
  }*/