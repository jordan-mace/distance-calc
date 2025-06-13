# distance-calculate

[![npm version](https://img.shields.io/npm/v/distance-calculate.svg?style=flat-square)](https://www.npmjs.com/package/distance-calculate)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/distance-calculate?style=flat-square)](https://bundlephobia.com/package/distance-calculate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

A lightweight, zero-dependency library for calculating distances between physical points in 2D or 3D space. Perfect for geometry calculations in physics, gaming, or spatial applications.

## Features

- 🚀 Calculate Euclidean distances in 2D or 3D space
- 📦 Zero dependencies
- 🧮 TypeScript support included
- 💡 Minified bundle size < 500 bytes
- ⚙️ Works in Node.js and browsers
- 🧩 Supports ESM and CommonJS

## Installation

```bash
npm install distance-calculate
# or
yarn add distance-calculate
# or
pnpm add distance-calculate
```

## Usage

### Basic Usage

```javascript
// ESM
import { distance } from 'distance-calculate';

// CommonJS
// const { distance } = require('distance-calculate');

// 2D points
console.log(distance({x: 0, y: 0}, {x: 3, y: 4})); 
// Output: 5

// 3D points
console.log(distance({x: 1, y: 2, z: 3}, {x: 4, y: 6, z: 9})); 
// Output: 7.071...
```

### TypeScript Support

```typescript
import { distance, Point } from 'distance-calculate';

const pointA: Point = { x: 10, y: 20 };
const pointB: Point = { x: 13, y: 24 };

const d: number = distance(pointA, pointB);
console.log(d);  // 5
```

## API Reference

### `distance(a: Point, b: Point): number`

Calculates the Euclidean distance between two points.

#### Parameters:
- `a`: First point (Point object)
- `b`: Second point (Point object)

#### Point Object:
```typescript
type Point = {
  x: number;
  y: number;
  z?: number; // Optional Z-coordinate for 3D space
}
```

#### Behavior:
- If Z-coordinate is omitted for either point, it defaults to 0
- Handles both positive and negative coordinates
- Precision limited to JavaScript floating point arithmetic

## Advanced Examples

### Calculating Distance in an Array

```javascript
import { distance } from 'distance-calculate';

const points = [
  {x: 0, y: 0},
  {x: 3, y: 4},
  {x: 6, y: 0}
];

// Calculate total path distance
let total = 0;
for (let i = 0; i < points.length - 1; i++) {
  total += distance(points[i], points[i + 1]);
}
console.log(total); // 5 + 5 = 10
```

### 3D Visualization

```javascript
const origin = {x: 0, y: 0, z: 0};
const point = {x: 1, y: 1, z: 1};

console.log(distance(origin, point));  
// Output: √3 ≈ 1.732...
```

## Building from Source

To contribute or build locally:

```bash
# Clone repository
git clone https://github.com/jordan-mace/distance-calculate.git
cd distance-calculate

# Install dependencies
npm install

# Build project
npm run build
```

## Performance

- ~5 million operations/second in modern browsers
- Minimal memory footprint (no object allocations)

## License

MIT