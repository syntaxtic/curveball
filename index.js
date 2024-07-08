import { Application } from '@curveball/core';
import bodyParser from '@curveball/bodyparser';

import home from './routes/home.js';
import dynamic from './routes/dynamic.js';
import parser from './routes/parser.js';

const app = new Application();
app.use(bodyParser());

app.use(home, dynamic, parser);
app.listen(4000);
