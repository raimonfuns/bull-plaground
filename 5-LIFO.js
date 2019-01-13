const Bull = require('bull');
const queue = new Bull('default queue');

queue.process(async (job) => {
  console.log(job.data);
  return async () => {};
})

queue.add({
  value: 'foo_1'
}, {
  lifo: true,
})
queue.add({
  value: 'foo_2',
}, {
  lifo: true,
})
queue.add({
  value: 'foo_3',
}, {
  lifo: true,
})
