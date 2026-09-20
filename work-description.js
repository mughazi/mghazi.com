// Keep the full text in the layout while revealing each character in order.
document.querySelectorAll('.work-description').forEach((description) => {
  const characters = Array.from(description.textContent, (character, index) => {
    const span = document.createElement('span');
    span.className = 'work-description-character';
    span.style.setProperty('--character-index', index);
    span.textContent = character;
    return span;
  });
  description.replaceChildren(...characters);
});
