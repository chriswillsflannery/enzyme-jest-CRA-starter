import moxios from 'moxios';
import { testStore } from '../../utils';
import { fetchPosts } from './../actions';

describe('fetchPosts action', () => {

  beforeEach(() => {
    //replace axios library with mock functionality of moxios
    moxios.install();
  });

  afterEach(() => {
    //restore axios functionality to its former state
    moxios.uninstall();
  });

  it('store is updated correctly', () => {
    const expectedState = [{
      title: 'test title 1',
      body: 'some text'
    }, {
      title: 'test title 2',
      body: 'some text'
    }, {
      title: 'test title 3',
      body: 'some text'
    }];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      })
    });

    return store.dispatch(fetchPosts())
      .then(() => {
        const newState = store.getState();
        expect(newState.posts).toBe(expectedState);
      })

  })

})