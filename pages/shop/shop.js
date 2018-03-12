// pages/shop/shop.js
var app = getApp();
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		PKU: false,
		app:getApp()
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			PKU:app.PKU
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
	gotover: function() {
		wx.navigateTo({
			url: "../verify/verify"
		})
	},
	gotoleadboard: function() {
		wx.redirectTo({
			url: '../leadboard/leadboard'
		})
	},
	gotojoin: function() {
		wx.redirectTo({
			url: '../join/join'
		})
	},
	gotoindex: function() {
		wx.redirectTo({
			url: '../index/index'
		})
	},
	gotomy: function() {
		wx.redirectTo({
			url: '../my/my'
		})
	},
	selectImg: function () {
		wx.chooseImage({
			count: 1, // 最多可以选择的图片张数，默认9
			sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
			sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
			success: function (res) {
				app.imgPath = res.tempFilePaths[0]
				wx.navigateTo({
					url: '../upload/upload'
				})
			}
		})
	}
})