function handleCredentialResponse(response) {
    const data = jtw_decode(response.credential);
    console.log(data)
    };
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "628344260862-of0cpb9ingtvnnfs4nbumccgi9p6285k.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
    console.log(data);