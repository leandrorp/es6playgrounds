const projects = [
        { name : 'seguranca', environment : 'Prod'},
        { name : 'geralFnt', environment : 'Prod'},
]

const prodProjects = projects.every(function (project){
            return project.environment === 'Prod';
});

console.log(prodProjects);