Template.grafik.helpers({
    maintext : function(){
        //console.log(this);
        return this.content;
        //return  text.split("(")[0];
    }
});

Template.grafik.created = function () {

    
};

Template.grafik.rendered = function () {
    
    //console.log(this);
    kriterKuraliId = this.data._id;
    var divId = "#" + kriterKuraliId;
    //console.log(divId);
    //console.log("ekmek");
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
                data: [
                    ['Evet',   45.0],
                    ['Hayır',       26.8],
                ]
            }]
        });
};