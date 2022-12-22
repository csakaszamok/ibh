# ibh
itsy-bitsy html template

![monster](https://user-images.githubusercontent.com/5373500/209004813-5e598cda-ef08-4fba-b82c-552d226c3566.png)

Basic usage example:

```
<body>
<template id="my-template">
<div>{{myVariable}}</div>
</template>
</body>
<script type="module">
  import {} from 'https://unpkg.com/lit-html?module';
  
  let card1 = cloneTemplate({ variables: { h2_caption: 'hahooooo' } })
  document.querySelector(".row").appendChild(card1)
</script>
```
