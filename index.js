var weixin      = require('weixin-api');  
var express     = require('express');  
var app         = express(); 

// ������֤
��" :
            // ���ر���Ϣ
	                resMsg = {
			                fromUserName : msg.toUserName,
					                toUserName : msg.fromUserName,
							                msgType : "text",
									                content : "���Ǳ��ظ�",
											                funcFlag : 0
													            };
														                break;
																
																        case "����" :
																	            // ����������Ϣ
																		                resMsg = {
																				                fromUserName : msg.toUserName,
																						                toUserName : msg.fromUserName,
																								                msgType : "music",
																										                title : "���ֱ���",
																												                description : "��������",
																														                musicUrl : "����url",
																																                HQMusicUrl : "����������url",
																																		                " :
																																				
																																				            var articles = [];
																																					                articles[0] = {
																																							                title : "PHP����������Composer����",
																																									                description : "PHP����������Composer����",
																																											                picUrl : "http://weizhifeng.net/images/tech/composer.png",
																																													                url : "http://weizhifeng.net/manage-php-dependency-with-composer.html"
																																															            };
																																																    
																																																                articles[1] = {
																																																		                title : "��������",
																																																				                description : "��������",
																																																						                picUrl : "http://weizhifeng.net/images/poem/bayuexihu.jpg",
																																																								                url : "http://weizhifeng.net/bayuexihu.html"
																																																										            };
																																																											    
																																																											                articles[2] = {
																																																													                title : "�����롹RedisЭ��",
																																																															                description : "�����롹RedisЭ��",
																																																																	                picUrl : "http://weizhifeng.net/images/tech/redis.png",
																																																																			                url : "http://weizhifeng.net/redis-protocol.html"
																																																																					            };
																																																																						   ��Ϣ
																																																																						               resMsg = {
																																																																							                       fromUserName : msg.toUserName,
																																																																									                       toUserName : msg.fromUserName,
																																																																											                       msgType : "news",
																																																																													                       articles : articles,
																																																																															                       funcFlag : 0
																																																																																	                   }
																																																																																			       }

																																																																																			           weixin.sendMsg(resMsg);
																																																																																				   });

																																																																																				   // ����ͼƬ��Ϣ
																																																																																				   weixin.imageMsg(function(msg) {  
																																																																																				       console.log("imageMsg received");
																																																																																				           console.log(JSON.stringify(msg));
																																																																																					   });

																																																																																					   // ����λ����Ϣ
																																																																																					   weixin.locationMsg(function(msg) {  
																																																																																					       console.log("locationMsg received");
																																																																																					           console.log(JSON.stringify(msg));
																																																																																						   });

																																																																																						   // ����������Ϣ
																																																																																						   weixin.urlMsg(function(msg) {  
																																																																																						       console.log("urlMsg received");
																																																																																						           console.log(JSON.stringify(msg));
																																																																																							   });

																																																																																							   // �����¼���Ϣ
																																																																																							   weixin.eventMsg(function(msg) {  
																																																																																							       console.log("eventMsg received");
																																																																																							           console.log(JSON.stringify(msg));
																																																																																								   });

																																																																																								   // Start
																																																																																								   app.post('/', function(req, res) {

																																																																																								       // loop
																																																																																								           weixin.loop(req, res);

																																																																																									   });

																																																																																									   app.listen(3000);
																																																																						                // ����ͼfuncFlag : 0
																																				            };
																																					                break;
																																							
																																							        case "ͼapp.get('/', function(req, res) {

    // ǩ���ɹ�
        if (weixin.checkSignature(req)) {
	        res.status(200).send(req.query.echostr);
		    } else {
		            res.status(200).send('fail');
			        }
				});

				// config �����Լ���ʵ��������д
				weixin.token = 'qbtest';

				// ��������Ϣ
				weixin.textMsg(function(msg) {  
				    console.log("textMsg received");
				        console.log(JSON.stringify(msg));

					    var resMsg = {};

					        switch (msg.content) {
						        case "
