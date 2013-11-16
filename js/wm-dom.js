/* JavaScript for DOM Manipulation
 * by Zan Pan, 2013/09/09, MIT License
*/

;(function($) {
  'use strict';

  var host = 'http://www.wanmen.org';

  $(document).ready(function() {

    $('input, textarea').placeholder();

    $('.wm-sns-share img').on('click', function() {
      var sns = $(this).attr('alt'),
        links = {'人人': 'http://share.renren.com/share/buttonshare.do?link=',
          '豆瓣': 'http://www.douban.com/recommend/?url=',
          '新浪微博': 'http://v.t.sina.com.cn/share/share.php?url=',
          'QQ空间': 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=',
          '腾讯微博': 'http://share.v.t.qq.com/index.php?c=share&a=index&url='};
      window.open(links[sns] + encodeURIComponent(document.location.href) +
        '&amp;title=' + encodeURIComponent(document.title));
    });

    $('.alert').show().delay(4000).fadeOut(1000);

    $(this).on('click', 'a[href^="http"]', function() {
      if(!RegExp(host).test(this.href)) {
        window.open(this.href);
        return false;
      }
      return true;
    });

  });

  $(window).load(function() {

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

    $('.wm-gallery img').css('height',
      $('.wm-gallery img').eq(0).height() || 240
    );

    $('.wm-recommend img').css('height',
      $('.wm-recommend img').eq(0).height() || 120
    );

    $('.wm-show-video a').on('click', function() {
      var video = $(this).attr('href'),
        width = $('main article').width();
      if($('.wm-show-video').length > 1) {
        $('.wm-video .wm-video-title').text($(this).text());
      }
      if(!$('.wm-video iframe').length) {
        $('.wm-video').append('<iframe src="http://player.youku.com/"></iframe>');
      }
      if(video.indexOf('youku') != -1) {
        var vid = video.slice(video.indexOf('id_') + 3, -5);
        video = 'http://player.youku.com/embed/' + vid;
        $('.wm-video iframe').attr('src', video).css('height', width * 0.67);
        $('.wm-video').css('width', width).show();
        return false;
      } else {
        return true;
      }
    });

    $('.wm-video button.close').on('click', function() {
      $('.wm-video iframe').remove();
      $('.wm-video').hide();
    });

    $('.wm-video').draggable();

  });

})(jQuery);

