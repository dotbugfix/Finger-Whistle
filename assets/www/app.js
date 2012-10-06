Ext.Loader.setConfig({ enabled: true });	//Allow dynamic linking of MVC files

Ext.application({
    name: 'App',
    requires:['App.view.About'],
    views:['Main','About',
           'Player',
           'whistles.Whistle01','whistles.Whistle02','whistles.Whistle03','whistles.Whistle04','whistles.WhistleReq',
           'feedback.Feedback','feedback.RequestWhistle'
           ],
    models:[],
    stores:[],
    controllers:['Dashboard','Player'],
    launch: function() {
	/*Handle the back button so user doesn't exit by mistake*/    	
    	function confirmExit(btn){
    		if(btn=='yes'){
    			navigator.app.exitApp();
    		}
    		
    	}
    	
    	function onBackKeyDown(){
    		Ext.Msg.confirm("Exit", "Are you sure you want to exit Finger-Whistle?",confirmExit);
    	}

		document.addEventListener("backbutton", onBackKeyDown, false);
		
		Ext.Viewport.add({ xtype: 'main' });
	}
});