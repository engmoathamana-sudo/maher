auth.onAuthStateChanged(function(user) {

  if (!user) {

    const currentPage =
      window.location.pathname.split("/").pop()
      + window.location.search;

    window.location.replace(
      "login.html?next=" +
      encodeURIComponent(currentPage)
    );

    return;
  }

  document.documentElement.classList.add(
    "authenticated"
  );

});
