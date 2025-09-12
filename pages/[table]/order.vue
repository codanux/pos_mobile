<template>

    <body class="bg-gray-50">
        <div class="relative flex size-full min-h-screen flex-col justify-between group/design-root overflow-x-hidden">
            <div class="flex-grow">
                <header class="sticky top-0 bg-white/80 backdrop-blur-md z-10">
                    <div class="flex items-center p-4 pb-2 justify-between">
                        <button @click="$router.push({ name: 'index' })"
                            class="text-gray-800 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                            <span class="material-symbols-outlined">arrow_back</span>
                        </button>
                        <h1 class="text-gray-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">
                            Table {{ tableId }}
                        </h1>
                        <div class="w-10"></div>
                    </div>
                    <div class="pb-2">
                        <TabBar v-model="tab" :tabs="tabs" />
                    </div>
                </header>
                <main class="divide-y divide-gray-100">
                    <div class="flex items-center gap-4 bg-white p-4">
                        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2izuNeImFgXDpvriROop_A47zkLKXzTxX-xb_C_fHsDDi-jyLNHGeBq47W2jW85cJlLVaNGlYUkDCoACyt9dSzc0MBDtqaTlYA89wq6V6-CaY9Ir0fC3E9qXF99oAIluCrOQZBAQVptZCyV9JKyi0-veTooFtogTpECRa10uO_wOXmFxXxk3C47mr3JojG2AwMNiCncpa4Qs6ZYJmgHRYjScFz5o-ZBC0D4s60ZjgyJX_YfGEs3Xn0BPw1fvSUv5M6dPXm0T1CA");'>
                        </div>
                        <div class="flex-grow">
                            <h3 class="text-gray-800 text-base font-semibold leading-normal">Crispy Calamari</h3>
                            <p class="text-gray-500 text-sm font-normal leading-normal">$12.99</p>
                        </div>
                        <button
                            class="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                            <span class="material-symbols-outlined">add</span>
                        </button>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4">
                        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPx5FJeSh-D-JfhLJhtdY3gxRrssKwr32UpP7FWwOQpdukQYKPbDGrVI17ckjzayoV-9-Wb8EXrBPFNhNaUxBZIHyxj9Uj2qY4G6sr_X6qJ29mpKSibtdEsWjYSWzYuH8RXJyvyHPkx12J4TYzeHWFGHi2SXWUPdcJwv56G2KYl6Vi5HQDugQ44nXQc5gwUcrl4pnDNxUITizCxYKYxyprsNm3Nkik3f8-LDwOA1VZD0wf5YK1MNWvswajgh4W-0c62_lbRqMLFQ");'>
                        </div>
                        <div class="flex-grow">
                            <h3 class="text-gray-800 text-base font-semibold leading-normal">Bruschetta</h3>
                            <p class="text-gray-500 text-sm font-normal leading-normal">$9.99</p>
                        </div>
                        <button
                            class="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                            <span class="material-symbols-outlined">add</span>
                        </button>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4">
                        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFSnfdei_3TviFoKPjju0B-VaIvUqJaz-SQJLG9RPbi5dKV50r8XyW5_6_T7qVdfuhTzMOFPl2CJ-EdoCx5rxIdDgmcBNUuB0IFLa8iVKwwGuMYRdLJ9gf9otRzxCHim9eHJghi6GPhOloefjhUm5l6Fv_YiTwphrJ0aN7ciBJf9pnmhEIG4ksr7Q2KD5YxiaTwn68ieVJ9_IST4siDEk3yLK4wUVVhe48yV-szggrtYMd1yffyxdI9iU8JV_W5HCN8HpOmlkJ2A");'>
                        </div>
                        <div class="flex-grow">
                            <h3 class="text-gray-800 text-base font-semibold leading-normal">Shrimp Scampi</h3>
                            <p class="text-gray-500 text-sm font-normal leading-normal">$14.99</p>
                        </div>
                        <button
                            class="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                            <span class="material-symbols-outlined">add</span>
                        </button>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4">
                        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUZjn8JClIm8Uc7_KLvapEeJN5Z6R2k5FT8jMeM_X58Hy_J3Sc3JxcNxbHKv7n-ywDVTdG6dqP5tJDUSS7Ppwipa1NxHpgpunFddNg-mPi3nWgkVNoT1ehGQVjbFKFFKb-8fgyB_a4MbHtgnDzUL7vpoMi0iYx8g0ahJLwdi1-hb7CBcovXADzyazdAN4KVHybx3SkVxOy9aIZYMEYhSo9oVoZ4e-uV-qQ9IM1uiblTwBDduJFQW8Vr4csFVUKY7KsRml-9ibR0Q");'>
                        </div>
                        <div class="flex-grow">
                            <h3 class="text-gray-800 text-base font-semibold leading-normal">Caprese Salad</h3>
                            <p class="text-gray-500 text-sm font-normal leading-normal">$11.99</p>
                        </div>
                        <button
                            class="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                            <span class="material-symbols-outlined">add</span>
                        </button>
                    </div>
                </main>
            </div>
            <footer class="sticky bottom-0 bg-white/80 backdrop-blur-md border-t border-gray-200">
                <div class="flex justify-between items-center gap-3 p-4">
                    <button
                        class="flex items-center justify-center gap-2 rounded-lg h-12 px-4 bg-gray-100 text-gray-800 text-sm font-bold hover:bg-gray-200 transition-colors">
                        <span class="material-symbols-outlined">shopping_cart</span>
                        <span>View Order (3)</span>
                    </button>
                    <button
                        class="flex-grow flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow">
                        <span>Send to Kitchen</span>
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </footer>
        </div>

    </body>
</template>

<script setup>
const route = useRoute();
const tableId = route.params.table;

const tab = ref('menu');
const tabs = [
    { label: "Menu", value: "menu", icon: "restaurant_menu" },
    { label: "Orders", value: "orders", icon: "receipt_long" },
    { label: "Payments", value: "payments", icon: "credit_card" },
    { label: "Info", value: "info", icon: "info" },
]

</script>