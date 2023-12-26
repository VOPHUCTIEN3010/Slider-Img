$(document).ready(function() {
  var totalSlides = $('.bxslider img').length;
  var currentSlide = 0;
  
  let pagHtml = "";
  for (var i = 0; i < totalSlides; i++) {
    pagHtml += '<a href="#" data-slide-index="' + i + '" class="bx-pager-link'+(i === currentSlide? ' active':'') +'">' + (i+1) + '</a>'
  }
  $('.bx-pager').html(pagHtml);
  
  function showSlide(index) {
    $('.bxslider img.active').fadeOut(300, function () {
        $(this).removeClass('active');
        $('.bxslider img').eq(index).addClass('active').fadeIn(500);
        
    });
    $(".bx-pager a.active").removeClass('active');
    $(".bx-pager a:eq("+index+")").addClass('active');
    
    currentSlide = index; 
    console.log(currentSlide);
    let newSpan = $('<span>'); 
    newSpan.addClass('text');
    newSpan.text('coffee ' + (index+1));
    $('.bx-caption').append(newSpan);
  }
  
  $(".bx-next").on('click', function(){
    let newSlide = currentSlide === totalSlides-1? 0: currentSlide + 1;
    showSlide(newSlide);
  });

  $(".bx-prev").on('click', function(){
    let newSlide = currentSlide === 0? totalSlides-1 : currentSlide - 1;
    showSlide(newSlide);
  });

  $(document).on('click', '.bx-pager-link', function() {
      var slideIndex = $(this).data('slide-index');
      showSlide(slideIndex);
  });
  showSlide(currentSlide);
});
