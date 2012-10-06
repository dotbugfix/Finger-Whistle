Ext.define('App.view.whistles.Whistle01',{
	extend:'Ext.Panel',
	xtype:'Whistle01',
	requires: ['Ext.Toolbar','Ext.Container'],
	config:{
		items:[
		       {
		    	   xtype:'toolbar',title:'Hit on a Chic',docked:'top'
		       },{
		    	   styleHtmlContent:true,
			   		html:'<table><tr><td rowspan="2"><div class="photo"><img src="images/Whistle01.jpg" width="150px"></div></td>'+
			   			 '<td>Ur out of pick-up lines, use this to hit on a chic.</td></tr>'+
			   			 '<tr><td><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px">'+
			   			 '</td></tr></table>'
		       }]
		
	}
});

/*'<div class="photo"><img src="images/Whistle01.jpg" width="30%" float="left"></div><strong>{Name}</strong><br/>'+
	 'Ur out of pick-up lines, use this to hit on a chic.<br/>'+
	 '<img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px">'
*/