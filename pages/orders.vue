<template>

    <body>
        <div class="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root"
            style='font-family: Epilogue, "Noto Sans", sans-serif;'>
            <div class="flex flex-col">
                <div class="flex items-center bg-white p-4 justify-between border-b border-slate-200">
                    <button class="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-slate-600">
                        <span class="material-symbols-outlined"> search </span>
                    </button>
                    <h2 class="text-slate-800 text-lg font-bold">Orders</h2>
                    <button
                        class="flex items-center justify-center rounded-lg h-10 w-10 bg-[var(--primary-color)] text-white">
                        <span class="material-symbols-outlined"> add </span>
                    </button>
                </div>
                <div class="flex gap-3 p-4 overflow-x-auto">
                    <button
                        class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[var(--primary-color)] text-white px-5 text-sm font-medium">
                        All
                    </button>
                    <button
                        class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white text-slate-800 px-5 text-sm font-medium border border-slate-200">
                        Pending
                    </button>
                    <button
                        class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white text-slate-800 px-5 text-sm font-medium border border-slate-200">
                        In Progress
                    </button>
                    <button
                        class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white text-slate-800 px-5 text-sm font-medium border border-slate-200">
                        Ready
                    </button>
                    <button
                        class="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white text-slate-800 px-5 text-sm font-medium border border-slate-200">
                        Served
                    </button>
                </div>
                <div class="flex flex-col gap-3 px-4">
                    <div class="flex items-center gap-4 bg-white p-4 rounded-lg border border-slate-200">
                        <div class="flex flex-col justify-center flex-grow">
                            <p class="text-slate-800 text-base font-bold">Order #1234</p>
                            <p class="text-slate-500 text-sm">Table 12 · 10:15 AM</p>
                            <p class="text-slate-500 text-sm">2 items</p>
                        </div>
                        <div class="shrink-0">
                            <span
                                class="inline-flex items-center justify-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">Pending</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-lg border border-slate-200">
                        <div class="flex flex-col justify-center flex-grow">
                            <p class="text-slate-800 text-base font-bold">Order #5678</p>
                            <p class="text-slate-500 text-sm">Table 5 · 10:20 AM</p>
                            <p class="text-slate-500 text-sm">4 items</p>
                        </div>
                        <div class="shrink-0">
                            <span
                                class="inline-flex items-center justify-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">In
                                Progress</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-lg border border-slate-200">
                        <div class="flex flex-col justify-center flex-grow">
                            <p class="text-slate-800 text-base font-bold">Order #9012</p>
                            <p class="text-slate-500 text-sm">Table 8 · 10:25 AM</p>
                            <p class="text-slate-500 text-sm">1 item</p>
                        </div>
                        <div class="shrink-0">
                            <span
                                class="inline-flex items-center justify-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">Ready</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-lg border border-slate-200">
                        <div class="flex flex-col justify-center flex-grow">
                            <p class="text-slate-800 text-base font-bold">Order #3456</p>
                            <p class="text-slate-500 text-sm">Table 3 · 10:30 AM</p>
                            <p class="text-slate-500 text-sm">3 items</p>
                        </div>
                        <div class="shrink-0">
                            <span
                                class="inline-flex items-center justify-center rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-600">Served</span>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

    </body>
</template>