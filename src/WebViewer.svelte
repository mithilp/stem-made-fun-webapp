<script>


  import { onMount, createEventDispatcher } from 'svelte';

  import WebViewer from '@pdftron/pdfjs-express-viewer';

  let instance = null;
  const dispatch = createEventDispatcher();

	onMount(async () => {
		const ele = document.getElementById('viewer');
	WebViewer({
      path: '/lib',
			initialDoc: '/files/demo.pdf',
			licenseKey: 'VMeLR5MsW5lX3X9YfqQF',
		}, ele).then(instance => {
			dispatch('ready', {
				instance
			})
		})
	});

</script>

<style>
	#viewer {
		width: 50%;
		height: 50%;
	}
</style>


<div id='viewer'>

</div>
