import React, { Component } from 'react';

import {
    Container,
    Group,
    Button
} from 'amazeui-touch'


module.exports = class UiButton extends Component {
    render() {
        return (
            <div>
                <Container {...this.props}>
                    <Group header="默认样式" paded/>
                    <Button>Default</Button>
                </Container>

            </div>
        )
    }
}