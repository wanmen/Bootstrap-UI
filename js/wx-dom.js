/* JavaScript for DOM Manipulation
 * by Zan Pan, 2013/09/09, MIT License
*/

(function() {
  'use strict';

  var host = 'http://wanmen.org';

  $(document).ready(function() {

    $('.wm-book-gallery img').css('height',
      $('.wm-book-gallery img').eq(0).css('height')
    );

    $(this).on('click', 'a[href^="http"]', function() {
      if(!RegExp(host).test(this.href)) {
        window.open(this.href);
        return false;
      }
      return true;
    });

  });

})();

