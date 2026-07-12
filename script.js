// ======================
// TRANSITOPS APP
// ======================

document.addEventListener("DOMContentLoaded", () => {

    // ------------------
    // SIDEBAR NAVIGATION
    // ------------------

    const menuItems =
        document.querySelectorAll(".menu-item");

    const sections =
        document.querySelectorAll(".app-section");

    menuItems.forEach(item => {

        item.addEventListener("click", () => {

            menuItems.forEach(m =>
                m.classList.remove("active")
            );

            item.classList.add("active");

            const target =
                item.dataset.section;

            sections.forEach(section => {

                if(
                    section.id === target
                ){
                    section.style.display =
                    "block";
                }
                else{
                    section.style.display =
                    "none";
                }

            });

        });

    });

    // ------------------
    // ADD VEHICLE
    // ------------------

    const addBtn =
        document.getElementById(
            "addVehicleBtn"
        );

    if(addBtn){

        addBtn.addEventListener(
            "click",
            () => {

                const id =
                document
                .getElementById(
                    "vehicleId"
                ).value;

                const type =
                document
                .getElementById(
                    "vehicleType"
                ).value;

                const capacity =
                document
                .getElementById(
                    "vehicleCapacity"
                ).value;

                if(
                    !id ||
                    !type ||
                    !capacity
                ){
                    alert(
                    "Fill all fields"
                    );
                    return;
                }

                const table =
                document.querySelector(
                    "#vehicleTable tbody"
                );

                const row =
                document.createElement(
                    "tr"
                );

                let statusClass = "active";

                  if(status === "On Trip"){
                    statusClass = "trip";
}

                  if(status === "In Shop"){
                    statusClass = "shop";
}

row.innerHTML = `
    <td>${id}</td>
    <td>${type}</td>
    <td>User Added</td>
    <td>${capacity}</td>
    <td>
        <span class="status ${statusClass}">
            ${status}
        </span>
    </td>
    <td>
        <button class="change-status">
            Change Status
        </button>
    </td>
`;

                table.appendChild(row);

                const button =
row.querySelector(".change-status");

button.addEventListener("click", () => {

    const badge =
    row.querySelector(".status");

    if(
        badge.textContent.trim()
        === "Available"
    ){
        badge.textContent =
        "On Trip";

        badge.className =
        "status trip";
    }

    else if(
        badge.textContent.trim()
        === "On Trip"
    ){
        badge.textContent =
        "In Shop";

        badge.className =
        "status shop";
    }

    else{

        badge.textContent =
        "Available";

        badge.className =
        "status active";
    }

});

                document
                .getElementById(
                    "vehicleId"
                ).value = "";

                document
                .getElementById(
                    "vehicleType"
                ).value = "";

                document
                .getElementById(
                    "vehicleCapacity"
                ).value = "";

            }
        );

    }

// ------------------
// MAINTENANCE BUTTON
// ------------------

const maintenanceButton =
document.getElementById(
    "completeMaintenance"
);

const maintenanceStatus =
document.getElementById(
    "maint-status"
);

if(
    maintenanceButton &&
    maintenanceStatus
){

    maintenanceButton
    .addEventListener(
        "click",
        () => {

            maintenanceStatus
            .textContent =
            "Available";

            maintenanceButton
            .textContent =
            "Completed";

            maintenanceButton
            .disabled =
            true;

        }
    );

}

});