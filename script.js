fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Sort articles by date
    data.articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render articles
    const main = document.querySelector('main');
    data.articles.forEach(article => {
      // Create HTML elements for the article
      // and append them to the main element
    });
  });
