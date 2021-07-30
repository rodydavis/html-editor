import { LitElement } from "lit";
import "../third_party/lit-code-editor/src/code-editor";
import "../third_party/lit-html-editor/src/rich-text-editor";
export declare class HTMLEditor extends LitElement {
    private codeEditor;
    private previewEditor;
    code: string;
    static styles: import("lit").CSSResultGroup;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "html-editor": HTMLEditor;
    }
}
