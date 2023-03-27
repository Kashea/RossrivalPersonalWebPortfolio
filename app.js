// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });

//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();




(function () {
    // Get a reference to all control buttons
    const controlButtons = [...document.querySelectorAll(".control")];

    // Get a reference to the theme button
    const themeButton = document.querySelector(".theme-btn");

    // Add a click event listener to each control button
    controlButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Get the ID of the section to show
            const sectionId = button.dataset.id;

            // Remove the "active" class from the current section
            const currentSection = document.querySelector(".active");
            currentSection.classList.remove("active");

            // Add the "active" class to the new section
            const newSection = document.getElementById(sectionId);
            newSection.classList.add("active");

            // Remove the "active-btn" class from the current button
            const currentButton = document.querySelector(".active-btn");
            currentButton.classList.remove("active-btn");

            // Add the "active-btn" class to the new button
            button.classList.add("active-btn");

            // Use pushState to update the URL and history
            const newState = { sectionId };
            const newTitle = `Section ${sectionId}`;
            const newUrl = `#${sectionId}`;
            history.pushState(newState, newTitle, newUrl);
        })
    });



    // Add a click event listener to the theme button
    themeButton.addEventListener("click", () => {
        // Toggle the "light-mode" class on the body
        document.body.classList.toggle("light-mode");

        // Use pushState to update the URL and history
        const isLightMode = document.body.classList.contains("light-mode");
        const newState = { isLightMode };
        const newTitle = isLightMode ? "Light Mode" : "Dark Mode";
        const newUrl = isLightMode ? `${document.location.href}?light-mode` :
                                     document.location.href.replace("?light-mode", "");
        history.pushState(newState, newTitle, newUrl);
    });

    // Handle back and forward button clicks
    window.addEventListener("popstate", (event) => {
        // Get the section ID and light mode state from the state object
        const sectionId = event.state?.sectionId;
        const isLightMode = event.state?.isLightMode;

        // Remove the "active" class from the current section
        const currentSection = document.querySelector(".active");
        currentSection.classList.remove("active");

        // Add the "active" class to the new section
        const newSection = document.getElementById(sectionId);
        newSection.classList.add("active");

        // Remove the "active-btn" class from the current button
        const currentButton = document.querySelector(".active-btn");
        currentButton.classList.remove("active-btn");

        // Add the "active-btn" class to the new button
        const newButton = document.querySelector(`[data-id="${sectionId}"]`);
        newButton.classList.add("active-btn");

        // Toggle the "light-mode" class based on the state object
        document.body.classList.toggle("light-mode", isLightMode);
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");document.body.classList.toggle("light-mode");
    })

})();


