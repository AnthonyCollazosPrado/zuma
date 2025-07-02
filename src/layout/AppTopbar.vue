<script setup>
import { useLayout } from '@/layout/composables/layout';

const { toggleMenu, toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-actions">
            <div class="layout-config-menu">


                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 22" fill="none"
                    @click="toggleMenu" class="menu-toggle-btn mt-[0.55rem] me-3">
                    <rect x="1.51078" y="1.5267" width="22.7718" height="19.1942" rx="5.31803"
                        transform="rotate(-0.620767 1.51078 1.5267)" stroke="#171717" stroke-width="2" />
                    <line x1="11.0977" y1="20.5049" x2="11.0977" y2="1.35933" stroke="#171717" stroke-width="2" />
                    <path d="M5.39844 6.86353H7.79163" stroke="#171717" stroke-width="2" stroke-linecap="round" />
                    <path d="M5.39844 11.1711H7.79163" stroke="#171717" stroke-width="2" stroke-linecap="round" />
                </svg>


                <!-- <button type="button" class="layout-topbar-action" @click="toggleDarkMode">
                    <i :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"></i>
                </button>
                <div class="relative">
                    <button
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                        type="button" class="layout-topbar-action layout-topbar-action-highlight">
                        <i class="pi pi-palette"></i>
                    </button>
                    <AppConfigurator />
                </div> -->
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action"
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content text-[#171717]">
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-inbox"></i>
                        <span>Messages</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>