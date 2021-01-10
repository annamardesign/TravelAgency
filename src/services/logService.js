import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import {toast} from 'react-toastify';

function init() {
  Sentry.init({
    dsn: "https://b9191224c5f8401e914be17da2e2b9cd@o498767.ingest.sentry.io/5576578",
    autoSessionTracking: true,
    integrations: [
      new Integrations.BrowserTracing(),
    ],
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
  toast.error("An unexpected error occured");
}

export default {
  init,
  log
};
