import React from 'react';
import './App.scss';
import Header from './components/header/index';
import Headline from './components/headline/index';
import SharedButton from './components/button/index';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/';

const tempArr = [{
  fName: "Chris",
  lName: "Flannery",
  email: 'myEmail',
  age: 25,
  onlineStatus: true
}]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }

    const { posts } = this.props;

    return (
      <div className="App">
        <Header text="Company" />
        <Headline header="string" desc="desc" tempArray={tempArr} />
        <SharedButton {...configButton} />
        {posts.length > 0 &&
          <div>
            {posts.map((post, idx) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body,
              }
              return (
                <ListItem key={idx} {...configListItem} />
              )
            })}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
