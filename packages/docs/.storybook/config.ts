import { configure, addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withInfo } from "@storybook/addon-info";
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import theme from "../src/theme";

addDecorator(withInfo);
addDecorator(withThemesProvider([theme]));
addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});

const req = require.context("../src/components", true, /.story.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
