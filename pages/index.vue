<template>

    <body class="bg-gray-50">
        <div class="relative flex size-full min-h-screen flex-col justify-between group/design-root overflow-x-hidden"
            style='font-family: Epilogue, "Noto Sans", sans-serif;'>
            <header class="bg-white sticky top-0 z-10 shadow-sm">
                <div class="flex items-center p-4 justify-between">
                    <button
                        class="flex items-center justify-center rounded-full h-10 w-10 bg-transparent text-gray-700">
                        <span class="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                    <h1 class="text-gray-900 text-xl font-bold">Tables</h1>
                    <button
                        class="flex items-center justify-center rounded-full h-10 w-10 bg-transparent text-gray-700">
                        <span class="material-symbols-outlined">
                            add
                        </span>
                    </button>
                </div>
                <TabBar v-model="tab" :tabs="tabs" />
            </header>
            <main class="flex-grow p-4 mb-16">
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="i in 20" @click="$router.push({ name: 'table-order', params: { table: i }})" class="relative group cursor-pointer">
                        <div
                            class="absolute inset-0 bg-black/20 rounded-lg group-hover:bg-black/30 transition-all duration-300">
                        </div>
                        <img alt="Table {{ i }}" class="w-full h-full object-cover rounded-lg aspect-square"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGF8cDqL-isb1WNCda6njfrGBJ7lKDo2zv1MX1EcONPV99aKb6QxGG6D2qm8KYW_KkNYQjvCo68J1V3XPdBXG6haVVH8SwkwXrOAb-UCbyP1obHpesX7qollXGTO6oZ0oyaGnx9x0PxWo6j6axqKmxXGZvM9Fibm5kfQBfNPWUvdAVAXBfvAdGHk4tRn1GNksUsretClOVeZEXk7mFTaJqZ-E4Qetc3pcxQOQcik_Ml0Jxqi3EV32Rrf1MvaFPfcZ8k4KskjcJaw" />
                        <div class="absolute bottom-0 left-0 p-4">
                            <h3 class="text-white text-lg font-bold">Table {{ i }}</h3>
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                                Available
                            </span>
                        </div>
                    </div>
                   
                </div>
            </main>
            
        </div>

    </body>
</template>

<script setup>
const tab = ref('all');
const tabs = [
    { label: 'All', value: 'all' },
    { label: 'Available', value: 'available' },
    { label: 'Occupied', value: 'occupied' },
    { label: 'Reserved', value: 'reserved' },
    { label: 'Cleaning', value: 'cleaning' },
];
</script>
