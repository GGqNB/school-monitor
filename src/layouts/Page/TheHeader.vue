<template>
    <q-header
        id=""
        reveal
        class="bg-grey-10"
    >
        <q-toolbar class="s-header--toolbar">
            <div class="row items-center s-header">
                <q-btn
                    class="s-header-menu"
                    clickable
                    flat
                    no-wrap
                    dense
                    @click="changeVisibilitySidebar"
                >
                    <q-icon name="menu" />
                </q-btn>
                <router-link :to="{ name: routerMainPageName }" :class=" isMobile ? 'display-none':''">
                    <!-- TODO: Лого нужно, лого нет -->
                    <img class="s-header-logo q-ml-xl" src="icons/logo.png" alt="Логотип системы">
                </router-link>
            </div>
    
            <q-space />
            <div class="">
                Я Администрация 
                <q-checkbox v-model="isAdmin" @click="changeStatusAdmin"/>
            </div>
        </q-toolbar>
    </q-header>
    </template>
    
    <script lang="ts">
    import {
        useAppStore
    } from 'stores/app.store';
    import {
        useIndicatorStore
    } from 'stores/indicator.store';
    import {
        defineComponent,
        onMounted,
        ref,
        watch,
        computed
    } from 'vue';
    import {
        storeToRefs
    } from 'pinia';
    import {
        routerMainPageName,
        loginPageName
    } from 'src/router/router.constants';
    import {
        useRouter
    } from 'vue-router';
    import {
        useIndicator
    } from 'src/composables/useIndicator';
    import {
        useCurrentUser
    } from 'src/composables/useCurrentUser';
    import {
        makeRequest
    } from 'src/composables/useRequest';
    import NetworkApi from 'src/backend/api/classes/NetworkApiClass';
    import {
        Network
    } from 'src/declarations/responses/network';
    import {
        useLoading
    } from 'src/composables/useLoading';
    import UserApi from 'src/backend/api/classes/UserApiClass';
    import { useDeviceSizes } from 'src/composables/useDeviceSizes';
import { useUserStore } from 'src/stores/user.store';
    // import { HeaderProfileLink } from 'SharedComponents/header/profile.d';
    // import { useLocalAuthStore } from 'AdminDir/stores/auth.store';
    // import { useUserStore } from 'AdminDir/stores/user.store';
    // import HeaderOrganization from 'src/components/header/HeaderOrganization.vue';
    // import HeaderProfile from 'SharedComponents/header/Profile.vue';
    
    export default defineComponent({
        name: 'TheHeader',
        components: {},
        setup() {
            const { isMobile } = useDeviceSizes();
            const router = useRouter();
            const $currentUser = useCurrentUser();
            const appStore = useAppStore();
            const indicatorStore = useIndicatorStore();
            // const authStore = useLocalAuthStore();
            const userStore = useUserStore();
            const phone = ref('');
            // const getUser = async () => {
            //     try {
            //         const response = await makeRequest(async () =>
            //             UserApi.me());
            //         if (response) {
            //             phone_flag.value = true;
            //             phone.value = response.first_name + ' ' + response.last_name;
            //             $indicator.indicatorDataSet.setActivePhone(true);
            //         }
            //     } catch {
            //         phone_flag.value = false;
            //         $indicator.indicatorDataSet.setActivePhone(false);
    
            //     }
            // }
            const {
                collapseSidebar
            } = storeToRefs(appStore);
            const changeVisibilitySidebar = () => {
                appStore.setCollapseSidebar(!collapseSidebar.value);
            };
            const isAdmin = computed(() => userStore.getIsAdmin);
            const changeStatusAdmin = () =>{
                userStore.setIsAdmin(!userStore.getIsAdmin)
                if(userStore.getIsAdmin == true){
                    router.push('/');
                }else{
                    router.push('/director_board');
                }
            }
            // const checkWifi = async () => {
            //     const response = await makeRequest(async () => NetworkApi.active());
            //     if (response.length !== 0) {
            //         $indicator.indicatorDataSet.setCurrentNetwork(response[0].name);
            //         return true
            //     } else {
            //         return false
            //     }
            // }
            // const pastNetworks = ref([]);
            // const currentNetwork = ref('');
            // const wifi_flag = ref(false);
            // const phone_flag = ref(false);
            // const $indicator = useIndicator();
            // const watchIndicator = () => {
            //     checkWifi().then(result => {
            //         wifi_flag.value = result;
            //     });
            //     phone_flag.value = $indicator.indicatorDataSet.getActivePhone();
            //     currentNetwork.value = $indicator.indicatorDataSet.getCurrentNetwork();
            //     pastNetworks.value = $indicator.indicatorDataSet.getPastNetwork();
            //     if (!pastNetworks.value.includes(currentNetwork.value)) {
            //         $indicator.indicatorDataSet.setPastNetworks(currentNetwork.value);
            //     }
            // }
            // onMounted(
            //         () => watchIndicator()
            //     ),
            //     onMounted(
            //         () => getUser()
            //     ),
            //     watch(() => indicatorStore.activePhone, (newVal) => {
            //         phone_flag.value = newVal;
            //     }),
            //     watch(() => indicatorStore.currentNetwork, (newVal) => {
            //         currentNetwork.value = newVal;
            //     }),
            //     function routeTo(routeName) {
            //         if (routeName === 'exit') {
    
            //             router.push({
            //                 name: loginPageName
            //             });
            //         } else {
            //             router.push({
            //                 name: routeName
            //             });
            //         }
            //     }
    
            return {
                routerMainPageName,
                changeVisibilitySidebar,
                phone,
                isMobile,
                isAdmin,
                changeStatusAdmin
                // wifi_flag,
                // phone_flag,
                // currentNetwork,
                // pastNetworks,
            };
        },
    });
    </script>
    