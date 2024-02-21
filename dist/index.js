import { jsxs, jsx } from 'react/jsx-runtime';
import { createRoot } from 'react-dom/client';
import { i18n } from '@lingui/core';
import { I18nProvider, Trans } from '@lingui/react';

/*eslint-disable*/const messages$1=JSON.parse("{\"mY42CM\":\"Hello World\",\"OVvBzN\":\"Hi World\"}");

/*eslint-disable*/const messages=JSON.parse("{\"mY42CM\":\"Bonjour le monde\",\"OVvBzN\":\"Salut le monde\"}");

i18n.load({
  fr: messages,
  en: messages$1
});
i18n.activate("en");
const container = document.getElementById("app-root");
const root = createRoot(container);
root.render(jsxs(I18nProvider, {
  i18n: i18n,
  children: [jsx(Trans, {
    children: "Hello World"
  }), jsx("div", {
    children: i18n._(
    /*i18n*/
    {
      id: "OVvBzN",
      message: "Hi World"
    })
  })]
}));
//# sourceMappingURL=index.js.map
