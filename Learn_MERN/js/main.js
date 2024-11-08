
// alert
alert("Welcome Coder!");




// JavaScript for search functionality with category
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const query = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('searchCategory').value;
    const items = document.querySelectorAll('#itemList .list-group-item');

    items.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        const itemCategory = item.getAttribute('data-category');

        // Show or hide items based on search query and selected category
        if (
            (category === 'all' || itemCategory === category) &&
            itemText.includes(query)
        ) {
            item.style.display = ''; // Show item
        } else {
            item.style.display = 'none'; // Hide item
        }
    });
});