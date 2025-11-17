document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    const handleTabClick = (button, tab) => {
        // Activar botón principal
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Mostrar contenido principal
        tabContents.forEach(content => content.classList.remove('active'));
        tab.classList.add('active');

        // Al cambiar pestaña principal, activar la primera subpestaña de esa pestaña
        const firstSubtabButton = tab.querySelector('.subtab-button');
        const firstSubtabContent = tab.querySelector('.subtab-content');
        if (firstSubtabButton && firstSubtabContent) {
            // Activar solo ella
            tab.querySelectorAll('.subtab-button').forEach(btn => btn.classList.remove('active'));
            tab.querySelectorAll('.subtab-content').forEach(div => div.classList.remove('active'));
            firstSubtabButton.classList.add('active');
            firstSubtabContent.classList.add('active');
        }
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            const tab = document.getElementById(tabId);
            handleTabClick(button, tab);
        });
    });

    // Subpestañas
    const subtabButtons = document.querySelectorAll('.subtab-button');
    subtabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const subtabId = button.getAttribute('data-subtab');
            const parentTab = button.closest('.tab-content');

            // Activar solo una subpestaña del grupo correspondiente
            parentTab.querySelectorAll('.subtab-button').forEach(btn => btn.classList.remove('active'));
            parentTab.querySelectorAll('.subtab-content').forEach(div => div.classList.remove('active'));

            button.classList.add('active');
            parentTab.querySelector(`#${subtabId}`).classList.add('active');
        });
    });
});