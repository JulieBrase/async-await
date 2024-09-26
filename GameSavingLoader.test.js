import GameSavingLoader from './src/GameSavingLoader';

test('load game saving', async () => {
  const saving = await GameSavingLoader.load();
  expect(saving).toHaveProperty('id', 9);
  expect(saving).toHaveProperty('userInfo.name', 'Hitman');
});
