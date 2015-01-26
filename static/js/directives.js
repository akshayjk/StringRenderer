var FileRendererAppDirective = angular.module('FileRendererApp.Directive', ['ngResource','ui.bootstrap', 'jsonFormatter']);

FileRendererAppDirective.directive('sidebarToggle', function() {
   return {
     link: function(scope, element, attrs) {
       $('[data-toggle=offcanvas]').click(function() {
          $('.row-offcanvas').toggleClass('active');
       });
     }
   }
});

FileRendererAppDirective.directive('hboTabs', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var jqueryElm = $(elm[0]);
            $(jqueryElm).tabs()
        }
    };
});


FileRendererAppDirective.directive('toggleBar', function () {
  return  {
    link: function (scope, element, attrs) {
      element.click(function () {
         $('.row-offcanvas-left').removeClass('active');
      });
    }
  }
});



/*
eventumDirective.directive('sideBar', function() {
   return {
     link: function(scope, element, attrs) {
      $('.sideBarList li').click(function () {
        $('.row-offcanvas').toggleClass('active');
      });
     }
   }
});

eventumDirective.directive('helloMaps', function () {
  return function (scope, elem, attrs) {
    var mapOptions,
      latitude = attrs.latitude,
      longitude = attrs.longitude,
      map;

    latitude = latitude && parseFloat(latitude, 10) || 43.074688;
    longitude = longitude && parseFloat(longitude, 10) || -89.384294;

    mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(latitude, longitude)
    };

    map = new google.maps.Map(elem[0], mapOptions);
  };
});

eventumDirective.directive('activeLink', ['$location', function(location) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            var clazz = attrs.activeLink;
            var path = attrs.href;
            path = path.substring(1);
            scope.location = location;
            scope.$watch('location.path()', function(newPath) {
              if (path === newPath) {
                element.addClass(clazz);
              } else {
                element.removeClass(clazz);
              }
            });
        }
    };
}]);

eventumDirective.directive('agendaDays', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs, controller) {
      element.find('li').click(function (event) {
        element.find('li').removeClass('active');
        console.log(event.target);
      });
    }
  };
}]);


eventumDirective.directive('readMore', function() {
   return {
     link: function(scope, element, attrs) {
       // DOM Ready
    var readall = attrs.readMore;
    

    $(function() {
    
      var $el, $ps, $up, totalHeight;
      
      $(".sidebar-box .button").click(function() {
      
        // IE 7 doesn't even get this far. I didn't feel like dicking with it.
            
        totalHeight = 0
      
        $el = $(this);
        $p  = $el.parent();
        $up = $p.parent();
        $ps = $up.find("p:not('.read-more')");
        
        // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
        $ps.each(function() {
          totalHeight += $(this).outerHeight() * readall;
          

                    // FAIL totalHeight += $(this).css("margin-bottom");
        });
              
        $up
          .css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $up.height(),
            "max-height": 9999
          })


          .animate({
            "height": totalHeight 
          });
        
        // fade out read-more
        $p.fadeOut();
        
        // prevent jump-down
        return false;
          
      });
    
    });

   
    
      
     }
   }
});

eventumDirective.directive('readHide', function() {
   return {
     link: function(scope, element, attrs) {
       // DOM Ready
      var chNo = attrs.readHide;
      console.log(chNo);
      
       if(chNo < 120){
        console.log("this is in the catagory");
        element.hide();
      }
     }
   }
});

eventumDirective.directive('comMents', function() {
   return {
     link: function(scope, element, attrs) {
       // DOM Ready
      $(".comments").click(function(){

        element.scrollTop = element.scrollHeight;
      })
     }
   }
});

eventumDirective.directive('speakerShow', function() {

  

   return {
     link: function(scope, element, attrs) {
       // DOM Ready
var isSpeaker = attrs.speakerShow;
  console.log("value is " + isSpeaker);
       if(! isSpeaker){

        element.hide();
       }
      
     }
   }
});


eventumDirective.directive('popUp', function () {
  return  {
    link: function (scope, element, attrs) {
      element.click(function () {
         var x;
         var y = document.getElementById("username").value;
var r=confirm("             Feedback\nDo you want to submit posting?");
if (r==true)
  {
  x="Feedback Submitted";
  }
else
  {
  x="You pressed Cancel!";
  }
document.getElementById("demo").innerHTML=x;
document.getElementById("de").innerHTML=y;


      });
    }
  }
});


*/

