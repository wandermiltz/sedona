var link = document.querySelector(".hotel-search-btn");
var popup = document.querySelector(".search-form");
var datein = popup.querySelector("[name=datein]");
var dateout = popup.querySelector("[name=dateout]");
var form = popup.querySelector(".popup-form");


link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("search-form-show");
	datein.focus();

	});
			
	form.addEventListener("submit", function(event) {
		if (!(datein.value && dateout.value)) {
			event.preventDefault();
			popup.classList.remove("modal-error");
			popup.classList.add("modal-error");
			}

	});

	 window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (popup.classList.contains("search-form-show")) {
            popup.classList.remove("search-form-show");
          }
        }
      });