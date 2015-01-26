Template.tummakale.rendered = function(){
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

Template.tummakale.events({
    'click .trash': function(theEvent, theTemplate){
    theEvent.preventDefault();
    Makaleler.remove(this._id);
  },
    "click .ekle": function(theEvent, theTemplate){
    theEvent.preventDefault();
    var kriter = this;
    var kriterID = this._id;
    console.log(kriter);
    var makale = theTemplate.data;
    var makaleID = theTemplate.data._id;
    console.log(makale);
    var query = {};
    query["kriterler." + kriterID] = {
        title : kriter.title,
        type: kriter.type,
        rules : {},
        rulesMap : []
    };
    console.log(query);
    Makaleler.update({_id : makaleID}, {$set : query});
    Makaleler.update({_id : makaleID}, {$push : {kriterMap : [makaleID, kriterID]}});
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
        Makaleler.update({_id : makaleID}, {$set : query2});
        var query2 = {}
        query2["kriterler."+kriterID+".rulesMap"] = [makaleID, kriterID, ruleID];
        Makaleler.update({_id : makaleID}, {$push : query2})
        query2 = {}
    }
  }

});

Template.tummakale.helpers({
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
    dergi : function(){
        var id = this.dergiID;
        return Dergiler.findOne(id).ismi;
    },
    sayi : function(){
        var id = this.sayiID;
        var issue = Sayilar.findOne(id);
        var yili = issue.yili;
        var cilt = issue.cilt;
        var sayi = issue.sayi;
        return yili + " yılı Cilt " + cilt + " Sayı " + sayi;
    },
    diger : function(){
        return Kriterler.find({type: "Diğer"});
    },
    makaleIdContext: function(){
        console.log(this);
        return this._id;
        
    }
        

});