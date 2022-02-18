exports.bar = async function bar() {
  Promise.reject(new Error('An error is rejected.'))
}