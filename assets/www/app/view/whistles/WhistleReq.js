Ext.define('App.view.whistles.WhistleReq',{
	extend:'Ext.Panel',
	xtype:'WhistleReq',
	requires: ['Ext.Toolbar','Ext.Container'],
	config:{
		items:[
		       {
		    	   xtype:'toolbar',title:'Request Whistle',docked:'top'
		       },{
		    	   styleHtmlContent:true,
			   		html:'<table><tr><td rowspan="2"><div class="photo"><img src="images/add_icon.png" width="150px"></div></td>'+
			   			 '<td>Your own request might jus be a part of the next update!</td></tr>'+
			   			 '<tr><td><img src="images/star0.png" height="20px"><img src="images/star0.png" height="20px"><img src="images/star0.png" height="20px"><img src="images/star0.png" height="20px"><img src="images/star0.png" height="20px">'+
			   			 '</table>'
		       }],
       listeners: {
    	    tap: {
    	        fn: function() {
    	        	App.app.getController('Dashboard').showRequestWhistleOverlay();
    	        	},
    	        element: 'element'
    	    },
    	}
		
	}
});