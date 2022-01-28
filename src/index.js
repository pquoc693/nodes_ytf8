const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();

const route = require('./routes');

// đọc được dữ liệu body
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// với file tĩnh sẽ vào thư mục public
app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined')); // console.log ra http request

//template engine

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set("view engine",
  "hbs");
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(4000, () => console.log('app run'));
