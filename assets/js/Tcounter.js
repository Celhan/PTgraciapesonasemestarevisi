function numberCounter(counterClass, resetTriggerClass, startTriggerClass, startNumber, endNumber, transitionTime, onStart, onEnd, onTriggerReset, onTriggerStart) {
    var $numberCounter = $(counterClass),
        $counterTrigger = $(startTriggerClass),
        $resetCounter = $(resetTriggerClass);

    // Initialize the counter display with the start number
    initCounterDisplay($numberCounter, startNumber.toString());

    $counterTrigger.on('click', function () {
      animateCountUp($numberCounter, startNumber, endNumber, transitionTime);
      if (onTriggerStart && typeof onTriggerStart === 'function') {
        onTriggerStart();
      }
    });

    $resetCounter.on('click', function () {
      initCounterDisplay($numberCounter, startNumber.toString()); // Reset to the start number display
      if (onTriggerReset && typeof onTriggerReset === 'function') {
        onTriggerReset();
      }
    });

    // Wrap digits and set initial display based on the start number
    function initCounterDisplay(element, startNumStr) {
      // element.each(function() {
      //   var characters = startNumStr.split("");

      //   var wrappedCharacters = $.map(characters, function(char, index) {
      //     if ($.isNumeric(char)) {
      //       var sequence = Array.from({length: 10}, (_, i) => i === parseInt(char) ? `<span class='active'>${i}</span>` : `<span>${i}</span>`).join("");
      //       return `<div class='digit' data-counter-value="${char}" style="overflow: hidden; display: inline-block;"><div class='sequence' style="transform: translateY(-${parseInt(char) * 10}%)">${sequence}</div></div>`;
      //     } else {
      //       return `<b class='comma'>${char}</b>`;
      //     }
      //   });

      //   $(this).html(wrappedCharacters.join(""));
      // });

       element.each(function() {
        var characters = startNumStr.split("");

        var wrappedCharacters = $.map(characters, function(char, index) {
          if ($.isNumeric(char)) {
            // Generate the sequence 0-9 for each digit, marking the start number as active initially
            // var sequence = Array.from({length: 10}, (_, i) => i === parseInt(char) ? `<span class='active'>${i}</span>` : `<span>${i}</span>`).join("");
            var sequence = Array.from({length: 11}, (_, i) => i === parseInt(char) ? `<span class='active'>${i}</span>` : `<span>${i % 10}</span>`).join("");
            return `<div class='digit' data-counter-value="${char}" style="overflow: hidden; display: inline-block;"><div class='sequence' style="transform: translateY(-${parseInt(char) * 9.1}%)">${sequence}</div></div>`;
          } else {
            return `<b class='comma'>${char}</b>`;
          }
        });

        $(this).html(wrappedCharacters.join(""));
      });
    }

    function animateCountUp(counter, startNum, endNum, duration) {
      if (onStart && typeof onStart === 'function') {
        onStart();
      }

      var currentNum = startNum;
      var stepDuration = duration / (endNum - startNum);

      var interval = setInterval(function() {
        if (currentNum >= endNum) {
          clearInterval(interval);
          if (onEnd && typeof onEnd === 'function') {
            onEnd();
          }
          return;
        }
        currentNum++;
        updateDisplay(counter, currentNum);
      }, stepDuration);
    }

    function updateDisplay(counter, currentNum) {
      // var numStr = currentNum.toString();
      // counter.each(function() {
      //   var $digits = $(this).find('.digit');
      //   numStr.split('').forEach(function(num, index) {
      //     var $digit = $($digits.get(index));
      //     var $sequence = $digit.find('.sequence');
      //     var translateY = -(parseInt(num) * 10); // Adjust this to match your CSS
      //     $sequence.css("transform", `translateY(${translateY}%)`);
      //   });
      // });

      var numStr = currentNum.toString().padStart(startNumber.toString().length, '0');
      counter.each(function() {
          var $digits = $(this).find('.digit');
          numStr.split('').forEach(function(num, index) {
              var $digit = $($digits.get(index));
              var $sequence = $digit.find('.sequence');
              var translateY = -(parseInt(num) * 9.1);
              $sequence.css("transform", `translateY(${translateY}%)`);

              // console.log('num: ', num);
              // Check for the transition to "10" (our seamless loop trick) and reset
              if (parseInt(num) === 0) {
                  $sequence.css("transition", "none"); // Temporarily disable transition
                  $sequence.css("transform", "translateY(0%)");
                  // Force reflow to apply the transform instantly
                  $sequence[0].offsetHeight;
                  $sequence.css("transition", ""); // Re-enable transitions
              }
          });
      });

    }
  }