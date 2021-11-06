import crypto from '../assets/images/crypto.png';
import todo from '../assets/images/todo.png';
import pizzas from '../assets/images/pizzas.png';

const works = [
  {
    name: 'React Cryptographio',
    description:
      'In this app you can track the latest data (price, volume, changing, exchanges info) on cryptocurrency market in real time. Also you can filter and sort currencies by some parameters.',
    stack: ['React', 'Typescript', 'Redux Toolkit', 'RTK Query', 'SCSS', 'Nomics API'],
    image: crypto,
    www: 'https://react-cryptographio.vercel.app',
    github: 'https://github.com/nazariiko/react-cryptographio',
  },
  {
    name: 'React ToDo',
    description:
      'A simple ToDo app where you can create folders with colored labels and tasks, add, delete and edit them.',
    stack: ['React&hooks', 'Redux', 'Axios', 'json-server', 'Editor JS'],
    image: todo,
    www: 'https://react-todo-nazariiko.herokuapp.com',
    github: 'https://github.com/nazariiko/react-todo',
  },
  {
    name: 'React Pizzas',
    description:
      'Online pizza shop with a cart for adding pizzas. Also with sorting by price, popularity or category.',
    stack: ['React&hooks', 'Redux', 'Axios', 'json-server', 'Skeleton'],
    image: pizzas,
    www: 'https://react-pizza-nazariiko.herokuapp.com',
    github: 'https://github.com/nazariiko/react-pizza-web',
  },
];

export default works;
