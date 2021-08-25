# SparkPost Programming Exercise

This is a pair coding exercise used by SparkPost for hiring Frontend Engineers. The goal is to read through, implement, and test the following user stories. The exercise is timeboxed at one hour. Not all of the stories need to be completed. Please focus more on understanding the problem and thinking through the solution rather than rushing.

## Preparation

This exercise and all frontend projects at SparkPost are built with our design system, [Matchbox](//design.sparkpost.com/). It includes documentation, [design tokens](//design.sparkpost.com/design/tokens) and a [React component library](//design.sparkpost.com/components/getting-started).

## User Stories

### 1. Users need a list of event types

AC

- List all event types as navigation items on the left

Notes

- The list of event types can be fetched at `GET /data/eventTypes.json`
- See [mock](./mocks/nav.png)

### 2. Users need details for each event type

AC

- Display event type label, description, and example in right panel on click
- Display first event type on load

Notes

- See [mock](./mocks/navAndDetails.png)

### 3. Users need a group filter

AC

- Provide a dropdown of unique event type groups
- Select first event type when group changes

Notes

- See [mock](./mocks/navDetailsAndGroups.png)
