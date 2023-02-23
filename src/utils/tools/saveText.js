export default function saveText(node) {
  /**
   * Takes DOM node and saves inner HTML
   * @argument node - DOM node containing text
   */
  return node ? node.innerHTML : "";
}
