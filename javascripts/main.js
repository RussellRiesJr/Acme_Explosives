
var categorySelect = document.getElementById("categories");
categorySelect.addEventListener("change", function(event) {
  ACME.callsCategoriesJSON(event.target.value);
});

