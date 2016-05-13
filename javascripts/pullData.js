var ACME = (function(aug) {

  var userCategory = "";

  aug.callsCategoriesJSON = function(targetValue) {
    return new Promise(function(resolve, reject) {
      let categoryRequest = new XMLHttpRequest();
      categoryRequest.addEventListener("load", function() {
        var categoryData = JSON.parse(this.responseText);
        userCategory = categoryData.categories[targetValue].name;
        console.log("What is this?", userCategory);
      })
      categoryRequest.open('GET', 'javascripts/categories.json');
      categoryRequest.send();
    })

  }

  return aug

}( ACME || {} ));