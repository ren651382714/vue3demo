function gaid(){
	var rootURI = "https://api.m.jd.com/";
	var secretp = "";
	var myItemId = "";
	var itemsList = [];
	var shopitemsList = [];
	var qryCompositeMaterialList = [];
	var qryCompositeMaterialStatus = true;
	
	
	function log(text) {
		console.log(text);
	}
	main();
	var lotteryNum = 0;
	async function main() {
		!(async () => {
			console.group('%c浜笢鍏ㄦ皯钀ヤ笟鑴氭湰', 'color:#009a61; font-size: 36px; font-weight: 400');
			console.group('%c浣滆€呬俊鎭�', 'color:blue; font-size: 36px; font-weight: 250');
			console.log('%c鏈彃浠朵粎渚涘涔犱氦娴佷娇鐢╘n浣滆€�:灏忚丹浣珺yQQ83802712 \n鑱旂郴浣滆€� tencent://message/?uin=83802712&Menu=yes',
				'color:#009a61');
			console.log('%c浣滆€呭崥瀹�:http://blog.tyh52.com', 'color:#009a61');
			console.log('%c瀛︿範浜ゆ祦缇わ細333736660\n娌′簨涓嶇敤杩涚兢锛岄噷闈㈠叏鏄偦閫�(闄や簡缇や富)\nhttps://jq.qq.com/?_wv=1027&k=Mes9sRIc',
				'color:#009a61');
			console.log('%c璐墿浼樻儬缇わ細32412734\n杩欎釜鍙互杩涚兢锛岀瑷€缇わ紝鏀寔涓€涓媆nhttps://jq.qq.com/?_wv=1027&k=yB4utzbU',
				'color:#009a61');
			console.log('%c灏忚丹浣伄浜笢鑻忓畞绁炰环灞嬶細53810353\n绂佽█缇わ紝鍙戜含涓滆嫃瀹佹紡娲炲崟\nhttps://jq.qq.com/?_wv=1027&k=TdNX4f50',
				'color:#009a61');
			console.groupEnd();
			console.log(
				"褰撳墠娲诲姩鍦板潃锛歨https://wbbny.m.jd.com/babelDiy/Zeus/2s7hhSTbhMgxpGoa9JDnbDzJTaBB/index.html#/home");
			console.group('%c浠诲姟鏃ュ織', 'color:blue; font-size: 36px; font-weight: 250');
			await zoo_getHomeData();
			if (secretp != "") {
				log("寮€濮嬬鍒�");
				await zoo_sign();
				log("寮€濮嬪仛浠诲姟");
				init();
	
				await zoo_collectProduceScore();
				log("涓荤嚎浠诲姟");
				await zoo_getTaskDetail();
				let shopSign = "";
				console.log("鏁伴噺锛�" + itemsList.length);
				for (var i = 0; i < itemsList.length; i++) {
					let item = itemsList[i];
					let taskName = item.taskName;
					if (item.taskId == 10) {
						await zoo_getFeedDetailByAdd(item);
						await wait(1000);
					} else if (item.taskId == 11) {
						await zoo_getFeedDetailByView(item);
						await wait(1000);
					} else {
						await zoo_collectScore(taskName, item.taskId, item.itemId, shopSign, "", item[
							"taskToken"]);
						await wait(1000);
					}
				}
				log("寮€濮嬪簵閾轰换鍔�");
				await zoo_myMap();
	
				for (var i = 0; i < shopitemsList.length; i++) {
					let item = shopitemsList[i];
					await zoo_getTaskDetail(item.shopId);
					await wait(1000);
					shopSign = item.shopId;
					console.log(item.shopId + "鏁伴噺锛�" + itemsList.length);
					for (var j = 0; j < itemsList.length; j++) {
						let item = itemsList[j];
						let taskName = item.taskName;
						await wait(1000);
						if (item.taskType == 2) {
							await zoo_getFeedDetailByAdd(item);
						} else if (item.taskId == 11) {
							await zoo_getFeedDetailByView(item);
						} else {
							await zoo_collectScore(taskName, item.taskId, item.itemId, shopSign,
								"domainAutoSignSmashId", item["taskToken"]);
						}
					}
				}
				log("寮€濮嬪搧鐗屼换鍔�");
				await qryCompositeMaterials();
	
				for (var i = 0; i < qryCompositeMaterialList.length; i++) {
					if (qryCompositeMaterialStatus) {
						let item = qryCompositeMaterialList[i];
						await zoo_shopSignInRead(item.name, item.link);
						await wait(1000);
					}
					let items = qryCompositeMaterialList[i];
					await zoo_getTaskDetail(items.link);
					await wait(1000);
					shopSign = items.link;
					console.log(items.name + "鏁伴噺锛�" + itemsList.length);
					for (var j = 0; j < itemsList.length; j++) {
						let item = itemsList[j];
						let taskName = item.taskName;
						await wait(1000);
						if (item.taskType == 2) {
							await zoo_getFeedDetailByAdd(item);
						} else if (item.taskId == 100) {
							await zoo_getFeedDetailByView(item);
						} else {
							await zoo_collectScore(taskName, item.taskId, item.itemId, shopSign,
								"domainAutoSignSmashId", item["taskToken"]);
						}
					}
					if (lotteryNum) {
						for (var jj = 0; jj < lotteryNum; jj++) {
							await zoo_doShopLottery(items.desc);
						}
					}
				}
				log("寮€濮嬪ず绾㈠寘");
				await douhb();
				log("杞涓荤嚎浠诲姟锛岀洿鍒板仛瀹�");
				let falg = true;
				while (falg) {
					await zoo_getTaskDetail();
					let shopSign = "";
					console.log("鏁伴噺锛�" + itemsList.length);
					if (itemsList.length == 0) {
						console.log("涓荤嚎浠诲姟鍏ㄩ儴瀹屾垚锛岄櫎鍔犲叆鍝佺墝浼氬憳浠诲姟");
						falg = false;
						break;
					}
					for (var i = 0; i < itemsList.length; i++) {
						let item = itemsList[i];
						let taskName = item.taskName;
						await wait(1000);
						if (item.taskType == 2) {
							await zoo_getFeedDetailByAdd(item);
						} else if (item.taskId == 100) {
							await zoo_getFeedDetailByView(item);
						} else {
							await zoo_collectScore(taskName, item.taskId, item.itemId, shopSign, "", item[
								"taskToken"]);
						}
					}
				}
			} else {
				log("鍒濆鍖栧け璐�");
			}
	
		})()
		.catch((e) => {
				console.log('鍙戠敓寮傚父', e)
			})
			.finally(() => {
				console.log("缁撴潫");
			})
	}
	
	
	
	function zoo_raise(timeout = 0) {
		return new Promise((resolve) => {
			setTimeout(() => {
				fetch("https://api.m.jd.com/client.action?functionId=zoo_raise", {
					"credentials": "include",
					"headers": {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					"referrer": "https://wbbny.m.jd.com/babelDiy/Zeus/2s7hhSTbhMgxpGoa9JDnbDzJTaBB/index.html",
					"referrerPolicy": "no-referrer-when-downgrade",
					"body": "functionId=zoo_raise&body={}&client=wh5&clientVersion=1.0.0&uuid=" +
						new Date().getTime(),
					"method": "POST",
					"mode": "cors"
				}).then(function(response) {
					return response.json();
				}).then((res) => {
					try {
						let data = res.data;
						if (data) {
							if (data.success) {
								log('瑙ｉ攣缁撴灉锛�' + (data.bizCode || '鎴愬姛'))
							} else {
								log('瑙ｉ攣缁撴灉锛�' + (data.bizMsg))
							}
						}
					} catch (e) {
						console.error(e);
					} finally {
						resolve();
					}
				});
			}, timeout)
		})
	}
	
	function zoo_sign() {
		return new Promise(resolve => {
			fetch("https://api.m.jd.com/client.action?functionId=zoo_sign", {
				"credentials": "include",
				"headers": {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				"referrer": "https://wbbny.m.jd.com/babelDiy/Zeus/2s7hhSTbhMgxpGoa9JDnbDzJTaBB/index.html",
				"referrerPolicy": "no-referrer-when-downgrade",
				"body": "functionId=zoo_sign&body={}&client=wh5&clientVersion=1.0.0&uuid=" + new Date()
					.getTime(),
				"method": "POST",
				"mode": "cors"
			}).then(function(response) {
				return response.json();
			}).then((res) => {
				try {
					let data = res.data;
					if (data) {
						if (data.success) {
							let result = data.result;
							if (result) {
								console.log("绛惧埌缁撴灉:" + JSON.stringify(result));
							}
						} else {
							console.log("绛惧埌缁撴灉:" + data.bizMsg);
						}
					}
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
			});
		});
	}
	
	function zoo_doShopLottery(shopSign) {
		return new Promise(resolve => {
			let bodys = {
				"shopSign": shopSign == undefined ? "" : shopSign
			}
			let functionId = "zoo_doShopLottery";
			if (shopSign) {
				functionId = "zoo_doShopLottery"
			}
			fetch(rootURI + "client.action?functionId=" + functionId, {
				method: "post",
				mode: "cors",
				credentials: "include",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: "functionId=" + functionId + "&client=wh5&uuid=" + new Date().getTime() +
					"&clientVersion=1.0.0&body=" + JSON.stringify(bodys)
			}).then(function(response) {
				return response.json();
			}).then((res) => {
				try {
					let data = res.data;
					if (data) {
						if (data.success) {
							let result = data.result;
							if (result) {
								console.log("鎶界崕绲愭灉:" + JSON.stringify(result));
							}
						}
					}
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
			});
		})
	}
	
	function wait(t) {
		return new Promise(e => setTimeout(e, t))
	}
	async function init() {}
	
	//zoo_getTaskDetail();
	//qryCompositeMaterials();
	//zoo_collectProduceScore();
	//zoo_myMap();
	
	async function zoo_getHomeData() {
		return new Promise(resolve => {
			let bodys = {}
			fetch(rootURI + "client.action?functionId=zoo_getHomeData", {
				method: "post",
				mode: "cors",
				credentials: "include",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: "functionId=zoo_getHomeData&client=wh5&clientVersion=1.0.0&body=" + JSON
					.stringify(bodys)
			}).then(function(response) {
				return response.json();
			}).then(async (res) => {
				try {
					let data = res.data;
					if (data) {
						let result = data.result;
						if (result) {
							let homeMainInfo = result.homeMainInfo;
							if (homeMainInfo) {
								if (homeMainInfo.secretp) {
									secretp = homeMainInfo.secretp;
								} else {
									log("鍒濆鍖栧け璐�");
								}
							} else {
								log("鍒濆鍖栧け璐�");
							}
						} else {
							log("鍒濆鍖栧け璐�");
						}
					} else {
						log("鍒濆鍖栧け璐�");
					}
					if (res.data.result.homeMainInfo.raiseInfo.buttonStatus === 1) await zoo_raise(
						1000)
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
			});
		})
	}
	
	
	function zoo_myMap() {
		return new Promise(resolve => {
			let bodys = {}
			fetch(rootURI + "client.action?functionId=zoo_myMap", {
				method: "post",
				mode: "cors",
				credentials: "include",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: "functionId=zoo_myMap&client=wh5&clientVersion=1.0.0&body=" + JSON.stringify(bodys)
			}).then(function(response) {
				return response.json();
			}).then((res) => {
				try {
					let data = res.data;
					if (data) {
						let result = data.result;
						let items = [];
						if (result) {
							let list = result.shopList;
							let items = [];
							if (list) {
								for (var j = 0; j < list.length; j++) {
									let sitem = list[j];
									if (sitem) {
										items.push(sitem);
									}
								}
							}
							shopitemsList = items;
						}
					}
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
			});
		})
	}
	
	function qryCompositeMaterials() {
		return new Promise(resolve => {
			let bodys = {
				"qryParam": "[{\"type\":\"advertGroup\",\"id\":\"05382925\",\"mapTo\":\"singlePullDowner\"},{\"type\":\"advertGroup\",\"id\":\"05377177\",\"mapTo\":\"singleTitleBrand\"},{\"type\":\"advertGroup\",\"id\":\"05382858\",\"mapTo\":\"singleBtnDraw\"},{\"type\":\"advertGroup\",\"id\":\"05376054\",\"mapTo\":\"singleBubbles\"},{\"type\":\"advertGroup\",\"id\":\"05372304\",\"mapTo\":\"singleBtnPk\"},{\"type\":\"advertGroup\",\"id\":\"05373459\",\"mapTo\":\"singleBtnMainDivided\"},{\"type\":\"advertGroup\",\"id\":\"05373345\",\"mapTo\":\"singleBtnNotTask\"},{\"type\":\"advertGroup\",\"id\":\"05377769\",\"mapTo\":\"zipper\"},{\"type\":\"advertGroup\",\"mapTo\":\"resultData\",\"id\":\"05371960\"}]",
				"activityId": "2s7hhSTbhMgxpGoa9JDnbDzJTaBB",
				"pageId": "",
				"reqSrc": "",
				"applyKey": "jd_star"
			}
			fetch(rootURI + "client.action?functionId=qryCompositeMaterials", {
				method: "post",
				mode: "cors",
				credentials: "include",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: "functionId=qryCompositeMaterials&client=wh5&clientVersion=1.0.0&body=" + JSON
					.stringify(bodys)
			}).then(function(response) {
				return response.json();
			}).then((res) => {
				try {
					let data = res.data;
					if (data) {
						let items = [];
						for (var key in data) {
							let homeBottomBanner = data[key];
							if (homeBottomBanner) {
								let list = homeBottomBanner.list;
								if (list) {
									for (var j = 0; j < list.length; j++) {
										let sitem = list[j];
										if (sitem) {
											if (sitem.link) {
												items.push(sitem);
											}
										}
									}
								}
							}
						}
						qryCompositeMaterialList = items;
					}
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
			});
		})
	}
	
	function zoo_getTaskDetail(shopSign) {
		return new Promise(resolve => {
			let bodys = {
				"shopSign": shopSign == undefined ? "" : shopSign
			}
			let functionId = "zoo_getTaskDetail";
			if (shopSign) {
				functionId = "zoo_shopLotteryInfo"
			}
			fetch(rootURI + "client.action?functionId=" + functionId, {
				method: "post",
				mode: "cors",
				credentials: "include",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: "functionId=" + functionId + "&client=wh5&uuid=" + new Date().getTime() +
					"&clientVersion=1.0.0&body=" + JSON.stringify(bodys)
			}).then(function(response) {
				return response.json();
			}).then((res) => {
				try {
					let data = res.data;
					if (data) {
						if (data.success) {
							let result = data.result;
							if (result) {
								let taskVos = result.taskVos;
								let items = [];
								for (var i = 0; i < taskVos.length; i++) {
									let item = taskVos[i];
									if (item.status == 1) {
										if (item.taskType == 9) {
											let shoppingActivityVos = item.shoppingActivityVos;
											if (shoppingActivityVos) {
												for (var j = 0; j < shoppingActivityVos.length; j++) {
													let sitem = shoppingActivityVos[j];
													if (sitem) {
														if (sitem.status == 1) {
															sitem['taskId'] = item.taskId;
															sitem['taskName'] = item.taskName;
															items.push(sitem);
														}
													}
												}
											}
										} else if (item.taskType == 7 || item.taskType == 5) {
											let browseShopVo = item.browseShopVo;
											if (browseShopVo) {
												for (var j = 0; j < browseShopVo.length; j++) {
													let sitem = browseShopVo[j];
													if (sitem) {
														if (sitem.status == 1) {
															sitem['taskId'] = item.taskId;
															sitem['taskName'] = item.taskName;
															items.push(sitem);
														}
													}
												}
											}
										} else if (item.taskType == 2) {
											let productInfoVos = item.productInfoVos;
											if (productInfoVos) {
												for (var j = 0; j < productInfoVos.length; j++) {
													let sitem = productInfoVos[j];
													if (sitem) {
														if (sitem.status == 1) {
															sitem['taskId'] = item.taskId;
															sitem['taskName'] = item.taskName;
															items.push(sitem);
														}
													}
												}
											} else {
												if (item.maxTimes > item.times) {
													for (var j = item.times; j < item.maxTimes; j++) {
														items.push(item);
													}
												}
											}
										} else if (item.taskType == 3 || item.taskType == 26 || item
											.taskType == 9) {
											let shoppingActivityVos = item.shoppingActivityVos;
											if (shoppingActivityVos) {
												for (var j = 0; j < shoppingActivityVos.length && j < item
													.maxTimes; j++) {
													let sitem = shoppingActivityVos[j];
													if (sitem) {
														if (sitem.status == 1) {
															sitem['taskId'] = item.taskId;
															sitem['taskName'] = item.taskName;
															items.push(sitem);
														}
													}
												}
											}
										} else if (item.taskType == 1) {
											let followShopVo = item.followShopVo;
											if (followShopVo) {
												for (var j = 0; j < followShopVo.length && j < item
													.maxTimes; j++) {
													let sitem = followShopVo[j];
													if (sitem) {
														if (sitem.status == 1) {
															sitem['taskId'] = item.taskId;
															sitem['taskName'] = item.taskName;
															items.push(sitem);
														}
													}
												}
											}
										} else if (item.taskType == 12) {
											let simpleRecordInfoVo = item.simpleRecordInfoVo;
											if (simpleRecordInfoVo) {
												if (item.times < item.maxTimes) {
													for (var j = item.times; j < item.maxTimes; j++) {
														let sitem = simpleRecordInfoVo;
														if (sitem) {
															sitem['taskId'] = item.taskId;
															sitem['taskName'] = item.taskName;
															items.push(sitem);
														}
													}
												}
											}
										}
									}
								}
								itemsList = items;
								lotteryNum = result.lotteryNum;
							}
						}
					}
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
			});
		})
	
	}
	
	
	function zoo_getFeedDetailByAdd(data) {
		return new Promise(resolve => {
			var postData = {
				"taskId": data['taskId']
			};
			fetch("https://api.m.jd.com/client.action", {
				method: "POST",
				mode: "cors",
				credentials: "include",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: `functionId=zoo_getFeedDetail&body=` + JSON.stringify(postData) +
					`&client=wh5&clientVersion=1.0.0`
			}).then(function(response) {
				return response.json();
			}).then((res) => {
				try {
					let addProductVos = res.data.result.addProductVos;
					let count = 0;
					for (var i = 0; i < addProductVos.length; i++) {
						let item = addProductVos[i];
						if (item.status == 1) {
							let productInfoVos = item.productInfoVos;
							for (let j = item.times; j < item.maxTimes && j < productInfoVos.length; j++) {
								let productInfoVo = productInfoVos[j],
									taskId = item['taskId'];
								setTimeout(function() {
									zoo_collectScore("鍔犺喘鍟嗗搧", taskId, productInfoVo['itemId'], "",
										"jmdd-react-smash_174", productInfoVo["taskToken"]);
								}, 1000 * 1 * count);
								count++;
							}
						}
					}
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
			});
		})
	}
	
	function zoo_getFeedDetailByView(data) {
		return new Promise(resolve => {
			var postData = {
				"taskId": data['taskId']
			};
			fetch("https://api.m.jd.com/client.action", {
				method: "POST",
				mode: "cors",
				credentials: "include",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: `functionId=zoo_getFeedDetail&body=` + JSON.stringify(postData) +
					`&client=wh5&clientVersion=1.0.0`
			}).then(function(response) {
				return response.json();
			}).then((res) => {
				try {
					let viewProductVos = res.data.result.viewProductVos;
					let count = 0;
					for (var i = 0; i < viewProductVos.length; i++) {
						let item = viewProductVos[i];
						if (item.status == 1) {
							let productInfoVos = item.productInfoVos;
							for (let j = item.times; j < item.maxTimes && j < productInfoVos.length; j++) {
								let productInfoVo = productInfoVos[j],
									taskId = item['taskId'];
								setTimeout(function() {
									zoo_collectScore("娴忚鐢勯€夊晢鍝�", taskId, productInfoVo['itemId'], "",
										"jmdd-react-smash_77", productInfoVo["taskToken"]);
								}, 1000 * 1 * count);
								count++;
							}
						}
					}
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
			});
		})
	}
	
	function getRnd() {
		return Math.floor(1e6 * Math.random()).toString();
	}
	
	function zoo_collectScore(taskName, taskId, itemId, shopSign, buttonid, taskToken) {
		return new Promise(resolve => {
			let extraData = {
				id: "jmdd-react-smash_73",
				data: {
					inviteId: "-1",
					stealId: "-1",
					rnd: getRnd(),
					taskId: taskId
				}
			};
			let bodys = {
				"taskId": taskId,
				"taskToken": taskToken,
				"itemId": itemId,
				"actionType": 1,
				"ss": JSON.stringify({
					"extraData": getExtraData(extraData),
					"businessData": {
						inviteId: "-1",
						stealId: "-1",
						rnd: extraData['data']['rnd'],
						taskId: taskId
					},
					"secretp": secretp
				}),
				"shopSign": shopSign == undefined ? '' : shopSign
			}
			fetch(rootURI + "client.action?functionId=zoo_collectScore", {
				method: "post",
				mode: "cors",
				credentials: "include",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: "functionId=zoo_collectScore&client=wh5&clientVersion=1.0.0&body=" + JSON.stringify(
					bodys)
			}).then(function(response) {
				return response.json();
			}).then((res) => {
				try {
					let data = res.data;
					if (data) {
						console.log(data);
						if (data.success) {
							if (data.result) {
								if (data.result.taskToken) {
									log("shopSign:" + (shopSign == undefined ? '鏃�' : shopSign) + "," +
										taskName + "锛氭祻瑙堜腑锛�10绉掑悗棰嗗彇濂栧姳");
									setTimeout(function() {
										lingqujiangli(taskName, data.result.taskToken);
									}, 1000 * 10);
								} else {
									log("shopSign:" + (shopSign == undefined ? '鏃�' : shopSign) + "," +
										taskName + "锛�" + JSON.stringify(data.result));
								}
							}
						}
					}
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
			});
		})
	}
	
	function lingqujiangli(name, token) {
		return new Promise(resolve => {
			let body = {
				dataSource: "newshortAward",
				method: "getTaskAward",
				reqParams: JSON.stringify({
					taskToken: token
				}),
				sdkVersion: "1.0.0",
				clientLanguage: "zh"
	
			}
			fetch(rootURI + "?client=wh5&clientVersion=1.0.0&functionId=qryViewkitCallbackResult&body=" + JSON
				.stringify(body) +
				"&_timestamp=" + new Date().getTime(), {
					method: "get",
					mode: "cors",
					credentials: "include",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					}
				}).then(function(response) {
				return response.json();
			}).then((res) => {
	
				try {
					if (res.code == "0") {
						var data = res.toast;
						if (data) {
							log(name + ":" + data.subTitle);
						}
					} else {
						log("鍒濆鍖栦换鍔″け璐�");
					}
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
			});
	
		})
	}
	
	function zoo_shopSignInRead(taskName, shopId) {
		return new Promise(resolve => {
			let bodys = {
				"shopSign": shopId
			}
			fetch(rootURI + "client.action?functionId=zoo_shopSignInRead", {
				method: "post",
				mode: "cors",
				credentials: "include",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: "functionId=zoo_shopSignInRead&client=wh5&clientVersion=1.0.0&body=" + JSON.stringify(
					bodys)
			}).then(function(response) {
				return response.json();
			}).then((res) => {
				try {
					let data = res.data;
					if (data) {
						if (data.success) {
							if (data.result) {
								if (data.result.signInTag != 1) {
									if (secretp == "") {
										secretp = data.result.secretp;
									}
									setTimeout(function() {
										zoo_shopSignInWrite(taskName, shopId,
											"domainAutoSignSmashId");
									}, 1000);
								}
							}
						}
					}
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
			});
		})
	}
	
	function zoo_shopSignInWrite(taskName, shopId, buttonid) {
		return new Promise(resolve => {
			let extraData = {
				id: "domainAutoSignSmashId",
				data: {
					inviteId: "-1",
					stealId: "-1",
					rnd: getRnd(),
					taskId: shopId
				}
			};
			let bodys = {
				"ss": JSON.stringify({
					"extraData": getExtraData(extraData),
					"businessData": {
						inviteId: "-1",
						stealId: "-1",
						rnd: extraData['data']['rnd'],
						taskId: shopId
					},
					"secretp": secretp
				}),
				"shopSign": shopId
			}
			fetch(rootURI + "client.action?functionId=zoo_shopSignInWrite", {
				method: "post",
				mode: "cors",
				credentials: "include",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: "functionId=zoo_shopSignInWrite&client=wh5&clientVersion=1.0.0&body=" + JSON
					.stringify(bodys)
			}).then(function(response) {
				return response.json();
			}).then((res) => {
				try {
					let data = res.data;
					if (data) {
						log(taskName + ":" + JSON.stringify(data));
						if (data.success == false) {
							if (data.bizCode == -2) {
								qryCompositeMaterialStatus = false;
							}
						}
					}
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
	
			});
		})
	}
	
	function getExtraData(args) {
		return JSON.stringify(Object.assign({}, {
			"buttonid": args['id'],
			"sceneid": "homePageh5",
			"appid": "50073"
		}));
	}
	
	function zoo_collectProduceScore() {
		return new Promise(resolve => {
			let extraData = {
				id: "jmdd-react-smash_0",
				data: {
					inviteId: "-1",
					stealId: "-1",
					rnd: getRnd(),
					taskId: "collectProducedCoin"
				}
			};
			let postData = {
				"ss": `{\"extraData\":${getExtraData(extraData)},\"businessData\":{\"taskId\":\"collectProducedCoin\",\"rnd\":\"${extraData['data']['rnd']}\",\"inviteId\":\"-1\",\"stealId\":\"-1\"},\"secretp\":\"${secretp}\"}`
			};
			fetch(rootURI + "client.action?functionId=zoo_collectProduceScore", {
				method: "post",
				mode: "cors",
				credentials: "include",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: "functionId=zoo_collectProduceScore&client=wh5&clientVersion=1.0.0&body=" + JSON
					.stringify(postData)
			}).then(function(response) {
				return response.json();
			}).then((res) => {
				try {
					let data = res.data;
					if (data) {
						log("鏀跺彇閲戝竵" + ":" + JSON.stringify(data));
					}
				} catch (e) {
					console.error(e);
				} finally {
					resolve();
				}
			});
		})
	}
	
	
	function request(functionId, body = {}) {
		return fetch(`https://api.m.jd.com/client.action?functionId=${functionId}`, {
			body: `functionId=${functionId}&body=${JSON.stringify(body)}&client=wh5&clientVersion=1.0.0`,
			headers: {
				"content-type": "application/x-www-form-urlencoded",
			},
			method: "POST",
			credentials: "include",
		});
	}
	
	
	function douhb() {
		request('zoo_pk_getStealForms', {}).then(function(response) {
			return response.json();
		}).then((res) => {
			if (res.data.result) {
				if (res.data.result.stealGroups) {
					let stealGroups = res.data.result.stealGroups;
					let self = this,
						length = stealGroups.length;
					let count = 0;
					for (let i = 0; i < length; i++) {
						let steal = stealGroups[i];
						let extraData = {
							id: "jmdd-react-smash_74",
							data: {
								inviteId: "-1",
								stealId: steal['id'],
								rnd: this.getRnd(),
								taskId: `BUSINESSID_${this.getRnd()}`
							}
						};
						let postData = {
							"stealId": steal['id'],
							"ss": `{\"extraData\":${this.getExtraData(extraData)},\"businessData\":{\"taskId\":\"${extraData.data.taskId}\",\"rnd\":\"${extraData.data.rnd}\",\"inviteId\":\"-1\",\"stealId\":\"${steal['id']}\"},\"secretp\":\"${this.secretp}\"}`
						};
						// let postData = {
						// 	"stealId": steal['id'],
						// 	"ss": JSON.stringify({
						// 		"stealId": steal['id'],
						// 		"secretp": secretp
						// 	}),
						// };
						setTimeout(function() {
							fetch("https://api.m.jd.com/client.action?functionId=zoo_pk_doSteal", {
								method: "POST",
								mode: "cors",
								credentials: "include",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded"
								},
								body: `functionId=zoo_pk_doSteal&body=` + JSON.stringify(postData) +
									`&client=wh5&clientVersion=1.0.0`
							}).then(function(response) {
								return response.json();
							}).then((res) => {
								log(steal['name'] + "鎶㈢孩鍖呬腑:" + res.data.bizMsg);
							});
						}, 3000 * count);
						count = count + 1;
					}
				}
			}
	
		});
	}
	
	function zoo_pk_assistGroup(inviteId) {
		try {
				let tokenList = res.pk;
				let inviteId = tokenList[parseInt(Math.random() * tokenList.length)];
				if (inviteId) {
					let extraData = {
						id: "jmdd-react-smash_0",
						data: {
							inviteId: inviteId,
							stealId: "-1",
							rnd: this.getRnd(),
							taskId: `BUSINESSID_${this.getRnd()}`
						}
					};
					let bodys = {
						"confirmFlag": 1,
						"inviteId": `${inviteId}`,
						"ss": `{\"extraData\":${getExtraData(extraData)},\"businessData\":{\"taskId\":\"${extraData['data']['taskId']}\",\"rnd\":\"${extraData['data']['rnd']}\",\"inviteId\":\"${inviteId}\",\"stealId\":\"-1\"},\"secretp\":\"${secretp}\"}`
					};
					// let bodys = {
					// 	"confirmFlag": 1,
					// 	"inviteId": inviteId,
					// 	"ss": JSON.stringify({
					// 		"secretp": secretp
					// 	}),
					// }
					fetch(rootURI + "client.action?functionId=zoo_pk_assistGroup", {
						method: "post",
						mode: "cors",
						credentials: "include",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						body: "functionId=zoo_pk_assistGroup&client=wh5&clientVersion=1.0.0&body=" + JSON
							.stringify(bodys)
					}).then(function(response) {
						return response.json();
					}).then((res) => {});
				}
			
		} catch (e) {}
	}
}
gaid();