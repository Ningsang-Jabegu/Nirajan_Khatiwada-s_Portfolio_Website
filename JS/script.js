/* Function that creates logo header */
function NK_header(src = "/images/main_logo_name.png") {
  const create_header = document.createElement("header");
  const create_div_header = document.createElement("div");
  create_div_header.classList.add("name_logo");
  const create_img_header = document.createElement("img");
  create_img_header.setAttribute("src", src);
  create_img_header.classList.add("name_logo");
  create_div_header.appendChild(create_img_header);
  create_header.appendChild(create_div_header);
  document.body.appendChild(create_header);
}

/* Function that creates Navigation Bar */
function NK_navBar() {
  const create_nav = document.createElement("nav");
  const create_ul_nav = document.createElement("ul");
  create_ul_nav.classList.add("nav_item_container");
  create_nav.appendChild(create_ul_nav);
  document.body.appendChild(create_nav);
  const pages_name = [
    "index",
    "posts",
    "songs",
    "projects",
    "contact_us", // This is pages id
  ];
  const page_display_name = [
    "Home",
    "Posts",
    "Songs",
    "Projects",
    "Contact us", // This is pages display name in nav bar
  ];
  let create_ul_nav_href = [
    "/index.html",
    "/html_pages/posts.html",
    "/html_pages/songs.html",
    "/html_pages/projects.html",
    "/html_pages/contact_us.html",
  ];
  const body_id = document.body.id;
  switch (body_id) {
    case pages_name[0]:
      create_ul_nav_href[0] = "#";
      break;
    case pages_name[1]:
      create_ul_nav_href[1] = "#";
      break;
    case pages_name[2]:
      create_ul_nav_href[2] = "#";
      break;
    case pages_name[3]:
      create_ul_nav_href[3] = "#";
      break;
    case pages_name[4]:
      create_ul_nav_href[4] = "#";
      break;
    default:
      console.log("No navigation ul href to put into!");
  }
  for (let i = 0; i < create_ul_nav_href.length; i++) {
    const create_ul_li_nav = document.createElement("li");
    const create_ul_li_a_nav = document.createElement("a");
    if (i == create_ul_nav_href.length - 1) {
      const create_ul_li_i = document.createElement("i");
      create_ul_li_i.classList.add("fa", "fas", "fa-bars");
      create_ul_li_nav.append(create_ul_li_i);
      const create_ul_li_div = document.createElement("div");
      create_ul_li_div.classList.add("dropdown-content");
      const create_ul_li_div_a_nav = document.createElement("a");
      create_ul_li_div_a_nav.href = create_ul_nav_href[i];
      create_ul_li_div_a_nav.append(page_display_name[i]);
      create_ul_li_div.append(create_ul_li_div_a_nav);
      create_ul_li_nav.append(create_ul_li_div);
    } else {
      create_ul_li_a_nav.append(page_display_name[i]);
      create_ul_li_a_nav.href = create_ul_nav_href[i];
      create_ul_li_nav.append(create_ul_li_a_nav);
    }
    document.querySelector(".nav_item_container").appendChild(create_ul_li_nav);
  }
  const body_ul_nav = document.querySelector(".nav_item_container");
  for (let i = 0; i < pages_name.length; i++) {
    if (pages_name[i] == body_id) {
      body_ul_nav.querySelectorAll("li")[i].classList.add("selected");
      body_ul_nav
        .querySelectorAll("li")
        [pages_name.length - 1].classList.add("dropdown");
    }
  }
}

/* Function that creates homepage main introduction */
function NK_homepageMainIntroduction() {
  create_main = document.createElement("main");
  create_main.id = "homepage_main";
  document.body.appendChild(create_main);
  const create_div_main = document.createElement("div");
  create_div_main.classList.add("introduction_myself");
  const create_div_p_main = document.createElement("p");
  create_div_p_main.innerHTML = `I am <span class="name_intro">Nirajan Khatiwada</span>, the founder of <span class="org_intro">नेपाली
                    हाँस्यचित्र संस्थान</span>.`;
  create_div_main.appendChild(create_div_p_main);
  const create_div_p1_main = document.createElement("p");
  create_div_p1_main.innerHTML = `>I am pursuing a Bachelor of Science in Computer Science and Information Technology. My goal is to
                digitalize happiness and bring my dream world to life through my graphic design skills. I have over 3
                years experience in social media handling and IT sector and my passion is graphic design.`;
  create_div_main.appendChild(create_div_p1_main);
  const main_just_created = document.querySelector("#homepage_main");
  main_just_created.appendChild(create_div_main);
  const create_div1_main = document.createElement("div");
  create_div1_main.classList.add("my_profile_picture");
  const create_div1_img_main = document.createElement("img");
  create_div1_img_main.src = "/images/profile.png";
  create_div1_main.appendChild(create_div1_img_main);
  main_just_created.appendChild(create_div1_main);
}

/*Function that creates homepage photo section*/
function NK_homepagePhotoSection() {
  const create_section = document.createElement("section");
  create_section.id = "photos";
  document.body.appendChild(create_section);
  const just_created_div = document.querySelector("#photos");
  const create_h2_div = document.createElement("h2");
  create_h2_div.innerHTML = `Some Photos you might like`;
  just_created_div.appendChild(create_h2_div);
  const create_div_div = document.createElement("div");
  create_div_div.classList.add("photo_container");
  just_created_div.appendChild(create_div_div);
  const homepage_images = [
    "/images/Homepage_Image/img_1.jpg",
    "/images/Homepage_Image/img_2.jpg",
    "/images/Homepage_Image/img_3.jpg",
    "/images/Homepage_Image/img_4.jpg",
    "/images/Homepage_Image/img_5.jpg",
    "/images/Homepage_Image/img_6.jpg",
    "/images/Homepage_Image/img_7.jpg",
    "/images/Homepage_Image/img_8.jpg",
    "/images/Homepage_Image/img_9.jpg",
    "/images/Homepage_Image/img_10.jpg",
  ];
  const photo_contener_created_previously =
    document.querySelector(".photo_container");
  for (let i = 0; i < homepage_images.length; i++) {
    const create_div_span_div = document.createElement("span");
    create_div_span_div.classList.add("photo", `photo_${i + 1}`);
    photo_contener_created_previously.appendChild(create_div_span_div);
    const create_div_span_img_div = document.createElement("img");
    create_div_span_img_div.setAttribute("src", homepage_images[i]);
    create_div_span_img_div.alt = `My photo No. ${i + 1}`;
    create_div_span_div.appendChild(create_div_span_img_div);
  }
  const create_div_div_section = document.createElement("div");
  create_div_div_section.classList.add("photo_container_hide_0");
  for (let i = 0; i < 2; i++) {
    const create_button = document.createElement("button");
    create_button.classList.add("see_more_less");
    if (i == 0) {
      create_button.classList.add("see_less_0", "see_less");
      create_button.innerHTML = "See Less";
    } else {
      create_button.classList.add("see_more_0", "see_more");
      create_button.innerHTML = "See More";
    }
    create_div_div_section.appendChild(create_button);
  }
  photo_contener_created_previously.appendChild(create_div_div_section);
}

/* Function that works for see more or see less btn in homepage for photos */
function NK_homepagePhotoSectionSeeMoreLess() {
  const parent = document.querySelector(".photo_container");
  const parent_1 = document.querySelector(".photo_container_hide_0");
  const child_0_m = parent_1.querySelector(".see_more_0");
  const child_0_l = parent_1.querySelector(".see_less_0");
  /*When the user clicks on see more text*/
  child_0_m.addEventListener("click", function () {
    const child_0_images = [
      "/images/Homepage_Image/img_11.jpg",
      "/images/Homepage_Image/img_12.jpg",
      "/images/Homepage_Image/img_13.jpg",
      "/images/Homepage_Image/img_14.jpg",
      "/images/Homepage_Image/img_15.jpg",
      "/images/Homepage_Image/img_16.jpg",
      "/images/Homepage_Image/img_17.jpg",
      "/images/Homepage_Image/img_18.jpg",
      "/images/Homepage_Image/img_19.jpg",
      "/images/Homepage_Image/img_20.jpg",
    ];
    /*Create a span tag that contains img tag, that shows the one step hidden images, inside with id, title, source, and alt*/
    let photo_count_0 = child_0_images.length; // initialize photo_count with the length of child_0_images
    for (const source of child_0_images) {
      photo_count_0++; // increment photo_count by 1 with each iteration of the loop
      const child_0_create_img = document.createElement("img");
      const child_0_create_span = document.createElement("span");
      let child_0_in_second_last_position =
        parent.children[parent.children.length - 1];
      child_0_create_span.classList.add(
        "photo_unhide_0",
        "photo",
        `photo_${photo_count_0}`
      );
      child_0_create_span.id = "hide_unhide_img";
      child_0_create_span.title = "Hidden Images 0";
      child_0_create_img.src = source;
      child_0_create_img.alt = "my photo";
      child_0_create_span.appendChild(child_0_create_img);
      let child_0_add_to_parent = parent.appendChild(child_0_create_span);
      parent.insertBefore(
        child_0_add_to_parent,
        child_0_in_second_last_position
      );
    }
    child_0_m.style.display = "none";
    /*This checks that there is a span tag having class "see_less_0" or not*/
    child_0_l_search_span = parent_1.getElementsByTagName("span");
    for (let i = 0; i < child_0_l_search_span.length; i++) {
      if (child_0_l_search_span[i].classList.contains("see_less_0")) {
        break;
      } else {
        see_less_0_span = document.createElement("span");
        see_less_0_span.classList.add(
          "see_less_0",
          "see_more_less",
          "see_less"
        );
        see_less_0_span.innerHTML = "See Less";
        parent_1.appendChild(see_less_0_span);
      }
    }
    child_0_l.style.display = "block";
    const child_1_create_span = document.createElement("span");
    child_1_create_span.classList.add(
      "see_more_1",
      "see_more_less",
      "see_more"
    );
    child_1_create_span.innerHTML = "See More (1)";
    parent_1.appendChild(child_1_create_span);
  });
  const photo_0 = document.querySelector("#hide_unhide_img");
  const image_0 = document.querySelector(".image_homepage");
  /*When the user clicks on see less text after see more test is clicked*/
  child_0_l.addEventListener("click", function () {
    /*selects all the elements of the particular class with querySelectorAll and querySelector only selects first child*/
    const child_0_hidden_span =
      document.querySelectorAll(".photo_unhide_0"); /*Don't remove this line*/
    const child_1_m_all =
      document.querySelectorAll(".see_more_1"); /*Don't remove this line*/
    child_0_hidden_span.forEach(function (span) {
      parent.removeChild(span);
    });
    child_1_m_all.forEach(function (span) {
      parent_1.removeChild(span);
    });
    child_0_m.style.display = "block";
    child_0_l.style.display = "none";
  });
  /*When the user clicks see more text and again see more (1) text*/
  /*const child_1_m = document.querySelector(".see_more_1");
  child_1_m.addEventListener('click',function(){
    alert("Not yet added!!!");
  }); */
  /* */
  /*When the user clicks on see less (1) text after see more(1) test is clicked*/
}

/* Function that creates footer for a page */
function NK_footer() {
  const create_footer = document.createElement("footer");
  create_footer.classList.add("footer-distributed");
  document.body.appendChild(create_footer);
  const just_created_footer = document.querySelector(".footer-distributed");
  const create_div_footer = document.createElement("div");
  create_div_footer.classList.add("footer-left");
  const create_div_h3 = document.createElement("h3");
  create_div_h3.innerHTML = `Nirajan&nbsp;<span>Khatiwada</span>`;
  create_div_footer.appendChild(create_div_h3);
  const create_div_p_footer = document.createElement("p");
  create_div_p_footer.classList.add("footer-links");
  let footer_link_href = [
    "#",
    "/html_pages/posts.html",
    "/html_pages/songs.html",
    "/html_pages/projects.html",
    "/html_pages/contact_us.html",
  ];
  let footer_link_display_text = [
    "Home",
    "Posts",
    "Songs",
    "Projects",
    "Contact Us",
  ];
  for (let i = 0; i < footer_link_href.length; i++) {
    const create_div_p_a_footer = document.createElement("a");
    create_div_p_a_footer.href = footer_link_href[i];
    create_div_p_a_footer.innerHTML =
      `&nbsp;` + footer_link_display_text[i] + `&nbsp;`;
    create_div_p_footer.appendChild(create_div_p_a_footer);
    if (i < footer_link_href.length - 1) {
      const create_div_p_dot_footer = " · ";
      create_div_p_footer.append(create_div_p_dot_footer);
    }
  }
  create_div_footer.appendChild(create_div_p_footer);
  const create_div_p1_footer = document.createElement("p");
  create_div_p1_footer.classList.add("footer-company-name");
  create_div_p1_footer.innerHTML = `Nirajan Khatiwada &copy; 2023 - <span id="this_year"></span>`;
  create_div_footer.appendChild(create_div_p1_footer);
  just_created_footer.appendChild(create_div_footer);
  const create_div1_footer = document.createElement("div");
  create_div1_footer.classList.add("footer-right");
  just_created_footer.appendChild(create_div1_footer);
  const footer_right_side_icons = ["map-marker", "phone", "envelope"];
  const footer_right_side_icons_display_texts = [
    `<span>Street Name</span> Kathmandu, Nepal`,
    `<a href="tel:+9779813293262">+977 98 13293262</a>`,
    `<a href="mailto:contact@test.com">contact@test.com</a>`,
  ];
  for (let i = 0; i < 3; i++) {
    const create_div1_div_footer = document.createElement("div");
    const create_div1_div_i_footer = document.createElement("i");
    create_div1_div_i_footer.classList.add(
      "fa",
      `fa-${footer_right_side_icons[i]}`
    );
    create_div1_div_footer.appendChild(create_div1_div_i_footer);
    const create_div1_div_p_footer = document.createElement("p");
    create_div1_div_p_footer.innerHTML =
      footer_right_side_icons_display_texts[i];
    create_div1_div_footer.appendChild(create_div1_div_p_footer);
    const just_created_div1_footer = document.querySelector(".footer-right");
    just_created_div1_footer.appendChild(create_div1_div_footer);
  }
  const create_div2_footer = document.createElement("div");
  create_div2_footer.classList.add("footer-r_l-center");
  const create_div2_div_footer = document.createElement("div");
  create_div2_div_footer.classList.add("footer-icons");
  create_div2_footer.appendChild(create_div2_div_footer);
  const create_div2_p_footer = document.createElement("p");
  create_div2_p_footer.classList.add("footer-company-name", "privacy_terms");
  create_div2_footer.appendChild(create_div2_p_footer);
  just_created_footer.appendChild(create_div2_footer);
  const footer_center_icon_a_href = [
    "https://www.facebook.com/profile.php?id=100076365829245",
    "https://twitter.com/Mr_NKrajan",
    "https://www.linkedin.com/in/yenke-rajan/",
    "https://github.com/yenke-rajan",
  ];
  const footer_center_icon_i_class = [
    "facebook",
    "twitter",
    "linkedin",
    "github",
  ];
  for (let i = 0; i < footer_center_icon_a_href.length; i++) {
    const create_div2_div_a_footer = document.createElement("a");
    create_div2_div_a_footer.href = footer_center_icon_a_href[i];
    const create_div2_div_a_i_footer = document.createElement("i");
    create_div2_div_a_i_footer.classList.add(
      "fa",
      `fa-${footer_center_icon_i_class[i]}`
    );
    create_div2_div_a_footer.appendChild(create_div2_div_a_i_footer);
    const just_created_div2_div_footer =
      document.querySelector(".footer-icons");
    just_created_div2_div_footer.appendChild(create_div2_div_a_footer);
  }
  const footer_privacy_terms_href = [
    "/html_pages/privacy_policy.html",
    "/html_pages/terms_of_use.html",
  ];
  const footer_privacy_terms_display_text = [
    "Privacy Policy ",
    "Terms and Conditions",
  ];
  for (let i = 0; i < footer_privacy_terms_href.length; i++) {
    const create_div2_p_a_footer = document.createElement("a");
    create_div2_p_a_footer.href = footer_privacy_terms_href[i];
    create_div2_p_a_footer.innerHTML =
      footer_privacy_terms_display_text[i] + "&nbsp;";
    const just_created_div2_p_footer = document.querySelector(".privacy_terms");
    just_created_div2_p_footer.appendChild(create_div2_p_a_footer);
  }

  const footer = document.querySelector(".footer-distributed");
  if (footer) {
    const new_element = document.createElement("div");
    const date = new Date();
    const year = date.getFullYear();
    document.querySelector("#this_year").innerHTML = year;
    new_element.classList.add("web_coded");
    new_element.innerHTML =
      "<p>Coded by <a href='https://ningsangjabegu.com.np/'>Ningsang Jabegu</a></p>";
    footer.appendChild(new_element);
  }
}
/* This function creates the iframe for bloggerspot (i.e. Blogger) */
function NK_BlogPostIframe() {
  const create_main = document.createElement("main");
  create_main.id = "post_main";
  document.body.appendChild(create_main);
  const create_iframe_main = document.createElement("iframe");
  create_iframe_main.classList.add("blogspot_iframe");
  create_iframe_main.setAttribute(
    "src",
    "https://nirajankhatiwada.blogspot.com/"
  );
  create_iframe_main.setAttribute("frameborder", "0");
  const just_created_main = document.querySelector("#post_main");
  just_created_main.appendChild(create_iframe_main);
}
