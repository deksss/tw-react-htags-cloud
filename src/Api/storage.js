/* eslint-disable*/
App42.initialize("c263b0a74c6ddc84f6a7387297d2b0e756ccd63d2e43e92d1173af8780a796db",
"fd58272e7052d5d9601db77049ebcc0c117c710a6afbcd75540bc4e45d2c02b5");
const storageService  = new App42Storage();
const dbName = "tzBase";
const collectionName = "hashtags";

console.log(storageService);


const KEY = 'name';
const VALUE = 'hashtags-from-app';

export const pushDataToStorage = (data) => {
const objectsForPush = {hashtags: data, name: VALUE};
  storageService.insertJSONDocument(dbName, collectionName, objectsForPush, {
      success: (object) =>
      {
        //console.log(object)
      },
      error: function(error) {
        console.log(error);
      }
  });
}

export const updateDataInStorage = (data) => {
const objectsForPush = {hashtags: data, name: VALUE};

  storageService.updateDocumentByKeyValue(dbName, collectionName, KEY, VALUE, objectsForPush, {
      success: (object) =>
      {
        //console.log(object)
      },
      error: function(error) {
        console.log(error);
      }
  });
}


export const getDataFromStorage = () => {
    return new Promise((resolve, reject) => {
       storageService.findDocumentByKeyValue(dbName,collectionName,KEY,VALUE,  {
          success: function(object)
          {
            const data = JSON.parse(object);
            //console.log(data)
            const hashtags = data.app42.response.storage.jsonDoc[0].hashtags;
            resolve(hashtags);
          },
          error: function(error) {
            pushDataToStorage([]);
            reject(error);
          }
      });
    });
}
