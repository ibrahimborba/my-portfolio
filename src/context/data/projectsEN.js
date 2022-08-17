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
];

export default projects;
