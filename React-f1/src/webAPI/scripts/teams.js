import TeamsModule from "../modules/TeamsModule.js";

const endpointSection = document.querySelector("#endpoint-section")

const showAllEndpoints = () => {
    const endpoints = TeamsModule.getAll();

    let htmlTxt = "";

    endpoints.forEach(endpoint => {
        htmlTxt += 
        `
        <article class="col-12 col-md-6 col-lg-4">
        <h6 class="mt-5">${endpoint.header}</h6>
        <div class="border border-dark d-flex flex-column custom-border-box shadow p-3 justify-content-between">
         <div class="d-flex flex-column align-items-center">
         <img src="/images/${endpoint.image}" alt="teams" width="180px" class="img-fluid">
         <p>URL: ${endpoint.url}</p>
         <h6>Formål:</h6>
         <p>${endpoint.description}</p>
        </div>
        </div>
       </article>`
    });

    endpointSection.innerHTML = htmlTxt;
}

    (() => {
        showAllEndpoints();
})();