---
layout: layouts/base.njk
eleventyNavigation:
  key: Sourdough Baking
  order: 5
---
<h1>Sourdough Baking Recipes</h1>

{% set sourdoughBaking = collections.all | 
    filter(post => post.data.tags and 
           post.data.tags.includes('Sourdough') and 
           post.data.tags.includes('Bake')) %}

{% if sourdoughBaking.length > 0 %}
  {% for post in sourdoughBaking %}
    <article>
      <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
      <time>{{ post.data.date | date("%B %d, %Y") }}</time>
      <p>Tags: {{ post.data.tags | join(", ") }}</p>
      {% if post.data.description %}
        <p>{{ post.data.description }}</p>
      {% endif %}
    </article>
  {% endfor %}
{% else %}
  <p>No sourdough baking recipes found.</p>
{% endif %}
