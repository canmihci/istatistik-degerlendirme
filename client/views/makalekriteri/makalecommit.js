Template.Makalekriteri.events({
    'click .ok' : function (e, tmpl){
    e.preventDefault();
    console.log(this);
    var kuralID = this[2];
    var kriterID = this[1];
    var makaleID = this[0];
    var querystring = "kriterler." + kriterID + ".rules." + kuralID + ".checked";
    var setquery = {};
    setquery[querystring] = true;
    console.log(setquery);
    Makaleler.update({_id : makaleID}, {$set : setquery});
    },
    'click .remove' : function (e, tmpl){
    e.preventDefault();
    console.log(this);
    var kuralID = this[2];
    var kriterID = this[1];
    var makaleID = this[0];
    var querystring = "kriterler." + kriterID + ".rules." + kuralID + ".checked";
    var setquery = {};
    setquery[querystring] = false;
    console.log(setquery);
    Makaleler.update({_id : makaleID}, {$set : setquery});
    }
});




Template.makalecommit.helpers({
    content: function(){
        var tmpl = this;
        var kuralID = this[2];
        return Kriterkurallari.findOne(kuralID).content;
    },
    unchecked: function(){
        var tmpl = this;
        var kuralID = this[2];
        var kriterID = this[1];
        var makaleID = this[0];
        var status = Makaleler.findOne(makaleID).kriterler[kriterID].rules[kuralID].checked;
        if (status === null){
            return true;
        } else {
            return false;
        }
    },
    checkedandtrue: function(){
        var tmpl = this;
        var kuralID = this[2];
        var kriterID = this[1];
        var makaleID = this[0];
        var status = Makaleler.findOne(makaleID).kriterler[kriterID].rules[kuralID].checked;
        if (status === true){
            return true;
        } else {
            return false;
        }        
    },
    checkedandfalse: function(){
        var tmpl = this;
        var kuralID = this[2];
        var kriterID = this[1];
        var makaleID = this[0];
        var status = Makaleler.findOne(makaleID).kriterler[kriterID].rules[kuralID].checked;
        if (status === false){
            return true;
        } else {
            return false;
        }        
    }    
});