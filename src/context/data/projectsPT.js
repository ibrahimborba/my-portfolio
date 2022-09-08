import coverCookBook from '../../images/projects/CookBook/cover.png';
import coverBlogsAPI from '../../images/projects/BlogsAPI/cover.png';

const projects = [
  {
    title: 'CookBook',
    subtitle: 'Um App de Receitas que ajuda seus usuários a encontrarem novas receitas.',
    image: coverCookBook,
    urlDetail: '/project/CookBook',
    urlGitHub: 'https://github.com/ibrahimborba/recipes-app-cookbook',
    urlGitHubCTA: 'Repositório',
    urlDeploy: 'https://cookbook-recipes-app.web.app/foods',
    urlDeployCTA: 'Experimente!',
    technologiesTitle: 'Desenvolvimento',
    technologies: 'React, Redux, Testing Library, Styled Components, Scrum',
    introductionText: 'Cookbook é um app que ajuda seus usuários nos momentos de indecisão ao escolher uma receita para preparar, seja ela de comidas ou de bebidas. Com uma série de recursos como filtragem, exploração, busca e salvamento de receitas, CookBook faz com que escolher a próxima receita seja uma decisão simples e fácil.',
    team: {
      memberOne: 'Samuel Santos',
      memberOneLikedIn: 'https://www.linkedin.com/in/samuel-a-santos/',
      memberTwo: 'Victor Vidal',
      memberTwoLikedIn: 'https://www.linkedin.com/in/victor-vidal-web-dev/',
    },
    development: [
      {
        title: 'Gerenciamento do Projeto e Equipe',
        subtitle: 'Metodologias Ágeis, Scrum e Kanban',
        text1: 'Utilizamos três etapas do Scrum (Planning, Dailies e Retrospectiva) e Kanban de forma tradicional. Além dos recursos tradicionais definimos alguns combinados próprios.',
        text2: 'Estruturação | Para configurações, como estruturas iniciais do Redux e de Testes, todo o time se juntava e era feita uma sessão em conjunto para definir e desenvolver essas configurações.',
        text3: ' Solução de obstáculos | Caso um dos membros encontrasse um obstáculo, o membro que tivesse maior disponibilidade o ajudava em uma sessão de pair programming. Se isso não solucionasse o obstáculo, toda a equipe se juntava para chegar na solução.',
      },
      {
        title: 'Tecnologias',
        subtitle: 'React, Redux, Testing Library and Styled Components',
        text1: 'Utilizamos o React para componentização, Redux para gerenciamento de estado, RTL para testes e Styled Components para estilização.',
        text2: 'Para evitar conflitos, cada membro desenvolvia uma paǵina e criava seus próprios reducers e componentes conforme a necessidade. Se um membro aproveitasse um componente ou reducer já criado e identificasse a necessidade de complementar esse recurso, o complemento poderia ser feito tanto pela pessoa que identificou a necessidade, quanto pela pessoa que criou o recurso.',
      },
    ],
  },
  {
    title: 'BlogsAPI',
    subtitle: 'Um Blog para visualização e publicação de posts com verificação de usuário.',
    image: coverBlogsAPI,
    urlDetail: '/project/BlogsAPI',
    urlGitHub: 'https://github.com/ibrahimborba/blogs-api',
    urlGitHubCTA: 'Repositório',
    urlDeploy: 'https://documenter.getpostman.com/view/22534963/VVBXxRKC',
    urlDeployCTA: 'Documentação',
    technologiesTitle: 'Desenvolvimento',
    technologies: 'Node.js, Express.js, Sequelize, JWT, Mocha, REST, MSC',
    introductionText: 'Uma API CRUD e RESTful, que permite ao usuário logado, visualizar e criar posts. A API possui etapas de autenticação e autorização ao gerar um token no login.',
    team: { },
    development: [
      {
        title: 'Tecnologias e Arquitetura',
        subtitle: 'Node.js, Express.js, Sequelize, Joi, JWT, REST, MSC',
        text1: 'Arquiteturas MSC e REST | O projeto segue os padrões das arquiteturas MSC e REST, e usa a ORM Sequelize para gerenciar a camada Model.',
        text2: 'Validação, Autenticação e Autorização | Apenas usuários logados podem visualizar e adicionar posts. Apenas um usuário logado e autor do post pode editar ou excluir esse post. Validações de input do usuário são feitas em Middlewares, antes de entrar na camada de Controller. Validações do banco de dados (se os dados existem, se o usuário é válido etc) são feitas na camada de Service.',
      },
      {
        title: 'Testes',
        subtitle: 'Mocha, Chai, Sinon, NYC',
        text1: 'Integração | Aplicado para as rotas, avaliam o comportamento dos componentes.',
        text2: 'Unitários | Aplicado para os middlewares, por serem menores e terem grande impacto no desempenho da API.',
        text3: 'Cobertura | Os testes atingem mais de 80% de cobertura, faltando testar as rotas para categorias dos posts.',
      },
    ],
  },
];

export default projects;
