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
    "contact_us" // This is pages id
  ];
  const page_display_name = [
    "Home",
    "Posts",
    "Songs",
    "Projects",
    "Contact us" // This is pages display name in nav bar
  ];
  let create_ul_nav_href = [
    "/index.html",
    "/html_pages/posts.html",
    "/html_pages/songs.html",
    "/html_pages/projects.html",
    "/html_pages/contact_us.html"
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
