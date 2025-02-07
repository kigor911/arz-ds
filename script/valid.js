function buyItem(button) {
    let balance = parseInt(document.getElementById("balance").textContent);
    let item = button.parentElement;
    let price = parseInt(item.getAttribute("data-price"));
    let notification = document.getElementById("notification");
    
    if (balance >= price) {
        balance -= price;
        document.getElementById("balance").textContent = balance;
        notification.textContent = "Покупка успешна!";
    } else {
        notification.textContent = "Недостаточно средств!";
    }
    
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 2000);
}