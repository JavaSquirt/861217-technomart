<script>

    var link = document.querySelector(".login-link");
    var popup = document.querySelector(".modal-login");
    var close = document.querySelector(".modal-close");
    var form = popup.querySelector("form");
    var login = popup.querySelector("[name=login]");
    var password = popup.querySelector("[name=password]");
    var storage = localStorage.getItem("login");

    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        login.focus();
        if (storage) {
            login.value = storage;
        }
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
    });    

    form.addEventListener("submit", function (evt) {
        if (!login.value || !password.value) {
            evt.preventDefault();
            console.log("SAY FRIEND AND COME IN");            
        } else {
            localStorage.setItem("login", login.value);
        }
    });

</script>