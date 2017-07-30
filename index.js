var navHeight = $('.nav').outerHeight(true) + 10;

$('.side-bar').affix({
      offset: {
        top: navHeight,
        bottom: navHeight
      }
});

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var about_pos = $('#about').offset().top;
    var exp_pos = $('#exp').offset().top;
    var skills_pos = $('#skills').offset().top;
    var edu_pos = $('#education').offset().top;
    var proj_pos = $('#projects').offset().top;
    var contact_pos = $('#contact').offset().top;
    console.log(skills_pos);
    console.log(window.pageYOffset);
    if(y_scroll_pos > about_pos - 200 && y_scroll_pos < about_pos) { toggleSelection('about'); }
    if(y_scroll_pos > exp_pos - 200 && y_scroll_pos < exp_pos) { toggleSelection('exp'); }
    if(y_scroll_pos > skills_pos - 200 && y_scroll_pos < skills_pos) { toggleSelection('skill'); }
    if(y_scroll_pos > edu_pos - 200 && y_scroll_pos < edu_pos) { toggleSelection('edu'); }
    if(y_scroll_pos > proj_pos - 200 && y_scroll_pos < proj_pos) { toggleSelection('project'); }
    if(y_scroll_pos > contact_pos - 200 && y_scroll_pos < contact_pos) { toggleSelection('contact'); }
});

$('#click-logo').on('click', () => { toggleSelection('about'); })
$('#click-about').on('click', () => { toggleSelection('about'); })
$('#click-edu').on('click', () => { toggleSelection('edu'); })
$('#click-skill').on('click', () => { toggleSelection('skill'); })
$('#click-exp').on('click', () => { toggleSelection('exp'); })
$('#click-project').on('click', () => { toggleSelection('project'); })
$('#click-contact').on('click', () => { toggleSelection('contact'); })



function toggleSelection(str){
  str === 'about' ? $('.about-box').addClass('about-selected') : $('.about-box').removeClass('about-selected');
  str === 'edu' ? $('.edu-box').addClass('edu-selected') : $('.edu-box').removeClass('edu-selected');
  str === 'skill' ? $('.skill-box').addClass('skill-selected') : $('.skill-box').removeClass('skill-selected');
  str === 'exp' ? $('.exp-box').addClass('exp-selected') : $('.exp-box').removeClass('exp-selected');
  str === 'project' ? $('.project-box').addClass('project-selected') : $('.project-box').removeClass('project-selected');
  str === 'contact' ? $('.contact-box').addClass('contact-selected') : $('.contact-box').removeClass('contact-selected');
}
