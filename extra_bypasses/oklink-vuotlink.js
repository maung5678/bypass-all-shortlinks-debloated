// Code to bypass oklink.cfd and vuotlink.net shortlinks

const bypassLinks = () => {
    const oklinkButton = document.querySelector('button:contains("Get Link")') || document.querySelector('button:contains("Nhấn Để Vượt Link")');
    const vuotlinkButton = document.querySelector('button:contains("Get Link")') || document.querySelector('button:contains("Nhấn Để Vượt Link")');

    if (oklinkButton) {
        oklinkButton.click();
    }

    if (vuotlinkButton) {
        vuotlinkButton.click();
    }
};

// Run the function after the page load
window.onload = () => {
    bypassLinks();
};
