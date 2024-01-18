const blogPostsContainer = document.querySelector('.blog-posts');
const loadMoreButton = document.querySelector('.load-more');
let currentPage = 1;

const loadBlogPosts = async () => {
    const response = await fetch(`data.json`);
    const data = await response.json();
    const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
    const start = (currentPage - 1) * 5;
    const end = start + 5;
    const paginatedData = sortedData.slice(start, end);
    return paginatedData;
}

const renderBlogPosts = (data) => {
    data.forEach((post) => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        blogPost.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>${post.date}</p>
        `;
        blogPostsContainer.appendChild(blogPost);
    });
}

loadMoreButton.addEventListener('click', async () => {
    currentPage++;
    const data = await loadBlogPosts();
    renderBlogPosts(data);
});

loadBlogPosts().then((data) => {
    renderBlogPosts(data);
}); 
