Ext.define('App.view.feedback.FeedbackForm',{
	extend:'Ext.form.Panel',
	xtype:'FeedbackForm',
	requires: ['Ext.form.FieldSet','Ext.field.Text','Ext.field.TextArea'],
	config:{
		items:[{
			xtype: 'fieldset',
			//title: 'Personal Info',
			instructions: 'Your feedback is valuable to us.',
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
			        },
			       /* {
			        	xtype: 'emailfield',
			        	name: 'email',
			        	label: 'Email',
			        	placeHolder: 'you@whistle.app'
			        },*/
			        {
			        	xtype: 'textareafield',
			        	name: 'feedback',
			        	label: 'Feedback',
			        	maxRows: 5
			        },
			       ]
		}]
	}
});

Ext.define('App.view.feedback.Feedback',{
	extend:'Ext.Panel',
	xtype:'Feedback',
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
			xtype:'toolbar',docked:'top',title:'Feedback'
		},{xtype:'FeedbackForm'
		},{
			xtype:'container',docked:'bottom',items:[{xtype:'button',ui:'confirm',text:'Send Feedback',docked:'left',
														handler:function(){
										              	  App.app.getController('Dashboard').sendFeedback();
										                }},
			                                         {xtype:'button',ui:'decline',text:'Cancel',docked:'right',
			                                          handler:function(){
			                                        	  App.app.getController('Dashboard').hideFeedbackOverlay();
			                                          }}
			]
		}
		]
	}
});