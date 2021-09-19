import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {LoginPage} from '@pages/index'
import Layout from '@components/common/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={LoginPage} exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Router