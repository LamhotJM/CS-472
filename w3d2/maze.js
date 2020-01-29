(function () {
  $(document).ready(function () {
    "use strict"
    var state = true;
    $("#start").click(function () {
      status = 1;
      var flag;
      if (!state) {
        //
        console.log("You are just started");
        $(".boundary").removeClass('youlose');
        $("#status").text("Click the 'S' to begin");
        state = true;
      }
      // if mouse enter out of line
      $(".boundary").mouseenter(function () {
        console.log("out of line!!");
        if (!flag) {
          lose();
        }

      });
      // if mouse enter out of line
      $("#maze").mouseleave(function () {
        console.log("out of box!!");
        if (!flag) {
          lose();
        }
      });
      $("#end").mouseenter(function () {
        // ternary operation if status 1 then call win otherwise lose
        console.log("you are in the end!!")
        return status == 1 ? win() : lose();
      });
    })

    function lose() {
      $(".boundary").addClass('youlose');
      $("#status").text("YOU LOSE!!!");
      status = 0;
      state = false;
    }

    /**
     * change flag to 1
     */
    function win() {
      $("#status").text("YOU WIN!!!");
      let flag;
      flag = 1;
    }

  });

})();
