import JobsWrapper from "./pages/JobsWrapper";
import UserSearch from "./pages/UserSearch";

import './App.css';
import './index.css';
import { ApolloClient, ApolloProvider , InMemoryCache} from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


 function App() { 
   const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
   
  headers: {
    Authorization: "bearer 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"
  },
  cache: new InMemoryCache(),
});
  return (
     <Router>
    <ApolloProvider client={client}>

      <div className="site-wrapper">
        <div className="site-header">
        <div className="container">
          <div className="row  align-items-center justify-content-center flex1 marginb-8px">
            <div className="padding-15px">
                <Link className="repo button_text" to="/">Repository</Link>

            </div>
        <div className="padding-15px">
            <Link className="user button_text" to="/Users">Users</Link>
        </div>

  </div>
  </div>
  

         <Switch>
          <Route exact path="/">
            <JobsWrapper/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Users">
          <UserSearch/>
          </Route>
        </Switch>
     
     </div></div>
      </ApolloProvider>
      </Router>
  );
}

export default App;