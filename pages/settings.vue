<template>

    <body>
        <div class="relative flex min-h-screen flex-col bg-slate-100 group/design-root overflow-x-hidden"
            style='font-family: Epilogue, "Noto Sans", sans-serif;'>
            <header class="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
                <div class="flex items-center p-4">
                    <button
                        class="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100">
                        <span class="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 class="flex-1 text-center text-xl font-bold text-slate-900 pr-10">Settings</h1>
                </div>
            </header>
            <main class="flex-1 p-4">
                <div class="space-y-8">
                    <div>
                        <h2 class="px-4 text-xs font-bold uppercase tracking-wider text-slate-500">Account</h2>
                        <div class="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                            <a class="flex items-center justify-between border-b border-slate-200 px-4 py-3.5 hover:bg-slate-50"
                                href="#">
                                <div class="flex items-center gap-4">
                                    <span class="material-symbols-outlined text-slate-500">person</span>
                                    <span class="text-base font-medium text-slate-800">Profile</span>
                                </div>
                                <span class="material-symbols-outlined text-slate-400">chevron_right</span>
                            </a>
                            <a class="flex items-center justify-between border-b border-slate-200 px-4 py-3.5 hover:bg-slate-50"
                                href="#">
                                <div class="flex items-center gap-4">
                                    <span class="material-symbols-outlined text-slate-500">notifications</span>
                                    <span class="text-base font-medium text-slate-800">Notifications</span>
                                </div>
                                <span class="material-symbols-outlined text-slate-400">chevron_right</span>
                            </a>
                            <a class="flex items-center justify-between px-4 py-3.5 hover:bg-slate-50" href="#">
                                <div class="flex items-center gap-4">
                                    <span class="material-symbols-outlined text-slate-500">language</span>
                                    <span class="text-base font-medium text-slate-800">Language</span>
                                </div>
                                <span class="material-symbols-outlined text-slate-400">chevron_right</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 class="px-4 text-xs font-bold uppercase tracking-wider text-slate-500">Appearance</h2>
                        <div class="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                            <div class="flex items-center justify-between border-b border-slate-200 px-4 py-3.5">
                                <div class="flex items-center gap-4">
                                    <span class="material-symbols-outlined text-slate-500">contrast</span>
                                    <span class="text-base font-medium text-slate-800">Dark Mode</span>
                                </div>
                                <button aria-checked="false"
                                    class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2"
                                    role="switch" type="button">
                                    <span
                                        class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 class="px-4 text-xs font-bold uppercase tracking-wider text-slate-500">Support</h2>
                        <div class="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                            <a class="flex items-center justify-between border-b border-slate-200 px-4 py-3.5 hover:bg-slate-50"
                                href="#">
                                <div class="flex items-center gap-4">
                                    <span class="material-symbols-outlined text-slate-500">help</span>
                                    <span class="text-base font-medium text-slate-800">Help &amp; Support</span>
                                </div>
                                <span class="material-symbols-outlined text-slate-400">chevron_right</span>
                            </a>
                            <a class="flex items-center justify-between px-4 py-3.5 hover:bg-slate-50" href="#">
                                <div class="flex items-center gap-4">
                                    <span class="material-symbols-outlined text-slate-500">info</span>
                                    <span class="text-base font-medium text-slate-800">About</span>
                                </div>
                                <span class="material-symbols-outlined text-slate-400">chevron_right</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </body>
</template>