var myChart = echarts.init(document.getElementById("skillsWrap"));
var option = {
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: "#fff",
        backgroundColor: "#999",
        borderRadius: 3,
        padding: [3, 5],
      },
    },
    indicator: [
      { name: "静态页面", max: 100 },
      { name: "编程基础", max: 100 },
      { name: "Vue", max: 100 },
      { name: "微信小程序", max: 100 },
      { name: "React", max: 100 },
      { name: "沟通能力", max: 100 },
    ],
  },
  series: [
    {
      name: "能力雷达",
      type: "radar",

      data: [
        {
          value: [100, 90, 85, 80, 85, 70],
          name: "能力雷达",
        },
      ],
    },
  ],
};
myChart.setOption(option);
