<template>
    <div>
        <h1>Fire base data</h1>
        {{ firebaseData }}

    </div>
</template>

<script>
import { db } from "./main";
const documentPath = 'tasks/hello';
export default {
  name: 'App',
  data(){
      return{
          firebaseData: null,
      }
  },
  firestore(){
      return{
          firebaseData: db.doc(documentPath),
      }
  }
}
</script>
