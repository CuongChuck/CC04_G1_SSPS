import ChoosePayment from './pages/ChoosePayment';
import Home from './pages/Home';
import SelectNumPage from './pages/SelectNumPage';

const routes = [
    { path: '/', component: Home },
    { path: '/buy', component: SelectNumPage },
    { path: '/payment-method', component: ChoosePayment }
];

export { routes };