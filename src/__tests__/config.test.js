import gameConfig from '../Config/config';

describe('Test game config settings', () => {
  it('returns player gravity of 0 for this flying game', () => {
    expect(gameConfig.physics.arcade.gravity.y).toEqual(0);
  });
});