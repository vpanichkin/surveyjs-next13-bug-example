This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
2. Check console

## Current behaviour

```shell

⨯ node_modules/survey-core/survey.core.js (23699:0) @ ./src/popup-dropdown-view-model.ts.PopupDropdownViewModel.updateOnHiding
⨯ Internal error: ReferenceError: window is not defined
    at ./src/popup-dropdown-view-model.ts.PopupDropdownViewModel.updateOnHiding (./node_modules/survey-core/survey.core.js:23694:9)
    at onIsVisibleChangedHandler (./node_modules/survey-core/survey.core.js:24364:23)
    at ./src/popup-view-model.ts.PopupBaseViewModel.setupModel (./node_modules/survey-core/survey.core.js:24369:9)
    at PopupDropdownViewModel.set (./node_modules/survey-core/survey.core.js:24376:18)
    at PopupDropdownViewModel.PopupBaseViewModel [as constructor] (./node_modules/survey-core/survey.core.js:24295:21)
    at new PopupDropdownViewModel (./node_modules/survey-core/survey.core.js:23521:28)
    at createPopupViewModel (./node_modules/survey-core/survey.core.js:24234:16)
    at ./src/react/components/popup/popup.tsx.Popup.createModel (./node_modules/survey-react-ui/survey-react-ui.js:11885:94)
    at new Popup (./node_modules/survey-react-ui/survey-react-ui.js:11871:15)
    at app-page.runtime.dev.js:35:9134
    at ap (app-page.runtime.dev.js:35:10905)
    at e (app-page.runtime.dev.js:35:45795)
    at ah (app-page.runtime.dev.js:35:47773)
    at am (app-page.runtime.dev.js:35:49662)
    at ay (app-page.runtime.dev.js:35:48903)
    at e (app-page.runtime.dev.js:35:46144)
    at ah (app-page.runtime.dev.js:35:47773)
    at ap (app-page.runtime.dev.js:35:39008)
    at e (app-page.runtime.dev.js:35:45795)
    at ah (app-page.runtime.dev.js:35:47773)
    at ap (app-page.runtime.dev.js:35:39008)
    at e (app-page.runtime.dev.js:35:45795)
    at ah (app-page.runtime.dev.js:35:47773)
    at ae (app-page.runtime.dev.js:35:7504)
    at ap (app-page.runtime.dev.js:35:10920)
    at e (app-page.runtime.dev.js:35:45795)
    at ah (app-page.runtime.dev.js:35:47773)
    at am (app-page.runtime.dev.js:35:49662)
    at ay (app-page.runtime.dev.js:35:48903)
    at e (app-page.runtime.dev.js:35:46144)
    at ah (app-page.runtime.dev.js:35:47773)
    at am (app-page.runtime.dev.js:35:49662)
    at app-page.runtime.dev.js:35:38398
    at ap (app-page.runtime.dev.js:35:38871)
    at e (app-page.runtime.dev.js:35:45795)
    at ah (app-page.runtime.dev.js:35:47773)
    at am (app-page.runtime.dev.js:35:49662)
    at app-page.runtime.dev.js:35:38398
    at ap (app-page.runtime.dev.js:35:38871)
    at e (app-page.runtime.dev.js:35:45795)
    at ah (app-page.runtime.dev.js:35:47773)
    at ae (app-page.runtime.dev.js:35:7504)
    at ap (app-page.runtime.dev.js:35:10920)
    at e (app-page.runtime.dev.js:35:45795)
    at ah (app-page.runtime.dev.js:35:47773)
    at am (app-page.runtime.dev.js:35:49662)
    at ay (app-page.runtime.dev.js:35:48903)
    at e (app-page.runtime.dev.js:35:46144)
    at ah (app-page.runtime.dev.js:35:47773)
    at am (app-page.runtime.dev.js:35:49662)
null

```

## Expected behaviour

No error is happening, build runs also successfully.

## Versions tried

1. Next 13
2. Next 14