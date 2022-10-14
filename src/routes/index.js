import routes from '~/configs/routes';
import Home from '~/pages/Home';
import Welcome from '~/pages/Welcome';
import AnalysisLayout from '~/layouts/AnalysisLayout';
import MainAnalysis from '~/pages/Analysis/LocationAnalysis';
import CareerAnalysis from '~/pages/Analysis/CareerAnalysis';
import JobAnalysis from '~/pages/Analysis/JobAnalysis';

const allRoutes = [
    { path: routes.welcome, element: Welcome, layout: null },
    { path: routes.home, element: Home },
    { path: routes.locationAnalysis, element: MainAnalysis, layout: AnalysisLayout },
    { path: routes.careerAnalysis, element: CareerAnalysis, layout: AnalysisLayout },
    { path: routes.jobAnalysis, element: JobAnalysis, layout: AnalysisLayout },
];

export default allRoutes;
