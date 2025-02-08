
const penalties = [
    {
        nickName: "AntiLfs",
        status: 'St. Moderator',
        online: 'online',
        imgProfile: '',
    },
    {
        nickName: "DarkSoul",
        status: 'St. Moderator',
        online: 'offline',
        imgProfile: '',
    },
    {
        nickName: "VampireQueen",
        status: 'St. Moderator',
        online: 'offline',
        imgProfile: '',
    },
    {
        nickName: "GothicKnight",
        status: 'St. Moderator',
        online: 'offline',
        imgProfile: '',
    },
    {
        nickName: "Nikita_Mentally",
        status: 'moderator',
        online: 'online',
        imgProfile: '',
    },
];

function renderTable() {
    const nicknameFilter = document.getElementById("nicknameFilter").value.toLowerCase();
    const cardBody = document.getElementById("container__card");
    cardBody.innerHTML = "";

    const filteredPenalties = penalties.filter(penalty =>
        penalty.nickName.toLowerCase().includes(nicknameFilter)
    );

    filteredPenalties.forEach(penalty => {
        const row = `
            <div class="moderator__card">
            <div class="userImg">
                <img src="./source/img/boy.jpg" alt="">
            </div>
            <div class="mainInfromationUser">
                <h3>${penalty.status}</h1>
                <h1 id="nicknameFilter">${penalty.nickName}</h1>
                <div class="user__statusOnline ${penalty.online == 'online' ? 'user__online' : 'user__offline'}">
                    <h4>${penalty.online}</h1>
                </div>
            </div>
            </div>
        `; // когда из бека будут данные приходить измените src
        cardBody.innerHTML += row;
    });
}

document.getElementById("nicknameFilter").addEventListener("input", renderTable);

renderTable();