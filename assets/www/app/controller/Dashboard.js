Ext.define('App.controller.Dashboard',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			dashboardPanel:'Dashboard',
			feedbackPanel:'Feedback',
			feedbackForm:'FeedbackForm',
			requestWhistlesPanel:'RequestWhistle',
			requestForm:'RequestWhistleForm',
			aboutPanel:'About'
		},
		control:{
			
		}
	},

	showFeedbackOverlay:function(){
		if(!this.getFeedbackPanel()){
			overlay=Ext.create('App.view.feedback.Feedback');
			Ext.Viewport.add(overlay);
		}
		this.getFeedbackPanel().show('pop');
	},
	
	hideFeedbackOverlay:function(){
		this.getFeedbackPanel().hide();
	},
	
	showAboutOverlay:function(){
		if(!this.getAboutPanel()){
			overlay=Ext.create('App.view.About');
			Ext.Viewport.add(overlay);
		}
		this.getAboutPanel().show('pop');
	},
	
	hideAboutOverlay:function(){
		this.getAboutPanel().hide();
	},
	
	sendFeedback:function(){
		var stub=this;
		var form=stub.getFeedbackForm().getValues();
		//alert(form.feedback);
		var link = "mailto:whistle4u.aks@gmail.com?"
            + "subject=" + escape("Whistle App Feedback")
            + "&body=" + escape(form.feedback) + "%0D%0A%0D%0A-" +escape(form.name);
		window.location.href = link;
		this.hideFeedbackOverlay();
	},
	
	showRequestWhistleOverlay:function(){
		if(!this.getRequestWhistlesPanel()){
			overlay=Ext.create('App.view.feedback.RequestWhistle');
			Ext.Viewport.add(overlay);
		}
		this.getRequestWhistlesPanel().show('pop');
	},
	
	sendRequest:function(){
		var stub=this;
		var form=stub.getRequestForm().getValues();
		//alert(form.request);
		var link = "mailto:whistle4u.aks@gmail.com?"
            + "subject=" + escape("Whistle App Request")
            + "&body=" + escape(form.request);
		window.location.href = link;
		this.hideRequestWhistleOverlay();
	},
	
	hideRequestWhistleOverlay:function(){
		this.getRequestWhistlesPanel().hide();
	},
});