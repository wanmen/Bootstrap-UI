/* JavaScript for DOM Manipulation
 * by Zan Pan, 2013/09/09, MIT License
*/

;(function($) {
  'use strict';

  var host = 'http://wanmen.org';

  $(document).ready(function() {

    $(window).scroll(function () {
      if($(this).scrollTop() > $(window).height()) {
        if(!$('.wm-back-to-top').length) {
          $('main').append('<a class="wm-back-to-top" href="#" title="返回顶部">' +
            '<span class="glyphicon glyphicon-circle-arrow-up"></span></a>');
        }
      } else {
        $('.wm-back-to-top').remove();
      }
    });

    $('.wm-book-gallery img').css('height',
      $('.wm-book-gallery img').eq(0).css('height')
    );

    $('.wm-book-recommend img').css('height',
      $('.wm-book-recommend img').eq(0).css('height')
    );

    $('.wm-sns-share img').on('click', function() {
      var img = $(this).attr('src').replace(/(.+\/)/g, ''),
        sns = {'renren': 'http://share.renren.com/share/buttonshare.do?link=',
          'douban': 'http://www.douban.com/recommend/?url=',
          'sina': 'http://v.t.sina.com.cn/share/share.php?url=',
          'qzone': 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=',
          'tencent': 'http://share.v.t.qq.com/index.php?c=share&a=index&url='};
      window.open(sns[img.slice(0,-4)] + encodeURIComponent(document.location.href) +
        '&amp;title=' + encodeURIComponent(document.title));
    });

    $(this).on('click', 'a[href^="http"]', function() {
      if(!RegExp(host).test(this.href)) {
        window.open(this.href);
        return false;
      }
      return true;
    });

  });

})(jQuery);

