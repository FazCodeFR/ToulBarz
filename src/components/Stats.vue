<template>
  <div class="bg-primary py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            L'asso en quelques chiffres
          </h2>
        </div>
        <dl class="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.id" class="flex flex-col bg-gray-900 p-8">
            <dt class="text-lg font-semibold leading-7 text-gray-300">{{ stat.name }}</dt>
            <dd class="order-first text-5xl font-bold tracking-tight text-accent">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  const stats = [
    { id: 1, name: 'Adhérents', value: '56 ' },
    { id: 2, name: 'Bénévoles', value: '18' },
    { id: 3, name: 'Élèves rencontrés ', value: '426' },
    { id: 4, name: 'Personnes initiées', value: '368' },
  ]
  </script>