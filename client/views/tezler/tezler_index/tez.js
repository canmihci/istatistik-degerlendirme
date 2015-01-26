Template.tez.rendered = function(){
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

Template.tez.events({
    'click .trash': function(theEvent, theTemplate){
    theEvent.preventDefault();
    Tezler.remove(this._id);
  },
    "click .ekle": function(theEvent, theTemplate){
    theEvent.preventDefault();
    var kriter = this;
    var kriterID = this._id;
    console.log(kriter);
    var tez = theTemplate.data;
    var tezID = theTemplate.data._id;
    console.log(tez);
    var query = {};
    query["kriterler." + kriterID] = {
        title : kriter.title,
        type: kriter.type,
        rules : {},
        rulesMap : []
    };
    console.log(query);
    Tezler.update({_id : tezID}, {$set : query});
    Tezler.update({_id : tezID}, {$push : {kriterMap : [tezID, kriterID]}});
    for(i = 0; i < kriter.rules.length ; i++){
        var rule = kriter.rules[i];
        var ruleID = kriter.rules[i]._id;
        var content = kriter.rules[i].content;
        console.log(ruleID);
        var query2 = {};
        query2["kriterler."+kriterID+".rules."+ruleID] = {
            content : content,
            checked : null
        }
        Tezler.update({_id : tezID}, {$set : query2});
        var query2 = {}
        query2["kriterler."+kriterID+".rulesMap"] = [tezID, kriterID, ruleID];
        Tezler.update({_id : tezID}, {$push : query2})
        query2 = {}
    }
  }

});

Template.tez.helpers({
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