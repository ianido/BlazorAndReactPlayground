import { Progress } from './progressbar';
import * as React from 'react';
import { render } from "react-dom";

export function RenderProgressBar(count) {
    render(
        <Progress count={count} />, document.getElementById("reactProgressBar")
    );
}