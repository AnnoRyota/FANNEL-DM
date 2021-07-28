var trigger = $('.language_selector');
var list = $('.languages');

trigger.click(function () {
  trigger.toggleClass('active');
  list.slideToggle(200);
});

// this is optional to close the list while the new page is loading
list.click(function () {
  trigger.click();
});