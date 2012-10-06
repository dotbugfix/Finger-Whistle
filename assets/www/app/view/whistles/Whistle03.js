Ext.define('App.view.whistles.Whistle03',{
	extend:'Ext.Panel',
	xtype:'Whistle03',
	requires: ['Ext.Toolbar','Ext.Container'],
	config:{
		items:[
		       {
		    	   xtype:'toolbar',title:"Guys' Finger",docked:'top'
		       },{
		    	   styleHtmlContent:true,
			   		html:'<table><tr><td rowspan="2"><div class="photo"><img src="images/Whistle03.jpg" width="150px"></div></td>'+
			   			 '<td>Be a man! Do the right thing!</td></tr>'+
			   			 '<tr><td><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px"><img src="images/star2.png" height="20px">'+
			   			 '</td></tr></table>'
		       }]
		
	}
});