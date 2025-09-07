import { messegeElement } from "./elements";

export default function (message) {
  messegeElement.textContent = message ? `*${message}` : "";
}
