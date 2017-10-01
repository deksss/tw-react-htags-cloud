/* eslint-disable*/
const dbName = "tzBase";
const collectionName = "hashtags";
const KEY = "name";
const VALUE = "hashtags-from-app";
let storageService;

export const startApp42 = () => {
  App42.initialize(
    "c263b0a74c6ddc84f6a7387297d2b0e756ccd63d2e43e92d1173af8780a796db",
    "fd58272e7052d5d9601db77049ebcc0c117c710a6afbcd75540bc4e45d2c02b5"
  );
  storageService = new App42Storage();
};

export const updateDataInStorage = data => {
  return new Promise((resolve, reject) => {
    const objectsForPush = { hashtags: data, name: VALUE };
    localStorage.setItem("hashtags", JSON.stringify(data));

    storageService.updateDocumentByKeyValue(
      dbName,
      collectionName,
      KEY,
      VALUE,
      objectsForPush,
      {
        success: object => {
          resolve("Data updated in cloud");
        },
        error: error => {
          reject(`Problems with App42': ${error}`);
        }
      }
    );
  });
};

export const getDataFromStorage = () => {
  return new Promise((resolve, reject) => {
    storageService.findDocumentByKeyValue(dbName, collectionName, KEY, VALUE, {
      success: object => {
        const data = JSON.parse(object);
        const hashtags = data.app42.response.storage.jsonDoc[0].hashtags;
        resolve(hashtags);
      },
      error: error => {
        const localData = JSON.parse(localStorage.getItem("hashtags"));
        resolve(localData);
      }
    });
  });
};
