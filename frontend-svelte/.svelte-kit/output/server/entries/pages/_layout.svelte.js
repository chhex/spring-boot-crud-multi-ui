import { h as head, c as pop, p as push } from "../../chunks/index2.js";
import { e as escape_html } from "../../chunks/escaping.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Clients - Svelte CRUD</title>`;
  });
  $$payload.out += `<div class="min-h-screen bg-gray-200 text-gray-900 flex flex-col"><main class="flex-1 container mx-auto p-6">`;
  children($$payload);
  $$payload.out += `<!----></main> <footer class="text-sm text-gray-500 text-center py-4 flex items-center justify-center gap-3">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Christoph Henrici · Spring + Svelte CRUD Demo `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></footer></div>`;
  pop();
}
export {
  _layout as default
};
