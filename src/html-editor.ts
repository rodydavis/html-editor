import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("html-editor")
export class HTMLEditor extends LitElement {
  static styles = css``;

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "html-editor": HTMLEditor;
  }
}
