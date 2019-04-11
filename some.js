const projects = [
    { name : 'seguranca', environment : 'Prod'},
    { name : 'geralFnt', environment : 'Homo'},
]

const prodProjects = projects.some(function (project){
        return project.environment === 'Prod';
});



console.dir(prodProjects);