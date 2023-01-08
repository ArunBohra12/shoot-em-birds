export const createTextBox = function (text?: string, attributes?: Record<string, string>): void {
  const div = document.createElement("div");
  const span = document.createElement("span");

  // Add attributes to div element
  if (attributes) {
    for (const key in attributes) {
      div.setAttribute(key, attributes[key]);
    }
  }

  div.classList.add("text-box");
  span.classList.add("text-value");

  div.textContent = text || "";
  div.insertAdjacentElement("beforeend", span);

  document.body.append(div);
};
