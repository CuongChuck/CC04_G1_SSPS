import ChoosePayment from './pages/ChoosePayment';
import Home from './pages/Home';
import SelectNumPage from './pages/SelectNumPage';
import Review from './pages/Review';
import Error from './pages/Error';
import Login from './pages/Login';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/buy', component: SelectNumPage },
    { path: '/payment-method', component: ChoosePayment },
    { path: '/review', component: Review },
    { path: '/error', component: Error }
];

export { routes };
