const Bull = require('bull');
const queue = new Bull('default queue');

queue.process(async (job) => {
  console.log(job.data);
  return async () => {};
})

queue.add({
  value: 'foo',
})
