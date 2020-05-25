import {db} from './Firebase';
export async function getData(collection, id){
    let result = null;
    await db.ref(collection+"/"+id).once('value').then((snapshot) => {
     result = snapshot.val()
   })
   return result;
}