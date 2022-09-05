import coverCookBook from '../../images/projects/CookBook/cover.png';
import coverBlogsAPI from '../../images/projects/BlogsAPI/cover.png';

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
        text1: 'We used three steps from Scrum (Planning, Dailies and Rretrospective) and Kanban in a usual way. Aside from the regular features we also defined a few own agreements.',
        text2: 'Structuring | For configuration, as Redux and Tests initial structure, the whole team cworked together to define and develop the setup.',
        text3: ' Solving obstacles | In case a member found an obstacle, the member that had more avaiability would help them in a pair programming session. If that didn\'t solve the obstacle, the whole team would join to reach a solution.',
      },
      {
        title: 'Technologies',
        subtitle: 'React, Redux, Testing Library and Styled Components',
        text1: 'We used React for componentization, Redux for state management, RTL for test and e Styled Components for styling.',
        text2: 'In order to avoid conflicts, each member would develop their own page and create their own reducers and components as needed. If a member used a component or reducer already created and indentified a need to improve that feature, the improvement could be done either by the person who identified the need, or by the person who created the feature.',
      },
    ],
  },
  {
    title: 'BlogsAPI',
    subtitle: 'A Blog for visualizing and publishing posts with user authentication.',
    image: coverBlogsAPI,
    urlDetail: '/project/BlogsAPI',
    urlGitHub: 'https://github.com/ibrahimborba/blogs-api',
    urlGitHubCTA: 'Repository',
    urlDeploy: 'https://github.com/ibrahimborba/blogs-api',
    urlDeployCTA: 'Check out!',
    technologiesTitle: 'Desenvolvimento',
    technologies: 'Node.js, Express.js, Sequelize, JWT, Mocha, REST, MSC',
    introductionText: 'A CRUD and RESTful API, that allows its logged users to visualize and create posts. The APIalso has authentication and authorization steps with token generation on login.',
    team: { },
    development: [
      {
        title: 'Technologies and Architecture',
        subtitle: 'Node.js, Express.js, Sequelize, Joi, JWT, REST, MSC',
        text1: 'Architectures MSC and REST | The project follows MSC and REST architecture patters, and uses ORM Sequelize to manage the Model layer.',
        text2: 'Validation, authentication and Authorization | Only logged users can visualize and add psots. Only a logged user and post author can edit or delete said post. Request validations are made in Middlewares, before entering the Controller layer. Database validations (if data exists, if the user is valid etc) are made in the Service layer.',
      },
      {
        title: 'Tests',
        subtitle: 'Mocha, Chai, Sinon, NYC',
        text1: 'Integration | Used in routes, evaluate the behavior between components.',
        text2: 'Unit | Used in middlewares, since they\'re smaller and have a great impact in the API performance.',
        text3: 'Coverage | Tests reach more than 80% coverage, it\'s still missing to test categories routes.',
      },
    ],
  },
];

export default projects;
