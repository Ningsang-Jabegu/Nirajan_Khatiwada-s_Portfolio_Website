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
export {createElement,aria_lable,class_list,image,setAttribute,__child,_child,addIntoBody}