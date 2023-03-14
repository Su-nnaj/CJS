
/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target1"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    for (var r = document.querySelectorAll(".section-links"), a = r.length - 1; a >= 0; a--) {
      o(r[a])
  }
  for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}
for (var r = document.querySelectorAll(".down-btn"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}
for (var r = document.querySelectorAll(".email"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}
for (var r = document.querySelectorAll(".social_contact"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}
for (var r = document.querySelectorAll(".nav__list-item"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}

 
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	//Navigation

	var app = function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
  
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
  
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        toggleClass(body, 'nav-active');
      });
      
      // Add event listeners for each menu item in your nav
      menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
          toggleClass(body, 'nav-active');
        });
      });
    };
  
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) {
        element.classList.remove(stringClass);
      } else {
        element.classList.add(stringClass);
      }
    };
  
    init();
  }();
  
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});
	
})(jQuery); 



/*bg*************************************************8*/

const noise = () => {
    let canvas, ctx;
  
    let wWidth, wHeight;
  
    let noiseData = [];
    let frame = 0;
  
    let loopTimeout;
  
    // Create Noise
    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;
  
      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.8) {
          buffer32[i] = 0x080000ff; /* Set smallest dots of noise red */
        } else if (Math.random() < 0.20) {
          buffer32[i] = 0x0800ff00; /* Set small dots of noise green */
        } else if (Math.random() < 0.11) {
          buffer32[i] = 0x08ff0000; /* Set big dots of noise blue */
        } else if (Math.random() < 0.20) {
          buffer32[i] = 0xccdddddd; /* Set biggest dots of noise gray */
        }
      }
  
      noiseData.push(idata);
    };
  
    // Play Noise
    const paintNoise = () => {
      if (frame === 5) {
        frame = 0;
      } else {
        frame++;
      }
  
      ctx.putImageData(noiseData[frame], 0, 0);
    };
  
    // Loop
    const loop = () => {
      paintNoise(frame);
  
      loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(loop);
      }, 1000 / 25);
    };
  
    // Setup
    const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;
  
      canvas.width = wWidth;
      canvas.height = wHeight;
  
      for (let i = 0; i < 10; i++) {
        createNoise();
      }
  
      loop();
    };
  
    // Reset
    let resizeThrottle;
    const reset = () => {
      window.addEventListener(
        "resize",
        () => {
          window.clearTimeout(resizeThrottle);
  
          resizeThrottle = window.setTimeout(() => {
            window.clearTimeout(loopTimeout);
            setup();
          }, 200);
        },
        false
      );
    };
  
    // Init
    const init = (() => {
      canvas = document.getElementById("noise-canvas");
      ctx = canvas.getContext("2d");
  
      setup();
    })();
  };
  
  noise();


  /*workkkkkkkkkkkkkk*/

   
document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
  t.style.left = n.clientX + "px", 
t.style.top = n.clientY + "px", 
e.style.left = n.clientX + "px", 
e.style.top = n.clientY + "px", 
i.style.left = n.clientX + "px", 
i.style.top = n.clientY + "px"
});
var t = document.getElementById("pointer"),
    e = document.getElementById("pointer2"),
    i = document.getElementById("pointer3");
function n(t) {
    e.classList.add("hover", "hover-2"), i.classList.add("hover", "hover-2")
}
function s(t) {
    e.classList.remove("hover", "hover-2"), i.classList.remove("hover", "hover-2")
}
s();
for (var r = document.querySelectorAll(".hover-target1, .hover-target-2"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}
function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
document.addEventListener('DOMContentLoaded', function () {
  var hoverLink = document.querySelector('.logo');
  var bodychange = document.querySelector('.work');

  hoverLink.addEventListener('mouseenter', function (e) {
      bodychange.classList.add('logo-wrap');
  });
  hoverLink.addEventListener('mouseleave', function () {
      bodychange.classList.remove('logo-wrap');
  })
})
document.addEventListener('DOMContentLoaded', function () {
  var hoverLink = document.querySelector('.img-1');
  var bodychange = document.querySelector('.work');

  hoverLink.addEventListener('mouseenter', function (e) {
      bodychange.classList.add('img-1-wrap');
  });
  hoverLink.addEventListener('mouseleave', function () {
      bodychange.classList.remove('img-1-wrap');
  })
})
document.addEventListener('DOMContentLoaded', function () {
  var hoverLink = document.querySelector('.img-2');
  var bodychange = document.querySelector('.work');

  hoverLink.addEventListener('mouseenter', function (e) {
      bodychange.classList.add('img-2-wrap');
  });
  hoverLink.addEventListener('mouseleave', function () {
      bodychange.classList.remove('img-2-wrap');
  })
})
document.addEventListener('DOMContentLoaded', function () {
  var hoverLink = document.querySelector('.img-3');
  var bodychange = document.querySelector('.work');

  hoverLink.addEventListener('mouseenter', function (e) {
      bodychange.classList.add('img-3-wrap');
  });
  hoverLink.addEventListener('mouseleave', function () {
      bodychange.classList.remove('img-3-wrap');
  })
})
document.addEventListener('DOMContentLoaded', function () {
  var hoverLink = document.querySelector('.img-4');
  var bodychange = document.querySelector('.work');

  hoverLink.addEventListener('mouseenter', function (e) {
      bodychange.classList.add('img-4-wrap');
  });
  hoverLink.addEventListener('mouseleave', function () {
      bodychange.classList.remove('img-4-wrap');
  })
})

document.addEventListener('DOMContentLoaded', function () {
    var hoverLink = document.querySelector('.img-5');
    var bodychange = document.querySelector('.work');
  
    hoverLink.addEventListener('mouseenter', function (e) {
        bodychange.classList.add('img-5-wrap');
    });
    hoverLink.addEventListener('mouseleave', function () {
        bodychange.classList.remove('img-5-wrap');
    })
  })


  document.addEventListener('DOMContentLoaded', function () {
    var hoverLink = document.querySelector('.img-6');
    var bodychange = document.querySelector('.work');
  
    hoverLink.addEventListener('mouseenter', function (e) {
        bodychange.classList.add('img-6-wrap');
    });
    hoverLink.addEventListener('mouseleave', function () {
        bodychange.classList.remove('img-6-wrap');
    })
  })









