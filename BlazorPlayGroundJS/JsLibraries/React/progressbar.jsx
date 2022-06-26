import * as React from 'react';
import { ProgressIndicator } from '@fluentui/react/lib/ProgressIndicator';

export class Progress extends React.Component {
    render() {
        return (
            <ProgressIndicator label="React Counter" description={this.props.count} percentComplete={(this.props.count % 10) * 0.1}></ProgressIndicator>
        )
    }
}
