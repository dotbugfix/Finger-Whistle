Ext.define('App.view.MainToolbar',{
	extend:'Ext.Toolbar',
	xtype:'MainToolbar',
	requires: ['Ext.Button','App.view.About'],
	config:{
		//styleHtmlContent:true,
		title:'Finger-Whistle',
		layout:{pack:'center',align:'center'},
		//height:30,
		ui:'dark',
		items:[{
			xtype:'button',iconMask:true,ui:'plain',iconCls:'info',docked:'left',
			handler:function(){
				App.app.getController('Dashboard').showAboutOverlay();
			}
		},{
			xtype:'button',iconMask:true,ui:'plain',iconCls:'compose',docked:'right',
			handler:function(){
				App.app.getController('Dashboard').showFeedbackOverlay();
			}
		}]
	}
});

/*The main viewport container*/
Ext.define('App.view.Main', {
    extend: 'Ext.Container',
    xtype:'main',
    requires: ['Ext.Carousel','Ext.Button','Ext.Toolbar'],
    config: {
        //fullscreen: true,
    	layout:{type:'fit'},
        items: [
                {xtype:'MainToolbar',docked:'top'},
                {
                	xtype:'Player',docked:'top',flex:'1',
                },{
                	xtype:'carousel',
                	items:[
                	       {xtype:'Whistle01'},
                	       {xtype:'Whistle02'},
                	       {xtype:'Whistle03'},
                	       {xtype:'Whistle04'},
                	       {xtype:'WhistleReq'},
                	       ]
                },
                {
                	xtype:'button',ui:'decline',text:'Abort!',docked:'bottom',
                	handler:function(){
                		App.app.getController('Player').stopWhistle();
                	}
                }
        ]
    }
});