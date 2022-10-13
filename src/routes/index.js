import routes from '~/configs/routes';
import Home from '~/pages/Home';
import Welcome from '~/pages/Welcome';
import MainAnalysis from '~/pages/Analysis/MainAnalysis';
import AnalysisLayout from '~/layouts/AnalysisLayout';

const allRoutes = [
    { path: routes.welcome, element: Welcome, layout: null },
    { path: routes.home, element: Home },
    { path: routes.mainAnalysis, element: MainAnalysis, layout: AnalysisLayout },
];

export default allRoutes;
