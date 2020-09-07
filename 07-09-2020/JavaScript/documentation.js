/**
 * Toggle visibility of a content tab
 * @param  {String} selector Selector for the element
 * @param  {Node}   toggle   The element that triggered the tab
 */
var toggleVisibility = function (selector, toggle) {
	if (!selector) return;
	var elem = document.querySelector(selector);
	if (!elem) return;
	elem.classList.add('active');
	if (toggle) {
		toggle.classList.add('active');
	}
	elem.focus()
	if (document.activeElement.matches(selector)) return;
	elem.setAttribute('tabindex', '-1');
	elem.focus();
};
Maybe you could. Did it take