'use strict';

var ghpages = require('gh-pages');

main();

function main() {
    ghpages.publish('./gh-pages', console.error.bind(console));
}

//这样，每次书稿有了修改，运行npm run publish
// ghpages.publish('gh-pages', {
//   branch: 'gh-pages',
//   repo: 'git@github.com:zhuangzz/zhuangzz-note.git'
// }, ()=>{});