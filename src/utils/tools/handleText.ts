export default function handleText(
  parent: HTMLElement | [HTMLElement, HTMLElement],
  data: string,
  classes: string[] | string,
  id: string
) {
  let container: HTMLElement;
  if (parent instanceof HTMLElement) {
    container = document.createElement("div");
    parent.appendChild(container);
  } else {
    container = parent[1];
    parent[0].appendChild(container);
  }
  container.id = id;

  container.contentEditable = "true";
  container.classList.add("min-w-24");
  container.innerText = data || "";

  if (!data) {
    container.classList.add("placeholder");
  }

  if (classes && typeof classes !== "string") {
    container.classList.add(...classes);
  } else if (classes) {
    container.className += ` ${classes}`;
  }

  container.oninput = () => {
    if (container.innerHTML.length !== 0) {
      container.classList.remove("placeholder");
    } else {
      container.classList.add("placeholder");
    }
  };
}
