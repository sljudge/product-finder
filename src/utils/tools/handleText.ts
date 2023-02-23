export default function handleText(
  parent: HTMLElement,
  data: string,
  classes: string[] | string,
  id: string
) {
  const container = document.createElement("div");
  container.id = id;
  parent.appendChild(container);

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
