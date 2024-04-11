// server.mjs

import { createTask } from './routes/tasks/create.mjs';
import { loadTasks } from './routes/tasks/load.mjs';

const app = express();

app.use(express.json());

app.post('/tasks', async (req, res, next) => {
    await createTask({
        title: req.body.title
    })

    res.status(201).end();
})

app.get('/tasks', async (req, res) => {
    const tasks = await loadTasks();
    res.json(tasks);
})

app.get('/', (req, res) => {
    res.send('Hello Word')
})

app.listen(3000, () => {
    console.log('Node, com express, em execução na porta 3000')
})