var Redis = require('ioredis');

var db = new Redis({
    host: '0.0.0.0'
  });

db.on('connect', function( ) {
  console.log('Connected to redis server.');

  db.set('foo', 'bar');
  db.get('foo').then(function(res){
    console.log('Value retrieved from redis data store:', res, '\n\n');
    
    console.log('Find more commands available here:\nhttps://github.com/luin/ioredis/blob/master/API.md');
  });

});