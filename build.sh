npm install
rm -R -f dist packages/*/dist
npm run build --workspaces
cp -R packages/backend/dist dist/
cp packages/backend/package.json dist/
cp -R packages/frontend/dist dist/public
cd dist
npm install