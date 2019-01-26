import "@polymer/polymer/polymer-element";
import "@polymer/iron-icon/iron-icon";
import "@polymer/iron-iconset-svg/iron-iconset-svg";

import defs from "./defs.scss";

const documentContainer = document.createElement("template");
documentContainer.innerHTML = `<dom-module id="shared-styles"><template><style>${defs}</style></template></dom-module>`;
if (document && document.head) document.head.appendChild(documentContainer);
