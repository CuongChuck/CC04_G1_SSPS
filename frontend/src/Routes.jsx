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
import ConfirmPurchase from "./pages/confirm-purchase";
import OtpVerify from "./pages/otp-verifying";

const routes = [
    { path: '/', component: Home },
    { path: '/login/role', component: LoginRole },
    { path: '/login/admin', component: LoginAdmin },
    { path: '/admin', component: Admin },
    { path: '/login', component: Login },
    { path: '/buy', component: SelectNumPage },
    { path: '/payment-method', component: ChoosePayment },
    { path: "/confirm-purchase", component: ConfirmPurchase },
    { path: "/otp-verify", component: OtpVerify },
    { path: '/review', component: Review },
    { path: '/error', component: Error },
    { path: '/history', component: History },
    { path: '/history-admin', component: HistoryAdmin }
];

export { routes };
