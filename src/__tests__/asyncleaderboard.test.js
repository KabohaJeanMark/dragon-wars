import axios from 'axios';
import { getPlayers, url, getResults } from '../Scenes/LeaderboardScene';

jest.mock('axios');

describe('Positive test for successful API call for fetching players', () => {
  it('should return array containing player objects with user and score', async () => {
    const resultList = [
      { user: 'Jean', score: 100 },
      { user: 'Leon', score: 25 },
    ];
    axios.get.mockImplementation(() => Promise.resolve({ data: resultList }));
    const result = await getPlayers();

    expect(axios.get).toHaveBeenCalledWith(`${url}`);
    expect(result).toEqual(resultList);
  });
});

describe('Negative test for failed API call', () => {
  it('should return empty array [] with no player info', async () => {
    const message = 'Network Error';
    axios.get.mockImplementation(() => Promise.reject(new Error(message)));
    const result = await getResults();
    expect(axios.get).toHaveBeenCalledWith(`${url}`);
    expect(result).toEqual([]);
  });
});
