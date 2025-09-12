<template>

    <body class="bg-gray-50" style='font-family: Epilogue, "Noto Sans", sans-serif;'>
        <div class="relative mx-auto flex w-full max-w-sm flex-col justify-between bg-white group/design-root">
            <div class="flex-grow">
                <header class="sticky top-0 z-10 bg-white/80 backdrop-blur-sm">
                    <div class="flex items-center p-4">
                        <button class="flex h-10 w-10 items-center justify-center rounded-full">
                            <span class="material-symbols-outlined text-gray-700"> arrow_back </span>
                        </button>
                        <h1 class="flex-1 text-center text-lg font-bold text-gray-900">Payments</h1>
                        <div class="w-10"></div>
                    </div>
                </header>
                <main class="flex-grow p-4">
                    <div class="mb-6 rounded-lg bg-gray-50 p-4">
                        <h2 class="mb-4 text-lg font-bold text-gray-900">Order Summary</h2>
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <div>
                                    <p class="font-medium text-gray-800">Order #2345</p>
                                    <p class="text-sm text-gray-500">Table 12</p>
                                </div>
                                <p class="font-medium text-gray-800">$85.50</p>
                            </div>
                            <div class="flex justify-between">
                                <div>
                                    <p class="font-medium text-green-600">Discount</p>
                                    <p class="text-sm text-gray-500">10% off</p>
                                </div>
                                <p class="font-medium text-green-600">-$8.55</p>
                            </div>
                            <hr class="border-t border-gray-200" />
                            <div class="flex justify-between text-gray-600">
                                <p>Subtotal</p>
                                <p>$76.95</p>
                            </div>
                            <div class="flex justify-between text-gray-600">
                                <p>Tax (8%)</p>
                                <p>$6.16</p>
                            </div>
                            <div class="flex justify-between text-xl font-bold text-gray-900">
                                <p>Total</p>
                                <p>$83.11</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 class="mb-4 text-lg font-bold text-gray-900">Payment Method</h2>
                        <div class="space-y-3">
                            <label
                                class="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-4 has-[:checked]:border-[var(--primary-color)] has-[:checked]:ring-1 has-[:checked]:ring-[var(--primary-color)]"
                                for="cash">
                                <div class="flex items-center gap-4">
                                    <span class="material-symbols-outlined text-gray-600"> money </span>
                                    <span class="font-medium text-gray-800">Cash</span>
                                </div>
                                <input
                                    class="form-radio h-5 w-5 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                                    id="cash" name="paymentMethod" type="radio" />
                            </label>
                            <label
                                class="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-4 has-[:checked]:border-[var(--primary-color)] has-[:checked]:ring-1 has-[:checked]:ring-[var(--primary-color)]"
                                for="credit-card">
                                <div class="flex items-center gap-4">
                                    <span class="material-symbols-outlined text-gray-600"> credit_card </span>
                                    <span class="font-medium text-gray-800">Credit Card</span>
                                </div>
                                <input checked=""
                                    class="form-radio h-5 w-5 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                                    id="credit-card" name="paymentMethod" type="radio" />
                            </label>
                            <label
                                class="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-4 has-[:checked]:border-[var(--primary-color)] has-[:checked]:ring-1 has-[:checked]:ring-[var(--primary-color)]"
                                for="mobile">
                                <div class="flex items-center gap-4">
                                    <span class="material-symbols-outlined text-gray-600"> qr_code_2 </span>
                                    <span class="font-medium text-gray-800">Mobile Payment</span>
                                </div>
                                <input
                                    class="form-radio h-5 w-5 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                                    id="mobile" name="paymentMethod" type="radio" />
                            </label>
                        </div>
                    </div>
                </main>
            </div>
            <footer class="sticky bottom-0 bg-white p-4">
                <div class="flex gap-3">
                    <button
                        class="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-3 text-sm font-bold text-gray-800">
                        <span class="material-symbols-outlined"> call_split </span>
                        <span class="truncate">Split Bill</span>
                    </button>
                    <button
                        class="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--primary-color)] py-3 text-sm font-bold text-white">
                        <span class="truncate">Confirm Payment</span>
                    </button>
                </div>
            </footer>
        </div>

    </body>
</template>