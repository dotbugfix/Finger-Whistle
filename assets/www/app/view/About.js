Ext.define('App.view.About',{
	extend:'Ext.Panel',
	xtype:'About',
	requires: ['Ext.Toolbar','Ext.Container','Ext.Button'],
	config:{
		centered:true,
		floating:true,
		modal:true,
		styleHtmlContent:true,
		hideOnMaskTap:true,
		layout:'fit',
		height:'70%',
		width:'90%',
		items:[{
			xtype:'toolbar',docked:'top',title:'About'
		},{
			//styleHtmlContent:true,
			scrollable: {
			    direction: 'vertical'
			},
			html:'<b><center><font size="5px">Finger-Whistle</font></b> <div style="color:grey"><font size="2px">v1.0</font></div>'+
				 '<img src="images/Logo.png" height="150px"><br/>'+
				 '<i>Coding Crew:</i><br/><font size="3px"><b>Omkar Ekbote<br/>Akshay Bhonde</b></font><br/><br/>'+
				 '<i>Photo Credits:</i><br/><font size="3px"><b>Leather fashion fashionista<br/>jpctalbot<br/>Rajiv Singh<br/>Scootie</b></font><br/><br/></center>'
		},{
			xtype:'container',docked:'bottom',
			items:[{
				xtype:'button',ui:'confirm',text:'Send Feedback',docked:'left',
					handler:function(){
					  App.app.getController('Dashboard').hideAboutOverlay();
					  App.app.getController('Dashboard').showFeedbackOverlay();
					}
			},{xtype:'button',text:'Close',docked:'right',
                  handler:function(){
                	  App.app.getController('Dashboard').hideAboutOverlay();
                  }
			}]
		}]	 
	}
});