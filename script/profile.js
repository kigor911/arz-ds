

function updatePassword() {
    const newPassword = document.getElementById("newPassword").value;
    if (newPassword.length < 6) {
        alert("Пароль должен содержать минимум 6 символов.");
        return;
    }
    alert("Пароль успешно обновлен!");
}

function updateAvatar() {
    const fileInput = document.getElementById("avatarUpload");
    const avatarImage = document.getElementById("moderatorAvatar");
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            avatarImage.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function logout() {
    alert("Вы успешно вышли из аккаунта!");
    window.location.href = "login.html";
}
