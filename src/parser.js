export default function json(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const stringData = String.fromCharCode.apply(null, new Uint16Array(data));
          resolve(stringData);
        } catch (error) {
          reject(new Error('Ошибка при парсинге данных: ' + error));
        }
      }, 500);
    });
  }