import { Switch, Route } from 'react-router-dom';
import { Layout } from '../components/layout';
//pages
import About from '../views/about';
import Lectures from '../views/lectures';
import Projects from '../views/projects';

const AppRoutes = () => (
    <Layout>
        <Switch>
            <Route path="/About" exact component={About} />
            <Route path="/Lectures" exact component={Lectures} />
            <Route path="/Projects" exact component={Projects} />
        </Switch>
    </Layout>
);

export default AppRoutes;
