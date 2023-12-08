# Avatar

Generates a random SVG avatar for any given identifier. Always generates the
same avatar for the same identifier.

## Install

```bash
npm install --save @monooso/avatar
```

## Usage

```javascript
import { svg } from "@monooso/avatar";

svg("some-identifier-string").then((avatar) => console.log(avatar));
```

## Credits

The avatars are generated using elements from
[the splendid Miniavs avatar builder](https://www.figma.com/community/file/923211396597067458),
by [Webpixels](https://www.figma.com/@webpixels).
