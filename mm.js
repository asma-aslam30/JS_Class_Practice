$(document).ready(function() {
    // Toggle sidebar nested menu
    $('.nav-primary .nav-item a.collapsed').on('click', function() {
      $(this).toggleClass('active');
      $(this).siblings('.collapse').toggleClass('show');
      $('.nav-primary .nav-item a.collapsed').not(this).removeClass('active').siblings('.collapse').removeClass('show');
    });
  
    // Close other nested menus when a main menu item is clicked
    $('.nav-primary .nav-item a:not(.collapsed)').on('click', function() {
      $('.nav-primary .nav-item a.collapsed').removeClass('active').siblings('.collapse').removeClass('show');
    });
  });
  