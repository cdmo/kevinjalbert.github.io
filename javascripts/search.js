var lunrIndex=null,lunrData=null;$.ajax({url:"/search/lunr-index.json",cache:!0,method:"GET",success:function(n){lunrData=n}}),$(function(){$(".search").autocomplete({source:function(n,e){null==lunrIndex&&(lunrIndex=lunr.Index.load(lunrData.index));var l=_(lunrIndex.search(n.term)).take(50).pluck("ref").map(function(n){return lunrData.docs[n]}).value();0==l.length&&(l=[{noresults:!0}]),e(l)},select:function(n,e){e.item.noresults||(window.location.href=e.item.url)},open:function(){$(this).removeClass("ui-corner-all").addClass("ui-corner-top")},close:function(){$(this).removeClass("ui-corner-top").addClass("ui-corner-all")}}).autocomplete("instance")._renderItem=function(n,e){var l=e.noresults?'<span class="noresults">No results found</span>':'<a href="'+e.url+'">'+e.title+"</a>";return $(this.menu.element).toggleClass("noresults",e.noresults),$("<li>").append(l).appendTo(n)}});