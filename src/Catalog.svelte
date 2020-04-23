<script context="module">
  let categories = new Map();
  let topics = new Map();
  let data = [];

  const filter_maps = (obj) => {
    if (categories.has(obj.object)) {
      categories.get(obj.object).push(obj);
    } else {
      categories.set(obj.object, [obj]);
    };
    obj.topics.forEach(element => {
      if (topics.has(element)) {
        topics.get(element).push(obj);
      } else {
        topics.set(element, [obj]);
      };
    });
  };

  fetch(
    'https://agiledata-core-prd.appspot.com/tables/?apikey=977609nhgfty86HJKhjkl78')
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response for Catagory views was not ok');
    }
    return res.json()
  }).then(jsn => data = jsn.map(obj => {
      for (let key in obj) {
        if (!Array.isArray(obj[key])) {
          obj[key] = obj[key].replace(/[_.]/g, ' '); // remove underscores and dot
        } else {obj[key].sort();}
      }
      return obj;
  })).then(d => d.forEach(filter_maps));
</script>

<script>
  import { popup } from "./stores.js";
  window.hidePopups = () => window.$($popup).popover('hide');

  import Category from './Category.svelte';
  import SubMenu from "./SubMenu.svelte";

  let cat_filter = {};
  for (const k of categories.keys()) {cat_filter[k] = true;}

  let top_filter = {};
  for (const k of topics.keys()) {top_filter[k] = true;}

  const reset_maps = () => {
    categories.clear();
    topics.clear();
  }

  const compareKV = (a, b) => {
      return a[1].length - b[1].length;
  }


 const refilter_maps = (obj) => {
    if (cat_filter[obj.object]) {
      if (categories.has(obj.object)) {
        categories.get(obj.object).push(obj);
      } else {
        categories.set(obj.object, [obj]);
      };
      obj.topics.forEach(element => {
        if (top_filter[element]) {
          if (topics.has(element)) {
            topics.get(element).push(obj);
          } else {
            topics.set(element, [obj]);
          };
        };
      });
    };
  };

  const filter_by = (f) => {
    if (typeof f === "string") {
      if        (f === "reset") {
        reset_maps();
        data.forEach(e => filter_maps(e));
        for (const k of categories.keys()) {cat_filter[k] = true;}
        for (const k of     topics.keys()) {top_filter[k] = true;}
      } else if (f === "topics") {
        for (const k of     topics.keys()) {top_filter[k] = true;}
        for (const k of categories.keys()) {cat_filter[k] = false;}
      } else {
        if (Object.keys(cat_filter).some(e => e === f)) {
          for (const k of Object.keys(cat_filter)) {cat_filter[k] = k === f;}
          for (const k of Object.keys(top_filter)) {top_filter[k] = false;}
          reset_maps();
          data.forEach(e => refilter_maps(e));
        }
      };
    } else if (Array.isArray(f)) { // an array of strings
      if (Object.keys(cat_filter).some(e => f.some(k => k === e))) {
        for (const k of categories.keys()) {
          cat_filter[k] = f.some(d => d === k);
        }};
      if (Object.keys(top_filter).some(e => f.some(k => k === e))) {
        for (const k of topics.keys()) {
          top_filter[k] = f.some(d => d === k);
        }};
      data.forEach(e => refilter_maps(e));
    };
  };

  window.$('[data-toggle="popover"]').popover({ container: 'body' });
</script>

<SubMenu filterfn={filter_by}/>
{#each Array.from(categories) as [cat, thedata]}
  {#if cat_filter[cat]}
    <Category name="{cat[0].toUpperCase() + cat.substr(1)} Area"
              type={cat} data={thedata} filterfn={filter_by} />
  {/if}
{/each}
{#each Array.from(topics) as [topic, thedata]}
  {#if top_filter[topic]}
    <Category name="{topic} Topic" type={topic} data={thedata}
              filterfn={filter_by} />
  {/if}
{/each}