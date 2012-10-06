Ext.define('App.view.Player',{
	extend:'Ext.Panel',
	xtype:'Player',
	requires: ['Ext.Button'],
	config:{
		layout:{type:'vbox',
			align:'center'
		},
		//width:'100%',
		items:[
		       {
		    	   xtype:'button',text:'Blow me!',height:'100px',width:'70%',ui:'confirm',
		    	   handler:function(){
		    		   App.app.getController('Player').playWhistle();
		    	   }
		       }]
	}
});