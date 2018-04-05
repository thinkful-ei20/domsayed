'use strict';
$(function () {
  $('.thumbnails').on('click', '.thumbnail', function(event){
    const currImageSrc = $(this).find('img').attr('src');
    const currImageAlt = $(this).find('img').attr('alt');
    $('.hero-img').attr({
      src : currImageSrc,
      alt : currImageAlt
    });
  });
});