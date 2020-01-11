import { getAllOrder } from 'api/orderType'

let echartsOptions = {
    pieChart: {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            // orient: 'vertical',
            // left: 'left',
            data: ['第一季度', '第二季度', '第三季度', '第四季度']
        },
        series: [
            {
                name: '订单数量',
                type: 'pie',
                radius: '55%',
                // center: ['50%', '60%'],
                data: [],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    },
    barGraph: {

        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            }
        ]
    }
}

let preData = [
    { value: 0, name: '第一季度' },
    { value: 1, name: '第二季度' },
    { value: 2, name: '第三季度' },
    { value: 3, name: '第四季度' }
]

getAllOrder().then(res => {
    let arr = [];
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    res.result.map(item => {
        let Month = new Date(item.order_timer).getMonth() + 1
        switch (true) {
            case 1 <= Month && Month <= 3:
                arr.push(Month)
                return arr
            case 4 <= Month && Month <= 6:
                arr1.push(Month)
                return arr1
            case 7 <= Month && Month <= 9:
                arr2.push(Month)
                return arr2
            case 10 <= Month && Month <= 12:
                arr3.push(Month)
                return arr3
            default:
                throw new Error('暂无数据')
        }
    })

    preData[0].value = arr.length
    preData[1].value = arr1.length
    preData[2].value = arr2.length
    preData[3].value = arr3.length
})

echartsOptions.pieChart.series[0].data = [...preData]

export default echartsOptions