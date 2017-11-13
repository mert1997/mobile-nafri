//		
setTimeout(function(){ onLoad(); }, 1000);
			
function onLoad() {
	document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
}

function onDeviceReady() {

    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = true;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

    window.plugins.OneSignal
        .startInit("259ea519-0a4e-4163-ace8-2b2af45e5e89")
        .handleNotificationReceived(function(jsonData) {
            //alert("Notification received: \n" + JSON.stringify(jsonData));
            console.log('Did I receive a notification: ' + JSON.stringify(jsonData));
        })
        .handleNotificationOpened(function(jsonData) {
            //alert("Notification opened: \n" + JSON.stringify(jsonData));
            console.log('didOpenRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
            localStorage.removeItem("messageId");
            localStorage.setItem("messageId", jsonData.messageId);
        })
        .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.InAppAlert)
        .iOSSettings(iosSettings)
        .endInit();

    window.plugins.OneSignal.getIds(function(ids) {
        localStorage.setItem("UserId", ids.userId);
		localStorage.setItem("PushToken", ids.pushToken);
        //document.getElementById("OneSignalPushToken").innerHTML = "PushToken: " + ids.pushToken;
        console.log('getIds: ' + JSON.stringify(ids));
    });	

	//go to school  	
  	setTimeout(function(){ go2School('https://irfan.smartclass.biz/index.php?simsApp=1'); }, 1000);

}

function go2School(url){
  	
  	var deviceId = localStorage.getItem("UserId");
  	var fullUrl = url + "&deviceId=" + deviceId;
  	
  	var messageId = localStorage.getItem("messageId");
  	if(parseInt(messageId) > 0) fullUrl = fullUrl + "&n=" + messageId;
  	
  	var ref = cordova.InAppBrowser.open(fullUrl, '_blank', 'location=no,toolbar=no,clearsessioncache=no,clearcache=no,zoom=no');
    
	ref.addEventListener('exit', function(event){ 
		setTimeout(function(){ onLoad(); }, 1000);
	});	
}
 
 


 