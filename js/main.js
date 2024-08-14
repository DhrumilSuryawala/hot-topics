// GET THE REFERENCES
const container = document.getElementById('content');
const links = document.querySelectorAll('nav a');
let url = './partials/home.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = (urlFeed) => {
    /*
    IMPORTANT NOTES:
    loadContent RUNS EVERY TIME A LINK IS CLICKED.
    loadContent REQUIRES THE INPUT. THIS INPUT IS
    THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
    EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
    THE UPDATED PATH TO THE REQUESTED CONTENT.
    */
    fetch(urlFeed)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => console.log('Error loading content:', error));
};

// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL
const selectContent = (event) => {
    // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
    event.preventDefault();

    // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
    const href = event.target.getAttribute('href');

    // CALL THE FUNCTION loadContent PROVIDING THE href
    // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
    // OF loadContent FUNCTION.
    loadContent(`./partials/${href}`);
};

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER
links.forEach(link => {
    link.addEventListener('click', selectContent);
});
