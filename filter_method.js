var workItems =   [
    { "id": 2616, "category": ".category-copy .category-beauty .category-fashion"}, //this is a match
    { "id": 1505, "category": ".category-beauty"}, // NOT
    { "id": 1500, "category": ".category-beauty .category-fashion"}, // NOT
    { "id": 692, "category": ".category-stills .category-retouching"}, // NOT
    { "id": 593, "category": ".category-beauty .category-capture .category-fashion .category-product .category-stills .category-stills-retouching "}, // NOT
    { "id": 636, "category": ".category-beauty .category-copy .category-fashion"}, //this is a match
    { "id": 547, "category": ".category-fashion .category-lifestyle .category-stills .category-stills-retouching "}, // NOT
    { "id": 588, "category": ".category-capture .category-recent-work .category-copy .category-beauty .category-fashion"} //this is a match
];

var	filtersArray = [".category-beauty", ".category-fashion", ".category-copy"];

var filtered = workItems.filter(function(element) {
   var cats = element.category.split(' ');
   
    return cats.filter(function(cat) {
       return filtersArray.indexOf(cat) > -1;
    }).length === filtersArray.length;
});
	
console.log(filtered);