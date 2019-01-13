const Bull = require('bull');
const queue = new Bull('default queue');

queue.process('foo', async (job) => {
  console.log(job.data);
  return async () => {};
})

queue.add('foo', {
  value: 'foo',
})