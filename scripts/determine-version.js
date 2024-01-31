const { execSync } = require('child_process');

const commitMessages = execSync('git log --pretty=format:%s HEAD ^$(git describe --tags --abbrev=0)').toString();

if (commitMessages.includes('feat:')) {
  console.log('minor');
} else if (commitMessages.includes('fix:')) {
  console.log('patch');
} else {
  console.log('patch');  // Pode ajustar conforme necessário
}
