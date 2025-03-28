$(function() {

  /**
   * @author Jonathan Loh
   * Message form submission implementation.
   */
  $('#p50cMSGformPopupForm').on('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      // Get the reCAPTCHA response
      var recaptchaResponse = grecaptcha.getResponse();

      if (recaptchaResponse.length === 0) {
          alert('Please complete the reCAPTCHA.');
          return false;
      }

      // Serialize form data
      var formData = $(this).serialize();

      // Add the reCAPTCHA response to the form data
      formData += '&g_recaptcha_response=' + recaptchaResponse;

      // AJAX request
      $.ajax({
          type: 'POST',
          url: 'app/apicallback.php?method=messageAdd',
          data: formData,
          success: function(response) {
              // @todo Implement success message on form.
              $('#p50cMSGformPopupForm').hide();
              $('.p50cMSGformPopupForm').append(`
                <div class="p50cMSGformPopupFormSuccess">
                  <div class="p50cMSGformPopupFormSuccessInner">
                    <h3>Thank You!</h3>
                    <p>Your form was successfully submitted.</p>
                  </div>
                </div>
                `);
          },
          error: function(xhr, status, error) {
              console.log('Unable to submit message: ' + error);
          }
      });
  });

  /**
   * @author Jonathan Loh
   * Get all approved messages.
   */
  if ($('#msgAll').length > 0) {
    $.ajax({
        type: 'GET',
        url: 'app/apicallback.php?method=message',
        cache: false,
        success: function(response) {
            // @todo Implement messages list.
            // console.log(JSON.parse(response)); // Remove once complete.
            var messages = JSON.parse(response).data;
            console.log(messages);
            var msgContainer = $('.p50cMSGallContent');
            var feturedmsgContainer = $('.message-container');
            messages.reverse();
            // Loop through each message and append it to the msgContainer
            messages.forEach(function(message) {
                var author = message[0];
                var text = message[1];

                // Create HTML structure for the message
                var messageElement = $(`
                    <div class="p50cMSGallList">
                      <div class="p50cMSGallListInner">
                        <div class="p50cMSGallListContentTop">
                          <p>${text}</p>
                          <p class="hash">#PETRONAS50</p>
                        </div>
                        <div class="p50cMSGallListFooter">
                          <div class="p50cMSGallListFooterInner">
                            <p>${author}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                `);
                // Append message element to the container
                msgContainer.append(messageElement);
            });

            //support - message all pagination
            var itemsPerPage = 20 ;
            var $items = $('.p50cMSGallContent .p50cMSGallList');
            var totalPages = Math.ceil($items.length / itemsPerPage);
            var $prevButton = $('.p50cMSGallPagination .prev');
            var $nextButton = $('.p50cMSGallPagination .next');
            var $content = $('.p50cMSGallContent');
            var $modalBody = $('.p50cMSGallContainerOuter');
            var $pageNumbers = $('.p50cMSGallPagination .paginationNumbers');
            const $currentPageSpan = $('.p50cMSGallPagination .current-page');
            const $totalPagesSpan = $('.p50cMSGallPagination .total-pages');
            let currentPage = 1;
            $totalPagesSpan.text(totalPages);

            function showPage(page) {
                const start = (page - 1) * itemsPerPage;
                const end = start + itemsPerPage;

                $items.stop(true, true).fadeOut(300, 'swing').promise().done(function() {
                    $items.slice(start, end).fadeIn(200, 'swing');
                    $modalBody.animate({
                        scrollTop: $content.offset().top - $modalBody.offset().top + $modalBody.scrollTop()
                    }, 600);
                });

                $currentPageSpan.text(currentPage);
                $prevButton.prop('disabled', currentPage === 1);
                $nextButton.prop('disabled', currentPage === totalPages);

                updatePagination();
            }

            function updatePagination() {
                $pageNumbers.empty();
                let pages = [];
                const isMobile = window.innerWidth <= 768; // Define the breakpoint for mobile devices

                
                    if (totalPages <= 7) {
                        for (let i = 1; i <= totalPages; i++) {
                            pages.push(i);
                        }
                    } else {

                      if (!isMobile) {
                        if (currentPage <= 4) {
                            pages = [1, 2, 3, 4, 5, '...', totalPages];
                        } else if (currentPage >= totalPages - 3) {
                            pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
                        } else {
                            pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
                        }}else{
                          if (currentPage <= 3) {
                            pages = [1, 2, 3, '...', totalPages];
                          } else if (currentPage >= totalPages - 2) {
                              pages = [1, '...', totalPages - 2, totalPages - 1, totalPages];
                          } else {
                              pages = [currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
                          }
                        }
                    }
                

                pages.forEach((page, index) => {
                    const $li = $('<li></li>');
                    const $a = $('<a></a>').attr('href', '#').text(page);

                    if (page === '...') {
                        $a.addClass('disabled');
                    } else {
                        if (page === currentPage) {
                            $a.addClass('active');
                        }
                        $a.on('click', (e) => {
                            e.preventDefault();
                            currentPage = page;
                            showPage(currentPage);
                        });
                    }

                    $li.append($a);
                    $pageNumbers.append($li);
                });
            }

            $prevButton.on('click', function() {
                if (currentPage > 1) {
                    currentPage--;
                    showPage(currentPage);
                }
            });

            $nextButton.on('click', function() {
                if (currentPage < totalPages) {
                    currentPage++;
                    showPage(currentPage);
                }
            });

            showPage(currentPage);

            $(window).on('resize', function() {
                updatePagination(); // Update pagination on window resize
            });


            messages.slice(0, 5).forEach(function(message, index) {
              var author = message[0]; // Assuming the first element is the author's name
              var text = message[1]; // Assuming the second element is the message text
              var hashTag = '#PETRONAS50'; // Example hashtag, could be dynamic if part of message data

              // Create HTML structure for the message
              var messageElement2 = $(`
                  <div class="message-card message-card${index + 1}">
                      <div class="p50cMSGallListContentTop">
                          <p>${text}</p>
                          <p class="hash">${hashTag}</p>
                      </div>
                      <div class="p50cMSGallListFooter">
                          <div class="p50cMSGallListFooterInner">
                              <p>${author}</p>
                          </div>
                      </div>
                  </div>
              `);

              // Append message element to the container
              feturedmsgContainer.append(messageElement2);
            });
        },
        error: function(xhr, status, error) {
            console.log('Unable to retrieve messages: ' + error);
        }
    }); 
  }

  /**
   * @author Jonathan Loh
   * Add video vote count.
   */
  $.fn.addVoteCount = function(video_id) {
    if (typeof video_id == 'undefined') {
      alert('video_id returned undefined. Please check again.');
      return false;
    }

    $.ajax({
        type: 'POST',
        url: 'app/apicallback.php?method=voteAdd',
        data: 'video_id=' + video_id,
        success: function(response) {
        },
        error: function(xhr, status, error) {
            console.log('Unable to add video vote: ' + error);
        }
    });
  }

  /**
   * @author Jonathan Loh
   * Get all video vote counts.
   */
  $.ajax({
      type: 'GET',
      url: 'app/apicallback.php?method=vote',
      cache: false,
      success: function(response) {
        // @todo Implement messages list.
        console.log(JSON.parse(response)); // Remove once complete.
        const data = JSON.parse(response).data;

        // Loop through each entry in the response data
        $.each(data, function(videoId, videoData) {
          // Find the corresponding element using the data-video-id attribute
          const $element = $('[data-video-id="' + videoId + '"]');
          
          // Update the vote count inside the <span> element
          $element.find('span').text(videoData.vote_count);
        });
      },
      error: function(xhr, status, error) {
          console.log('Unable to retrieve messages: ' + error);
      }
  });

});



