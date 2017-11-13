document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };
  

//675c44cb-f18b-4ff3-854c-b5b6d45f4edb -test
//5134c683-0931-414e-83ba-28f2ac87824a -irfanokullari
  window.plugins.OneSignal
    .startInit("5134c683-0931-414e-83ba-28f2ac87824a")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  
  // Call syncHashedEmail anywhere in your app if you have the user's email.
  // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
  // window.plugins.OneSignal.syncHashedEmail(userEmail);
}, false);



	


