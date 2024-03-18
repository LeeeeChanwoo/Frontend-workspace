$(function(){

    
  $(document).ready(function() {
      $(document).on("mouseover", ".first3", function() {
          var targetElement = $(this);
          
          $(targetElement).find("span").removeAttr("style");
          $(targetElement).siblings(".third3").find("span").removeAttr("style");
          $(targetElement).siblings(".second3").find("span").removeAttr("style");

          $(targetElement).siblings(".second3").find("span").css({backgroundPosition: "left bottom", color: "black"});
          $(targetElement).siblings(".third3").find("span").css({backgroundPosition: "left bottom", color: "black"});
          $(targetElement).find("span").css({backgroundPosition: "left bottom", color: "black"});
      });

      $(document).on("mouseout", ".first3", function() {
          var targetElement = $(this);
        
          setTimeout(function() {
              $(targetElement).find("span").removeAttr("style").css("transition-delay", ".1s");
              $(targetElement).siblings(".third3").find("span").removeAttr("style").css("transition-delay", ".1s");
              $(targetElement).siblings(".second3").find("span").removeAttr("style").css("transition-delay", ".1s");
          }, 100);
        });
        
      
      $(document).on("mouseover", ".second3", function() {
          var targetElement = $(this);

          $(targetElement).find("span").removeAttr("style");
          $(targetElement).siblings(".third3").find("span").removeAttr("style");
          $(targetElement).siblings(".first3").find("span").removeAttr("style");
    
          $(targetElement).siblings(".first3").find("span").css({backgroundPosition: "left bottom", color: "black"});
          $(targetElement).siblings(".third3").find("span").css({backgroundPosition: "left bottom", color: "black"});
          $(targetElement).find("span").css({backgroundPosition: "left bottom", color: "black"});
      });

      $(document).on("mouseout", ".second3", function() {
          var targetElement = $(this);
    
          setTimeout(function() {
              $(targetElement).find("span").removeAttr("style").css("transition-delay", ".1s");
              $(targetElement).siblings(".third3").find("span").removeAttr("style").css("transition-delay", ".1s");
              $(targetElement).siblings(".first3").find("span").removeAttr("style").css("transition-delay", ".1s");
            }, 100);
      });
      
      $(document).on("mouseover", ".third3", function() {
          var targetElement = $(this);

          $(targetElement).find("span").removeAttr("style");
          $(targetElement).siblings(".first3").find("span").removeAttr("style");
          $(targetElement).siblings(".second3").find("span").removeAttr("style");
    
          $(targetElement).siblings(".second3").find("span").css({backgroundPosition: "left bottom", color: "black"});
          $(targetElement).siblings(".first3").find("span").css({backgroundPosition: "left bottom", color: "black"});
          $(targetElement).find("span").css({backgroundPosition: "left bottom", color: "black"});
      });

      $(document).on("mouseout", ".third3", function() {
          var targetElement = $(this);
    
          setTimeout(function() {
              $(targetElement).find("span").removeAttr("style").css("transition-delay", ".1s");
              $(targetElement).siblings(".first3").find("span").removeAttr("style").css("transition-delay", ".1s");
              $(targetElement).siblings(".second3").find("span").removeAttr("style").css("transition-delay", ".1s");
          }, 100);
      });

      
    })
    /* ------------------------------------------------- random latter / typing effect ----------------------------------------------------------------------------------*/

    // .third2에 mouseover시에 effect 적용
    $(document).on("mouseover", ".third2", function() {
      var targetElement = $(this);
      var spanElement = $(targetElement).find("span");
      var spanElement1 = $(targetElement).siblings(".four-times2").find("span");
      randomizeText4(spanElement);
      randomizeText1(spanElement1);
    });
    function randomizeText4(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    function randomizeText1(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = '!@$*#%&^+=-';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

/* -----------------------------------------------------------------------------------------------------------------------------------*/

    // .first2에 mouserover시에 effect적용
    $(document).on("mouseover", ".first2", function() {
      var targetElement = $(this);
      var spanElement = $(targetElement).siblings(".third2").find("span");
      var spanElement1 = $(targetElement).siblings(".four-times2").find("span");
      randomizeText4(spanElement);
      randomizeText1(spanElement1);
    });
    function randomizeText4(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    function randomizeText1(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = '!@$*#%&^+=-';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    /* -----------------------------------------------------------------------------------------------------------------------------------*/

    // .five-times2에 mouserover시에 effect적용
    $(document).on("mouseover", ".five-times2", function() {
      var targetElement = $(this);
      var spanElement = $(targetElement).siblings(".third2").find("span");
      var spanElement1 = $(targetElement).siblings(".four-times2").find("span");
      randomizeText4(spanElement);
      randomizeText1(spanElement1);
    });
    function randomizeText4(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    function randomizeText1(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = '!@$*#%&^+=-';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    /* -----------------------------------------------------------------------------------------------------------------------------------*/

    // .four-times2에 mouseover시에 effect 적용
    $(document).on("mouseover", ".four-times2", function() {
      var targetElement = $(this);
      var spanElement = $(targetElement).find("span");
      var spanElement1 = $(targetElement).siblings(".third2").find("span");
      randomizeText1(spanElement);
      randomizeText4(spanElement1);
    });
    function randomizeText4(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    function randomizeText1(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = '!@$*#%&^+=-';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };
    
/* ------------------------------------------------ footer ------------------------------------------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------------------------------------------------------------*/

    // .first1 mouseover시에 effect 적용
    $(document).on("mouseenter", ".first1", function() {
      var targetElement = $(this);
      var spanElement = $(targetElement).siblings(".second1").find("span:first");
      
      randomizeText4(spanElement);
    });
    
    function randomizeText4(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 5 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };
    
      

    /* -----------------------------------------------------------------------------------------------------------------------------------*/

    // .second1 mouseover시에 effect 적용
    $(document).on("mouseover", ".second1", function() {
      var targetElement = $(this);
      var spanElement = $(targetElement).find("span:first");
      randomizeText4(spanElement);
    });
    function randomizeText4(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 5 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    /* -----------------------------------------------------------------------------------------------------------------------------------*/

    // .third1 mouseover시에 effect 적용
    $(document).on("mouseover", ".third1", function() {
      var targetElement = $(this);
      var spanElement = $(targetElement).find("span:first");
      randomizeText4(spanElement);
    });
    function randomizeText4(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 5 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    /* -----------------------------------------------------------------------------------------------------------------------------------*/

    // .four-times1 mouseover시에 effect 적용
    $(document).on("mouseover", ".four-times1", function() {
      var targetElement = $(this);
      var spanElement = $(targetElement).find("span:first");
      randomizeText4(spanElement);
    });
    function randomizeText4(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 5 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };
/* -------------------------------------------------------------- content1 ----------------------------------------------------------  -----------*/

    /* -----------------------------------------------------------------------------------------------------------------------------------*/

    // .first에 mouseover시에 effect적용
    $(document).on("mouseover", ".first", function() {
      var targetElement = $(this);
      var spanElement = $(targetElement).siblings(".third").find("span");
      var spanElement1 = $(targetElement).siblings(".four-times").find("span");
      randomizeText4(spanElement);
      randomizeText1(spanElement1);
    });
    function randomizeText4(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    function randomizeText1(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = '!@$*#%&^+=-';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    /* -----------------------------------------------------------------------------------------------------------------------------------*/

    // .third에 mouserover시에 effect적용
    $(document).on("mouseover", ".third", function() {
      var targetElement = $(this);
      var spanElement = $(targetElement).find("span");
      var spanElement1 = $(targetElement).siblings(".four-times").find("span");
      randomizeText4(spanElement);
      randomizeText1(spanElement1);
    });
    function randomizeText4(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    function randomizeText1(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = '!@$*#%&^+=-';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    /* -----------------------------------------------------------------------------------------------------------------------------------*/

    // .four-times에 mouserover시에 effect적용
    $(document).on("mouseover", ".four-times", function() {
      var targetElement = $(this);
      var spanElement = $(targetElement).find("span");
      var spanElement1 = $(targetElement).siblings(".third").find("span");
      randomizeText1(spanElement);
      randomizeText4(spanElement1);
    });
    function randomizeText4(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    function randomizeText1(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = '!@$*#%&^+=-';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    /* -----------------------------------------------------------------------------------------------------------------------------------*/

    // .five-times에 mouserover시에 effect적용
    $(document).on("mouseover", ".five-times", function() {
      var targetElement = $(this);
      var spanElement = $(targetElement).siblings(".third").find("span");
      var spanElement1 = $(targetElement).siblings(".four-times").find("span");
      randomizeText4(spanElement);
      randomizeText1(spanElement1);
    });
    function randomizeText4(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };

    function randomizeText1(id) {
  
      if (id.parent().data('typing') == 'Y') {
          return;
      } 
      id.parent().data('typing', 'Y');
       ; 
      var inc = 0;
      var out = 0;
      var str = id.text();
      var chars = '!@$*#%&^+=-';
      var t;
      var shuffle = id.next();
      var end = false;
      var anim = function() {
        inc++;
        if (inc % 7 === 0 && out < str.length) {
          out++;
          id.text(str.slice(0, out));
        } else if (out >= str.length) {
          id.next().html('');
    
          clearInterval(t);
          end = true;
          id.parent().data('typing', 'N');
    
        }
        if (end == false) {
          id.next().html(chars[Math.floor(Math.random() * chars.length)]);
        }
      };
      t = setInterval(anim, 15);
      id.html('');
    };
  });
  