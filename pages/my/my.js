// pages/my/my.js
var app = getApp();
Page({
	/**
	 * 页面的初始数据
	 */

	data: {
		app:getApp(),
		nickName: null,
		communityName: null,
		score: null,
		countBag: null,
		openid: null,
		app:getApp()
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function () {
		var that = this;
		this.setData({
			nickName: app.nickName,
			openid: app.openid
		})
		wx.request({
			url: app.url_pre + '/userinfo.php',
			data: {
				usrID: this.data.openid
			},
			success: function (res) {
				console.log(res)
				that.setData({
					score: res.data.score,
					communityName: res.data.community_name,
					countBag: res.data.countBag
				})
			}
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		this.setData({
			openid: app.openid
		})
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
	invitate_code: function () {
		console.log("hi")
		if (app.invitate_code != '') {
			
			return;
		} else {
			wx.request({
				url: app.url_pre + '/invitate.php',
				data: {
					invitater: this.data.openid
				},
				success: function (res) {
					app.invitate_code = res.data;
					wx.navigateTo({
						url: '../invitate_code/invitate_code'
					})
				},
			})
		}
	},
	myDynamic: function() {
		wx.redirectTo({
			url: '../myDynamic/myDynamic'
		})
	},
	myCommunity: function() {
		if (this.data.communityName == null) {
			wx.redirectTo({
				url: '../join/join'
			})
		}
		else {
			wx.redirectTo({
				url: '../leadboard/leadboard'
			})
		}
	},
	gotoindex: function() {
		wx.redirectTo({
			url: '../index/index'
		})
	}
})