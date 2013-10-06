/* JavaScript for DOM Manipulation
 * by Zan Pan, 2013/09/09, MIT License
*/

;(function($) {
  'use strict';

  var host = 'http://www.wanmen.org';

  $(document).ready(function() {

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

    if($('body').height() < $(window).height()) {
      $('footer').addClass('navbar-fixed-bottom');
    }

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
      $('.wm-gallery img').eq(0).css('height')
    );

    $('.wm-recommend img').css('height',
      $('.wm-recommend img').eq(0).css('height')
    );

    $('.wm-show-video a').on('click', function() {
      var video = $(this).attr('href'),
        width = $('main article').width();
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
      $('.wm-video').hide();
    });

    $('.wm-video').draggable();

  });

})(jQuery);

