import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Footer,FooterTab,Button, Text } from 'native-base';
export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="arrow-back" />
            <Input placeholder="Search Twitter" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button> 
        </Header>

        <Footer>
           <FooterTab>
           <Button active vertical>
                 <Text>All</Text>
              </Button>
              <Button vertical>
                 <Text> Mentions </Text>
              </Button>
              <Button>                                  
                  <Icon active name="settings"/>  
              </Button>
            </FooterTab>
        </Footer> 
      </Container> 
    );
  }
}

