<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Link } from '@inertiajs/vue3'

const props = defineProps({
  room: Object,
})

const channel = `rooms.${props.room.id}`
const track = ref(null)
const round = ref(null)
const playing = ref(props.room.is_playing)

const userCounter = ref(props.room.users_count)

// Todo : better presence reactivity

onMounted(() => {
  Echo.channel(channel)
    .listen('RoundStarted', (e) => {
      userCounter.value = e.round.room.users_count
      playing.value = true
      round.value = e.round
    })
    .listen('TrackPlayed', (e) => {
      props.room.value = e.room
      userCounter.value = e.room.users_count
      round.value = e.round
      track.value = e.track
    })
    .listen('RoundFinished', (e) => {
      userCounter.value = e.round.room.users_count
      playing.value = false
      round.value = e.round
      round.value.current = 0
    })
})

onUnmounted(() => {
  Echo.leave(channel)
})
</script>
<template>
  <Link :href="`/rooms/${room.slug}`" class="swiper-lazy relative flex h-52 w-full flex-col items-center justify-center rounded-md bg-neutral-800 bg-cover bg-center transition duration-100 ease-in-out hover:z-10 hover:scale-110" :style="`background-image: url(${room.photo_src ? room.photo_src : room.photo});`">
    <article class="relative h-full w-full">
      <div class="swiper-lazy-preloader"></div>
      <div v-if="!room.is_public && room.owner" class="ribbon truncate text-xs">@{{ room.owner.name }}</div>
      <div class="absolute top-0 left-0 w-auto rounded-br-md rounded-tl-md bg-neutral-800 p-3 text-sm text-white ease-in-out hover:scale-110">
        <div class="flex items-center">
          <span v-if="room.password" class="mr-1 font-bold text-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" :title="__('Password protected')">
              <title>{{ __('Password protected') }}</title>
              <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
            </svg>
          </span>
          <span v-if="!room.is_autostart" class="mr-1 font-bold text-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" :title="__('This room is in manual start mode.')">
              <title>{{ __('This room is in manual start mode.') }}</title>
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
            </svg>
          </span>
          <Transition name="slide-fade">
            <svg v-if="playing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-1 h-4 w-4 animate-pulse">
              <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
            </svg>
          </Transition>
          <span class="font-semibold">{{ userCounter }}</span>
        </div>
      </div>

      <div class="absolute bottom-0 flex w-full items-center justify-between gap-2 bg-neutral-900 py-2 text-sm uppercase text-gray-100">
        <h3 class="truncate font-semibold"><span class="hidden">Blind Test </span>{{ room.name }}</h3>
        <div class="whitespace-nowrap">{{ round ? round.current : room.current_track_index }} / {{ room.tracks_by_round }}</div>
      </div>
    </article>
  </Link>
</template>
