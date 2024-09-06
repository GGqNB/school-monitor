<template>
<s-page>
    <s-header :create-btn="false" title="Показатели школы(Директор)" />
    <div class="">

        <div class="mt-base-35"> DirectorBoard<br>Доступные учреждения</div>
        <div class="mt-base-25">
            <q-table
                class="s-table--wrapper bordered "
                table-class="s-table"
                dense
                flat
                :rows="mock"
                :columns="TABLE_COLUMNS"
                :no-data-label="TABLE_SETTINGS.NO_DATA_LABEL"
                :no-results-label="TABLE_SETTINGS.NO_RESULTS_LABEL"
                :rows-per-page-options="TABLE_SETTINGS.ROWS_PER_PAGE_LIST"
                :rows-per-page-label="TABLE_SETTINGS.ROWS_PER_PAGE_LABEL"
                hide-bottom
            >
            </q-table>
        </div>
    </div>
</s-page>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    onMounted
} from 'vue';
import {
    useList
} from '../composables/useDirectorBoard';
import {
    useMeta
} from 'quasar';
import {
    TABLE_SETTINGS
} from 'src/constants/table-settings';
import {
    Tables
} from 'src/declarations/components/table';

export default defineComponent({
    name: 'AddDevicePage',
    components: {
        // SInput
    },
    setup() {
        const {
            mock

        } = useList();
        const list = ref([]);
        // onMounted(() => useMeta($route.meta));
        // onMounted(() => init());
        // eslint-disable-next-line no-return-assign
        const TABLE_COLUMNS: Array < Tables.TableColumn > = [{
                name: 'month',
                label: '',
                field: 'month',
                align: 'center',
                sortable: false,
            },
            {
                name: 'upper_school_hvs',
                label: 'Старшая школа',
                field: 'upper_school_hvs',
                align: 'center',
                sortable: true,
            },
            {
                name: 'little_school_hvs',
                label: 'Младшая школа',
                field: 'little_school_hvs',
                align: 'center',
                sortable: true,
            },
            {
                name: 'upper_school_warm',
                label: 'Старшая школа школа',
                field: 'upper_school_warm',
                align: 'center',
                sortable: true,
            },
            {
                name: 'little_school_warm ',
                label: 'Младшая школа',
                field: 'little_school_warm',
                align: 'center',
                sortable: true,
            },
        ];
        return {
           
            TABLE_SETTINGS,
            list,
            mock,
            TABLE_COLUMNS
        };
    },
});
</script>
