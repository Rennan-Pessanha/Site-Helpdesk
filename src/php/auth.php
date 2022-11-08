
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-signin-client_id" content="892608599199-ii1eu43snk1cbrdenq4d9ams2vn48k2e.apps.googleusercontent.com">
    <title>Login</title>
    <link rel="stylesheet" href="/Styles/Login.css">
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <script src="https://unpkg.com/jwt-decode/build/jwt-decode.js"></script>
</head>

<body>
    <header>

        <img src="img/medgrupo-imagem.png" alt="">
    </header>
    <article>
        <div class="login">
            <div class="Login-Content">
                <h4 class="h3-Login">Login*</h4>
                <input type="email" name="email"  id="Email-Login">

                <h4 class="H3-Senha">Senha*</h4>
                <input type="password" name="Senha"  id="Senha-Login">

            <div class="detalhes">
                <input type="checkbox" name="" id="Lembrar-checkbox">
                <h4 class="lembrar-h4">Lembrar-me</h4>
                

                <a href="#" 
                class="Esqueceu-A-Senha">Esqueceu a senha?</a>
            </div>
            </div>            
            </div>
            <div id="buttonDiv"></div>
            <script>
              function handleCredentialResponse(response) {
                const data = jwt_decode(response.credential)
            
            console.log(data.sub)
            
              }
              window.onload = function () {
                google.accounts.id.initialize({
                  client_id: "892608599199-ii1eu43snk1cbrdenq4d9ams2vn48k2e.apps.googleusercontent.com",
                  callback: handleCredentialResponse
                });
                google.accounts.id.renderButton(
                  document.getElementById("buttonDiv"),
                  { theme: "outline", size: "large" }  // customization attributes
                );
                google.accounts.id.prompt(); // also display the One Tap dialog
              }
              function onSignIn(googleUser) {
                var id_token = googleUser.getAuthResponse().id_token;
                
              }
            </script> 
        </div>
    </article>
    
 <script src="../Scripts/login.js"></script>
</body>
</html>