---
layout: layouts/base.njk
eleventyImport:
  collections: ["recipies"]
eleventyNavigation:
  key: Recipies
  order: 3
---
# Recipies

<ul>
{%- for post in collections.post -%}
  <li>{{ post.data.title }}</li>
{%- endfor -%}
</ul>
