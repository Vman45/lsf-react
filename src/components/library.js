import React from 'react';
import {
  Box as RebassBox,
  Flex as RebassFlex,
  Card as RebassCard,
  Heading as RebassHeading,
  Text as RebassText,
  Link as RebassLink,
  Button as ReabssButton
} from 'rebass';

const Box = props => <RebassBox {...props} />;
const Card = props => <RebassCard {...props} mx="auto" />;
const Flex = props => <RebassFlex {...props} />;
const Heading = props => <RebassHeading {...props} />;
const Text = props => <RebassText {...props} />;
const Link = props => <RebassLink {...props} />;
const Button = props => <ReabssButton {...props} />;

export { Box, Card, Flex, Heading, Text, Button, Link };
