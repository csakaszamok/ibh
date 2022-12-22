<p align="center"><img src="https://user-images.githubusercontent.com/5373500/209004813-5e598cda-ef08-4fba-b82c-552d226c3566.png"></p>
<h2 align="center">ibh (itsy-bitsy html template)</h2>
<p align="center">
<strong>A very simple html template for you</strong>

## Basic usage example:
```html
<body>
  <template id="my-template">
    <div>{{myVariable}}</div>
  </template>
</body>

<script type="module">  
  import Ibh from 'https://cdn.jsdelivr.net/gh/csakaszamok/ibh/dist/ibh-0.1.0.min.js';
  const elem1 = Ibh.cloneTemplate({selector: '#my-template', variables: { myVariable: "What's up ?" } })
  document.appendChild(elem1)
</script>
```
Output:
```text
What's up ?
```

## Arrays example:
```html
<body>
  <template id="my-template">
    <div>{{myVariable}}</div>
  </template>
</body>

<script type="module">  
  import Ibh from 'https://cdn.jsdelivr.net/gh/csakaszamok/ibh/dist/ibh-0.1.0.min.js';
  const arr = [ {myVariable: 'This is one'}, {myVariable: 'This is two'} ]
  const selector = '#my-template'
  arr.map( item => document.appendChild(  Ibh.cloneTemplate({selector, variables: item }) )    
</script>
```
Output:
```text
This is one
This is two
```
