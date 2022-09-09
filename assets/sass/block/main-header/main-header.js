const userNavigation__search = document.querySelector(
  ".user-navigation__search input"
);

userNavigation__search.onfocus = () => {
  const search = document.querySelector(".user-navigation__search");
  search.classList.remove("user-navigation__search--disabled");
  userNavigation__search.onblur = () => {
    search.classList.add("user-navigation__search--disabled");
  };
};
