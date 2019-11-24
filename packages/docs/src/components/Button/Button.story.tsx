import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./index";

storiesOf("Button", module)
    .add("text", () => <Button>Hello World</Button>)
    .add("with emoji", () => (
        <Button>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ));
