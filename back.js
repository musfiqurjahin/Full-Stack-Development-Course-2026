(function () {
    /* Load Font Awesome */
    const faLink = document.createElement("link");
    faLink.rel = "stylesheet";
    faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
    document.head.appendChild(faLink);

    /* Create FAB */
    const fab = document.createElement("button");
    fab.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
    fab.title = "Go Back";

    /* FAB styles */
    Object.assign(fab.style, {
        position: "fixed",
        top: "18px",
        left: "18px",
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        border: "none",
        outline: "none",
        cursor: "pointer",
        background: "rgba(37, 99, 235, 0.6)", // semi-transparent
        color: "#fff",
        fontSize: "16px",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        zIndex: "9999",
        transition: "all 0.2s ease"
    });

    /* Hover effect */
    fab.addEventListener("mouseenter", () => {
        fab.style.background = "rgba(37, 99, 235, 0.85)";
        fab.style.transform = "scale(1.08)";
    });

    fab.addEventListener("mouseleave", () => {
        fab.style.background = "rgba(37, 99, 235, 0.6)";
        fab.style.transform = "scale(1)";
    });

    /* Back logic (../../ style) */
    fab.addEventListener("click", () => {
        const pathParts = window.location.pathname.split("/").filter(Boolean);

        if (pathParts.length > 1) {
            pathParts.splice(-2);
            window.location.href = "/" + pathParts.join("/") + "/";
        } else {
            window.history.back();
        }
    });

    /* Add to page */
    document.body.appendChild(fab);
})();
