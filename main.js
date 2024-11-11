document.addEventListener('DOMContentLoaded', function () {
  // Get cursor elements
  var t = document.getElementById("cursor");
  var e = document.getElementById("cursor2");
  var i = document.getElementById("cursor3");

  // Throttle function to limit how often the event handler runs
  function throttle(fn, delay) {
      let lastCall = 0;
      return function (...args) {
          const now = Date.now();
          if (now - lastCall < delay) return;
          lastCall = now;
          fn(...args);
      };
  }

  // Function to move cursors
  function moveCursors(event) {
      if (t) {
          t.style.left = `${event.clientX}px`;
          t.style.top = `${event.clientY}px`;
      }
      if (e) {
          e.style.left = `${event.clientX}px`;
          e.style.top = `${event.clientY}px`;
      }
      if (i) {
          i.style.left = `${event.clientX}px`;
          i.style.top = `${event.clientY}px`;
      }
  }

  // Throttle the mousemove event handler
  document.addEventListener('mousemove', throttle(moveCursors, 16)); // 16ms (~60fps)

  // Hover functions
  function onHover() {
      if (e) e.classList.add("hover");
      if (i) i.classList.add("hover");
  }

  function offHover() {
      if (e) e.classList.remove("hover");
      if (i) i.classList.remove("hover");
  }

  // Attach hover event listeners
  function attachHoverListeners(selector) {
      document.querySelectorAll(selector).forEach(function (element) {
          element.addEventListener("mouseover", onHover);
          element.addEventListener("mouseout", offHover);
      });
  }

  attachHoverListeners(".hover-target1");
  attachHoverListeners(".section-links");
  attachHoverListeners(".hover-target");
  attachHoverListeners(".down-btn");
  attachHoverListeners(".email");
  attachHoverListeners(".social_contact");
  attachHoverListeners(".nav__list-item");
});


 
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
	
(jQuery); 


//SERVICEEEEE


var items = []
  , point = document.querySelector('svg').createSVGPoint();

function getCoordinates(e, svg) {
  point.x = e.clientX;
  point.y = e.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function changeColor(e) {
  document.body.className = e.currentTarget.className;
}

function Item(config) {
  Object.keys(config).forEach(function (item) {
    this[item] = config[item];
  }, this);
  this.el.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
  this.el.addEventListener('touchmove', this.touchMoveHandler.bind(this));
}

Item.prototype = {
  update: function update(c) {
    this.clip.setAttribute('cx', c.x);
    this.clip.setAttribute('cy', c.y);
  },
  mouseMoveHandler: function mouseMoveHandler(e) {
    this.update(getCoordinates(e, this.svg));
  },
  touchMoveHandler: function touchMoveHandler(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) return this.update(getCoordinates(touch, this.svg));
  }
};

[].slice.call(document.querySelectorAll('.item'), 0).forEach(function (item, index) {
  items.push(new Item({
    el: item,
    svg: item.querySelector('svg'),
    clip: document.querySelector('#clip-'+index+' circle'),
  }));
});

[].slice.call(document.querySelectorAll('button'), 0).forEach(function (button) {
  button.addEventListener('click', changeColor);
});
  


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

  

//CV
function downloadCV() {
  // Create an anchor element
  var link = document.createElement('a');
  // Set the href attribute to the path of your CV file
  link.href = 'Christian_CV.pdf'; 
  // Set the download attribute to specify the filename
  link.download = 'Christian_CV.pdf'; 
  // Programmatically trigger a click event on the anchor element
  // This will prompt the browser to download the file
  link.click();
}


//CONTACT
  function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!firstName || !lastName || !email || !message) {
        document.getElementById('notification').style.display = 'block';
        return;
    }

    // Here you can send the form data to a server-side script using AJAX
    // For example, you can use Fetch API or XMLHttpRequest to send a POST request to a PHP script
    // The PHP script will handle the email sending process

    // Example using Fetch API:
    fetch('send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message
        }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Email sent successfully!');
            // Optionally, you can display a success message to the user
        } else {
            console.error('Failed to send email.');
            // Optionally, you can display an error message to the user
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Optionally, you can display an error message to the user
    });
}