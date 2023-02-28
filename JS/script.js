/* Function that creates logo header */
function NK_header() {
  const create_header = document.createElement("header");
  const create_div_header = document.createElement("div");
  create_div_header.classList.add("name_logo");
  const create_img_header = document.createElement("img");
  create_img_header.setAttribute("src", "/images/main_logo_name.png");
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

function NK_homepageMainIntroduction() {
  create_main = document.createElement("main");
  create_main.id = "homepage_main";
  document.body.appendChild(create_main);
  create_div_main = document.createElement("div");
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
  create_div1_main = document.createElement("div");
  create_div1_main.classList.add("my_profile_picture");
  create_div1_img_main = document.createElement("img");
  create_div1_img_main.src = "/images/profile.png";
  create_div1_main.appendChild(create_div1_img_main);
  main_just_created.appendChild(create_div1_main);
}

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
