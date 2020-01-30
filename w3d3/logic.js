(function () {
 "use strict";
  // is the same with $(document).ready(function){});
  $(function () {
    let animationIntervalId = null;
    let circles = $("#circles");

    $('#btnStart').on('click', ()  => {
      circles.empty();

      for (let i=0; i< parseInt($('#noOfCircles').val()); i++) {
        let circle = $("<div id=" + "'circle" + i + "'"  + " class='circle'></div>");
        let pos = randPosition();
        let color = randColor();
        circle.css(
          {
            width: $('#width').val() + 'px',
            height: $('#width').val() + 'px',
            backgroundColor: color
          });
        circle.offset(
          {
            top: (pos.x + i),
            left: (pos.y + i)
          }
        );

        const animationIntervalId = startAnimation(circle);

        let on = circle.on('click', () => {
          clearInterval(animationIntervalId);
          circle.remove();
        }).on("mousemove", circle, reduceOpacity);

        circles.append(circle);
      }
    });


    /**
     *
     *  @param event
     *  return reduce value
     */
    function reduceOpacity(event) {
      $(circles).css(
        "opacity", function (index, value) {
          let reduce = value - 0.015;
          if(reduce<=0){
            return false;
          }
          return reduce;
        }
      );
    }

    /**
     *
     * @param objCircle
     * @returns {number}
     */
    function startAnimation(objCircle) {
      animationIntervalId = setInterval(
        () => {
          objCircle.css({
            width: (objCircle.width() + parseInt($('#amount').val())) + 'px',
            height: (objCircle.height() + parseInt($('#amount').val())) + 'px',
          });
          objCircle.offset({
            top: objCircle.offsetX,
            left: objCircle.offsetY
          });
        }, parseInt($('#rate').val())
      );
      return animationIntervalId;
    }

    $('#btnClear').on('click', () => {
      circles.children().each((i, e) => {
        $(e).click();
      });
    });

    /**
     *
     * @returns {{x: string, y: string}}
     */

    function randPosition() {
      const posx = (Math.random() * (Math.random()*10 + 50)).toFixed();
      const posy = (Math.random() * (Math.random()*10 + 50)).toFixed();
      return {
        x: posx,
        y: posy
      };
    }

    /**
     *
     * @returns {string}
     */

    function randColor() {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[getRandom(16)];
      }
      return color;
    }
    function getRandom(val) {
      return Math.floor(Math.random() * Math.floor(val));
    }


  });
})();
