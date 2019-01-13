const Bull = require('bull');
const queue = new Bull('default queue');

queue.process(async (job) => {
  console.log(job.data.value + '_' + new Date().getTime());
  return async () => {};
})

queue.add({
  value: 'foo',
}, {
  repeat: {
    every: 1000,
    limit: 5,
  }
})
