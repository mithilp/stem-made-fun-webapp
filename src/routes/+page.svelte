<script>
  import { goto } from '$app/navigation';
	import { Heart, Smartphone } from 'lucide-svelte';

</script>

<div class="flex flex-col overflow-hidden h-screen" style="background-image: url('data:image/svg+xml,<svg id=\'patternId\' width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'><defs><pattern id=\'a\' patternUnits=\'userSpaceOnUse\' width=\'20\' height=\'20\' patternTransform=\'scale(2) rotate(0)\'><rect x=\'0\' y=\'0\' width=\'100%25\' height=\'100%25\' fill=\'hsla(235, 100%, 98%, 1)\'/><path d=\'M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z\' stroke-width=\'1\' stroke=\'hsla(259, 52%, 59%, 1)\' fill=\'none\'/></pattern></defs><rect width=\'800%25\' height=\'800%25\' transform=\'translate(0,0)\' fill=\'url(%23a)\'/></svg>');">
  <div class="h-screen flex flex-col col-span-3">
    
    <div class="flex-1 w-full">
      <div class="animate-text my-16 bg-white border-4 border-secondary w-[90%] h-80 mx-auto grid place-items-center rounded-3xl">
        <div class="text-justify w-[26.5rem] text-secondary">
          <h1 class="text-7xl font-bold uppercase">
            Education
          </h1>
          <p class="text-7xl font-light">
            AT YOUR FINGERTIPS
          </p>
        </div>
      </div>
      <div class="w-full mx-auto grid place-items-center relative">
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512" class="absolute h-4 w-4 top-4 left-[25%] transform -translate-x-1/2 animate-spark1 z-30">
          <path fill="#58389d" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512" class="absolute h-4 w-4 bottom-4 right-[25%] transform -translate-x-1/2 animate-spark2 z-30">
          <path fill="#58389d" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        </svg>
        <button on:click={()=>{goto('/home'); console.log("yay")}} class="z-50 animate-button h-16 border-4 w-48 bg-white border-secondary text-secondary rounded-full  hover:scale-110 transition-all duration-500 ease-in-out">Jump In</button>
      </div>
    </div>
  </div>


  <div class="h-[100vh] flex flex-col col-span-4">
    <div class="h-44 grid place-items-center">
      <div class="uppercase text-center font-bold text-6xl text-secondary bg-white border-4 border-secondary rounded-2xl p-6">
        A Project For StemMadeFun
      </div>
    </div>
    <div class="bg-[#9278ca] flex-1 rounded-lg">
      <!-- <div class="text-secondary absolute left-[55%] top-[85%] scale-[8] rotate-12">
        <Heart />
      </div> -->
    </div>
  </div>
</div>
<style>
  @keyframes sparkAnimation1 {
    0%, 100% {
      transform: translateY(0) translateX(0) rotate(0deg) scale(2);
    }
    50% {
      transform: translateY(-10px) translateX(5px) rotate(180deg) scale(2.5);
    }
  }
  @keyframes sparkAnimation2 {
    0%, 100% {
      transform: translateY(0) translateX(0) rotate(0deg) scale(2);
    }
    50% {
      transform: translateY(15px) translateX(-5px) rotate(-180deg) scale(2.5);
    }
  }
  @keyframes buttonAnimation {
    0%, 100% {
      transform: scale(1) rotate(-2.5deg);
    }
    50% {
      transform: scale(1.1) rotate(2.5deg);
    }
  }
  @keyframes textAnimation {
    0%, 100% {
      transform: scale(1) rotate(.5deg);
    }
    50% {
      transform: scale(1.01) rotate(-.5deg);
    }
  }
  
.animate-spark1 {
  animation: sparkAnimation1 2.7s infinite ease-in-out;
}
.animate-spark2 {
animation: sparkAnimation2 3s infinite ease-in-out;
}
.animate-button {
  animation: buttonAnimation 3s infinite ease-in-out;
}
.animate-text {
  animation: textAnimation 3s infinite ease-in-out;
}
</style>