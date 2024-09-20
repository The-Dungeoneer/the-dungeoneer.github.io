document.write(`<link rel="stylesheet" href="https://the-dungeoneer.github.io/dungeon-blocks/the.css">`);
const dblocks = {};
dblocks.create = function(content){
	document.write(`<div class="block-stack">${content}</div>`);
}
