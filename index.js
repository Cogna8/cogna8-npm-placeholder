function notice() {
  return "Cogna8 packages are published under the @cogna8 scope. See https://cogna8.ai";
}
console.warn(notice());
module.exports = { notice, scope: "@cogna8", website: "https://cogna8.ai" };
