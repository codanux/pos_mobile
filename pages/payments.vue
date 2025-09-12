<template>

    <body>
        <div class="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden"
            style='font-family: Epilogue, "Noto Sans", sans-serif;'>
            <div class="flex flex-col">
                <header class="sticky top-0 z-10 bg-white shadow-sm">
                    <div class="flex items-center p-4">
                        <button
                            class="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100">
                            <span class="material-symbols-outlined">arrow_back</span>
                        </button>
                        <h1 class="flex-1 text-center text-xl font-bold text-slate-900 pr-10">Payments</h1>
                    </div>
                    <TabBar v-model="tab" :tabs="tabs" />
                </header>
                <div class="flex gap-3 p-4">
                    <button
                        class="flex h-10 flex-1 items-center justify-center gap-x-2 rounded-full bg-white shadow-sm">
                        <p class="text-sm font-medium text-slate-700">Status</p>
                        <span class="material-symbols-outlined text-slate-500">expand_more</span>
                    </button>
                    <button
                        class="flex h-10 flex-1 items-center justify-center gap-x-2 rounded-full bg-white shadow-sm">
                        <p class="text-sm font-medium text-slate-700">Date</p>
                        <span class="material-symbols-outlined text-slate-500">expand_more</span>
                    </button>
                    <button
                        class="flex h-10 flex-1 items-center justify-center gap-x-2 rounded-full bg-white shadow-sm">
                        <p class="text-sm font-medium text-slate-700">Table</p>
                        <span class="material-symbols-outlined text-slate-500">expand_more</span>
                    </button>
                </div>
                <div class="flex flex-col gap-3 px-4">
                    <div v-for="payment in payments"
                        class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div class="flex flex-1 flex-col justify-center">
                            <p class="text-base font-semibold text-slate-900">Payment #{{ payment.id }}</p>
                            <p class="text-sm text-slate-500">Table {{ payment.table }} • <span :class="{
                                'font-medium text-orange-500': payment.status === 'pending',
                                'font-medium text-green-600': payment.status === 'completed'
                            }">{{ payment.status }}</span></p>
                        </div>
                        <div class="shrink-0">
                            <p class="text-lg font-bold text-slate-900">${{ payment.amount.toFixed(2) }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sticky bottom-0 bg-white/80 pb-5 pt-3">
                <div class="flex justify-center px-5">
                    <button
                        class="flex h-14 w-full max-w-sm items-center justify-center gap-x-2 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800">
                        <span class="material-symbols-outlined">add</span>
                        <span class="text-base font-bold">New Payment</span>
                    </button>
                </div>
            </div>
        </div>

    </body>
</template>

<script setup>

const tab = ref('all');
const tabs = [
    { label: 'All', value: 'all' },
    { label: 'Pending', value: 'pending' },
    { label: 'Completed', value: 'completed' },
];

const payments = [
    { id: 1, table: 12, amount: 125.00, status: 'pending' },
    { id: 2, table: 5, amount: 75.50, status: 'completed' },
    { id: 3, table: 8, amount: 200.00, status: 'pending' },
    { id: 4, table: 3, amount: 50.25, status: 'completed' },
    { id: 5, table: 15, amount: 180.75, status: 'pending' },
    { id: 6, table: 7, amount: 90.00, status: 'completed' },
    { id: 7, table: 10, amount: 60.00, status: 'pending' },
    { id: 8, table: 1, amount: 110.50, status: 'completed' },
    { id: 9, table: 4, amount: 45.00, status: 'pending' },

];

</script>