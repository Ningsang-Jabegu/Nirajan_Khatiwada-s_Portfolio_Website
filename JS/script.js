/* Function that create element */
function createElement(element) {
  return document.createElement(element);
}
/* Function that creates logo header */
function NK_header(src = "/images/main_logo_name.png") {
  const create_header = createElement("header");
  const create_div_header = document.createElement("div");
  create_div_header.setAttribute("aria-label", "Nirajan Khatiwada Logo Image");
  create_div_header.setAttribute("role", "banner");
  create_div_header.classList.add("name_logo");
  const create_img_header = createElement("img");
  create_img_header.setAttribute("src", src);
  create_img_header.setAttribute("alt", "Nirajan Khatiwada Text Image");
  create_img_header.classList.add("name_logo");
  create_div_header.appendChild(create_img_header);
  create_header.appendChild(create_div_header);
  document.body.appendChild(create_header);
}

/* Function that creates Navigation Bar */
function NK_navBar() {
  const create_nav = createElement("nav");
  const create_ul_nav = createElement("ul");
  create_ul_nav.setAttribute("arial-label", "Navigation Bar Container");
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
    const create_ul_li_nav = createElement("li");
    create_ul_li_nav.setAttribute("arial-lable", "Navigation Bar Element");
    const create_ul_li_a_nav = createElement("a");
    if (i == create_ul_nav_href.length - 1) {
      const create_ul_li_i = createElement("i");
      create_ul_li_i.classList.add("fa", "fas", "fa-bars");
      create_ul_li_nav.append(create_ul_li_i);
      const create_ul_li_div = createElement("div");
      create_ul_li_div.classList.add("dropdown-content");
      const create_ul_li_div_a_nav = createElement("a");
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
        [i].setAttribute("arial-selected", "true");
      body_ul_nav
        .querySelectorAll("li")
        [pages_name.length - 1].classList.add("dropdown");
      const dropdown_nav = body_ul_nav.querySelector(".dropdown");
      dropdown_nav.setAttribute("role", "button");
    }
  }
}

/* Function that creates homepage main introduction */
function NK_homepageMainIntroduction() {
  create_main = createElement("main");
  create_main.id = "homepage_main";
  document.body.appendChild(create_main);
  const create_div_main = createElement("div");
  create_div_main.setAttribute("arial-lable", "My Introduction Container");
  create_div_main.classList.add("introduction_myself");
  const create_div_p_main = createElement("p");
  create_div_p_main.setAttribute(
    "arial-lable",
    "My Introduction First Paragraph"
  );
  create_div_p_main.innerHTML = `I am <span class="name_intro">Nirajan Khatiwada</span>, the founder of <span class="org_intro" hreflang="ne">नेपाली
                    हाँस्यचित्र संस्थान</span>.`;
  create_div_main.appendChild(create_div_p_main);
  const create_div_p1_main = createElement("p");
  create_div_p1_main.setAttribute(
    "arial-lable",
    "My Introduction Second Paragraph"
  );
  create_div_p1_main.innerHTML = `I am pursuing a Bachelor of Science in Computer Science and Information Technology. My goal is to
                digitalize happiness and bring my dream world to life through my graphic design skills. I have over 3
                years experience in social media handling and IT sector and my passion is graphic design.`;
  create_div_main.appendChild(create_div_p1_main);
  const main_just_created = document.querySelector("#homepage_main");
  main_just_created.appendChild(create_div_main);
  const create_div1_main = createElement("div");
  create_div1_main.setAttribute("arial-lable", "Profile picture container");
  create_div1_main.classList.add("my_profile_picture");
  const create_div1_img_main = createElement("img");
  create_div1_img_main.setAttribute(
    "arial-lable",
    "My Profile Picture - Nirajan Khatiwada"
  );
  create_div1_img_main.src = "/images/profile.png";
  create_div1_main.appendChild(create_div1_img_main);
  main_just_created.appendChild(create_div1_main);
}

/*Function that creates homepage photo section*/
function NK_homepagePhotoSection() {
  const create_section = createElement("section");
  create_section.id = "photos";
  create_section.setAttribute("arial-lable", "Homepage photos section");
  document.body.appendChild(create_section);
  const just_created_div = document.querySelector("#photos");
  const create_h2_div = createElement("h2");
  create_h2_div.setAttribute("arial-lable", "Header for the images");
  create_h2_div.innerHTML = `Some Photos you might like`;
  just_created_div.appendChild(create_h2_div);
  const create_div_div = createElement("div");
  create_div_div.classList.add("photo_container");
  create_div_div.setAttribute("arial-lable", "all Photos container");
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
    create_div_span_div.setAttribute("arial-lable", "Single image box");
    create_div_span_div.classList.add("photo", `photo_${i + 1}`);
    photo_contener_created_previously.appendChild(create_div_span_div);
    const create_div_span_img_div = createElement("img");
    create_div_span_img_div.setAttribute("src", homepage_images[i]);
    create_div_span_img_div.setAttribute("title", homepage_images_alt_text[i]);
    create_div_span_img_div.alt = homepage_images_alt_text[i];
    create_div_span_div.appendChild(create_div_span_img_div);
  }
  const create_div_div_section = createElement("div");
  create_div_div_section.classList.add("photo_container_hide_0");
  for (let i = 0; i < 2; i++) {
    const create_button = createElement("button");
    create_button.classList.add("see_more_less");
    if (i == 0) {
      create_button.classList.add("see_less_0", "see_less");
      create_button.innerHTML = "See Less photos";
    } else {
      create_button.classList.add("see_more_0", "see_more");
      create_button.innerHTML = "See More photos";
    }
    create_div_div_section.appendChild(create_button);
  }
  photo_contener_created_previously.appendChild(create_div_div_section);
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
    create_div_span_section.setAttribute(
      "arial-lable",
      "Previously hidden image box"
    );
    create_div_span_section.classList.add(
      "photo_unhide_0",
      "photo",
      `photo_${i + 11}`
    );
    create_div_span_section.id = "hide_unhide_img";
    const create_div_span_img_section = createElement("img");
    create_div_span_img_section.src = `/images/Homepage_Image/img_${
      i + 11
    }.jpg`;
    create_div_span_img_section.title = create_div_span_title_section[i];
    create_div_span_section.appendChild(create_div_span_img_section);
    const just_created_photo_container =
      document.querySelector(".photo_container");
    let insert_before_me = document.querySelector(".photo_container_hide_0");
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
    create_div_span_section.setAttribute(
      "arial-lable",
      "Previously hidden image box"
    );
    create_div_span_section.classList.add(
      "photo_unhide_0",
      "photo",
      `photo_${i + 11}`
    );
    create_div_span_section.id = "hide_unhide_img";
    const create_div_span_img_section = createElement("img");
    create_div_span_img_section.src = `/images/Homepage_Image/img_${
      i + 11
    }.jpg`;
    create_div_span_img_section.title = create_div_span_title_section[i];
    create_div_span_section.appendChild(create_div_span_img_section);
    const just_created_photo_container =
      document.querySelector(".photo_container");
    let insert_before_me = document.querySelector(".photo_container_hide_0");
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
    child_0_l_search_span = parent_1.getElementsByTagName("span");
    for (let i = 0; i < child_0_l_search_span.length; i++) {
      if (child_0_l_search_span[i].classList.contains("see_less_0")) {
        break;
      } else {
        see_less_0_span = createElement("span");
        see_less_0_span.classList.add(
          "see_less_0",
          "see_more_less",
          "see_less"
        );
        see_less_0_span.innerHTML = "See Less Photos";
        parent_1.appendChild(see_less_0_span);
      }
    }
    child_0_l.style.display = "block";
    const child_1_create_span = createElement("span");
    child_1_create_span.classList.add(
      "see_more_1",
      "see_more_less",
      "see_more"
    );
    child_1_create_span.innerHTML = "See More Photos (1)";
    parent_1.appendChild(child_1_create_span);
    const just_created_see_more_1 = document.querySelector(".see_more_1");
    /*const see_more_less_photos_opt_container = document.createElement(".photo_container_hide_0");
    const create_see_less_1 = document.createElement("button");
    create_see_less_1.classList.add("see_more_less","see_less_1","see_less");
    see_more_less_photos_opt_container.appendChild(create_see_less_1); */
        just_created_see_more_1.addEventListener("click",function() {
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
  create_footer.classList.add("footer-distributed");
  document.body.appendChild(create_footer);
  const just_created_footer = document.querySelector(".footer-distributed");
  const create_div_footer = createElement("div");
  create_div_footer.classList.add("footer-left");
  create_div_footer.setAttribute("arial-label", "Quick pages navigation");
  const create_div_h3 = createElement("h3");
  create_div_h3.setAttribute("arial-lable", "My name as a logo for footer");
  create_div_h3.innerHTML = `Nirajan&nbsp;<span>Khatiwada</span>`;
  create_div_footer.appendChild(create_div_h3);
  const create_div_p_footer = createElement("p");
  create_div_p_footer.setAttribute("arial-lable", "all web pages link");
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
    const create_div_p_a_footer = createElement("a");
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
  const create_div_p1_footer = createElement("p");
  create_div_p1_footer.classList.add("footer-company-name");
  create_div_p1_footer.setAttribute(
    "arial-lable",
    "Footer copyright information box"
  );
  create_div_p1_footer.innerHTML = `Nirajan Khatiwada &copy; 2023 - <span id="this_year"></span>`;
  create_div_footer.appendChild(create_div_p1_footer);
  just_created_footer.appendChild(create_div_footer);
  const create_div1_footer = createElement("div");
  create_div1_footer.classList.add("footer-right");
  create_div1_footer.setAttribute("arial-lable", "Footer Contact Section");
  just_created_footer.appendChild(create_div1_footer);
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
    create_div1_div_footer.setAttribute(
      "arial-lable",
      footer_contact_section_div_discription[i] + " section"
    );
    const create_div1_div_i_footer = createElement("i");
    create_div1_div_i_footer.setAttribute(
      "arial-lable",
      footer_contact_section_div_discription[i] + " icon"
    );
    create_div1_div_i_footer.classList.add(
      "fa",
      `fa-${footer_right_side_icons[i]}`
    );
    create_div1_div_footer.appendChild(create_div1_div_i_footer);
    const create_div1_div_p_footer = createElement("p");
    create_div1_div_p_footer.setAttribute(
      "arial-lable",
      "My " + footer_contact_section_div_discription[i]
    );
    create_div1_div_p_footer.innerHTML =
      footer_right_side_icons_display_texts[i];
    create_div1_div_footer.appendChild(create_div1_div_p_footer);
    const just_created_div1_footer = document.querySelector(".footer-right");
    just_created_div1_footer.appendChild(create_div1_div_footer);
  }
  const create_div2_footer = createElement("div");
  create_div2_footer.classList.add("footer-r_l-center");
  create_div2_footer.setAttribute(
    "arial-lable",
    "Social Icons with links, Privacy Policy and Terms & Condition pages link container"
  );
  const create_div2_div_footer = createElement("div");
  create_div2_div_footer.classList.add("footer-icons");
  create_div2_footer.appendChild(create_div2_div_footer);
  const create_div2_p_footer = createElement("p");
  create_div2_p_footer.setAttribute(
    "arial-lable",
    "Links to Privacy Policy & Terms and Conditions pages"
  );
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
    const create_div2_div_a_footer = createElement("a");
    create_div2_div_a_footer.href = footer_center_icon_a_href[i];
    const create_div2_div_a_i_footer = createElement("i");
    create_div2_div_a_i_footer.setAttribute("role", "icon");
    create_div2_div_a_i_footer.setAttribute(
      "arial-lable",
      `Icon that is linked to ${footer_center_icon_i_class[i]} page`
    );
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
    const create_div2_p_a_footer = createElement("a");
    create_div2_p_a_footer.href = footer_privacy_terms_href[i];
    create_div2_p_a_footer.innerHTML =
      footer_privacy_terms_display_text[i] + "&nbsp;";
    const just_created_div2_p_footer = document.querySelector(".privacy_terms");
    just_created_div2_p_footer.appendChild(create_div2_p_a_footer);
  }

  const footer = document.querySelector(".footer-distributed");
  if (footer) {
    const new_element = createElement("div");
    new_element.setAttribute(
      "arial-lable",
      "The name of the website coder is displayed in this part of footer section."
    );
    const date = new Date();
    const year = date.getFullYear();
    document.querySelector("#this_year").innerHTML = year;
    new_element.classList.add("web_coded");
    new_element.innerHTML =
      "<p>Coded by <a arial-lable='Link to web developer' role='link' href='https://ningsangjabegu.com.np/'>Ningsang Jabegu</a></p>";
    footer.appendChild(new_element);
  }
}
/* This function creates the iframe for bloggerspot (i.e. Blogger) */
function NK_BlogPostIframe() {
  const create_main = createElement("main");
  create_main.id = "post_main";
  document.body.appendChild(create_main);
  const create_iframe_main = createElement("iframe");
  create_iframe_main.setAttribute("role", "button");
  create_iframe_main.setAttribute(
    "arial-lable",
    "My article from blogspot website embedded into my site"
  );
  create_iframe_main.classList.add("blogspot_iframe");
  create_iframe_main.setAttribute(
    "src",
    "https://nirajankhatiwada.blogspot.com/"
  );
  create_iframe_main.setAttribute("frameborder", "0");
  const just_created_main = document.querySelector("#post_main");
  just_created_main.appendChild(create_iframe_main);
}
