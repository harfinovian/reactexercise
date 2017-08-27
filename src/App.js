/**
 * Created by harfi on 26/08/2017.
 */

import React, { Component } from 'react';
import { Container, Header, TabHeading, Icon, Text, Title, Item, Input, Content, Tab, Tabs } from 'native-base';

import Tab1 from './TabOne';
import Tab2 from './TabTwo';

export default class App extends Component {

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="md-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                </Header>
                <Tabs initialPage={1}>
                    <Tab heading={ <TabHeading><Text>Promo</Text></TabHeading>}>
                        <Tab1 />
                    </Tab>
                    <Tab heading={ <TabHeading><Text>Product</Text></TabHeading>}>
                        <Tab2 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
