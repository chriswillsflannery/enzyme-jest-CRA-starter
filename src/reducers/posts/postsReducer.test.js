import { types } from '../../actions/types';
import postsReducer from './reducer';

describe('posts reducer', () => {

  it('Should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return new state if it receives the correct type', () => {
    const posts = [{ title: 'test 1' }, { title: 'test 2' }, { title: 'test 3' }];
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });



})