let open_sidebar = document.getElementById("open_sidebar");
let close_sidebar = document.getElementById("close_sidebar");
let sidebar_wrapper = document.getElementById("sidebar_wrapper");
let sidebar = document.getElementById("sidebar");

const openSidebar = () => {
  sidebar_wrapper.classList.remove("invisible", "opacity-0");
  sidebar.classList.remove("-left-full");
  sidebar.classList.add("left-0");
};

const closeSidebar = () => {
  sidebar_wrapper.classList.add("invisible", "opacity-0");
  sidebar.classList.add("-left-full");
  sidebar.classList.remove("left-0");
};

open_sidebar.addEventListener("click", openSidebar);
sidebar_wrapper.addEventListener("click", closeSidebar);
close_sidebar.addEventListener("click", closeSidebar);
sidebar.addEventListener("click", (e) => e.stopPropagation());
