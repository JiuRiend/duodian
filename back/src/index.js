import dva from 'dva';
import App from './App';
import {
    createBrowserHistory as createHistory
} from 'history';
const app = dva({
    history: createHistory()
});
app.router(App);
app.start('#root');