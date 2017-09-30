/* eslint-disable*/
App42.initialize("c263b0a74c6ddc84f6a7387297d2b0e756ccd63d2e43e92d1173af8780a796db",
"fd58272e7052d5d9601db77049ebcc0c117c710a6afbcd75540bc4e45d2c02b5");
const storageService  = new App42Storage();

const dbName = "tzBase";
const collectionName = "hashtags";
const hashtagsSampleJSON =  "{\"name\":\"test\",\"key\":1,\"}";
let result;

export const pushData = (data) => {
  storageService.insertJSONDocument(dbName, collectionName, data, {
      success: (object) =>
      {
            console.log(object)
      },
      error: function(error) {
        console.log(error);
      }
  });
}

export const getAllData = () => {


    const key = 'type';
    const value = 'publicHashtag';
    storageService.findDocumentByKeyValue(dbName,collectionName,key,value,{
        success: function(object)
        {
            console.log(object)
        },
        error: function(error) {
        }
    });
}
