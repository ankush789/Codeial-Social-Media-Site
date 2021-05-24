import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Error404 } from './';

const login = () => <div>Login</div>;
const signup = () => <div>SIgnup</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {/* <Route exact path="/" component={Home} /> */}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} posts={posts} />}
            />
            <Route path="/login" component={login} />
            <Route path="/signup" component={signup} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
