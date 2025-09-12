<template>
    <div class="px-4 overflow-x-scroll">
        <div class="flex ">
            <template v-for="tab in tabs" :key="tab.value">
                <a :class="[
                        'flex flex-1 flex-col items-center justify-center border-b-2 border-transparent py-3 px-4 text-sm font-medium text-slate-500',
                        activeTab === tab.value
                            ? 'border-b-[var(--primary-color)] text-[var(--primary-color)]'
                            : 'border-b-transparent text-gray-500'
                    ]"
                    @click="setActiveTab(tab.value)" href="#"
                >
                    
                    <p class="text-sm font-semibold" :class="activeTab === tab.value ? 'text-[var(--primary-color)]' : ''">{{ tab.label }}</p>
                </a>
            </template>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    tabs: {
        type: Array,
        required: true
    },
    modelValue: {
        type: String,
        required: false,
        default: null
    }
});
const emit = defineEmits(['update:modelValue']);
const activeTab = toRef(props.modelValue);

function setActiveTab(tab) {
    activeTab.value = tab;
    emit('update:modelValue', tab);
}
</script>