var app = getApp()
Page({
    data: {
        //lawyer_list:[{"id":"20160922181651004298","name":"傅国旺","avatar":"http://www.ihealthyun.com:3343/htgl/chatfiles/lawerphoto/20160922181651004298.jpg","introduction":"傅国旺，男，汉族，1967年出生，中共党员，高级经济师，西南政法大学民商法学研究生学历，北京市中银（银川）律师事务所执业律师。"},{"id":"20161123161542006021","name":"王建军","avatar":"http://www.ihealthyun.com:3343/htgl/chatfiles/lawerphoto/20161123162328006023.jpg","introduction":"  王建军律师，男，汉族，中共党员，中国政法大学在职研究生学历，银川市优秀律师。执业以来，先后多次被评为先进工作者、优秀共产党员。2009年5月，荣获银川市首届检察官与律师辩论赛个人二等奖。2016年5月，被银川市司法局、银川市律师协会评为2013-2015年度银川市优秀律师。2009年8月，创办北京市中银（银川）律师事务所，现为北京市中银（银川）律师事务所创始合伙人、主任，银川市律师协会律师事务所管理委员会副主任，宁夏律师协会行政法专业委员会副主任，宁夏律师协会文化与宣传委员会副主任，中国青年创业国际计划宁夏办公室创业导师。"},{"id":"20161123191829006047","name":"吴妍","avatar":"http://www.ihealthyun.com:3343/htgl/chatfiles/lawerphoto/20161123191829006047.jpg","introduction":"吴 妍，女，一九七八年七月出生，汉族，宁夏人，法学理论研究生、自一九九八年开始从事法律事务执业经验十八年；一九九八年七月至二00七年五月在宁夏银川市灵武人民法院担任书记员、执行员、审判员；二00七年六月开始从事律师职业至今；现为北京市中银（银川）律师事务所合伙人，系本所管理人律师。\r\n"},{"id":"20160927151244004652","name":"徐伟","avatar":"http://www.ihealthyun.com:3343/htgl/chatfiles/lawerphoto/20160927151244004652.jpg","introduction":"徐伟，男，汉族，毕业于吉林大学法学院，本科学历。2015年4月在北京市中银（银川）律师事务所申请执业，2016年8月正式执业。"},{"id":"20161123191442006045","name":"刘小青","avatar":"http://www.ihealthyun.com:3343/htgl/chatfiles/lawerphoto/20161123191442006045.jpg","introduction":"刘小青，女，汉族，毕业于中国政法大学，本科学历"},{"id":"20160927151410004657","name":"李秀花","avatar":"http://www.ihealthyun.com:3343/htgl/chatfiles/lawerphoto/20160927151410004657.jpg","introduction":"李秀花，女，回族，毕业于河南大学法学院，本科学历。2014年毕业--至今，就业于北京市中银（银川）律师事务。"},{"id":"20160927151340004655","name":"张理","avatar":"http://www.ihealthyun.com:3343/htgl/chatfiles/lawerphoto/20160927151340004655.jpg","introduction":"张理律师，女，汉族，生于1991年3月，2013年6月毕业于东北财经大学，同年9月通过国家司法考试取得法律职业资格证书A。自2014年7月至今，就职于北京市中银（银川）律师事务所\r\n专业领域：\r\n公司法律事务、企业法律风险管理、房地产建筑法律事务、金融机构法律事务。\r\n"},{"id":"20160927151137004651","name":"祁爱玲","avatar":"http://www.ihealthyun.com:3343/htgl/chatfiles/lawerphoto/20160927151137004651.jpg","introduction":"人员好"}]
        lawyer_list:[]
    },
    onLoad: function(options) {
        // Do some initialize when page load.
    },
    onReady: function() {

    },
    onShow: function() {
        var _this = this ;

        this.getData(_this);
        console.log('y');
    },
    onHide: function() {
        // Do something when page hide.
    },
    onUnload: function() {
        // Do something when page close.
    },
    onPullDownRefresh: function() {
        // Do something when pull down.
    },
    onReachBottom: function() {
        // Do something when page reach bottom.
    },
    // Event handler.
    viewTap: function() {
        this.setData({
            text: 'Set some data for updating view.'
        })
    },
    getData:function(self){
        var p = app.httpGet('http://www.ihealthyun.com:3343/htgl/app/getlawerinfolist.do?start=0&limit=10');
        p.then(function(data){
            if (data.err =='0') {

                var laywerList =[];
                data.data.forEach(function(item){
                    var lawyer ={};
                    lawyer.id = item[0];
                    lawyer.name = item[1];
                    lawyer.avatar = item[2] ;
                    lawyer.introduction = item[5];
                    laywerList.push(lawyer);
                });
                console.log(JSON.stringify(laywerList));
                self.setData({lawyer_list: laywerList});
            }
        })
    },
    customData: {
        hi: 'MINA'
    }
})