# Avatar
Generates a random SVG avatar for any given identifier. Always generates the same avatar for the same identifier.

## Usage

```typescript
import { generateSvg } from "https://deno.land/x/avatar@1.0.0/mod.ts";

const avatar = await generateSvg("some-identifier-string");
```

## Credits
The avatars are generated using elements from [the splendid Miniavs avatar builder](https://www.figma.com/community/file/923211396597067458), by [Webpixels](https://www.figma.com/@webpixels).
