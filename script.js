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

                row.innerHTML = `
                    <td>${id}</td>
                    <td>${type}</td>
                    <td>User Added</td>
                    <td>${capacity}</td>
                    <td>
                        <span class="status active">
                            Available
                        </span>
                    </td>
                `;

                table.appendChild(row);

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

});