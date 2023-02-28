const child_1_m = parent_1.querySelector(".see_more_1");
  const child_1_l = parent_1.querySelector(".see_less_1");
  child_1_m.addEventListener("click", function () {
    const child_1_images = [
      "/images/Homepage_Image/img_12.jpg",
      "/images/Homepage_Image/img_13.jpg",
      "/images/Homepage_Image/img_14.jpg",
      "/images/Homepage_Image/img_15.jpg",
      "/images/Homepage_Image/img_16.jpg",
      "/images/Homepage_Image/img_17.jpg",
      "/images/Homepage_Image/img_18.jpg",
      "/images/Homepage_Image/img_19.jpg",
      "/images/Homepage_Image/img_20.jpg",
      "/images/Homepage_Image/img_21.jpg",
      "/images/Homepage_Image/img_12.jpg",
    ];

    for (const source of child_1_images) {
      const parent = document.querySelector(".photo_container");
      let child_1_in_second_last_position =
        parent.children[parent.children.length - 1];
      const child_1_create_img = document.createElement("img");
      child_1_create_img.src = source;
      child_1_create_img.alt = "my photo";
      const child_1_create_span = document.createElement("span");
      child_1_create_span.classList.add("photo_unhide_1");
      child_1_create_span.id = "hide_unhide_img";
      child_1_create_span.title = "Hidden Images 1";
      child_1_create_span.appendChild(child_1_create_img);
      let child_1_add_to_parent = parent.appendChild(child_1_create_span);
      parent.insertBefore(
        child_1_add_to_parent,
        child_1_in_second_last_position
      );
    }
    /*child_1_m.style.display = "none";*/
    /*This checks that there is a span tag having class "see_less_1" or not*/
    child_1_l_search_span = parent_1.getElementsByTagName("span");
    for (let i = 0; i < child_1_l_search_span.length; i++) {
      if (child_1_l_search_span[i].classList.contains("see_less_1")) {
        break;
      } else {
        see_less_1_span = document.createElement("span");
        see_less_1_span.classList.add(
          "see_less_1",
          "see_more_less",
          "see_less"
        );
        see_less_1_span.innerHTML = "See Less (1)";
        parent_1.appendChild(see_less_1_span);
      }
    }
    child_1_l.style.display = "block";
    const child_2_create_span = document.createElement("span");
    child_2_create_span.classList.add(
      "see_more_2",
      "see_more_less",
      "see_more"
    );
    child_2_create_span.innerHTML = "See More (2)";
    parent_1.appendChild(child_2_create_span);
    alert("HI");
    /*<span class="see_more_0 see_more_less">See More</span>*/
  });



  see_less_1.addEventListener("click", function () {
    const child_1_hidden_span =
      document.querySelectorAll(".photo_unhide_1"); /*Don't remove this line*/
    const child_2_m_all =
      document.querySelectorAll(".see_more_2"); /*Don't remove this line*/
    child_1_hidden_span.forEach(function (span) {
      parent.removeChild(span);
    });
    child_2_m_all.forEach(function (span) {
      parent_1.removeChild(span);
    });
    child_0_m.style.display = "none";
    child_0_l.style.display = "none";
    child_1_l.style.display = "none";
    child_1_m.style.display = "block";
  });