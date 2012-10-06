Ext.define('App.view.feedback.RequestWhistleForm',{
	extend:'Ext.form.Panel',
	xtype:'RequestWhistleForm',
	requires: ['Ext.form.FieldSet','Ext.field.Text','Ext.field.TextArea'],
	config:{
		items:[{
			xtype: 'fieldset',
			//title: 'Personal Info',
			instructions: 'Your request might just end up in the next update!',
			defaults: {
				//required: true,
				labelAlign: 'left',
				labelWidth: '30%'
			},
			items: [
			        {
			        	xtype: 'textfield',
			        	name: 'name',
			        	label: 'Name',
			        	autoCapitalize: false
			        },/*
			        {
			        	xtype: 'emailfield',
			        	name: 'email',
			        	label: 'Email',
			        	placeHolder: 'you@whistle.app'
			        },*/
			        {
			        	xtype: 'textareafield',
			        	name: 'request',
			        	label: 'Request',
			        	maxRows: 5,
			        	placeHolder: 'Write your request here. Also tell us where you heard it!'
			        },
			       ]
		}]
	}
});

Ext.define('App.view.feedback.RequestWhistle',{
	extend:'Ext.Panel',
	xtype:'RequestWhistle',
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
				xtype:'toolbar',docked:'top',title:'Request Whistle'
			},{
				xtype:'RequestWhistleForm'
			},{
				xtype:'container',docked:'bottom',items:[{xtype:'button',ui:'confirm',text:'Request',docked:'left',
														handler:function(){
												          	  App.app.getController('Dashboard').sendRequest();
												            }},
				                                         {xtype:'button',ui:'decline',text:'Cancel',docked:'right',
															handler:function(){
										                  	  App.app.getController('Dashboard').hideRequestWhistleOverlay();
										                    }}
				                                         ]
			}
		]
		       
	}
});