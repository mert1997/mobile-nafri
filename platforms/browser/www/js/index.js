	setTimeout(function()
	{
	onLoad();
	},1000)
	
	
	function onLoad()
	{
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

	}

	

    	function onDeviceReady() 
		{
  	
		var ref = cordova.InAppBrowser.open('https://irfan.smartclass.biz/index.php?simsApp=1', '_blank', 'location=no,toolbar=no,clearsessioncache=no,clearcache=no');
      
	//	ref.addEventListener('loadstart', function(event) { alert(event.target);	 });
        //ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
        //ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
		
         ref.addEventListener('exit', function(event) 
			{ 
		 
			setTimeout(function()
				{
				onLoad();
				},1000) 
				
			});
				
		}
 
 


 