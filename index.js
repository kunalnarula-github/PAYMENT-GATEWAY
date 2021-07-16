let homepage = document.getElementById('home-page')
let aboutUsButton = document.getElementById('about-us')
let aboutUsPage = document.getElementById('about-us-page-hidden')

/* Start client-defined Callback Handler Functions */
      function onOpenHandler () {
        alert('Payments Modal is Opened');
      }

      function onCloseHandler () {
        alert('Payments Modal is Closed');
      }

      function onPaymentSuccessHandler (response) {
        alert('Payment Success');
        console.log('Payment Success Response', response);
      }

      function onPaymentFailureHandler (response) {
        alert('Payment Failure');
        console.log('Payment Failure Response', response);
      }
      /* End client-defined Callback Handler Functions */

      /* Configuring Handlers */
      Instamojo.configure({
        handlers: {
          onOpen: onOpenHandler,
          onClose: onCloseHandler,
          onSuccess: onPaymentSuccessHandler,
          onFailure: onPaymentFailureHandler
        }
      });
      
      function onButtonClick() {
        Instamojo.open('http://test.instamojo.com/@kunalnarula62');
      }

      function hideHomepage(){
       homepage.id = 'home-page-hidden';
        aboutUsPage.id = 'about-us-page'
      }