Page({
  data: {
    array: ['纳米', '微米', '毫米', '厘米'/*,'分米','米','千米'*/],
    objectArray: [
      {
        id: 0,
        name: '纳米'
      },
      {
        id: 1,
        name: '微米'
      },
      {
        id: 2,
        name: '毫米'
      },
      {
        id: 3,
        name: '厘米'
      }
    ],
    ratearray:[
      {
        id:0,//0-1之间的汇率10*0=1*1
        rate:10
      },
      {
        id:1,//1-2之间的汇率10*1=1*2
        rate:10
      },
      {
        id:2,//2-3之间的汇率10*2=1*1
        rate:10
      }
    ],
    nowunit1: 3,
    tounit1: 2,
    result: 0
    },
  nowunit: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      nowunit1: e.detail.value
    })
  },
  tounit:function(a){
    console.log(a.detail.value)
    this.setData({
      tounit1: a.detail.value
    })
  },
  inputdata:function(e){
    console.log(e.detail.value)
    var num = parseFloat(e.detail.value)
    if (this.nowunit1>this.tounit1) {//大单位换小单位
      for (let index = 0; index < (this.nowunit1-this.tounit); index++) {
        num=num*10
      }
    }
    else
    {
      for (let index = 0; index < (this.tounit1-this.nowunit1); index++) {
        num=num/10
      }
    }
    this.setData({result:num})
  }
})