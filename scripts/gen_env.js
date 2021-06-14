const fs = require('fs');

const args = process.argv.slice(2);
const token = args.pop();

const isValidToken = (t) => t.startsWith('ghp_');

if (token && isValidToken(token)) {
  const rootPath = process.cwd();
  fs.writeFileSync(`${rootPath}/.env.development`, `REACT_APP_GITHUB_TOKEN=${token}`);
} else {
  console.log(`Your token token: ${token} is invalid!`);
}
