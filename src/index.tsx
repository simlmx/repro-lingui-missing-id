import React from "react";
import { createRoot } from "react-dom/client";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { Trans, t } from "@lingui/macro";

import { messages as messagesEn } from "./locales/en/messages.mjs";
import { messages as messagesFr } from "./locales/fr/messages.mjs";

i18n.load({ fr: messagesFr, en: messagesEn });
i18n.activate("en");

const container = document.getElementById("app-root")!;
const root = createRoot(container);

root.render(
  <I18nProvider i18n={i18n}>
    <Trans>Hello World</Trans>
    <div>{t`Hi World`}</div>
  </I18nProvider>
);
