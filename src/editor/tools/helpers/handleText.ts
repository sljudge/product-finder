export default function handleText(
  container: HTMLElement,
  data: string,
  classes: string[],
  withLinebreaks: boolean = false
) {
  container.contentEditable = "true";
  container.classList.add("min-w-24");
  container.innerText = data || "";

  if (!data) {
    container.classList.add("placeholder");
  }

  if (classes) {
    classes.forEach((className) => container.classList.add(className));
  }

  container.oninput = () => {
    if (container.innerHTML.length !== 0) {
      container.classList.remove("placeholder");
    } else {
      container.classList.add("placeholder");
    }
  };
}
