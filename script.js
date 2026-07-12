// =====================================
// TRANSITOPS
// HOUR 1
// =====================================

window.addEventListener("load", () => {

    console.log("TransitOps Dashboard Loaded");

    const cards =
    document.querySelectorAll(".kpi-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
            "translateY(-6px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
            "translateY(0px)";

        });

    });

});