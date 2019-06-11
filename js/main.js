$(document).ready(function() {
  $(".submit").click(function(event) {
    // stop the form from submitting so we can validate it first
    event.preventDefault();

    // get the values from the input fields by their class name
    var email = $(".email").val();
    var subject = $(".subject").val();
    var message = $(".message").val();
    var statusElm = $(".status");

    // empty the status div so we don't get cumulative error messages
    statusElm.empty();

    // validation

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Email is valid</div>");
    } else {
      // since it isn't valid use event.preventDefault() to prevent form from submitting it
      event.preventDefault();
      statusElm.append("<div>Email is NOT valid</div>");
    }

    if (subject.length >= 2) {
      statusElm.append("<div>Subject is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Subject is NOT valid</div>");
    }

    if (message.length > 20) {
      statusElm.append("<div>Message is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Message is NOT valid</div>");
    }
  });
});
