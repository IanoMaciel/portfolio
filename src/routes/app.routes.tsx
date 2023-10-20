import { Switch, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
//pages
import About from '../views/about';
import Projects from '../views/projects';
import Stack from '../views/Stack';

const AppRoutes = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={About} />
            <Route path="/Projects" exact component={Projects} />
            <Route path="/Projects" exact component={Projects} />
            <Route path="/Stack" exact component={Stack} />
        </Switch>
    </Layout>
);

export default AppRoutes;
