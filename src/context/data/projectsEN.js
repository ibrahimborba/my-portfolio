import coverCookBook from '../../images/projects/CookBook/cover.png';

const projects = [
  {
    title: 'CookBook',
    subtitle: 'A Recipes App that helps users find new recipes.',
    image: coverCookBook,
    urlDetail: '/project/CookBook',
    urlGitHub: 'https://github.com/ibrahimborba/recipes-app-cookbook',
    urlGitHubCTA: 'Repository',
    urlDeploy: 'https://cookbook-recipes-app.web.app/',
    urlDeployCTA: 'Try it!',
    technologiesTitle: 'Development',
    technologies: 'React, Redux, Testing Library, Styled Components, Scrum',
    introductionText: 'Cookbook is an app that helps users in their moments of indecisiveness when choosing a recipe, be it a meal or a cocktail, to prepare. With a series of features like filtering, searching and saving recipes, CookBook makes choosing the next recipe an easy and simple decision.',
    team: {
      memberOne: 'Samuel Santos',
      memberOneLikedIn: 'https://www.linkedin.com/in/samuel-a-santos/',
      memberTwo: 'Victor Vidal',
      memberTwoLikedIn: 'https://www.linkedin.com/in/victor-vidal-web-dev/',
    },
    development: [
      {
        title: 'Project and Team management',
        subtitle: 'Agile Methodologies, Scrum and Kanban',
        text1: 'We used Kanban to organize, assign and follow tasks progress across the development process. While Scrum was used to define technologies and communication channels (Planning). Update team on task status, assess any obstacles and use pair programming if necessary, and assign new tasks to avaiable members (Dailies). Check the overall project process by the end of it, rise strenghts and possible improvements (Retrospective).',
      },
      {
        title: 'Technologies',
        subtitle: 'React, Redux, Testing Library and Styled Components',
        text1: 'React was used for app componentization, which allowed to reuse code and cut conflicts. Redux was used for State Management, since there were multiple people working, kinds of information and pages. Testing Library was used to test and guarantee code quality. And Styled Components was used to style the app, since the whole app was already being developed using components.',
      },
    ],
  },
];

export default projects;
