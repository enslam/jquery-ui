(function($) {

	module("panel: options");
	
	test("{ icons: false }", function() {
		var p = $("#panel1");
		function icons(on) {
			same($("span.ui-icon", p).length, on ? 1 : 0);
			same( p.hasClass("ui-panel-icons"), on );
		}
		p.panel();
		icons(true);
		p.panel("destroy").panel({
			icons: false
		});
		icons(false);
		p.panel("option", "icons", $.ui.panel.prototype.options.icons);
		icons(true);
		p.panel("option", "icons", false);
		icons(false);
	});
	
	
	test("{ collapsible: false }", function() {
		p = $("#panel1");
		p.panel({ collapsible: false, expanded: false }).panel("toggle");
		equals( p.children(":first").hasClass('ui-panel-header-active'), false);
	});
	
	test("{ expanded: false }", function() {
		p = $("#panel1");
		p.panel({ expanded: false });
		equals( p.children(":first").hasClass('ui-panel-header-active'), false);
	});
	
	test('cookie', function() {
		expect(4);
	
		el = $('#panel1');
		var cookieName = 'panel_test', 
			cookieObj = { name: cookieName };
		
		$.cookie(cookieName, null); // blank state
		var cookie = function() {
			return $.cookie(cookieName);
		};
	
		el.panel({ cookie: cookieObj });
		equals(cookie(), null, 'initial cookie value');
		el.panel('destroy');
		
		el.panel({ cookie: cookieObj }).panel('toggle');	
		equals(cookie(), 0, 'cookie value updated on toggle');
		el.panel('destroy');
		
		$.cookie(cookieName, "1");
		el.panel({ cookie: cookieObj });
		equals(cookie(), "1", 'initial cookie value, from existing cookie');
	
		el.panel('destroy');
		ok($.cookie(cookieName) === null, 'erase cookie after destroy');
	
	});
	
	test("{ expandType: 'right' }", function() {
		p = $("#panel1");
		p.panel({ expandType: 'right' }).panel("toggle");
		equals( p.hasClass("ui-widget-vertical"), true);
	});
	
	test("{ expandType: 'left' }", function() {
		p = $("#panel1");
		p.panel({ expandType: 'left' }).panel("toggle");
		equals( p.hasClass("ui-widget-vertical"), true);
	});

})(jQuery);