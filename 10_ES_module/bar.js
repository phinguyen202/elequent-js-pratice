export const habit = 'plaing soccer';
export function multi(a, b) {
    return a + b;
}

export function tag (tag, text) {
    const el = document.createElement(tag)
    el.textContent = text
  
    return el
  }