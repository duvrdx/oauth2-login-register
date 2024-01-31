const { execSync } = require('child_process');

try {
  // Buscar a última tag
  const latestTag = execSync('git describe --tags --abbrev=0 HEAD').toString().trim();

  // Obter mensagens de commit desde a última tag
  const commitMessages = execSync(`git log --pretty=format:%s ${latestTag}..HEAD`).toString();

  // Determinar o tipo de versão com base nas mensagens de commit
  if (commitMessages.includes('feat:')) {
    console.log('minor');
  } else if (commitMessages.includes('fix:')) {
    console.log('patch');
  } else {
    console.log('patch');  // Pode ajustar conforme necessário
  }
} catch (error) {
  console.error('Erro ao determinar a versão:', error.message);
  process.exit(1);
}
