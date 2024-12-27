window.onload = function () {
    console.log("URL Replacer extension is active");

    // Check for the submit button and add an event listener to it
    const submitButton = document.querySelector('#plgfyqdp_edit_rule_details'); // Change to your button's selector
    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            // We will intercept this click and modify the request
            console.log('Submit button clicked, intercepting request.');

            // Proceed with the next steps to modify the URL
        });
    } else {
        console.warn("Submit button not found");
    }
};
