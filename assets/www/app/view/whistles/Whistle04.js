Ext.define('App.view.whistles.Whistle04',{
	extend:'Ext.Panel',
	xtype:'Whistle04',
	requires: ['Ext.Toolbar','Ext.Container'],
	config:{
		items:[
		       {
		    	   xtype:'toolbar',title:"Gals' Finger",docked:'top'
		       },{
		    	   styleHtmlContent:true,
			   		html:'<table><tr><td rowspan="2"><div class="photo"><img src="images/Whistle04.jpg" width="150px"></div></td>'+
			   			 '<td>Why should guys have all the fun?</td></tr>'+
			   			 '<tr><td><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px">'+
			   			 '</td></tr></table>'
		       }]
		
	}
});