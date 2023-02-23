export default function handleText(
  container: HTMLElement,
  data: string,
  classes: string[] | string,
  withLinebreaks: boolean = false
) {
  container.contentEditable = "true";
  container.classList.add("min-w-24");
  container.innerText = data || "";

  if (!data) {
    container.classList.add("placeholder");
  }

  if (classes && typeof classes !== "string") {
    classes.forEach((className) => container.classList.add(className));
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
