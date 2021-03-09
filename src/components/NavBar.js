import { Link } from '@rturnq/solid-router';
import logo from "../logo.svg";

export default () => {
  return (
    <nav>
      <Link href="/" class="logo">
        <img src={logo}></img> qU.GG
      </Link>
      <div class="search">
        <a
          href="#"
          onclick="location.href = '/search/' + encodeURIComponent(this.nextElementSibling.value)"
        >
          go
        </a>
        <input
          value=""
          data-search-value
          class="frosted"
          type="text"
          placeholder="Summoner or Champion"
        ></input>
      </div>
    </nav>
  );
};
