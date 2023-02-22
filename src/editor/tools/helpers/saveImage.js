export default function saveImage(node) {
  /**
   * Takes DOM node and saves image url
   * @argument node - DOM node containing image
   */
  return node.style.backgroundImage.slice(4, -1).replace(/"/g, "");
}
