var mapUrl = 'assets/json/chn.json';
var chartDom = document.getElementById('chmap');
var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
$.get(mapUrl, function (chnjson) {
    echarts.registerMap('CHN', chnjson, {});
    option = {
        visualMap: {
            show: false,
            min: 0,
            max: 1,
            inRange: {
                color: [
                    '#FFFFFF',
                    '#6E57E0'
                ]
            }
        },
        series: [
            {
                name: 'gone',
                type: 'map',
                roam: true,
                map: 'CHN',
                data: [
                    { name: '北京市', value: 1 },
                    { name: '天津市', value: 0 },
                    { name: '河北省', value: 0 },
                    { name: '山西省', value: 0 },
                    { name: '内蒙古自治区', value: 0 },
                    { name: '辽宁省', value: 1 },
                    { name: '吉林省', value: 0 },
                    { name: '黑龙江省', value: 0 },
                    { name: '上海市', value: 1 },
                    { name: '江苏省', value: 0 },
                    { name: '浙江省', value: 0 },
                    { name: '安徽省', value: 0 },
                    { name: '福建省', value: 1 },
                    { name: '江西省', value: 0 },
                    { name: '山东省', value: 1 },
                    { name: '河南省', value: 0 },
                    { name: '湖北省', value: 1 },
                    { name: '湖南省', value: 1 },
                    { name: '广东省', value: 0 },
                    { name: '广西壮族自治区', value: 0 },
                    { name: '海南省', value: 0 },
                    { name: '重庆市', value: 1 },
                    { name: '四川省', value: 1 },
                    { name: '贵州省', value: 1 },
                    { name: '云南省', value: 1 },
                    { name: '西藏自治区', value: 0 },
                    { name: '陕西省', value: 1 },
                    { name: '甘肃省', value: 1 },
                    { name: '青海省', value: 1 },
                    { name: '宁夏回族自治区', value: 0 },
                    { name: '新疆维吾尔自治区', value: 0 },
                    { name: '台湾省', value: 0 },
                    { name: '香港特别行政区', value: 0 },
                    { name: '澳门特别行政区', value: 0 }
                ]
            }
        ]
    };
    myChart.hideLoading();
    myChart.setOption(option);
});