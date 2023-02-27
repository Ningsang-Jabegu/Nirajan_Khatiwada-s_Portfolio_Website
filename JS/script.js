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
