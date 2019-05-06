import React from 'react';
import { Flex, Heading, Card, Text } from 'components/library';

export default function Dashboard() {
  return (
    <Flex alignItems="center" data-e2e="dashboard">
      <Card width={1 / 2}>
        <Heading>Hello</Heading>
      </Card>
      <Card width={1 / 2}>
        <Text>Grid</Text>
      </Card>
    </Flex>
  );
}
