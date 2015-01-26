
/*****************************************************************************/
/* Grafik: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Grafikler.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Grafikler.helpers({
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
    },
    kriter : function(){
      kriterid = Router.current().params._id;
      kriter = Kriterler.findOne(kriterid);
      return kriter;
    },
    kurallar : function(){
      kriterid = Router.current().params._id;
      kriter = Kriterler.findOne(kriterid);
      return kriter.rules
    },
    text : function(){
        console.log(kriter);
    }
});

/*****************************************************************************/
/* Grafik: Lifecycle Hooks */
/*****************************************************************************/
Template.Grafikler.created = function () {
};

Template.Grafikler.rendered = function () {
    console.log("rendered");
    kriterid = Router.current().params._id;
    console.log("URL kriter ID'si" + kriterid);
    var divId = "#" + kriterid;
    console.log(divId);
    var dergiler = Dergiler.find().fetch();
    dergiseries = [];
    
    for (var i = 0; i < dergiler.length ; i++){
        console.log("döngüde şu an bakılan dergi: " + dergiler[i].ismi);
        grafikdata = [];
        
        
        var buderginin20052007sayisi = Sayilar.find({$and : [
            {"dergiID" : dergiler[i]._id},
            {$and : [
                    {"yili" : {$lte : "2007"}},
                    {"yili" : {$gt : "2005"}}
                ]}
            ]}).fetch()[0]._id;
        console.log("bu derginin 2005-2007 sayıları:");
        console.log(buderginin20052007sayisi);
        queryobject = {};
        querystring = "kriterler." + kriterid;
        queryobject[querystring] = {$exists : true};
        var busayidakikritercount = Makaleler.find({ $and :[{"sayiID" : buderginin20052007sayisi}, queryobject]}).count();
        console.log("bu derginin 2005-2007 sayısında bu kriterden " +busayidakikritercount + " tane var.");
        grafikdata.push(busayidakikritercount);
        
        var buderginin20072009sayisi = Sayilar.find({$and : [
            {"dergiID" : dergiler[i]._id},
            {$and : [
                    {"yili" : {$lte : "2009"}},
                    {"yili" : {$gt : "2007"}}
                ]}
            ]}).fetch()[0]._id;
        console.log("bu derginin 2007-2009 sayıları:");
        console.log(buderginin20072009sayisi);
        querystring = "kriterler." + kriterid;
        queryobject[querystring] = {$exists : true};
        var busayidakikritercount = Makaleler.find({ $and :[{"sayiID" : buderginin20072009sayisi}, queryobject]}).count();
        console.log("bu derginin 2007-2009 sayısında bu kriterden " +busayidakikritercount + " tane var.")
        grafikdata.push(busayidakikritercount);
        
        var buderginin20092011sayisi = Sayilar.find({$and : [
            {"dergiID" : dergiler[i]._id},
            {$and : [
                    {"yili" : {$lte : "2011"}},
                    {"yili" : {$gt : "2009"}}
                ]}
            ]}).fetch()[0]._id;
        console.log("bu derginin 2009-2011 sayıları:");
        console.log(buderginin20092011sayisi);
        querystring = "kriterler." + kriterid;
        queryobject[querystring] = {$exists : true};
        var busayidakikritercount = Makaleler.find({ $and :[{"sayiID" : buderginin20092011sayisi}, queryobject]}).count();
        console.log("bu derginin 2009-2011 sayısında bu kriterden " +busayidakikritercount + " tane var.")
        grafikdata.push(busayidakikritercount);
        
        var buderginin20112013sayisi = Sayilar.find({$and : [
            {"dergiID" : dergiler[i]._id},
            {$and : [
                    {"yili" : {$lte : "2013"}},
                    {"yili" : {$gt : "2011"}}
                ]}
            ]}).fetch()[0]._id;
        console.log("bu derginin 2011-2013 sayıları:");
        console.log(buderginin20112013sayisi);
        querystring = "kriterler." + kriterid;
        queryobject[querystring] = {$exists : true};
        var busayidakikritercount = Makaleler.find({ $and :[{"sayiID" : buderginin20112013sayisi}, queryobject]}).count();
        console.log("bu derginin 2011-2013 sayısında bu kriterden " +busayidakikritercount + " tane var.");
        grafikdata.push(busayidakikritercount);
        
        var buderginin20132015sayisi = Sayilar.find({$and : [
            {"dergiID" : dergiler[i]._id},
            {$and : [
                    {"yili" : {$lte : "2015"}},
                    {"yili" : {$gt : "2013"}}
                ]}
            ]}).fetch()[0]._id;
        console.log("bu derginin 2013-2015 sayıları:");
        console.log(buderginin20132015sayisi);      
        querystring = "kriterler." + kriterid;
        queryobject[querystring] = {$exists : true};
        var busayidakikritercount = Makaleler.find({ $and :[{"sayiID" : buderginin20132015sayisi}, queryobject]}).count();
        console.log("bu derginin 2013-2015 sayısında bu kriterden " +busayidakikritercount + " tane var.");
        grafikdata.push(busayidakikritercount);
        
        dergiseries.push({
            name: dergiler[i].ismi,
            data: grafikdata
        });
    }
    
     $(divId).highcharts({
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                viewDistance: 25,
                depth: 40
            },
            marginTop: 80,
            marginRight: 40
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['2005-2007', '2007-2009', '2009-2011', '2011-2013', '2013-2015']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Kriterin kodlanma sayısı'
            }
        },
        labels: {
            items: [{
                html: 'Deneme',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        
        plotOptions: {
            series: {
             stacking: 'normal'   
            }
        },
        
        series: dergiseries
        
        /*[{
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Jane',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'John',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Joe',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]*/
    });
    
};

Template.Grafikler.destroyed = function () {
}