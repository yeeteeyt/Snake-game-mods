javascript: req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/yeeteeyt/Snake-game-mods/main/custom.js'); req.onload = function() { eval(this.responseText + 'snake.more_menu();'); }; req.send();
