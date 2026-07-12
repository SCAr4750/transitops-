window.addEventListener("load", () => {

    console.log("TransitOps Loaded");

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