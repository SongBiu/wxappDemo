// pages/my/my.js
var app = getApp();
Page({
	data:{
		openid:null
	},
	/**
	 * 页面的初始数据
	 */
	nickName:'',
	communityName: '',
	score: '',
	countBag:'',

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function () {
		var that = this;
		this.setData({
			nickName: app.nickName,
		})
		this.setData({
			openid: app.globalData.openid
		})
		wx.request({
			url: app.url_pre + '/userinfo.php',
			data: {
				usrID:this.data.openid
			},
			success: function(res) {
				console.log("success")
				console.log(res)
				that.setData({
					score: res.data.score,
					communityName: res.data.community_name,
					countBag:res.data.countBag
				})
			}
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},
	invitate_code: function() {
		if (app.invitate_code != '') {
			return;
		} else {
			wx.request({
				url: app.url_pre + '/invitate.php',
				data:{
					invitater:this.data.openid
				},
				success: function(res) {
					app.invitate_code= res.data;
				},
				fail: function() {
					console.log('error')
				}
			})
		}
	}
})