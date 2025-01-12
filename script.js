document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menuitem');
  const dynamicContent = document.getElementById('dynamic-content');

  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const recipePage = item.getAttribute('data-recipe-page');
      fetch(recipePage)
        .then(response => response.text())
        .then(data => {
          dynamicContent.innerHTML = data;
        })
        .catch(error => {
          console.error('Error loading page:', error);
          dynamicContent.innerHTML = '<p>Failed to load content.</p>';
        });
    });
  });
});
