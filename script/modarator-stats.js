function sortTable(n) {
    let table = document.getElementById("moderationTable");
    let rows = Array.from(table.rows).slice(1);
    let th = table.tHead.rows[0].cells[n];
    let asc = !th.classList.contains("sort-asc");

    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[n].innerText;
        let cellB = rowB.cells[n].innerText;
        return asc ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    table.tBodies[0].append(...rows);

    Array.from(th.parentElement.children).forEach(th => th.classList.remove("sort-asc",
        "sort-desc"));
    th.classList.add(asc ? "sort-asc" : "sort-desc");
}