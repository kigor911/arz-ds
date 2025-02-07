
const penalties = [{
        moderator: "DarkSoul",
        date: "2024-02-01",
        warnings: 2,
        daysOnLevel: 5,
        totalPenalties: 4
    },
    {
        moderator: "VampireQueen",
        date: "2024-01-30",
        warnings: 1,
        daysOnLevel: 3,
        totalPenalties: 2
    },
    {
        moderator: "GothicKnight",
        date: "2024-01-28",
        warnings: 3,
        daysOnLevel: 7,
        totalPenalties: 6
    },
];

function renderTable() {
    const nicknameFilter = document.getElementById("nicknameFilter").value.toLowerCase();
    const dateFilter = document.getElementById("dateFilter").value;
    const tableBody = document.getElementById("penaltyTable");
    tableBody.innerHTML = "";

    const filteredPenalties = penalties.filter(penalty =>
        penalty.moderator.toLowerCase().includes(nicknameFilter) &&
        (dateFilter === "" || penalty.date === dateFilter)
    );

    filteredPenalties.forEach(penalty => {
        const row = `<tr>
<td>${penalty.moderator}</td>
<td>${penalty.date}</td>
<td>${penalty.warnings}</td>
<td>${penalty.daysOnLevel}</td>
<td>${penalty.totalPenalties}</td>
</tr>`;
        tableBody.innerHTML += row;
    });
}

document.getElementById("nicknameFilter").addEventListener("input", renderTable);
document.getElementById("dateFilter").addEventListener("change", renderTable);

renderTable();
