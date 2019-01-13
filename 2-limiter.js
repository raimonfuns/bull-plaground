const Bull = require('bull');
const queue = new Bull('default queue', {
  limiter: {
    max: 1,
    duration: 2000,
  }
});

queue.process(async (job) => {
  console.log(job.data);
  return async () => {};
})

queue.add({
  value: 'foo',
})

queue.add({
  value: 'bar',
})
