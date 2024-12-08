import ChoosePayment from './pages/ChoosePayment';
import Home from './pages/Home';
import SelectNumPage from './pages/SelectNumPage';
import Review from './pages/Review';
import Error from './pages/Error';
import Login from './pages/Login';
import History from './pages/History';
import HistoryAdmin from './pages/HistoryAdmin';
import LoginRole from './pages/LoginRole';
import LoginAdmin from './pages/LoginAdmin';
import Admin from './pages/Admin';

const routes = [
    { path: '/', component: Home },
    { path: '/login/role', component: LoginRole },
    { path: '/login/admin', component: LoginAdmin },
    { path: '/admin', component: Admin },
    { path: '/login', component: Login },
    { path: '/buy', component: SelectNumPage },
    { path: '/payment-method', component: ChoosePayment },
    { path: '/review', component: Review },
    { path: '/error', component: Error },
    { path: '/history', component: History },
    { path: '/history-admin', component: HistoryAdmin }
];

export { routes };
