'use strict';
Import ('installer');

Package('org.quickcorp.custom.controllers',[
	Class('MainController',Controller,{
	  dependencies:[],
	  component:null,
	  _new_:function (o){
	    this.__new__(o);
	    var controller=this;
	    //TODO: Implement
	  },
		done:function(){
			var controller = this;

			/*
			Timer.thread({
		      duration:300,
		      timing(timeFraction,elapsed){
		        return timeFraction;
		      },
		      intervalInterceptor(progress){
								if (progress>=100 && !Component._bindroute.__assigned){
									controller.component.route();
								}
		      }
		  });
			*/


		}
	}),
	Class('PWAController',Object,{
		component:null,
		_new_:function (o){
			logger.debug('PWAController Element Initialized');
			this.component = o.component;
		},
		done: function (){
			document.head.innerHTML+=this.component.body.innerHTML;
			this.component.body.innerHTML="";
		}
	}),
  Class('SideNavController',Object,{
  dependencies:[],
  component:null,
  visibility:false,
  effect:null,
  open:function (){
    if (this.effect != null){
      this.effect.apply(this.component.body, 0,1);
    }
    this.component.body.style.width="100%";
    this.component.body.style.overflowX="visible";
    this.component.body.parentElement.subelements('.navbtn')[0].style.display='none';
		this.component.body.parentElement.subelements('.closebtn')[0].style.display='block';
    this.visibility = true;
    return this.visibility;
  },
  close:function (){
    if (this.effect != null){
      this.effect.apply(this.component.body, 1,0);
    }
    this.component.body.style.width="0px";
    this.component.body.style.overflowX="hidden";
    this.component.body.parentElement.subelements('.navbtn')[0].style.display='block';
		this.component.body.parentElement.subelements('.closebtn')[0].style.display='none';
    this.visibility = false;
    return this.visibility;
  },
  toggle:function (){
    if (this.visibility){
      this.close();
    } else {
      this.open();
    }
  },
  _new_:function (o){
      this.__new__(o);
      var controller = this;
      global._sdk_.then(function (){
        controller.effect = New(Fade,{duration:300});
      });
      global.sideNavController = this;
      global.sideNavController.close();
      //TODO: Implement

    },
    done: function (){
    }
  }),
	Class('HeaderController',Controller,{
	  dependencies:[],
	  component:null,
		installer:null,
		loadInstallerButton:function (){
			this.installer = new Installer(this.component.body.subelements('#installerbutton')[0]);
		},
	  _new_:function (o){
	    this.__new__(o);
	    //TODO: Implement
	  },
		done: function (){
//			this.loadInstallerButton();

			// segment stats
			!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
		   analytics.load("97lbKH8VJd9AAmTExODzIXl2v5nSuxhB");
		   analytics.page();
		 }}();
			// end segment stats
			var component = this.component;
			var _componentRoot = (component.shadowed)?(component.shadowRoot):(component.body);
			_componentRoot.subelements('button[name=download]').map(
					function (element){
						element.addEventListener('click',function (event){
							location.href="https://www.leychile.cl/Consulta/Exportar?radioExportar=Normas&exportar_formato=pdf&nombrearchivo=DTO-100_22-SEP-2005&exportar_con_notas_bcn=True&exportar_con_notas_originales=True&exportar_con_notas_al_pie=True&hddResultadoExportar=242302.2019-12-24.0.0%23";
						});
					}
			)
		}
	}),
  Class('Controller1',Controller,{
    dependencies:[],
    component:null,
    _new_:function (o){
      this.__new__(o);
      var controller=this;
      //TODO: Implement
    }
  }),
  Class('Controller2',Controller,{
    dependencies:[],
    component:null,
    _new_:function (o){
      this.__new__(o);
      var controller=this;
      //TODO: Implement
    }
  }),
]);
