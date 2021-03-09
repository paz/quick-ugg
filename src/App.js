import "./App.css";

import { Router, pathIntegration, useRoute } from '@rturnq/solid-router';

import SearchPage from './pages/Search'
import IndexPage from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router integration={pathIntegration()}>
      <Root />
    </Router>
  );
}

import { Switch } from 'solid-js';
import { MatchRoute } from '@rturnq/solid-router';

function Root() {
  return (
    <>
      <NavBar />
      <main>
        <Switch fallback={<h1>404</h1>}>
          <MatchRoute end>
            <IndexPage />
          </MatchRoute>
          <MatchRoute path="search/:q">
            <SearchPage q={route.params.q}/>
          </MatchRoute>
        </Switch>
      </main>
    </>
  );
}

window.onload = function() {
  document.querySelectorAll("[data-search-value]").forEach(e => {
    if(location.href.split('/search/').length > 1) e.value = location.href.split('/search/').pop();
    e.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        e.previousElementSibling.click();
      }
    });
  })
}

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.querySelector("html").classList.add("dark");
  localStorage.setItem("dark", "true");
} else {
  document.querySelector("html").classList.add("light");
  localStorage.setItem("dark", "false");
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const scheme = e.matches ? "dark" : "light";
    if (scheme == "dark") {
      document.querySelector("html").classList.add("dark");
      document.querySelector("html").classList.remove("light");
      localStorage.setItem("dark", "true");
    } else {
      document.querySelector("html").classList.add("light");
      document.querySelector("html").classList.remove("dark");
      localStorage.setItem("dark", "false");
    }
  });

export default App;
