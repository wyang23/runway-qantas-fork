The `ExpandableCard` component creates a collapsible card with an optional hero image. It follows Qantas design patterns and uses existing components.

```jsx
<ExpandableCard
  title="Special Offers"
  imageUrl="https://images.pexels.com/photos/2873686/pexels-photo-2873686.jpeg"
  imageAlt="Airplane flying in blue sky"
>
  <p>Get exclusive deals on flights to popular destinations.</p>
  <p>Book now to save up to 20% on your next journey.</p>
</ExpandableCard>
```

```jsx
<ExpandableCard title="Travel Information">
  <p>Important updates about your travel requirements.</p>
  <ul>
    <li>Check-in times</li>
    <li>Baggage allowance</li>
    <li>Travel documents</li>
  </ul>
</ExpandableCard>
```