import {db} from './Firebase';

export async function insertOne(collection, id, object){
    var result;
    await db.ref(collection+'/'+id).set(object,function(error) {
        if (error) {
          // The write failed...
          result = false;
        } else {
          // Data saved successfully!
          result = true;
        }
      });
      return result;
}

