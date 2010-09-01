/*
 * panel_methods.js
 */
(function($) {

module("panel: methods");

test("init", function() {
	$("<div></div>").appendTo('body').panel().remove();
	ok(true, '.panel() called on element');

	$([]).panel().remove();
	ok(true, '.panel() called on empty collection');

	$('<div></div>').panel().remove();
	ok(true, '.panel() called on disconnected DOMElement - never connected');

	$('<div></div>').appendTo('body').remove().panel().remove();
	ok(true, '.panel() called on disconnected DOMElement - removed');

	var el = $('<div></div>').panel();
	var foo = el.panel("option", "foo");
	el.remove();
	ok(true, 'arbitrary option getter after init');

	$('<div></div>').panel().panel("option", "foo", "bar").remove();
	ok(true, 'arbitrary option setter after init');
});

test("destroy", function() {
	var beforeHtml = $("#panel1").find("div").css("font-style", "normal").end().parent().html();
	var afterHtml = $("#panel1").panel().panel("destroy").parent().html();
	// Opera 9 outputs role="" instead of removing the attribute like everyone else
	if ($.browser.opera) {
		afterHtml = afterHtml.replace(/ role=""/g, "");
	}
	equal( afterHtml, beforeHtml );
});

test("enable", function() {
	var expected = $('#panel1').panel(),
		actual = expected.panel('enable');
	equals(actual, expected, 'enable is chainable');
});

test("disable", function() {
	var expected = $('#panel1').panel(),
		actual = expected.panel('disable');
	equals(actual, expected, 'disable is chainable');
});

})(jQuery);
