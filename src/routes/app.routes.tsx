import { Switch, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
//pages
import About from '../views/about';
import Projects from '../views/projects';

const AppRoutes = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={About} />
            <Route path="/Projects" exact component={Projects} />
        </Switch>
    </Layout>
);

export default AppRoutes;
