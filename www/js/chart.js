function showChart(projectCount)
{
Highcharts.chart('projectCounter', 
{

    chart: 
	{
        type: 'solidgauge',
		margin : 20
    },
	credits: { enabled: false },
	tooltip: { enabled: false },
    title: 
	{
        text: '',
        style: { display: 'none' }
    },
	pane: 
	{
		startAngle : 0,
		endAngle : 360,
		background : 
		[
			{
				outerRadius : '112%',
				innerRadius : '88%',
				backgroundColor : '#ffd0cc'
			}
		]
    },
    yAxis: 
	{
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: [],
		title : 
		{
			text : projectCount,
			align : "middle",
			enabled : "middle",
			margin : 40,
			y : 57,
			style : 
			{
				"color" : "#ef473a",
				"fontSize" : "40pt",
			},
		},
		
    },
	
    plotOptions: 
	{
        solidgauge: {
            dataLabels: { enabled: false },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [
	{
        name: 'projects',
        data: 
		[
			{
				color: '#ef473a',
				radius: '112%',
				innerRadius: '88%',
				y : parseInt(projectCount)
			}
		]
    }]
});
}


// Performace Charts
function showPerformanceChart()
{

Highcharts.chart('performanceMonth', 
{
	chart: { type: 'areaspline',margin : 0 },
	title: { text : "" },
	credits: { enabled: false },
	tooltip : {enabled : false},
	xAxis : 
	{
		labels: { enabled:false },
	},
	
	yAxis: 
	{
		gridLineWidth: 0,
		minorGridLineWidth: 0,
		title: 
		{
			text: ''
		},
		labels: { enabled : false },
	},
	plotOptions: 
	{
		area: 
		{
			
			marker: 
			{
				enabled: false,
				symbol: 'circle',
				radius: 2,
				states: 
				{
					hover: { enabled: true }
				}
			}
		}
	},
	series: 
	[
		{
			showInLegend :false,
			color : "#ef473a",
			labels :{enabled : false},
			data: 
			[ 3, 4, 3, 5, 4, 10, 12 ]
		}
		
	]
});

}