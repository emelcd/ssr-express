import express, {Request, Response} from 'express';
import axios from 'axios';
const app = express();

app.set('view engine', 'ejs');

const renderIndex = async (req: Request, res: Response) => {
  const user = (await axios.get('https://randomuser.me/api/')).data.results[0];
  res.render('index', {
    title: 'Home',
    message: 'Welcome to my website',
    user,
  });
};
app.get('/', renderIndex);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
