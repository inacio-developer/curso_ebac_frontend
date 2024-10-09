const failed = (msg) => {
  const span = document.querySelector(".msg__error");
  span.style.display = "block";
  span.innerText = msg;

  setTimeout(() => (span.style.display = "none"), 5000);
};

const getUser = () => {
  const btn = document.querySelector(".form__search");

  btn.addEventListener("click", submit);
};

const submit = (btn) => {
  btn.preventDefault();

  const input = document.querySelector(".form__username");
  const value = input.value;

  if (value.length > 0) fetchUser(value);
  else failed("Enter a valid username");
};

const fetchUser = async (value) => {
  const data = {
    avatar: "",
    username: "",
    name: "",
    repositories: 0,
    followers: 0,
    follows: 0,
    link: "",
  };

  const url = `https://api.github.com/users/${value}`;
  try {
    const res = await axios.get(url);
    data.avatar = res.data.avatar_url;
    data.username = res.data.login;
    data.name = res.data.name;
    data.repositories = res.data.public_repos;
    data.followers = res.data.followers;
    data.follows = res.data.following;
    data.link = res.data.html_url;
    innerHTML(data);
  } catch (error) {
    failed("This user does not exist");
    console.error(error);
  }
};

const innerHTML = ({
  avatar,
  username,
  name,
  repositories,
  followers,
  follows,
  link,
}) => {
  const body = document.querySelector("body");
  body.classList.remove("body-form");

  body.innerHTML = `<header>
  <div class="container">
    <img
      class="profile__avatar"
      src="${avatar}"
      alt="profile github pic"
    />
    <h1 class="profile__name">${name}</h1>
    <h2 class="profile__username">${username}</h2>
    <ul class="numbers">
      <li class="numbers__item">
        <h4>Repositories</h4>
        ${repositories}
      </li>
      <li class="numbers__item">
        <h4>Followers</h4>
        ${followers}
      </li>
      <li class="numbers__item">
        <h4>Following</h4>
        ${follows}
      </li>
    </ul>
    <a href="${link}" class="profile__link">see on github</a>
  </div>
</header>
`;
};

getUser();
