/**
 *	Strong Testimonials > admin screens
 */

jQuery(document).ready(function($) {

	// Function to get the Max value in Array
	Array.max = function( array ){
		return Math.max.apply( Math, array );
	};

	// Convert "A String" to "a_string"
	function convertLabel(label) {
		return label.replace(/\s+/g, "_").replace(/\W/g, "").toLowerCase();
	}

	// Remove invalid characters
	function removeSpaces(word) {
		//return word.replace(/\s+/g, "_");
		return word.replace(/[^\w\s(?!\-)]/gi, '')
	}

	// --------------
	// General events
	// --------------

	// Warning icon on old settings submenu item.
	$("#menu-posts-wpm-testimonial")
		.find("li a:contains('Old Settings')")
			.append("<span class='dashicons dashicons-warning'></span>");

	// the widget list
	$("#widget-list")
		.find(".widget-description:contains('The original widget for Strong Testimonials')")
			.append("<span style='color:red; font-weight: bold;'>Will be removed in the next release. Use a View instead.</span>")
			.parent()
				.find(".widget-title h4")
					.prepend("<span class='dashicons dashicons-warning'></span>")

	// a widget instance
	$("#widgets-right")
		.find(".widget-description:contains('The original widget for Strong Testimonials')")
			.parent()
				.find(".widget-title h4")
				.prepend("<span class='dashicons dashicons-warning high'></span>")
			.end()
			.find(".widget-content")
				.prepend("<p style='color:red; margin-bottom: 10px; font-size: 14px;'>Will be removed in the next release. Create a View and use the View widget instead.</p>");


	// Version 2 countdown
	var countdown = {
		'action': 'wpmtst_countdown',
	};
	$.get( ajaxurl, countdown, function( response ) {
		if ( response )
			$(".v2warning").html(response);
	});


	$("ul.ui-tabs-nav li a").click(function(){
		$(this).blur();
	});

	$(".focus-next-field").change(function(e) {
		if( $(e.target).is(":checked") ) {
			$(e.target).parent().next().find("input").focus().select();
		}
	});

	// toggle screenshots
	$("#toggle-screen-options").add("#screenshot-screen-options").click(function(e) {
		$(this).blur();
		$("#screenshot-screen-options").slideToggle();
	});

	// toggle screenshots
	$("#toggle-help").click(function(e) {
		$(this).toggleClass("closed open").blur();
		$("#help-section").slideToggle();
	});

	// -------------------------
	// Custom shortcode
	// -------------------------

	$("#wpmtst_shortcode").change(function(){
		var word = $(this).val();
		$(this).val(removeSpaces(word));
	});

	$("#restore-default-shortcode").click(function(){
		$("#wpmtst_shortcode").val('strong');
		$("#wpmtst_shortcode_select").val("0");
		$(this).blur();
	});

	$("#wpmtst_shortcode_select").change(function(){
		var shortcode = $(this).val();
		if ("0" != shortcode) {
			$("#wpmtst_shortcode").val(shortcode);
		}
	});

	// -------------------------
	// Admin notification email events
	// -------------------------

	var $notifyAdmin = $("#wpmtst-options-admin-notify");
	var $notifyFields = $("#admin-notify-fields");

	if( $notifyAdmin.is(":checked") ) {
		$notifyFields.slideDown();
	}

	$notifyAdmin.change(function(e) {
		if( $(this).is(":checked") ) {
			$notifyFields.slideDown();
			$(this).blur();
		}
		else {
			$notifyFields.slideUp();
		}
	});

	$("#add-recipient").click(function(e){
		var $this = $(this);
		var key = $this.closest("tr").siblings().length-1;
		var data = {
			'action': 'wpmtst_add_recipient',
			'key': key,
		};
		$.get( ajaxurl, data, function( response ) {
			$this.closest("tr").before(response).prev("tr").find(".name-email").first().focus();
		});
	});

	$notifyFields.on('click',".delete-recipient",function(e){
		$(this).closest("tr").remove();
	});

	// -------------
	// Form Settings
	// -------------

	$("#restore-default-messages").click(function(e){
		var data = {
			'action': 'wpmtst_restore_default_messages'
		};
		$.get( ajaxurl, data, function( response ) {
			var object = JSON.parse( response );
			for (var key in object) {
				if (object.hasOwnProperty(key)) {
					$("input[id='" + key + "']").val( object[key]["text"] );
				}
			}
		});
	});

	$(".restore-default-message").click(function(e){
		var input = $(e.target).closest("tr").find("input[type='text']").attr("id");
		var data = {
			'action': 'wpmtst_restore_default_message',
			'field': input
		};
		$.get( ajaxurl, data, function( response ) {
			var object = JSON.parse( response );
			$("input[id='" + input + "']").val( object["text"] );
		});
	});

	// -------------
	// Widget events
	// -------------

	// Delegated listener on dual-mode widget only.

	// Normal admin:
	// $('#widgets-right').on('click', '.wpmtst-widget', function(e) {
	// With Page Builder plugin:
	$('.wp-admin').on('click', '.wpmtst-widget-form', function(e) {

		if ( "wpmtst-mode-setting" == e.target.className ) {

			// get selected tab
			var tab = e.target.getAttribute("value");
			// find parent div
			var $p = $(e.target).closest(".wpmtst-mode");

			// highlight current tab
			$(e.target).closest("ul").find("li").each( function( i, el ) {
				var tabvalue = $(this).find('input').val();
				if ( tabvalue == tab ) {
					$(this).addClass("radio-current");
					$p.find(".wpmtst-mode-" + tabvalue).show();
				} else {
					$(this).removeClass("radio-current");
					$p.find(".wpmtst-mode-" + tabvalue).hide();
				}
			});

		}

		// Switches and related settings.
		if ( e.target.getAttribute("id") ) { // not all elements have id's

			var eId = e.target.getAttribute("id"); // like "widget-wpmtst-widget-2-cycle-all"
			var ePos1 = eId.indexOf("cycle-all");
			var ePos2 = eId.indexOf("char-switch");

			if ( ePos1 > 0 ) {
				// Disable "number to show" if "show all" is checked.
				var eChange = eId.substr(0,ePos1) + 'cycle-limit';
				if ( e.target.checked ) {
					document.getElementById(eChange).setAttribute("readonly", "readonly");
				} else {
					document.getElementById(eChange).removeAttribute("readonly");
				}
			}
			else if ( ePos2 > 0 ) {
				// Disable character limit input if not selected.
				var eChange1 = eId.substr(0,ePos2) + "char-limit";
				var eChange2 = eId.substr(0,ePos2) + "more-1";
				if ( 1 == e.target.value ) {
					document.getElementById(eChange1).removeAttribute("readonly");
				} else {
					document.getElementById(eChange1).setAttribute("readonly", "readonly");
				}
			}

		}

	});

});
