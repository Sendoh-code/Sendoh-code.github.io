// Simple IntersectionObserver to reveal sections on scroll.
// Each element with the 'fade-in' class will gain the 'appear' class
// once at least 10 % of it enters the viewport. This triggers a smooth
// fade-in and upward slide defined in style.css.

document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, options);
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // -----------------------
  // Tech notes list loader
  //
  // Define your technical notes here. Each object should include a
  // `title` and `url` property. The `url` can point to a Markdown file
  // (which GitHub Pages will render automatically) or a pre-built HTML
  // file. When new notes are added to this array, they will
  // automatically appear in the Tech Notes section of your site.
  // Example:
  // { title: 'Understanding Transformer KV‑cache', url: 'notes/kvcache.html' },
  const notes = [
    // { title: 'My first note', url: 'notes/example.html' },
  ];

  const notesList = document.getElementById('tech-notes-list');
  if (notesList && notes.length > 0) {
    notes.forEach(note => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = note.title;
      a.href = note.url;
      // Open notes in a new tab to keep the main site context intact
      a.target = '_blank';
      li.appendChild(a);
      notesList.appendChild(li);
    });
  } else if (notesList) {
    // Provide a friendly placeholder when no notes are defined yet
    const placeholder = document.createElement('li');
    placeholder.textContent = 'No notes have been added yet. Edit the notes array in script.js to add your first entry.';
    notesList.appendChild(placeholder);
  }
});