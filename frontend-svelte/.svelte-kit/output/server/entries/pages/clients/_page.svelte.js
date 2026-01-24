import { h as head, c as pop, p as push } from "../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Clients - Svelte CRUD</title>`;
  });
  $$payload.out += `<h1 class="text-2xl font-bold mb-6">Clients</h1> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="text-gray-600">Loading clients...</div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
