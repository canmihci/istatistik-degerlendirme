Template.GrafiklertezIndex.helpers({

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