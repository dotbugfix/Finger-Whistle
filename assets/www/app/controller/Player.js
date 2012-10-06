Ext.define('App.controller.Player',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			player:'Player',
			dashboard:'main'
		},
		control:{
			dashboard:{
				initialize:'init'
			}
		}
	},
	
	init:function(){
		my_media=null;
	},
	
	playWhistle:function(){
		var currentWhistle=this.getDashboard().items.items[2].getActiveIndex();
		var path=null;
		//Ext.Msg.alert('Curr: '+currentWhistle);
		switch(currentWhistle){
			case 0:path='/android_asset/www/media/Whistle01.mp3';
					break;
			case 1:path='/android_asset/www/media/Whistle02.mp3';
					break;
			case 2:path='/android_asset/www/media/Finger0.mp3';
					break;
			case 3:path='/android_asset/www/media/Finger2.mp3';
					break;
		}
		//alert('Path: '+path);
		if(path!=null){
			//alert('inside!');
			if(my_media){
				my_media.stop();
			}
			
			my_media = new Media(path, onSuccess, onError);
			
			my_media.play();
		}
		
		function onSuccess() {
            console.log("playAudio():Audio Success");
        }
		
        function onError(error) {
            console.log('code: '    + error.code    + '\n' + 
                  'message: ' + error.message + '\n');
        }
		
	},
	
	stopWhistle:function(){
		if(my_media){
			my_media.stop();
		}
	}
	
});