document.write('<link rel="stylesheet" href="https://the-dungeoneer.github.io/dungeon-blocks/the.css">');
const db = {
blockStack(content){
document.write(`<div class="block-stack">${content}</div>`);
},
block(type,content,boolean_or_reporter){
if(boolean_or_reporter == null){
return ('<div class="block '+type+'">'+content+'</div><br>');
}else{
return ('<div class="block '+type+' '+boolean_or_reporter+'">'+content+'</div><br>');
}
},
input(content){
return ('<div class="input">'+content+'</div><br>');
},
}
