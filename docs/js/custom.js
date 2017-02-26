
$(function(){
	ts = (new Date()).getTime();
	
  var os = navigator.platform.toLowerCase();
  if( os.indexOf("mac") != -1){
    $("body").addClass("mac");
  }
	
	body_scrolled();
	responsive_init();
	
	init_event_handlers();
	
  bind_widgets();
  $(document).ajaxStop(function() {
    bind_widgets();
		gmap_load();
  });
	
  $(document).on("reset", ".form-validate", function(){
    var $this = $(this);
    $(this).find(".form__item, :input").removeClass("error");
		setTimeout(function(){
			$this.find(":checkbox, :radio").trigger("change-pseudo");
		}, 100);
  }).on("submit", ".form-validate", function(e){    
    $this = $(this);
    error = check_form($(this), true);
    if (!error)
    {
      if ($(this).attr("data-action"))
      {
        e.preventDefault();
        $.ajax({
          url: $(this).attr("data-action"),
          type: $(this).attr("method"),
          data: $(this).serialize(),
          dataType: 'json',
          beforeSend: function() {
            $this.find(":input").prop("disabled", true);
          },
          success: function(response) {
            $this.find(":input").prop("disabled", false);
            if (response.result)
            {
              $this[0].reset();
              $this.addClass("form-send");
              if ($this.data("popup-ajax-message") || $this.data("popup-id-ajax-message"))
              {
                var popup_id = $this.data("popup-id-ajax-message");
                if ($().simplePopup) 
								{
									$(popup_id).simplePopup({action: "open", id: popup_id.substr(1), ajaxURL: $this.data("popup-ajax-message")});
								}
              }
              else
              {
                $($this.data("message")).find(".message__title").html(response.message);
                $($this.data("message")).find(".message__summary").html(response.message_text);
                $($this.data("message")).addClass("active");
                if ($this.data("autoclose-message"))
                {
                  setTimeout(function(){
                    $($this.data("message")).removeClass("active");
                    $this.addClass("active");
                    $this.removeClass("form-send");
                  }, $this.data("autoclose-message"));
                }
              }
              if ($this.data("autoclose-popup"))
              {
                setTimeout(function(){
                  $this.closest(".popup").simplePopup({action: "close"});
                  setTimeout(function(){
                    $($this.data("message")).removeClass("active");
                    $this.addClass("active");
                    $this.removeClass("form-send");
                  }, 1000);
                }, $this.data("autoclose-popup"));
              }
            }
            else
            {
              $field = $this.find("[name='"+response.name+"']");
              $field.addClass("error");
              $field.parent().append("<div class='form__error'>"+response.message_text+"</div>");
            }
          },
          error: function() {
          }
        });
      }
    }
    else {
      e.preventDefault();
    }
  });
	
	te = (new Date()).getTime();
	console.log("On-Ready Load Time: ", te-ts);
	
});

$(window).load(function(){
	ts = (new Date()).getTime();
	$("body").addClass("win-loaded").removeClass("win-not-loaded");
  $(document).imagesLoaded( function() {
		setTimeout(function(){
			$("body").addClass("loaded").removeClass("not-loaded");
			setTimeout(function(){
				gmap_load();
				te = (new Date()).getTime();
				console.log("Images Load Time: ", te-ts);
			}, 10);
		}, 10);
	});
		
	responsive_update();
	lazy_load();
	
	te = (new Date()).getTime();
	console.log("Window Load Time: ", te-ts);
});

$(window).scroll(function(){
	if (typeof $("body").data("scrollval") === "undefined") $("body").data("scrollval", 0);
		
	lazy_load();
	
	$("body").data("scrollval", $(window).scrollTop());
});

function init_event_handlers()
{
  $(document).on("click", ".touchevents .header__menu li.expanded", function(e){
		var $o = $(this);
		if (!$o.hasClass("focused"))
		{
			e.preventDefault();
			$(".header__menu li.expanded").not($o).removeClass("focused");
			$o.addClass("focused");
		}
  });
	
  $(document).on("click touchstart", ".touchevents *", function(e){
		if (!$(e.target).closest(".header__menu li").length) $(".header__menu li").removeClass("focused");
  });
	
  $(document).on("click", ".touchevents .touch-focused", function(e){
		var $o = $(this);
		if (!$o.hasClass("focused"))
		{
			e.preventDefault();
			//e.stopPropagation();
			$(".touch-focused").not($o).removeClass("focused");
			$o.addClass("focused");
		}
  });
	
  $(document).on("click touchstart", ".touchevents *", function(e){
		if (!$(e.target).closest(".touch-focused").length) $(".touch-focused").removeClass("focused");
  });
	
	
	$(document).on("keydown focus blur", ".textfield", function(e){
		$(this).toggleClass("filled", !!$(this).val());
	});
	
	$(".textfield").each(function(){
		$(this).toggleClass("filled", !!$(this).val());
	});
  $(document).ajaxStop(function() {
		$(".textfield").each(function(){
			$(this).toggleClass("filled", !!$(this).val());
		});
  });
	
	expand_it_init();
  
  $(document).on("click", ".goto", function(e){
		var $o = $($(this).attr("href"));
		var $container = $($(this).data("goto-container"));
		var speed = 400;
		if (typeof $(this).data("goto-speed") !== "undefined") speed = $(this).data("goto-speed");
		if (!$container.length) $container = $("html, body");
		if ($o.length && !$(this).hasClass("goto-prevent"))
		{
			e.preventDefault();
			$container.stop(true,true).animate({ scrollTop: $o[0].offsetTop - (($container.is("html,body"))?$(".header").outerHeight():0) }, speed);
		}
	});
  
  $(document).on("click change", ".activate-it", function(e){
		if (e.type == "click" && !$(e.target).is(":input"))
		{
			e.preventDefault();
		}
		if (e.type == "change" && !$(e.target).is(":input"))
		{
			return true;
		}
		if (e.type == "click" && $(e.target).is(":input"))
		{
			return true;
		}
		var selector = $(this).attr("href");
		if (!$(selector).length)
		{
			selector = $(this).attr("data-element");
		}
		var $o = $(selector);
		if ($o.length)
		{
			$o.addClass("active").siblings(".activate-it-object").removeClass("active");
			$(".activate-it[href='"+selector+"']").addClass("active").siblings(".activate-it").removeClass("active");
			$(".deactivate-it[href='"+selector+"']").removeClass("active");
		}
	});
  
  $(document).on("click change", ".deactivate-it", function(e){
		if (e.type == "click" && !$(e.target).is(":input"))
		{
			e.preventDefault();
		}
		if (e.type == "change" && !$(e.target).is(":input"))
		{
			return true;
		}
		if (e.type == "click" && $(e.target).is(":input"))
		{
			return true;
		}
		var selector = $(this).attr("href");
		if (!$(selector).length)
		{
			selector = $(this).attr("data-element");
		}
		var $o = $(selector);
		if ($o.length)
		{
			$o.removeClass("active");
			$(".activate-it[href='"+selector+"']").removeClass("active");
			$(".deactivate-it[href='"+selector+"']").addClass("active").siblings(".deactivate-it").removeClass("active");
		}
	});
	
	
	
  $(document).on("click", ".quote-open", function(e){
		e.preventDefault();
		$($(this).attr("href")).addClass("active");
		$("body").addClass("quote-opened");
	});
	
  $(document).on("click", ".quote-close", function(e){
		e.preventDefault();
		$("body").removeClass("quote-opened");
	});
	
  $(document).on("click", ".sidebar-close", function(e){
		e.preventDefault();
		$(this).closest(".sidebar").removeClass("active");
	});
	
  $(document).on("click", ".overlay-open", function(e){
		e.preventDefault();
		var $this = $(this);
		var $o = $($(this).attr("href"));
		$o.addClass("active");
		setTimeout(function(){
			if ($this.hasClass("overlay-outer-sidebars-close"))
			{
				$(".sidebar").not($o.find(".sidebar")).removeClass("active");
				$("body").removeClass("quote-opened");
			}
		}, 500);
	});
	
  $(document).on("click", ".overlay-close", function(e){
		e.preventDefault();
		$(this).closest(".overlay").removeClass("active");
	});
	
}

function expand_it_init()
{

	$(document).on("click click-pseudo", ".expand-it", function(e){
		e.preventDefault();
		var $o = $($(this).attr("href"));
		if (!$o.length)
		{
			$o = $(this).closest(".expand-it-wrapper").find(".expand-it-container");
		}
		if (!$o.length) return;
		
		var id = $o.attr("id");
		if (!id)
		{
			id = "id"+(new Date()).getTime() + $o.text().length;
			$o.attr("id", id);
		}
		height = $o.find(".expand-it-inner").outerHeight();
		$o[0].offsetHeight;
		$o.addClass("notransition");
		$o[0].offsetHeight;
		if (!$o.hasClass("expand-it-container-overflow-hidden")) 
		{
			console.log("expand-it-container removeClass overflow-visible");
			$o.removeClass("overflow-visible");
		}
		$o[0].offsetHeight;
		$o.removeClass("notransition");
		if (!$o.hasClass("active")) addCSSRule("rule-"+id, "#"+id+".active { max-height: "+ height+"px; }");
		$o[0].offsetHeight;
		
		var label = $(this).html();
		$(this).html($(this).attr("data-label"));
		$(this).attr("data-label", label);
		$(this).toggleClass("active");
		$(".expand-it.active[href='#"+$o.attr("id")+"']").not($(this)).toggleClass("active");
		
		if (e.type !== "click-pseudo")
		{
			$o.addClass("before-transition").toggleClass("active").siblings(".expand-it-container").each(function(){
				$(".expand-it.active[href='#"+$(this).attr("id")+"']").trigger("click-pseudo");
				$(this).addClass("before-transition").removeClass("active");
			});
			if ($o.closest(".expand-it-wrapper-collapse-siblings").length)
			{
				$o.closest(".expand-it-wrapper-collapse-siblings").siblings(".expand-it-wrapper").each(function(){
					var $this = $(this).find(".expand-it-container");
					if ($(this).find(".expand-it").length)
					{
						$(this).find(".expand-it.active").trigger("click-pseudo");
					}
					else
					{
						$(".expand-it.active[href='#"+$this.attr("id")+"']").trigger("click-pseudo");
					}
					$this.addClass("before-transition").removeClass("active");
				});
			}
		}
	});
  
  $(document).on("-webkit-transitionend transitionend", ".expand-it-container", function(e){
		if ($(e.target).hasClass("expand-it-container") && !$(e.target).hasClass("expand-it-container-overflow-hidden") && $(e.target).hasClass("before-transition"))
		{
			var height_default = 0;
			if ($(this).find(".expand-it-container-height-default").length) height_default = $(this).find(".expand-it-container-height-default").height();
			console.log("expand-it-container after transition");
			if (parseInt($(this).css("max-height"), 10) > height_default) 
			{
				console.log("expand-it-container transitionend addClass overflow-visible");
				$(this).addClass("overflow-visible");
			}
			else 
			{
				console.log("expand-it-container transitionend removeClass overflow-visible");
				$(this).removeClass("overflow-visible");
			}
		}
		$(e.target).removeClass("before-transition");
	});
}


function body_scrolled()
{
	var scrolled_condition = $(window).scrollTop() > 0;
	$("body").toggleClass("scrolled", scrolled_condition);
}

$(window).on("resize orientationchange", function(e){
	responsive_update();
});


function responsive_type()
{
	return $(".respon-meter").css("z-index");
}

function responsive_init()
{
	$(".header__menu").clone().appendTo($(".header__overlay-scroll > .container"));
	header_menu_init();
	responsive_update();
}


function header_menu_init()
{
	
	$(".header__submenu").closest("li").addClass("expanded");
	$(".header__overlay .header__menu li.expanded").addClass("expand-it-wrapper expand-it-wrapper-collapse-siblings").find("> a").addClass("expand-it").removeClass("touch-focused");
	$(".header__overlay .header__menu li.expanded > .header__submenu").addClass("expand-it-container expand-it-container-overflow-hidden").find("> .container").addClass("expand-it-inner");
	
  $(document).on("click", ".header__switcher", function(e){
		$("body").toggleClass("header-overlay-active");
  });
  
  $(document).on("click touchstart", ".h-overlay", function(e){
		$("body").removeClass("header-overlay-active");
  });
}

function responsive_update()
{
	$(".overlay__inner").css("height", $(window).height())
}

function check_form($form, highlight, handler)
{
  if (typeof highlight === "undefined") highlight = true;
  var error = false;
  if (highlight) 
  {
    $form.find(":input").removeClass("error").addClass("success").closest(".form__item-field").closest(".form__item").removeClass("error").addClass("success");
    $form.find(".form__error").remove();
  }
  $form.find(":input.required").each(function(){
    if (!$(this).val())
    {
      error = true;
      if (highlight) $(this).addClass("error");
      if (highlight) $(this).closest(".form__item-field").append("<div class='form__error'>Не заполнено</div>").closest(".form__item").addClass("error");
    }
  });
  $form.find(":input").each(function(){
    if ($(this).val())
    {
      $email = $(this).filter(":input.email-validate");
      if ($email.length && !validateEmail($email.val()))
      {
        error = true;
        if (highlight) $email.addClass("error");
        if (highlight) $email.closest(".form__item-field").append("<div class='form__error'>Не корректен</div>");
      }
      $lat = $(this).filter(":input.validate-is-lat");
      if ($lat.length && $lat.val() && (parseFloat($lat.val()) < -90 || parseFloat($lat.val()) > 90))
      {
        error = true;
        if (highlight) $lat.addClass("error");
        if (highlight) $lat.closest(".form__item-field").append("<div class='form__error'>Укажите число от -90 до 90.</div>");
      }
      $lng = $(this).filter(":input.validate-is-lng");
      if ($lng.length && $lng.val() && (parseFloat($lng.val()) < -180 || parseFloat($lng.val()) > 180))
      {
        error = true;
        if (highlight) $lng.addClass("error");
        if (highlight) $lng.closest(".form__item-field").append("<div class='form__error'>Укажите число от -180 до 180.</div>");
      }
      $phone = $(this).filter(":input.phone-validate");
      if ($phone.length && $phone.val() && $phone.val().replace(/[\D]/g, "").length < 11)
      {
        error = true;
        if (highlight) $phone.addClass("error");
        if (highlight) $phone.closest(".form__item-field").append("<div class='form__error'>Введите номер мобильного телефона.</div>");
      }
      $password = $(this).filter(":input.equals-validate");
      if ($password.length && $password.val() && $($password.data("equals-selector")).length && $password.val() !== $($password.data("equals-selector")).val())
      {
        error = true;
        if (highlight) $password.addClass("error");
        if (highlight) $password.closest(".form__item-field").addClass("highlight-state--error").append("<div class='form__error'>Пароли не совпадают.</div>").closest(".form__item").addClass("error");
      }
      $date = $(this).filter(":input.date-validate");
      if ($date.length && $date.val() && !isValidDate($date.val()))
      {
        error = true;
        if (highlight) $date.addClass("error");
        if (highlight) $date.closest(".form__item-field").addClass("highlight-state--error").append("<div class='form__error'>Введите корректную дату.</div>").closest(".form__item").addClass("error");
      }
    }
  });
	
  $form.find(".checkboxes.required").each(function(){
		var checked = 0;
		$(this).find(":radio, :checkbox").each(function(){
			if ($(this).prop("checked"))
			{
				checked++;
			}
		});
    if (!checked)
    {
			error = true;
			if (highlight) 
			{
				$(this).closest(".form__item-field").append("<div class='form__error'>Выберите одно из значений.</div>");
				$(this).find(":radio, :checkbox").first().addClass("error");
			}
    }
  });
	
  $form.find(":radio, :checkbox").filter(".required").each(function(){
    if (!$(this).prop("checked"))
    {
			error = true;
			if (highlight) 
			{
				$(this).closest(".form__item-field").append("<div class='form__error'>"+(($(this).attr("data-error-message"))?$(this).attr("data-error-message"):"Нужно выбрать этот пункт")+"</div>");
				$(this).addClass("error");
			}
    }
  });
	
	$form.find(":input.error").removeClass("success");
	$form.find(".form__item.error").removeClass("success");

  if (highlight) $form.find(":input.error:first").focus();
  
  if (typeof handler !== "undefined") error = handler($form, highlight) || error;
	
	$form.find(".form__error").addClass("active");
	
  return error;
}

function validateEmail(email) { 
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function isValidDate(date)
{
    var matches = /^(\d{1,2})[-\/\.](\d{1,2})[-\/\.](\d{4})$/.exec(date);
    if (matches == null) return false;
    var d = matches[1];
    var m = matches[2] - 1;
    var y = matches[3];
    var composedDate = new Date(y, m, d);
    return composedDate.getDate() == d && composedDate.getMonth() == m && composedDate.getFullYear() == y;
}

function img_to_bg($o)
{
	if (typeof $o === "undefined") $o = $(".img-to-bg");
	$o.each(function(){
		if ($(this).find("> img").length && $(this).find("> img").attr("src"))
		{
			$(this).css("background-image", "url('"+$(this).find("> img").attr("src")+"')");
			$(this).addClass("img-to-bg--inited");
		}
	});
}


function gmap_load()
{
  if ($(".map").length && !$("#api-maps-google").length)
  {
    var script = document.createElement('script');
    script.id = 'api-maps-google';
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3&' +
        'callback=gmap_init';
    document.body.appendChild(script);
  }
  else if ($("#api-maps-google").length) {
    gmap_init();
  }
}

function gmap_init()
{
  if (typeof google === "undefined") return;
	CustomMarkerInit();
  $(".map:not(.map--inited)").each(function(){
    var center = $(this).data("center").split(",");
    var zoom = $(this).data("zoom");
    var map_center_point = new google.maps.LatLng(center[0], center[1]);

    var mapOptions = {
      zoom: zoom,
      center: map_center_point,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      disableDoubleClickZoom: false,
      streetViewControl: false,
      scrollwheel: false,
      overviewMapControl: false,
			draggable: (typeof $(this).data("draggable") !== "undefined")?$(this).data("draggable"):true,
			styles: [
				//{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }]},
				{
						"featureType": "landscape.natural",
						"elementType": "geometry.fill",
						"stylers": [
								{
										"visibility": "on"
								},
								{
										"color": "#e0efef"
								}
						]
				},
				{
						"featureType": "poi",
						"elementType": "geometry.fill",
						"stylers": [
								{
										"visibility": "on"
								},
								{
										"hue": "#1900ff"
								},
								{
										"color": "#c0e8e8"
								}
						]
				},
				{
						"featureType": "road",
						"elementType": "geometry",
						"stylers": [
								{
										"lightness": 100
								},
								{
										"visibility": "simplified"
								}
						]
				},
				{
						"featureType": "transit.line",
						"elementType": "geometry",
						"stylers": [
								{
										"visibility": "on"
								},
								{
										"lightness": 700
								}
						]
				},
				{
						"featureType": "water",
						"elementType": "all",
						"stylers": [
								{
										"color": "#7dcdcd"
								}
						]
				}
		]
    };

    var map = new google.maps.Map($(this)[0], mapOptions);
    $(this).data("map", map);
		map._div = $(this);
		
		google.maps.event.addListenerOnce(map, 'idle', function(){
			var $map = $(this._div);
			var this_map = this;
			setTimeout(function(){
				google.maps.event.trigger(this_map, "resize");
				if ($map.length)
				{
					var center = $map.data("center").split(",");
					$map.data("map").setCenter(new google.maps.LatLng(center[0], center[1]));
		
					if ($map.data("pan-by"))
					{
						var panby = $map.data("pan-by").split(",");
						if (panby.length > 1)
						{
							if (panby[0].indexOf("%") !== -1) panby[0] = $(window).width()*parseFloat(panby[0])/100;
							$map.data("map").panBy(1*panby[0], 1*panby[1]);
						}
					}
		
					if ($($map.data("pan-by-selector")))
					{
						$map.data("map").panBy(parseInt($($map.data("pan-by-selector")).css("margin-left"), 10), parseInt($($map.data("pan-by-selector")).css("margin-top"), 10));
					}
				}
			}, 0);
		});
		
		$(window).on('resize orientationchange', function() {
			map_set_default_center();
		});
    
    if ($(this).data("point"))
    {
      var point = $(this).data("point").split(",");
      if (point.length > 1)
      {
				overlay = new CustomMarker(
					new google.maps.LatLng(point[0], point[1]), 
					map,
					{
						html: "<div class='map-marker'></div>"
					}
				);
				
      }
    }
    
    $(this).addClass("map--inited");
		map_set_default_center();
  });
}

function map_set_default_center()
{
	$(".map.map--inited").each(function(){
		var $map = $(this);
		if ($map.length && $map.data("map"))
		{
			var center = $map.data("center").split(",");
			$map.data("map").setCenter(new google.maps.LatLng(center[0], center[1]));

			if ($map.data("pan-by"))
			{
				var panby = $map.data("pan-by").split(",");
				if (panby.length > 1)
				{
					if (panby[0].indexOf("%") !== -1) panby[0] = $map.width()*parseFloat(panby[0])/100;
					$map.data("map").panBy(1*panby[0], 1*panby[1]);
				}
			}
		}
	});
}

function CustomMarker(latlng, map, args) {
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);	
}

function CustomMarkerInit()
{
	if (typeof CustomMarker.prototype.draw !== "undefined") return;
	CustomMarker.prototype = new google.maps.OverlayView();

	CustomMarker.prototype.draw = function() {
		
		var self = this;
		
		var div = this.div;
		
		if (!div) {
		
			div = this.div = document.createElement('div');
			div.style.position = 'absolute';
			
			if (typeof self.args !== 'undefined' && typeof self.args.html !== 'undefined') {
				var $div = $(div);
				$div.html(self.args.html);
				div = $div[0];
			}
			
			if (typeof self.args !== 'undefined' && typeof self.args.marker_id !== 'undefined') {
				div.dataset.marker_id = self.args.marker_id;
			}
			
			google.maps.event.addDomListener(div, "click", function(event) {
				google.maps.event.trigger(self, "click");
			});
			
			var panes = this.getPanes();
			panes.overlayImage.appendChild(div);
		}
		
		var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
		
		if (point) {
			div.style.left = point.x + 'px';
			div.style.top = point.y + 'px';
		}
	};

	CustomMarker.prototype.remove = function() {
		if (this.div) {
			this.div.parentNode.removeChild(this.div);
			this.div = null;
		}	
	};

	CustomMarker.prototype.getPosition = function() {
		return this.latlng;	
	};
}

function bind_widgets() 
{
	img_to_bg();
	$(".mask-phone").filter(":not(.mask-inited)").inputmask({
		mask: "+7 (999) 999-99-99",
		placeholder: "_"
	}).addClass("mask-inited");
}

function lazy_load()
{
	$("[data-lazy-src]").not(".lazy-load-inited").each(function(){
		if ($(this).offset().top - $(window).height() < $(window).scrollTop() + $(window).height())
		{
			lazy_load_change($(this));
		}
	});
}

function lazy_load_change($img)
{
	$img.addClass("lazy-load-inited");
	$img.attr("src", $img.attr("data-lazy-src"));
	$img.one("load", function() {
		var $this = $(this);
	});
}

var addCSSRule = function (sheet_id, rules) {
  $("#"+sheet_id).remove();
  $("<style type='text/css' id='"+sheet_id+"'>"+rules+"</style>").appendTo("head");
};

var removeCSSRule = function (sheet_id) {
  $("#"+sheet_id).remove();
};

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

var delay1 = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

jQuery.fn.hasScrollbar = function() {
	var scrollHeight = this.get(0).scrollHeight;
	if ($(window).height() < scrollHeight)
		return true;
	else
		return false;
}

jQuery.fn.hasHorzScrollbar = function() {
	var scrollWidth = this.get(0).scrollWidth;
	if (this.width() < scrollWidth)
		return true;
	else
		return false;
}

function getScrollbarWidth(className) {
	var outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.width = "100px";
	outer.style.msOverflowStyle = "scrollbar";
	if (typeof className !== "undefined") outer.className = className;
	document.body.appendChild(outer);
	var widthNoScroll = outer.offsetWidth;
	outer.style.overflow = "scroll";
	var inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);
	var widthWithScroll = inner.offsetWidth;
	outer.parentNode.removeChild(outer);
	return widthNoScroll - widthWithScroll;
}


/*
 * .addClassSVG(className)
 * Adds the specified class(es) to each of the set of matched SVG elements.
 */
$.fn.addClassSVG = function(className){
    $(this).attr('class', function(index, existingClassNames) {
        return existingClassNames + ' ' + className;
    });
    return this;
};

/*
 * .removeClassSVG(className)
 * Removes the specified class to each of the set of matched SVG elements.
 */
$.fn.removeClassSVG = function(className){
    $(this).attr('class', function(index, existingClassNames) {
        var re = new RegExp(className, 'g');
        if (existingClassNames) return existingClassNames.replace(re, '');
				else return "";
    });
    return this;
};

function first_of_object(obj) {
	for (var a in obj) return a;
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

(function($) {    
  if ($.fn.style) {
    return;
  }

  // Escape regex chars with \
  var escape = function(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  // For those who need them (< IE 9), add support for CSS functions
  var isStyleFuncSupported = !!CSSStyleDeclaration.prototype.getPropertyValue;
  if (!isStyleFuncSupported) {
    CSSStyleDeclaration.prototype.getPropertyValue = function(a) {
      return this.getAttribute(a);
    };
    CSSStyleDeclaration.prototype.setProperty = function(styleName, value, priority) {
      this.setAttribute(styleName, value);
      var priority = typeof priority != 'undefined' ? priority : '';
      if (priority != '') {
        // Add priority manually
        var rule = new RegExp(escape(styleName) + '\\s*:\\s*' + escape(value) +
            '(\\s*;)?', 'gmi');
        this.cssText =
            this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
      }
    };
    CSSStyleDeclaration.prototype.removeProperty = function(a) {
      return this.removeAttribute(a);
    };
    CSSStyleDeclaration.prototype.getPropertyPriority = function(styleName) {
      var rule = new RegExp(escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?',
          'gmi');
      return rule.test(this.cssText) ? 'important' : '';
    }
  }

  // The style function
  $.fn.style = function(styleName, value, priority) {
    // DOM node
    var node = this.get(0);
    // Ensure we have a DOM node
    if (typeof node == 'undefined') {
      return this;
    }
    // CSSStyleDeclaration
    var style = this.get(0).style;
    // Getter/Setter
    if (typeof styleName != 'undefined') {
      if (typeof value != 'undefined') {
        // Set style property
        priority = typeof priority != 'undefined' ? priority : '';
        style.setProperty(styleName, value, priority);
        return this;
      } else {
        // Get style property
        return style.getPropertyValue(styleName);
      }
    } else {
      // Get CSSStyleDeclaration
      return style;
    }
  };
})(jQuery);

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

;(function ($) {
    var on = $.fn.on, timer;
    $.fn.on = function () {
        var args = Array.apply(null, arguments);
        var last = args[args.length - 1];

        if (isNaN(last) || (last === 1 && args.pop())) return on.apply(this, args);

        var delay = args.pop();
        var fn = args.pop();

        args.push(function () {
            var self = this, params = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(self, params);
            }, delay);
        });

        return on.apply(this, args);
    };
}(this.jQuery || this.Zepto));