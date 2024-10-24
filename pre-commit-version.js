// Función para reemplazar versión en todos los workspaces
module.exports = {
  preCommit: ({ version }) => {
    import("child_process").then(({ execSync }) => {
      execSync(`npm version ${version} --git-tag-version=false --workspaces`);
    });
  }
};
