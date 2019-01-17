<script>

    var link = document.querySelector(".btn-map");
    var popup = document.querySelector(".modal-mail");
    var close = document.querySelector(".modal-close");
    var form = popup.querySelector("form");
    var login = popup.querySelector("[name=login]");
    var password = popup.querySelector("[name=password]");
    
    var = isStorageSupport = true;
    var storage = "";

    try {
        storage = localStorage.getItem("login");
    } catch (err) {
        isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        
        if (storage) {
            login.value = storage;
            password.focus();
        } else {
            login.focus();
        }
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    });    

    form.addEventListener("submit", function (evt) {
        if (!login.value || !password.value) {
            evt.preventDefault();
            console.log("SAY FRIEND AND COME IN");
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");        
        } else {
            if (isStorageSupport) {
                localStorage.setItem("login", login.value);
            }            
        }
    });

    // Закрыть попап нажатием ESC

    document.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (popup.classList.contains("modal-show")) {
                evt.preventDefault();
                popup.classList.remove("modal-show");
                popup.classList.remove("modal-error");
            }
        }
    });

</script>