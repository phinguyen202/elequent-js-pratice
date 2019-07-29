document.addEventListener("keydown", maintainBallon);
    function maintainBallon(event) {
        if (event.key === 'ArrowUp') {
            var par = document.getElementsByTagName('p')[0];
            var fontSize = par.style.fontSize.substring(0, par.style.fontSize.length - 2);
            if (!fontSize) {
                fontSize = 5;
            }
            increasedFontSize = fontSize * 1.1;
            par.style.fontSize = increasedFontSize + "px";
            if (increasedFontSize >= 500) {
                par.textContent = '💥';
                document.removeEventListener("keydown", maintainBallon);
            }
            event.stopPropagation();
            event.preventDefault();
        } else if (event.key === 'ArrowDown') {
            var par = document.getElementsByTagName('p')[0];
            var fontSize = par.style.fontSize.substring(0, par.style.fontSize.length - 2);
            if (!fontSize) {
                fontSize = 5;
            }
            increasedFontSize = fontSize * 0.9;
            if (increasedFontSize <= 5) {
                increasedFontSize = 5;
            }
            par.style.fontSize = increasedFontSize + "px";
            
            event.stopPropagation();
            event.preventDefault();
        }
    }