const items = document.querySelector('#categories')
const menuItems = items.querySelectorAll('.item');
console.log(`Number of categories: ${menuItems.length}`);

menuItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;

    const categoryElements = category.querySelectorAll('ul li');
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements.length}`);

});