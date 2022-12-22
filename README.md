# ibh
itsy-bitsy html template

![monster](https://user-images.githubusercontent.com/5373500/209004813-5e598cda-ef08-4fba-b82c-552d226c3566.png)

## Basic usage example:
```html
<body>
  <template id="my-template">
    <div>{{myVariable}}</div>
  </template>
</body>
```
```js
<script type="module">
  import * from 'https://unpkg.com/itsy-bitsy-html-template?module';  
  let elem1 = cloneTemplate({selector: '#my-template', variables: { myVariable: "What's up ?" } })
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
```
```js
<script type="module">
  import * from 'https://unpkg.com/itsy-bitsy-html-template?module';  
  let arr = [ {myVariable: 'This is one'}, {myVariable: 'This is two'} ]
  arr.map( item => document.appendChild(  cloneTemplate({selector: '#my-template', variables: item }) )    
</script>
```
Output:
```text
This is one
This is two
```
