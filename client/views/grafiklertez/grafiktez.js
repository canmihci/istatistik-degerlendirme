Template.grafiktez.helpers({
    maintext : function(){
        //console.log(this);
        return this.content;
        //return  text.split("(")[0];
    },
    truecountdiv : function(){
        return this._id + "truecount"
    },
    falsecountdiv : function(){
        return this._id + "falsecount"
    },
    nullcountdiv : function(){
        return this._id + "nullcount"
    },
    totalcountdiv : function(){
        return this._id + "totalcount"
    },
});

Template.grafiktez.rendered = function () {
    
    console.log(this);
    kriterid = Router.current().params._id;
    console.log(kriterid);
    kriterKuraliId = this.data._id;
    var divId = "#" + kriterKuraliId;
    console.log(divId);
    console.log("testing");
    piequery = "kriterler." + kriterid + ".rules." + kriterKuraliId + ".checked";
    console.log(piequery);
    truequery = {};
    truequery[piequery] = true;
    truecount = Tezler.find(truequery).count();
    console.log(truecount);
    falsequery = {};
    falsequery[piequery] = false;
    falsecount = Tezler.find(falsequery).count();
    console.log(falsecount);
    piedata = [['Evet', truecount],['Hayır', falsecount]]
    $(divId).highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,//null,
                plotShadow: false
            },
            title: {
                text: null
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Kodlama oranı',
                data: piedata
            }]
        });
    truediv = divId + "truecount";
    console.log("truediv =" + truediv)
    falsediv = divId + "falsecount";
    console.log("falsediv =" + falsediv)
    totaldiv = divId + "totalcount";
    console.log("totaldiv =" + totaldiv)
    totalcount = truecount + falsecount
    $(truediv).html("<h6>Evet: " + truecount + "</h6>");
    $(falsediv).html("<h6>Hayır: " + falsecount + "</h6>");
    $(totaldiv).html("<h6>Toplam: " + totalcount + "</h6>");
    
};