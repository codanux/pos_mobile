<template>

    <body class="bg-gray-50 ">
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
                    <div v-for="product in products" class="flex items-center gap-4 bg-white p-4">
                        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                            :style="`background-image: url('${product.image}');`">
                        </div>
                        <div class="flex-grow">
                            <h3 class="text-gray-800 text-base font-semibold leading-normal">{{ product.name }}</h3>
                            <p class="text-gray-500 text-sm font-normal leading-normal">${{ product.price.toFixed(2) }}</p>
                        </div>
                        <button
                            class="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                            <span class="material-symbols-outlined">add</span>  
                        </button>
                    </div>
                </main>
            </div>
            <footer class=" bg-white/80 backdrop-blur-md border-t border-gray-200">
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

const tab = ref('drinks');
const tabs = [
    { label: "Drinks", value: "drinks" },
    { label: "Desserts", value: "desserts" },
    { label: "Specials", value: "specials" },
]


const products = ref([
    { id: 1, name: "Crispy Calamari", price: 12.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGF8cDqL-isb1WNCda6njfrGBJ7lKDo2zv1MX1EcONPV99aKb6QxGG6D2qm8KYW_KkNYQjvCo68J1V3XPdBXG6haVVH8SwkwXrOAb-UCbyP1obHpesX7qollXGTO6oZ0oyaGnx9x0PxWo6j6axqKmxXGZvM9Fibm5kfQBfNPWUvdAVAXBfvAdGHk4tRn1GNksUsretClOVeZEXk7mFTaJqZ-E4Qetc3pcxQOQcik_Ml0Jxqi3EV32Rrf1MvaFPfcZ8k4KskjcJaw" },
    { id: 2, name: "Bruschetta", price: 9.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPx5FJeSh-D-JfhLJhtdY3gxRrssKwr32UpP7FWwOQpdukQYKPbDGrVI17ckjzayoV-9-Wb8EXrBPFNhNaUxBZIHyxj9Uj2qY4G6sr_X6qJ29mpKSibtdEsWjYSWzYuH8RXJyvyHPkx12J4TYzeHWFGHi2SXWUPdcJwv56G2KYl6Vi5HQDugQ44nXQc5gwUcrl4pnDNxUITizCxYKYxyprsNm3Nkik3f8-LDwOA1VZD0wf5YK1MNWvswajgh4W-0c62_lbRqMLFQ" },
    { id: 3, name: "Shrimp Scampi", price: 14.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFSnfdei_3TviFoKPjju0B-VaIvUqJaz-SQJLG9RPbi5dKV50r8XyW5_6_T7qVdfuhTzMOFPl2CJ-EdoCx5rxIdDgmcBNUuB0IFLa8iVKwwGuMYRdLJ9gf9otRzxCHim9eHJghi6GPhOloefjhUm5l6Fv_YiTwphrJ0aN7ciBJf9pnmhEIG4ksr7Q2KD5YxiaTwn68ieVJ9_IST4siDEk3yLK4wUVVhe48yV-szggrtYMd1yffyxdI9iU8JV_W5HCN8HpOmlkJ2A" },

])
</script>