import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

import routes from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';

function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.element;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
