$(document).ready(function(){$(".show-comments").on("click",function(){var n="kevinjalbert";$.ajax({type:"GET",url:"https://"+n+".disqus.com/embed.js",dataType:"script",cache:!0}),$(this).fadeOut()})});