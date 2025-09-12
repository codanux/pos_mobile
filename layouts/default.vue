<template>
    <slot />

    <footer class="bg-white border-t border-gray-200 p-2 fixed bottom-0 w-full">
        <div class="flex justify-around">
            <button
                v-for="tab in tabs"
                :key="tab.name"
                class="flex flex-col items-center justify-center gap-1 w-1/4"
                :class="isActive(tab) ? 'text-[var(--primary-color)]' : 'text-gray-500'"
                @click="$router.push({ name: tab.route })"
            >
                <span class="material-symbols-outlined">{{ tab.icon }}</span>
                <p class="text-xs font-medium">{{ tab.label }}</p>
            </button>
        </div>
    </footer>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = [
    { label: 'Home', route: 'index', icon: 'home' },
    { label: 'Orders', route: 'orders', icon: 'receipt_long' },
    { label: 'Payments', route: 'payments', icon: 'credit_card' },
    { label: 'Settings', route: 'settings', icon: 'settings' },
];

const isActive = (tab) => route.name === tab.route
</script>