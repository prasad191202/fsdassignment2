$(document).ready(function() {
    $('#myForm').submit(function(event) {
      event.preventDefault();
  
     
      var fullname = document.getElementById('fullname').value;
      var phone = document.getElementById('phone').value;
      var email = document.getElementById('email').value;
      var zipcode = document.getElementById('zipcode').value;
  
      
      if (fullname === '' || phone === '' || email === '' || zipcode === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      // Validate phone number
      var phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
      }
  
      // Validate email address
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Validate zip code
      var zipRegex = /^\d{6}$/;
      if (!zipRegex.test(zipcode)) {
        alert('Please enter a valid 6-digit zip code.');
        return;
      }
  
     
      alert("NAME: "+fullname+"\n PHONE: "+phone+"\n EMAIL"+email+"\n ZIP CODE"+zipcode);
     
    });
  });
  