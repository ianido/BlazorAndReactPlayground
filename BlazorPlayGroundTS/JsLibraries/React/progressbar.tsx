import * as React from 'react';
import { ProgressIndicator } from '@fluentui/react/lib/ProgressIndicator';

interface ProgressProps extends React.Props<any> {
    count: number;
}

export class Progress extends React.Component<ProgressProps, {}> {
    render() {
        return (
            <ProgressIndicator label="React Counter" description={this.props.count} percentComplete={(this.props.count % 10) * 0.1}></ProgressIndicator>
        )
    }
}

