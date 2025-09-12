<template>
    <body class="bg-gray-50" style='font-family: Inter, "Noto Sans", sans-serif;'>
        <div class="relative flex size-full min-h-screen flex-col justify-start group/design-root overflow-x-hidden">
        <div class="pt-12 pb-8 px-6 text-center">
        <h1 class="text-4xl font-bold tracking-tighter text-gray-900">
                Restaurant Staff
                </h1>
        <p class="mt-3 text-base text-gray-600">
                Welcome back! Please login to your account.
                </p>
        </div>
        <div class="px-4">
        <div class="flex rounded-md bg-gray-200 p-1">
            <button class="w-1/2 rounded-md bg-white py-2.5 text-sm font-semibold text-gray-800 shadow-sm">Login</button>
            <button @click="register" class="w-1/2 rounded-md py-2.5 text-sm font-semibold text-gray-500">Register</button>
        </div>
        </div>
        <div class="flex flex-col gap-y-5 px-4 pt-8">
        <label class="flex flex-col gap-y-2">
        <span class="text-sm font-medium text-gray-700">Username</span>
        <div class="relative">
        <span class="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-gray-500">person</span>
        <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 placeholder:text-gray-500 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]" placeholder="Enter your username"/>
        </div>
        </label>
        <label class="flex flex-col gap-y-2">
        <span class="text-sm font-medium text-gray-700">Password</span>
        <div class="relative">
        <span class="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-gray-500">lock</span>
        <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 placeholder:text-gray-500 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]" placeholder="Enter your password" type="password"/>
        </div>
        </label>
        <a class="text-right text-sm font-medium text-[var(--primary-color)] hover:underline" href="#">Forgot Password?</a>
        </div>
        <div class="mt-8 px-4">
            <button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[var(--primary-color)] py-3.5 text-base font-semibold text-white shadow-sm hover:bg-opacity-90">
            Login
            </button>
        </div>
        </div>

        </body>
</template>

<script setup>
function register() {
    
}
</script>