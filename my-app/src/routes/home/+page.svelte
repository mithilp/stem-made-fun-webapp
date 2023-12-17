<script lang="ts">
  import { UploadCloud } from "lucide-svelte";
  import { useCompletion } from 'ai/svelte';
  import { enhance } from "$lib/form";
  import { onMount } from 'svelte';

  // import Carousel from '$lib/components/Carousel'
  let videos = ["https://www.youtube.com/embed/videoseries?si=aVW4TrCl_4JdxkKX&amp;list=PLhjLi_XV_ESKQTPXPfTOtNMov4xL5XgGJ", "https://www.youtube.com/embed/videoseries?si=aVW4TrCl_4JdxkKX&amp;list=PLhjLi_XV_ESKQTPXPfTOtNMov4xL5XgGJ"]
  const {
    input: promptInput1,
    handleSubmit: handlePromptSubmit1,
    completion: promptCompletion1,
    isLoading: responseIsLoading1
  } = useCompletion({ api: '/api/questions' });
  const {
    input: promptInput2,
    handleSubmit: handlePromptSubmit2,
    completion: promptCompletion2,
    isLoading: responseIsLoading2
  } = useCompletion({ api: '/api/define' });
  const {
    input: promptInput3,
    handleSubmit: handlePromptSubmit3,
    completion: promptCompletion3,
    isLoading: responseIsLoading3
  } = useCompletion({ api: '/api/examples' });

  //to make it work in an iframe, we have to get rid of everything after view?usp=sharing and replace it with /preview
  let pdfUrl = 'https://drive.google.com/file/d/1HK3NbKxDGYp6VbsQXbz4ftZPgMXDCTr4/preview'
  // let pdfUrl = 'https://ouallinator.com/blog/wp-content/uploads/2017/08/A-Very-Short-Story.pdf';

  let input = "";
  $: $promptInput1 = input;
  $: $promptInput2 = input;
  $: $promptInput3 = input;

  let playlist = 1;
</script>

<div class="h-screen grid grid-cols-2 grid-rows-1">
  <div class="bg-background h-screen flex flex-col gap-8 p-8">
    <div class="border-secondary border-4 h-[85vh] rounded-2xl">
      <div class="text-center border-b-4 border-secondary text-4xl text-secondary py-2 font-bold bg-accent rounded-t-xl">
        StemMadeFun Book
      </div>
      

      <!-- {#if stage==1}
      
      <div class="grid grid-cols-2 grid-rows-4 h-[30rem]">
        <button on:click={()=>{stage=2;}} class="col-span-1 row-span-2 bg-primary m-4 rounded-2xl text-2xl text-white font-bold -rotate-3">
          <div class="m-8 rounded-2xl">Open the StemMadeFun book!</div>
        </button>
        
        <div class="bg-primary text-white row-start-3 m-4 rounded-2xl -rotate-3 col-start-2 row-span-2 flex flex-col">
          <form 
          class="flex place-content-center col-span-1"
          method="POST" action="/api/upload" enctype="multipart/form-data" use:enhance>
            <div class="flex flex-col gap-4 py-16 text-center">
              <div class="grid place-items-center text-secondary">
                <input
                class="w-64"  
                type="file"
                id="pdf"
                name="pdf"
                accept=".pdf"
                required
                />
              </div>
              <button type="submit" class="w-64 bg-secondary text-white font-bold text-2xl p-2 rounded-2xl">
                Upload a file!
              </button>
            </div>
          </form>
        </div>

      </div>
      {:else}
        <iframe
          title="book"
          src={pdfUrl}
          class="w-[80%] h-[90%] my-2 mx-auto rounded-md"
          frameborder="2"
          role="document"
        ></iframe> 
      {/if} -->
      <iframe
          title="book"
          src={pdfUrl}
          class="w-[80%] h-[90%] my-2 mx-auto rounded-md"
          frameborder="2"
          role="document"
        ></iframe> 
      
    </div>

  </div>

  <!-- This is where the other half starts -->
  <div class="h-screen p-8 flex flex-col gap-8 place-items-center text-secondary border-l-2 border-primary" style="background-image: url('data:image/svg+xml,<svg id=\'patternId\' width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'><defs><pattern id=\'a\' patternUnits=\'userSpaceOnUse\' width=\'20\' height=\'20\' patternTransform=\'scale(2) rotate(0)\'><rect x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\' fill=\'hsla(235, 100%, 98%, 1)\'/><path d=\'M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z\' stroke-width=\'1\' stroke=\'hsla(259, 52%, 59%, 1)\' fill=\'none\'/></pattern></defs><rect width=\'800%25\' height=\'800%25\' transform=\'translate(0,0)\' fill=\'url(%23a)\'/></svg>');">
    <div class="bg-white p-4 border-4 border-secondary rounded-2xl w-[90%] grid place-items-center">
      <div class="font-bold text-3xl">
        Ask some questions!
      </div>
    </div>
    
    <div class="w-full bg-background h-[26rem] p-4 rounded-2xl border-secondary border-4">
      <form class="grid grid-cols-3 gap-1">
        <input
        bind:value={input}
        class="h-16 p-2 rounded-xl border-2 mx-auto border-primary w-full text-center text-secondary col-span-3"
        placeholder="Enter your query!" 
        />
        <button on:click={(e)=>{e.preventDefault; $promptCompletion1=""; $promptCompletion2=""; $promptCompletion3="";  handlePromptSubmit1(e);}} class="bg-primary text-white font-bold font-2xl p-4 mx-auto w-full rounded-xl">Ask</button>
        <button on:click={(e)=>{e.preventDefault; $promptCompletion1=""; $promptCompletion2=""; $promptCompletion3=""; handlePromptSubmit2(e);}} class="bg-primary text-white font-bold font-2xl p-4 mx-auto w-full rounded-xl">Define</button>
        <button on:click={(e)=>{e.preventDefault; $promptCompletion1=""; $promptCompletion2=""; $promptCompletion3=""; handlePromptSubmit3(e);}} class="bg-primary text-white font-bold font-2xl p-4 mx-auto w-full rounded-xl">Examples</button>
      </form>

      {#if $promptCompletion1!==""}
        {$promptCompletion1}
      {:else if $promptCompletion2!==""}
        {$promptCompletion2}
      {:else if $promptCompletion3!==""}
        {$promptCompletion3}
      {:else}
        {$promptCompletion1}
      {/if}
    </div>
    <div class="grid grid-cols-3">
      <div class="bg-white p-4 col-span-3 text-xl font-bold text-secondary rounded-t-2xl border-4 border-secondary text-center">
        Follow along with StemMadeFun Videos!
      </div>
      <button on:click={()=>{playlist=1}} class="font-bold text-center bg-white border-secondary border-4 border-t-0 rounded-bl-2xl">
        Unit 1
      </button>
      <button on:click={()=>{playlist=2}} class="font-bold text-center bg-white border-secondary border-b-4">
        Unit 2
      </button>
      <button on:click={()=>{playlist=3}} class="font-bold text-center bg-white border-secondary border-4 border-t-0 rounded-br-2xl">
        Unit 3
      </button>

    </div>


    <div class="flex flex-col">
      {#if playlist == 1}
        <iframe class="border-4 border-secondary rounded-md" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=aVW4TrCl_4JdxkKX&amp;list=PLhjLi_XV_ESKQTPXPfTOtNMov4xL5XgGJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {:else if playlist == 2}
        <iframe class="border-4 border-secondary rounded-md" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=nVTgP4FrdRUOURIP&amp;list=PLhjLi_XV_ESIr79cD6AHbdR0qOqdWo-nP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {:else}
        <iframe class="border-4 border-secondary rounded-md" width="560" height="315" src="https://www.youtube.com/embed/Cu3c--lmUT8?si=qOeWE6eIeBwgRojp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {/if}

    </div>

  </div>
</div>