use('test-data');

console.log(db.getCollection('messages').find({}).toArray())