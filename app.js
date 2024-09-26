import GameSavingLoader from './src/GameSavingLoader.js';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log('Сохранение загружено:', saving);
  } catch (error) {
    console.error('Ошибка при загрузке сохранения:', error);
  }
})();
