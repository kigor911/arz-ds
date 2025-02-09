document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("moderator-modal");
    const modalContent = document.getElementById("moderator-info");
    const closeModal = document.querySelector(".moderators-modal__close");
    const tableRows = document.querySelectorAll("#moderators-list tr");
    const filterInput = document.querySelector(".moderators-panel__filter");

    tableRows.forEach(row => {
        row.addEventListener("click", function () {
            const cells = row.children;
            modalContent.innerHTML = `
                <p><strong>Никнейм:</strong> ${cells[0].innerText}</p>
                <p><strong>Уровень:</strong> ${cells[1].innerText}</p>
                <p><strong>Предупреждения:</strong> ${cells[2].innerText}</p>
                <p><strong>Баллы:</strong> ${cells[3].innerText}</p>
                <p><strong>Дата постановления:</strong> ${cells[4].innerText}</p>
                <p><strong>Форум:</strong> ${cells[5].innerHTML}</p>
            `;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    filterInput.addEventListener("input", function () {
        const filter = filterInput.value.toLowerCase();
        tableRows.forEach(row => {
            const nickname = row.children[0].innerText.toLowerCase();
            const discordId = row.children[4].innerText.toLowerCase();
            if (nickname.includes(filter) || discordId.includes(filter)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});
