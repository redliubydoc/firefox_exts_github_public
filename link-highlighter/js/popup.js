document.addEventListener('click', (e) => {
    if (e.target.id === 'btn-set') {
        browser.tabs.insertCSS({
            allFrames: true,
            file: '/css/highlight_links.css'
        }).catch((err) => {
            console.error('an error occurred while insertCSS');
            console.error(err);
        });
    }

    else if(e.target.id === 'btn-reset') {
        browser.tabs.removeCSS({
            allFrames: true,
            file: '/css/highlight_links.css'
        }).catch((err) => {
            console.error('an error occurred while removeCSS');
            console.error(err);
        });
    }
});
