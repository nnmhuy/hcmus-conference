import { Route, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Layout from './components/Layout/index'
import Home from './pages/Home'
import Schedule from './pages/Schedule/index'

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      lighter: '#4cc9f0',
      light: '#6fbf73',
      main: '#4041D2',
      littleDark: '#3f37c9',
      dark: '#3a0ca3', 
      contrastText: '#fff',
    },
    secondary: {
      light: '#f2a18b',
      main: '#7209b7',
      dark: '#a7604d',
      contrastText: '#000',
    },
    white: {
      dark: '#464646',
      main: '#fff',
    },
    dark: {
      lighter: '#eff1f5',
    },
    error: {
      main: '#f0443c',
    }
  }
})

const App = (props) => {
  console.log(props)
  return (
    
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
      <Layout></Layout>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/chuong-trinh" exact component={Schedule}/>
          </Switch>
        </Router>
      
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
