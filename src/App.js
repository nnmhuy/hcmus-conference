import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Layout from './components/Layout/index'
import Home from './pages/Home'
import Schedule from './pages/Schedule/index'

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      lighter: '#eef6e9',
      light: '#6fbf73',
      main: '#4caf50',
      littleDark: '#5da62b',
      dark: '#357a38',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f2a18b',
      main: '#ef8a6f',
      dark: '#a7604d',
      contrastText: '#000',
    },
  }
})

const App = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/chuong-trinh" exact component={Schedule}/>
          </Switch>
        </Router>
      </Layout>
    </MuiThemeProvider>
  );
}

export default App;
