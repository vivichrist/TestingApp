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

  import Topic from './Topic.svelte';
  import Category from './Category.svelte';
  import SubMenu from "./SubMenu.svelte";

  let cat_filter = {};
  for (const k of categories.keys()) {
    cat_filter[k] = true;
  }

  let top_filter = {};
  for (const k of topics.keys()) {
    top_filter[k] = true;
  }

  const filter_by = (f) => {
    if (f === "topics") {
      Object.values(top_filter).map(v => v = true);
      Object.values(cat_filter).map(v => v = false);
    } else if (f === "categories") {
      Object.values(cat_filter).map(v => v = true);
      Object.values(top_filter).map(v => v = false);
    } else {
      Object.entries(cat_filter).forEach(([k, v]) => v = f.some(e => e === k));
      Object.entries(top_filter).forEach(([k, v]) => v = f.some(e => e === k));
      if (Object.values(cat_filter).some() && Object.values(top_filter).some()) {
        data.forEach(e => refilter_maps(e));
      }
    };
  };

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

  window.$('[data-toggle="popover"]').popover({ container: 'body' });
</script>

<SubMenu />
{#each Array.from(categories) as [cat, thedata]}
  {#if cat_filter[cat]}
    <Category name="{cat[0].toUpperCase() + cat.substr(1)} Area"
              type={cat} data={thedata} filterfn={filter_by} />
  {/if}
{/each}
{#each Array.from(topics) as [topic, thedata]}
  {#if top_filter[topic]}
    <Topic name="{topic} Topic" type={topic} data={thedata}
           filterfn={filter_by} />
  {/if}
{/each}