
/*****************************************************************************/
/* Grafiklertez: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Grafiklertez.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Grafiklertez.helpers({
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
    kritercount: function(){
        kriterid = Router.current().params._id;
        tezler = Tezler.find().fetch();
        var kritercount = 0;
        for (var i = 0; i < tezler.length; i++){
            var butez = tezler[i] 
            for(var j = 0; j < butez.kriterMap.length; j++){
                if(butez.kriterMap[j][1] === kriterid){
                    kritercount++
                }
                
            }
            
        }
        return kritercount;
    },
    tezcount: function(){
        return Tezler.find().count();
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
/* Grafiklertez: Lifecycle Hooks */
/*****************************************************************************/
Template.Grafiklertez.created = function () {
};

Template.Grafiklertez.rendered = function () {
    console.log("rendered");
    kriterid = Router.current().params._id;
    console.log("URL kriter ID'si" + kriterid);
    var divId = "#" + kriterid;
    console.log(divId);
    tezseries = [
    {
      name: "Doktora",
      data: []
    },
    {
      name: "Yüksek Lisans",
      data: []
      
    }];
    YLkritercount = 0;
    DRkritercount = 0;
    
    for(var yil = 2003; yil < 2015; yil++){
      yilstring = String(yil);
      var YLtezleri = Tezler.find({"teztipi" : "YL", "yili" : yilstring}).fetch();
      var DRtezleri = Tezler.find({"teztipi" : "DR", "yili" : yilstring}).fetch();
      for(var i = 0; i < YLtezleri.length; i++){
        if (YLtezleri[i].kriterler[kriterid]){
          YLkritercount++;
        }
      };
      for(var i = 0; i < DRtezleri.length; i++){

        if (DRtezleri[i].kriterler[kriterid]){
          DRkritercount++;
        }
      };
    tezseries[0].data.push(DRkritercount);
    tezseries[1].data.push(YLkritercount);
    DRkritercount = 0;
    YLkritercount = 0;
    }


   $(divId).highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Kodlamada yıllara ve tez türüne göre değişim'
        },
        xAxis: {
            categories: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Kriterin kodlanma sayısı'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: tezseries

    });  
  
  
};

Template.Grafiklertez.destroyed = function () {
};


