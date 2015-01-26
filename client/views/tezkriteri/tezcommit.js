
/*****************************************************************************/
/* Tezcommit: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Tezcommit.events({
    'click .ok' : function (e, tmpl){
    e.preventDefault();
    console.log(this);
    var kuralID = this[2];
    var kriterID = this[1];
    var tezID = this[0];
    var querystring = "kriterler." + kriterID + ".rules." + kuralID + ".checked";
    var setquery = {};
    setquery[querystring] = true;
    console.log(setquery);
    Tezler.update({_id : tezID}, {$set : setquery});
    },
    'click .remove' : function (e, tmpl){
    e.preventDefault();
    console.log(this);
    var kuralID = this[2];
    var kriterID = this[1];
    var tezID = this[0];
    var querystring = "kriterler." + kriterID + ".rules." + kuralID + ".checked";
    var setquery = {};
    setquery[querystring] = false;
    console.log(setquery);
    Tezler.update({_id : tezID}, {$set : setquery});
    }
});

Template.Tezcommit.helpers({
    content: function(){
        var tmpl = this;
        var kuralID = this[2];
        return Kriterkurallari.findOne(kuralID).content;
    },
    unchecked: function(){
        var tmpl = this;
        var kuralID = this[2];
        var kriterID = this[1];
        var tezID = this[0];
        var status = Tezler.findOne(tezID).kriterler[kriterID].rules[kuralID].checked;
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
        var tezID = this[0];
        var status = Tezler.findOne(tezID).kriterler[kriterID].rules[kuralID].checked;
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
        var tezID = this[0];
        var status = Tezler.findOne(tezID).kriterler[kriterID].rules[kuralID].checked;
        if (status === false){
            return true;
        } else {
            return false;
        }        
    } 
});

/*****************************************************************************/
/* Tezcommit: Lifecycle Hooks */
/*****************************************************************************/
Template.Tezcommit.created = function () {
};

Template.Tezcommit.rendered = function () {
};

Template.Tezcommit.destroyed = function () {
};


