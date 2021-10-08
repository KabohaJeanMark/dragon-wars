import axios from 'axios';
import { getResultofPost } from '../Scenes/EndGameScene';

jest.mock('axios');

describe('Negative test for failed API post call', () => {
  it('should return empty array [] with no player info results', async () => {
    const message = 'Network Error';
    axios.post.mockImplementation(() => Promise.reject(new Error(message)));
    const result = await getResultofPost();
    expect(result).toEqual([{
      "error": "The post of the score was not successful"
    }]);
  });
});