import { useRoute } from '@rturnq/solid-router';

export default () => {
  let route = useRoute();
  let query = route.params.q;
  document.title = "qU.GG - " + query;
  return <h1>Searched for {query}</h1>;
};
