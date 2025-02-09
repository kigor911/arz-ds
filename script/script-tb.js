document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("moderator-modal");
    const modalContent = document.querySelector(".moderators-modal__content");
    const modalInfo = document.getElementById("moderator-info");
    const closeModal = document.querySelector(".moderators-modal__close");
    const filterInput = document.querySelector(".moderators-panel__filter");
    const moderatorsList = document.getElementById("moderators-list");

    // Данные модераторов
    const moderators = [
        {
            nickname: "DarkKnight",
            level: 3,
            warnings: 1,
            points: 150,
            date: "2024-01-15",
            forumLink: "#",
            vkLink: "#",
            age: 25,
            name: "Артем",
            city: "Москва",
            discordID: "DarkKnight#1234",
            promotionDate: "2023-12-01"
        },
        {
            nickname: "ShadowFox",
            level: 2,
            warnings: 0,
            points: 200,
            date: "2024-02-01",
            forumLink: "#",
            vkLink: "#",
            age: 22,
            name: "Иван",
            city: "Санкт-Петербург",
            discordID: "ShadowFox#5678",
            promotionDate: "2023-11-20"
        }
    ];

    // Функция для рендеринга таблицы
    function renderTable(data) {
        moderatorsList.innerHTML = "";
        data.forEach((mod, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${mod.nickname}</td>
                <td>${mod.level}</td>
                <td>${mod.warnings}</td>
                <td>${mod.points}</td>
                <td>${mod.date}</td>
                <td><a href="${mod.forumLink}" target="_blank">Ссылка</a></td>
            `;
            row.addEventListener("click", () => openModal(index));
            moderatorsList.appendChild(row);
        });
    }

    // Функция открытия модального окна
    function openModal(index) {
        const mod = moderators[index];

        modal.style.display = "flex";
        modal.style.opacity = "0";
        modalContent.style.opacity = "0";
        modalContent.style.transform = "scale(0.8)";

        setTimeout(() => {
            modal.style.opacity = "1";
            modalContent.style.opacity = "1";
            modalContent.style.transform = "scale(1)";
        }, 100);

        modalInfo.innerHTML = `
            <div class="moderators-modal__loader">
                <div></div><div></div><div></div>
            </div>
        `;

        setTimeout(() => {
            modalInfo.innerHTML = `
                <p><strong>Никнейм:</strong> ${mod.nickname}</p>
                <p><strong>Уровень:</strong> ${mod.level}</p>
                <p><strong>Предупреждения:</strong> <span id="warning-count">${mod.warnings}</span></p>
                <p><strong>Баллы:</strong> ${mod.points}</p>
                <p><strong>Дата постановления:</strong> ${mod.date}</p>
                <p><strong>Форум:</strong> <a href="${mod.forumLink}" target="_blank">Ссылка</a></p>
                <p><strong>VK:</strong> <a href="${mod.vkLink}" target="_blank">Ссылка</a></p>
                <hr>
                <p><strong>Имя:</strong> ${mod.name}</p>
                <p><strong>Возраст:</strong> ${mod.age}</p>
                <p><strong>Город:</strong> ${mod.city}</p>
                <p><strong>ID Discord:</strong> ${mod.discordID}</p>
                <p><strong>Дата повышения уровня:</strong> ${mod.promotionDate}</p>
                <hr>
                <button class="moderators-modal__btn" id="add-warning">Выдать предупреждение</button>
                <button class="moderators-modal__btn" id="remove-warning">Снять предупреждение</button>
            `;

            // Добавляем обработчики кнопок
            document.getElementById("add-warning").addEventListener("click", function () {
                mod.warnings++;
                document.getElementById("warning-count").textContent = mod.warnings;
                renderTable(moderators);
            });

            document.getElementById("remove-warning").addEventListener("click", function () {
                if (mod.warnings > 0) {
                    mod.warnings--;
                    document.getElementById("warning-count").textContent = mod.warnings;
                    renderTable(moderators);
                }
            });
        }, 1500);
    }

    // Фильтр по никнейму
    filterInput.addEventListener("input", function () {
        const searchText = filterInput.value.toLowerCase();
        const filteredModerators = moderators.filter(mod =>
            mod.nickname.toLowerCase().includes(searchText)
        );
        renderTable(filteredModerators);
    });

    closeModal.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

    renderTable(moderators);
});
