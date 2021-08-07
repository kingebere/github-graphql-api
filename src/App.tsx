import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import JobsWrapper from './containers/Repository/JobsWrapper';
import UserSearch from './containers/Users/UserSearch';

import './App.css';
import './index.css';

// passing github token keys to the header
function App() {
    const client = new ApolloClient({
        uri: 'https://api.github.com/graphql',

        headers: {
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
        cache: new InMemoryCache(),
    });
console.log(`${process.env.REACT_APP_GITHUB_TOKEN}`)

    return (
        
        <Router>
            <ApolloProvider client={client}>
                <div className="site-wrapper">
                    <div className="site-header">
                        <div className="container">
                            <div className="row  align-items-center justify-content-center flex1 marginb-8px">
                                <div className="padding-15px">
                                    <Link className="repo button_text" to="/">
                                        Repository
                                    </Link>
                                </div>
                                <div className="padding-15px">
                                    <Link className="user button_text" to="/Users">
                                        Users
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Switch>
                            <Route exact path="/">
                                <JobsWrapper />
                            </Route>
                        </Switch>
                        <Switch>
                            <Route exact path="/Users">
                                <UserSearch />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </ApolloProvider>
        </Router>
    );
}

export default App;
