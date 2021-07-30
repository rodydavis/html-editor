import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { CodeEditor } from "../third_party/lit-code-editor/src/code-editor";
import { RichTextEditor } from "../third_party/lit-html-editor/src/rich-text-editor";

import "../third_party/lit-code-editor/src/code-editor";
import "../third_party/lit-html-editor/src/rich-text-editor";

@customElement("html-editor")
export class HTMLEditor extends LitElement {
  private codeEditor: Ref<CodeEditor> = createRef();
  private previewEditor: Ref<RichTextEditor> = createRef();
  code: string = this.children[0].innerHTML.trim();

  static styles = css`
    main {
      display: flex;
      flex-direction: row;
    }
    code-editor {
      width: 50%;
    }
    rich-text-editor {
      width: 50%;
      overflow-x: scroll;
    }
    @media screen and (max-width: 720px) {
      main {
        display: flex;
        flex-direction: column;
      }
      code-editor {
        display: none;
      }
      rich-text-editor {
        width: 100%;
        height: 100%;
      }
    }
  `;

  render() {
    return html`
      <main>
        <code-editor
          ${ref(this.codeEditor)}
          language="html"
          .code="${this.code}"
          @change=${() => {
            this.code = this.codeEditor.value!.getValue();
            this.previewEditor.value!.setValue(this.code);
          }}
        ></code-editor>
        <rich-text-editor
          ${ref(this.previewEditor)}
          content="${this.code}"
          @focusout=${() => {
            this.codeEditor.value!.setValue(this.code);
          }}
          @input=${() => {
            this.code = this.previewEditor.value!.getValue();
          }}
        ></rich-text-editor>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "html-editor": HTMLEditor;
  }
}
