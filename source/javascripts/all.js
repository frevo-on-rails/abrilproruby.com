//= require vendor/bootstrap/tooltip
//= require vendor/bootstrap/popover
//= require vendor/bootstrap/transition
//= require vendor/bootstrap/collapse
//= require vendor/smooth-scroll

/*
 * Conference Section
 */

$('.speaker .talk .more').click(function(e) {
  e.preventDefault();
  var $this = $(this);

  var p = $this.parents('.talk').find('p');
  p.find('.ellipsis').toggle();
  p.find('.content-remainder').toggleClass('sr-only');

  var newText = $this.data('collapsed-text');
  $this.data('collapsed-text', $this.text());
  $this.text(newText);
});

$('[data-toggle=tooltip]').tooltip();
$('[data-toggle=popover]').popover().click(function(e) {
  e.preventDefault()
});
