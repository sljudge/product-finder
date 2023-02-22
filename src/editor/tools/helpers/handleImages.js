const fileIcon = '<i class="image-handler-icon far fa-file-image"></i>';
const trashIcon = '<i class="image-handler-icon fas fa-trash-alt"></i>';
const timerIcon = '<i class="image-handler-icon fas fa-hourglass-start"></i>';

export default function handleImages(
  container: HTMLElement,
  imgUrl: string,
  classes: string[]
) {
  /**
   * Function to add drag and drop and file input functionality to a div
   *
   * @argument container - div container that takes image
   * @argument imgUrl - url to be added to div
   * optional @argument classes -  array of classes to add to container. Defaults to background: contain
   */

  //OPTIONS
  //apply base classes
  // ['relative', 'bg-center', 'bg-contain', 'bg-no-repeat', 'bg-gray-400'].forEach(item => container.classList.add(item))
  //Add optional classes to container
  if (classes) {
    classes.forEach((item) => container.classList.add(item));
  }

  //IMAGE
  //if imgUrl is supplied to add to container
  if (imgUrl?.length) {
    container.style.backgroundImage = `url(${imgUrl})`;
  }

  // IMG BUTTON
  //remove image on click
  const handleRemovalClick = () => {
    container.style.backgroundImage = "";
    fileInput.classList.remove("hidden"); // reinstate file input
    placeholder.innerHTML = fileIcon; // change to file icon
    placeholder.classList.remove("hover:bg-red-700");
    placeholder.removeEventListener("click", handleRemovalClick); //remove 'click'
  };
  //Create button with placeholder and file input
  function createImgButton(container) {
    const imgButton = document.createElement("div");

    const placeholder = document.createElement("div");
    placeholder.className +=
      "absolute top-0 right-0 img-placeholder z-20 bg-gray-200 opacity-75 cursor-pointer";

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.className +=
      "absolute top-0 right-0 w-20 h-20 z-30 opacity-0 cursor-pointer";

    //handle image upload
    fileInput.onchange = (e) => {
      let dt = e.target;
      let files = dt.files;
      handleFiles(files);
    };
    //hover effect for placeholder
    fileInput.onmouseenter = () => {
      placeholder.classList.add("bg-green-400");
    };
    fileInput.onmouseleave = () => {
      placeholder.classList.remove("bg-green-400");
    };

    //check if img already present
    if (container.style.backgroundImage) {
      placeholder.innerHTML = trashIcon; // change to trash icon
      placeholder.className += " hover:bg-red-400 hover:opacity-100";
      placeholder.addEventListener("click", handleRemovalClick);
      fileInput.classList.add("hidden");
    } else {
      placeholder.innerHTML = fileIcon; // change to file icon
    }

    imgButton.appendChild(fileInput);
    imgButton.appendChild(placeholder);
    container.appendChild(imgButton);

    return imgButton;
  }
  const imgButton = createImgButton(container);
  const placeholder = imgButton.querySelector(".img-placeholder");
  const fileInput = imgButton.querySelector("input");

  //DRAG & DROP FOR CONTAINER
  //prevent defaults
  function preventDefaults(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
  }
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) =>
    container.addEventListener(eventName, (e) => preventDefaults, false)
  );
  //highlight on drag over
  function highlight(e: DragEvent) {
    container.classList.add("border-8");
    container.classList.add("border-blue-500");
    container.children.forEach((child) => {
      child.classList.add("pointer-events-none");
    });
  }
  ["dragenter", "dragover"].forEach((eventName) =>
    container.addEventListener(eventName, highlight, false)
  );
  //unhighlight on drag leave
  function unhighlight(e) {
    container.classList.remove("border-8");
    container.classList.remove("border-blue-500");
    container.children.forEach((child) => {
      child.classList.remove("pointer-events-none");
    });
  }
  ["dragleave", "drop"].forEach((eventName) =>
    container.addEventListener(eventName, unhighlight, false)
  );

  //HANDLE FILE UPLOAD
  function handleFiles(files) {
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    //load image
    reader.onloadstart = () => {
      fileInput.classList.add("hidden"); // hide file input
      container.style.backgroundImage = "none"; // remove background image
      placeholder.innerHTML = timerIcon; // change to timer icon
      placeholder.classList.add("bg-blue-500");
    };
    //image loaded
    reader.onloadend = () => {
      container.style.backgroundImage = `url(${reader.result})`; // update image
      placeholder.innerHTML = trashIcon; // change to file icon
      placeholder.classList.add("hover:bg-red-300");
      placeholder.classList.remove("bg-blue-500");
      placeholder.addEventListener("click", handleRemovalClick); //remove img
    };
  }

  //HANDLE DROP
  function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
  }
  container.addEventListener("drop", handleDrop, false);
}
