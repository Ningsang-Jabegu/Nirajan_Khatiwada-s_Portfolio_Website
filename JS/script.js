/* Function that create element */
function createElement(element) {
  return document.createElement(element);
}
/* Fuction that create arial-lable */
function aria_lable(element, lable) {
  element.setAttribute("aria-lable", lable);
}
/* Fuction that add or remove class */
function class_list(variable_name, add_or_remove, name_of_class) {
  let class_list = variable_name.classList;
  if (add_or_remove === "add") {
    let classes = name_of_class.split(" ");
    for (let i = 0; i < classes.length; i++) {
      class_list.add(classes[i]);
    }
  } else if (add_or_remove === "remove") {
    let classes = name_of_class.split(" ");
    for (let i = 0; i < classes.length; i++) {
      class_list.remove(classes[i]);
    }
  } else {
    console.error(
      `Invalid value for add_or_remove: ${add_or_remove}. Use either "add" or "remove"`
    );
  }
}
/* Function that creates src of image */
function image(variable_name, src) {
  variable_name.src = src;
}
/*Function that sets attribute */
function setAttribute(variable_name, type, value) {
  variable_name.setAttribute(type, value);
}
/* Function that append Child */
function __child(parent, child) {
  parent.appendChild(child);
}
function _child(parent, child) {
  parent.append(child);
}
/* Function that append to DOM */
function addIntoBody(child) {
  document.body.appendChild(child);
}
/*Funtion to write inner html*/
function write_html(element,txt) {
  element.innerHTML=txt
}
/* Function that searches css pointers global*/
function search_css(txt) {
  document.querySelector(txt);
}
/* Function that searches css pointers global*/
function search_css_l(element,txt) {
  element.querySelector(txt);
}
/* Function that creates logo header */
function NK_header(src = "/images/main_logo_name.png") {
  const create_header = createElement("header");
  const create_div_header = createElement("div");
  aria_lable(create_div_header, "Nirajan Khatiwada Logo Image");
  setAttribute(create_div_header, "role", "banner");
  class_list(create_div_header, "add", "name_logo");
  const create_img_header = createElement("img");
  image(create_img_header, src);
  setAttribute(create_img_header, "alt", "Nirajan Khatiwada Text Image");
  class_list(create_img_header, "add", "name_logo");
  __child(create_div_header, create_img_header);
  __child(create_header, create_div_header);
  addIntoBody(create_header);
}

/* Function that creates Navigation Bar */
function NK_navBar() {
  const create_nav = createElement("nav");
  const create_ul_nav = createElement("ul");
  aria_lable(create_ul_nav, "Navigation Bar Container");
  class_list(create_ul_nav, "add", "nav_item_container");
  __child(create_nav, create_ul_nav);
  addIntoBody(create_nav);
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
    const create_ul_li_nav = createElement("li");
    aria_lable(create_ul_li_nav, "Navigation Bar Element");
    const create_ul_li_a_nav = createElement("a");
    if (i == create_ul_nav_href.length - 1) {
      const create_ul_li_i = createElement("i");
      class_list(create_ul_li_i, "add", "fa fas fa-bars");
      _child(create_ul_li_nav, create_ul_li_i);
      const create_ul_li_div = createElement("div");
      class_list(create_ul_li_div, "add", "dropdown-content");
      const create_ul_li_div_a_nav = createElement("a");
      create_ul_li_div_a_nav.href = create_ul_nav_href[i];
      _child(create_ul_li_div_a_nav, page_display_name[i]);
      _child(create_ul_li_div, create_ul_li_div_a_nav);
      _child(create_ul_li_nav, create_ul_li_div);
    } else {
      _child(create_ul_li_a_nav, page_display_name[i]);
      create_ul_li_a_nav.href = create_ul_nav_href[i];
      _child(create_ul_li_nav, create_ul_li_a_nav);
    }
    document.querySelector(".nav_item_container").appendChild(create_ul_li_nav);
  }
  const body_ul_nav = document.querySelector(".nav_item_container");
  for (let i = 0; i < pages_name.length; i++) {
    if (pages_name[i] == body_id) {
      const ul_all = body_ul_nav.querySelectorAll("li");
      class_list(ul_all[i], "add", "selected");
      setAttribute(ul_all[i], "arial-selected", "true");
      const all_li_inside_ul =
        body_ul_nav.querySelectorAll("li")[pages_name.length - 1];
      class_list(all_li_inside_ul, "add", "dropdown");
      const dropdown_nav = body_ul_nav.querySelector(".dropdown");
      setAttribute(dropdown_nav, "role", "button");
    }
  }
}

/* Function that creates homepage main introduction */
function NK_homepageMainIntroduction() {
  create_main = createElement("main");
  setAttribute(create_main, "id", "homepage_main");
  addIntoBody(create_main);
  const create_div_main = createElement("div");
  aria_lable(create_div_main, "My Introduction Container");
  class_list(create_div_main, "add", "introduction_myself");
  const create_div_p_main = createElement("p");
  aria_lable(
    create_div_p_main,
    "arial-lable",
    "My Introduction First Paragraph"
  );
  create_div_p_main.innerHTML = `I am <span class="name_intro">Nirajan Khatiwada</span>, the founder of <span class="org_intro" hreflang="ne">नेपाली
                    हाँस्यचित्र संस्थान</span>.`;
  __child(create_div_main, create_div_p_main);
  const create_div_p1_main = createElement("p");
  aria_lable(create_div_p1_main, "My Introduction Second Paragraph");
  write_html(create_div_p1_main,`I am pursuing a Bachelor of Science in Computer Science and Information Technology. My goal is to
  digitalize happiness and bring my dream world to life through my graphic design skills. I have over 3
  years experience in social media handling and IT sector and my passion is graphic design.`);
  __child(create_div_main, create_div_p1_main);
  const main_just_created = search_css("#homepage_main");
  __child(main_just_created, create_div_main);
  const create_div1_main = createElement("div");
  aria_lable(create_div1_main, "Profile picture container");
  class_list(create_div1_main, "add", "my_profile_picture");
  const create_div1_img_main = createElement("img");
  aria_lable(create_div1_img_main, "My Profile Picture - Nirajan Khatiwada");
  image(create_div1_img_main, "/images/profile.png");
  __child(create_div1_main, create_div1_img_main);
  __child(main_just_created, create_div1_main);
}

/*Function that creates homepage photo section*/
function NK_homepagePhotoSection() {
  const create_section = createElement("section");
  setAttribute(create_section, "id", "photos");
  aria_lable(create_section, "Homepage photos section");
  document.body.appendChild(create_section);
  const just_created_div = search_css("#photos");
  const create_h2_div = createElement("h2");
  aria_lable(create_h2_div, "Header for the images");
  write_html(create_h2_div,`Some Photos you might like`);
  __child(just_created_div, create_h2_div);
  const create_div_div = createElement("div");
  class_list(create_div_div, "add", "photo_container");
  aria_lable(create_div_div, "all Photos container");
  __child(just_created_div, create_div_div);
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
  const homepage_images_alt_text = [
    "दारी ग्याङको सातौं वार्षिकोत्सवको पोस्टर (Dari Gang's 7th Anniversary Poster)",
    "जलेको म ढलेको सरकार पोस्टर (A burnt down government poster)",
    "माधव नेपालको हास्य चित्र (Comedy picture of Madhav Nepal)",
    "भोलि बिहान हामि उठदा नेपाल - हास्य चित्र (When I wake up tomorrow morning, Nepal - comic picture)",
    "म्यान्स रूम रिलोडेड ११ औं वार्षिकोत्सव ब्यानर (Men's Room Reloded 11th Anniversary Banner)",
    "म्यान्स रूम रिलोडेड ११ औं वार्षिकोत्सव पोस्टर (Men's Room Reloded 11th Anniversary Poster)",
    "उदाउँदो सूर्यमा उडिरहेको हवाइजहाजको फोटोग्राफी (Photography of an airplane flying against the rising sun)",
    "राति अर्ध चन्द्रमाको फोटोग्राफी (Half moon photography at night)",
    "अँध्यारो कोठामा उज्यालो प्रकासतर्फ फर्केको मेरो फोटो (Photo of me facing the bright light in a dark room)",
    "उज्यालो प्रकाश भएको कोठामा खिचिएको मेरो फोटो (Photo of me taken in a brightly lit room)",
  ];
  const photo_contener_created_previously =
    document.querySelector(".photo_container");
  for (let i = 0; i < homepage_images.length; i++) {
    const create_div_span_div = createElement("span");
    aria_lable(create_div_span_div, "Single image box");
    class_list(create_div_span_div, "add", `photo photo_${i + 1}`); //here space in class makes them two seperate class
    __child(photo_contener_created_previously, create_div_span_div);
    const create_div_span_img_div = createElement("img");
    image(create_div_span_img_div, homepage_images[i]);
    setAttribute(create_div_span_img_div, "title", homepage_images_alt_text[i]);
    setAttribute(create_div_span_img_div, "alt", homepage_images_alt_text[i]);
    __child(create_div_span_div, create_div_span_img_div);
  }
  const create_div_div_section = createElement("div");
  class_list(create_div_div_section, "add", "photo_container_hide_0");
  for (let i = 0; i < 2; i++) {
    const create_button = createElement("button");
    class_list(create_button, "add", "see_more_less");
    if (i == 0) {
      class_list(create_button, "add", "see_less_0 see_less");
      write_html(create_button,"See Less photos");
    } else {
      class_list(create_button, "add", "see_more_0 see_more");
      write_html(create_button,"See More photos");
    }
    __child(create_div_div_section, create_button);
  }
  __child(photo_contener_created_previously, create_div_div_section);
}

/* Function that holds leval 1 hiding photos */
function NK_firstHidingPhoto() {
  const create_div_span_title_section = [
    "अँध्यारो कोठामा उज्यालोतर्फ फर्केर 'महारानी' उपन्यास पढ्दै गरेको मेरो फोटो(Photo of myself reading 'Maharani' novel in the dark room facing towards light)",
    "पार्टी स्थलमा नीलो सूटमा सेतो शर्ट र रातो टाई  लगाएको म र  मेरो बुबा दौरा सुरवाल र कालो कोट लगाएको फोटो (Photo of me wearing blue suit with white shirt and red tie and my father wearing black coat with daura surwal in a party venue)",
    "बादलले घाम ढाकेको नीलो आकाशको फोटोग्राफी (Photography of blue sky with clouds covering the sun)",
    "मैले लेखेको कविता 'भानुभक्त' (Poem 'Bhanu Bhakta' written by me)",
    "मेरो हातमा हात जोडेको र आँखा बन्द गरेर आरामदायी स्थितिमा भगवानको लागि प्रार्थना गरिरहेको फोटो (A photo of me praying to God in a relaxed position with hands folded and eyes closed)",
    "चस्मा लगाएको र निधारमा रातो टिका लगाएको निलो सुटमा मेरो फोटो (A photo of me in a blue suit with spectacles and red tika in forehead)",
    "रूखको छेउमा मेरो तस्वीर ताजा पल महसुस गर्दै (Picture of me next to a tree feeling the fresh moment)",
    "दशैंमा मेरो परिवारका सदस्यहरूबाट टीका लगत्तै क्लिक गरिएको फोटो (Photo clicked right after tika by my family members on Dashain)",
    "रुखको छेउमा उभिएको मेरो तस्बिर जमिनमा हेर्दै र रुखलाई एक हातले समातेको (A picture of me standing next to a tree looking down at the ground and holding the tree with one hand)",
    "गोलाकार रैखिक हल्का खैरो पृष्ठभूमिमा दायाँ तर्फबाट लिइएको मेरो फोटो (Photo of me taken from the right side on a rounded linear light gray background)",
  ];
  for (let i = 0; i < create_div_span_title_section.length; i++) {
    const create_div_span_section = createElement("span");
    aria_lable(create_div_span_section, "Previously hidden image box");
    class_list(
      create_div_span_section,
      "add",
      `photo_unhide_0 photo photo_${i + 11}`
    );
    setAttribute(create_div_span_section, "id", "hide_unhide_img");
    const create_div_span_img_section = createElement("img");
    image(
      create_div_span_img_section,
      `/images/Homepage_Image/img_${i + 11}.jpg`
    );
    setAttribute(
      create_div_span_img_section,
      "title",
      create_div_span_title_section[i]
    );
    __child(create_div_span_section, create_div_span_img_section);
    const just_created_photo_container =
      document.querySelector(".photo_container");
    let insert_before_me = search_css(".photo_container_hide_0");
    just_created_photo_container.insertBefore(
      create_div_span_section,
      insert_before_me
    );
  }
}
function NK_secondHidingPhoto() {
  const create_div_span_title_section = [
    "अँध्यारो कोठामा उज्यालोतर्फ फर्केर 'महारानी' उपन्यास पढ्दै गरेको मेरो फोटो(Photo of myself reading 'Maharani' novel in the dark room facing towards light)",
    "पार्टी स्थलमा नीलो सूटमा सेतो शर्ट र रातो टाई  लगाएको म र  मेरो बुबा दौरा सुरवाल र कालो कोट लगाएको फोटो (Photo of me wearing blue suit with white shirt and red tie and my father wearing black coat with daura surwal in a party venue)",
    "बादलले घाम ढाकेको नीलो आकाशको फोटोग्राफी (Photography of blue sky with clouds covering the sun)",
    "मैले लेखेको कविता 'भानुभक्त' (Poem 'Bhanu Bhakta' written by me)",
    "मेरो हातमा हात जोडेको र आँखा बन्द गरेर आरामदायी स्थितिमा भगवानको लागि प्रार्थना गरिरहेको फोटो (A photo of me praying to God in a relaxed position with hands folded and eyes closed)",
    "चस्मा लगाएको र निधारमा रातो टिका लगाएको निलो सुटमा मेरो फोटो (A photo of me in a blue suit with spectacles and red tika in forehead)",
    "रूखको छेउमा मेरो तस्वीर ताजा पल महसुस गर्दै (Picture of me next to a tree feeling the fresh moment)",
    "दशैंमा मेरो परिवारका सदस्यहरूबाट टीका लगत्तै क्लिक गरिएको फोटो (Photo clicked right after tika by my family members on Dashain)",
    "रुखको छेउमा उभिएको मेरो तस्बिर जमिनमा हेर्दै र रुखलाई एक हातले समातेको (A picture of me standing next to a tree looking down at the ground and holding the tree with one hand)",
    "गोलाकार रैखिक हल्का खैरो पृष्ठभूमिमा दायाँ तर्फबाट लिइएको मेरो फोटो (Photo of me taken from the right side on a rounded linear light gray background)",
  ];
  for (let i = 0; i < create_div_span_title_section.length; i++) {
    const create_div_span_section = createElement("span");
    aria_lable(create_div_span_section, "Previously hidden image box");
    class_list(
      create_div_span_section,
      "add",
      `photo_unhide_0 photo photo_${i + 11}`
    );
    setAttribute(create_div_span_section, "id", "hide_unhide_img");
    const create_div_span_img_section = createElement("img");
    image(
      create_div_span_img_section,
      `/images/Homepage_Image/img_${i + 11}.jpg`
    );
    setAttribute(
      create_div_span_img_section,
      "title",
      create_div_span_title_section[i]
    );
    __child(create_div_span_section, create_div_span_img_section);
    const just_created_photo_container = search_css(".photo_container");
    let insert_before_me = search_css(".photo_container_hide_0");
    just_created_photo_container.insertBefore(
      create_div_span_section,
      insert_before_me
    );
  }
}
/* Function that works for see more or see less btn in homepage for photos */
function NK_homepagePhotoSectionSeeMoreLess() {
  const parent = document.querySelector(".photo_container");
  const parent_1 = document.querySelector(".photo_container_hide_0");
  const child_0_m = parent_1.querySelector(".see_more_0");
  const child_0_l = parent_1.querySelector(".see_less_0");
  /*When the user clicks on see more text*/
  child_0_m.addEventListener("click", function () {
    NK_firstHidingPhoto();
    child_0_m.style.display = "none";
    /*This checks that there is a span tag having class "see_less_0" or not*/
    child_0_l_search_span = search_css_l(parent_1,"span");
    for (let i = 0; i < child_0_l_search_span.length; i++) {
      if (child_0_l_search_span[i].classList.contains("see_less_0")) {
        break;
      } else {
        see_less_0_span = createElement("span");
        class_list(see_less_0_span, "add", "see_less_0 see_more_less see_less");
        write_html(see_less_0_span,"See Less Photos");
        __child(parent_1, see_less_0_span);
      }
    }
    child_0_l.style.display = "block";
    const child_1_create_span = createElement("span");
    class_list(child_1_create_span, "add", "see_more_1 see_more_less see_more");
    write_html(child_1_create_span,"See More Photos (1)");
    __child(parent_1, child_1_create_span);
    const just_created_see_more_1 = search_css(".see_more_1");
    /*const see_more_less_photos_opt_container = document.createElement(".photo_container_hide_0");
    const create_see_less_1 = document.createElement("button");
    create_see_less_1.classList.add("see_more_less","see_less_1","see_less");
    see_more_less_photos_opt_container.appendChild(create_see_less_1); */
    just_created_see_more_1.addEventListener("click", function () {
      NK_secondHidingPhoto();
      /*          child_0_l.style.display="none"; */
    });
  });

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
  const create_footer = createElement("footer");
  class_list(create_footer, "add", "footer-distributed");
  document.body.appendChild(create_footer);
  const just_created_footer = search_css(".footer-distributed");
  const create_div_footer = createElement("div");
  class_list(create_div_footer, "add", "footer-left");
  aria_lable(create_div_footer, "Quick pages navigation");
  const create_div_h3 = createElement("h3");
  aria_lable(create_div_h3, "My name as a logo for footer");
  write_html(create_div_h3,`Nirajan&nbsp;<span>Khatiwada</span>`);
  __child(create_div_footer, create_div_h3);
  const create_div_p_footer = createElement("p");
  aria_lable(create_div_p_footer, "all web pages link");
  class_list(create_div_p_footer, "add", "footer-links");
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
    const create_div_p_a_footer = createElement("a");
    create_div_p_a_footer.href = footer_link_href[i];
    create_div_p_a_footer.innerHTML =
      `&nbsp;` + footer_link_display_text[i] + `&nbsp;`;
    __child(create_div_p_footer, create_div_p_a_footer);
    if (i < footer_link_href.length - 1) {
      const create_div_p_dot_footer = " · ";
      _child(create_div_p_footer, create_div_p_dot_footer);
    }
  }
  __child(create_div_footer,create_div_p_footer);
  const create_div_p1_footer = createElement("p");
  class_list(create_div_p1_footer, "add", "footer-company-name");
  aria_lable(create_div_p1_footer, "Footer copyright information box");
  write_html(create_div_p1_footer,`Nirajan Khatiwada &copy; 2023 - <span id="this_year"></span>`);
  __child(create_div_footer,create_div_p1_footer);
  __child(just_created_footer,create_div_footer);
  const create_div1_footer = createElement("div");
  class_list(create_div1_footer, "add", "footer-right");
  aria_lable(create_div1_footer, "Footer Contact Section");
  __child(just_created_footer,create_div1_footer);
  const footer_right_side_icons = ["map-marker", "phone", "envelope"];
  const footer_right_side_icons_display_texts = [
    `<span>Street Name</span> Kathmandu, Nepal`,
    `<a href="tel:+9779813293262">+977 98 13293262</a>`,
    `<a href="mailto:contact@test.com">contact@test.com</a>`,
  ];
  const footer_contact_section_div_discription = [
    "Address",
    "Telephone",
    "Email",
  ];
  for (let i = 0; i < 3; i++) {
    const create_div1_div_footer = createElement("div");
    aria_lable(
      create_div1_div_footer,
      footer_contact_section_div_discription[i] + " section"
    );
    const create_div1_div_i_footer = createElement("i");
    aria_lable(
      create_div1_div_i_footer,
      footer_contact_section_div_discription[i] + " icon"
    );
    class_list(
      create_div1_div_i_footer,
      "add",
      `fa fa-${footer_right_side_icons[i]}`
    );
    __child(create_div1_div_footer,create_div1_div_i_footer);
    const create_div1_div_p_footer = createElement("p");
    aria_lable(
      create_div1_div_p_footer,
      "My " + footer_contact_section_div_discription[i]
    );
    write_html(create_div1_div_p_footer,footer_right_side_icons_display_texts[i]);
      __child(create_div1_div_footer,create_div1_div_p_footer);
    const just_created_div1_footer = search_css(".footer-right");
    __child(just_created_div1_footer,create_div1_div_footer);
  }
  const create_div2_footer = createElement("div");
  class_list(create_div2_footer, "add", "footer-r_l-center");
  aria_lable(create_div2_footer, "Link to new page (social media)");
  const create_div2_div_footer = createElement("div");
  class_list(create_div2_div_footer, "add", "footer-icons");
  __child(create_div2_footer,create_div2_div_footer);
  const create_div2_p_footer = createElement("p");
  aria_lable(
    create_div2_p_footer,
    "Links to Privacy Policy & Terms and Conditions pages"
  );
  class_list(create_div2_p_footer, "add", "footer-company-name privacy_terms");
  __child(create_div2_footer,create_div2_p_footer);
  __child(just_created_footer,create_div2_footer);
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
    const create_div2_div_a_footer = createElement("a");
    create_div2_div_a_footer.href = footer_center_icon_a_href[i];
    const create_div2_div_a_i_footer = createElement("i");
    create_div2_div_a_i_footer.setAttribute("role", "icon");
    aria_lable(
      create_div2_div_a_i_footer,
      `Icon that is linked to ${footer_center_icon_i_class[i]} page`
    );
    class_list(
      create_div2_div_a_i_footer,
      "add",
      `fa fa-${footer_center_icon_i_class[i]}`
    );
    __child(create_div2_div_a_footer,create_div2_div_a_i_footer);
    const just_created_div2_div_footer = search_css(".footer-icons");
    __child(just_created_div2_div_footer,create_div2_div_a_footer);
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
    const create_div2_p_a_footer = createElement("a");
    create_div2_p_a_footer.href = footer_privacy_terms_href[i];
    write_html(create_div2_p_a_footer,footer_privacy_terms_display_text[i] + "&nbsp;");
    const just_created_div2_p_footer = search_css(".privacy_terms");
    __child(just_created_div2_p_footer,create_div2_p_a_footer);
  }

  const footer = search_css(".footer-distributed");
  if (footer) {
    const new_element = createElement("div");
    aria_lable(
      new_element,
      "The name of the website coder is displayed in this part of footer section."
    );
    const date = new Date();
    const year = date.getFullYear();
    search_css("#this_year").innerHTML = year;
    class_list(new_element, "add", "web_coded");
    write_html(new_element, "<p>Coded by <a arial-lable='Link to web developer' role='link' href='https://ningsangjabegu.com.np/'>Ningsang Jabegu</a></p>");
    __child(footer,new_element);
  }
}
/* This function creates the iframe for bloggerspot (i.e. Blogger) */
function NK_BlogPostIframe() {
  const create_main = createElement("main");
  setAttribute(create_main, "id", "post_main");
  addIntoBody(create_main);
  const create_iframe_main = createElement("iframe");
  setAttribute(create_iframe_main, "role", "button");
  aria_lable(
    create_iframe_main,
    "My article from blogspot website embedded into my site"
  );
  class_list(create_iframe_main, "add", "blogspot_iframe");
  setAttribute(
    create_iframe_main,
    "src",
    "https://nirajankhatiwada.blogspot.com/"
  );
  setAttribute(create_iframe_main, "frameborder", "0");
  const just_created_main = search_css("#post_main");
  __child(just_created_main,create_iframe_main);
}
