Ext.define('App.view.whistles.Whistle02',{
	extend:'Ext.Panel',
	xtype:'Whistle02',
	requires: ['Ext.Toolbar','Ext.Container'],
	config:{
		items:[
		       {
		    	   xtype:'toolbar',title:'Call ur Dog',docked:'top'
		       },{
		    	   styleHtmlContent:true,
			   		html:'<table><tr><td rowspan="2"><div class="photo"><img src="images/Whistle02.jpg" width="150px"></div></td>'+
			   			 '<td>U lost your dog, stop shouting and call him using this.</td></tr>'+
			   			 '<tr><td><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px">'+
			   			 '</td></tr></table>'
		       }]
		
	}
});

/*'<div class="photo"><img src="images/Whistle01.jpg" width="30%" float="left"></div><strong>{Name}</strong><br/>'+
	 'Ur out of pick-up lines, use this to hit on a chic.<br/>'+
	 '<img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px">'
*/