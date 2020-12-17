import { Suspense, useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RestConnector from './connectors/RestConnector'
import colors from './constants/colors'

import Loading from './components/Layout/Loading'
import Layout from './components/Layout'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import NotFound from './pages/NotFound'

import './App.css';

import { getAllPresentation } from './redux/actions/presentationAction'

const theme = createMuiTheme({
  palette: {
    primary: {
      lighter: '#4cc9f0',
      light: '#6fbf73',
      main: `${colors.primaryBlue}`,
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

function App(props) {
  const { isLoadingAll, getAllPresentationHandler } = props
  useEffect(() => {
    RestConnector.get('/extra-data/update-visited-count')
    getAllPresentationHandler()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Layout/>
        <Suspense fallback={<Loading isLoading/>}>
          <Loading isLoading={isLoadingAll}/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/chuong-trinh" exact component={Schedule}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </Suspense>
      </Router>
    </MuiThemeProvider>
  );
}

const mapStateToProps = ({ presentation, }) => {
  return {
    isLoadingAll: presentation.isLoadingAll,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllPresentationHandler: getAllPresentation,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
