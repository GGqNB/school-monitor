<template>
<s-page>

    <s-header :create-btn="false" title="Параметры учреждений" />
    <div>

    </div>
    <div class="temp-wrapper-2  " :class="isMobile ? '':'flex justify-center'">
        <div class="">
            <div class="mt-base-35    
      ">
                <h5 class="ml-base-25">Школа №1</h5>
                <!-- <q-table
                    rotate-headers
                    class="s-table--wrapper bordered "
                    table-class="s-table"
                    dense
                    flat
                    :rows="tableControlData"
                    :columns="TABLE_COLUMNS_CONTROL"      
                    :no-data-label="TABLE_SETTINGS.NO_DATA_LABEL"
                    :no-results-label="TABLE_SETTINGS.NO_RESULTS_LABEL"
                    :rows-per-page-options="TABLE_SETTINGS.ROWS_PER_PAGE_LIST"
                    :rows-per-page-label="TABLE_SETTINGS.ROWS_PER_PAGE_LABEL"
                    hide-bottom
                >
                    <template #body-cell-time_1="props">
                        <q-td :props="props" :class="props.value>0 ? 'bg-error-td':''">
                            {{ props.value }}
                        </q-td>
                    </template>
         <template v-slot:body="props">
        
        <q-tr :props="props">
          <q-td
            key="org"
            :props="props"
          >
            {{ props.row.label }}
          </q-td>
          <q-td
            key="time_request"
            :props="props"
          >
            {{ props.row.time_request }}
          </q-td>
          <q-td
            key="temp"
            :props="props"
          >
            {{ props.row.temp }}
          </q-td>
          <q-td
            key="temp_obr"
            :props="props"
          >
            {{ props.row.temp_obr }}
          </q-td>
          <q-td
            key="pressure_1"
            :props="props"
          >
            {{ props.row.pressure_1 }}
          </q-td>
          <q-td
            key="pressure_2"
            :props="props"
          >
            {{ props.row.pressure_2 }}
          </q-td>
          <q-td
            key="time_1"
            :props="props"
            :class="props.row.time_1 < 20 ? 'bg-error-td':''"
          >
            {{ props.row.time_1 }}
          </q-td>
          <q-td
            key="time_2"
            :props="props"
            :class="props.row.time_2 > 20 ? 'bg-error-td':''"
          >
            {{ props.row.time_2 }}
          </q-td>
        </q-tr>
      </template>
                </q-table> -->
                <div class="setting-param-table">
                  
                <q-table
                    class="s-table--wrapper bordered "
                    table-class="s-table"
                    dense
                    flat
                    :rows="tableData"
                    :columns="TABLE_COLUMNS"
                    :no-data-label="TABLE_SETTINGS.NO_DATA_LABEL"
                    :no-results-label="TABLE_SETTINGS.NO_RESULTS_LABEL"
                    :rows-per-page-options="TABLE_SETTINGS.ROWS_PER_PAGE_LIST"
                    :rows-per-page-label="TABLE_SETTINGS.ROWS_PER_PAGE_LABEL"
                    hide-bottom
                    row-direction="row"
                >
                <template #body-cell-val_1="props">
                        <q-td :props="props" :class="props.value>20 ? 'bg-error-td':''">
                            {{ props.value }}
                        </q-td>
                    </template>
                    <template #body-cell-val_2="props">
                        <q-td :props="props" :class="props.value>20 ? 'bg-error-td':''">
                            {{ props.value }}
                        </q-td>
                    </template>
                </q-table>
                </div>
            </div>
        </div>
      
    </div>
    <div class="main_footer">

    </div>
</s-page>
</template>

<script lang="ts">
import {
    TABLE_SETTINGS
} from 'src/constants/table-settings';
import {
    Tables
} from 'src/declarations/components/table';
import {
    defineComponent,
    onMounted,
    ref,
} from 'vue';
// import SInput from 'src/components/ui/Input.vue';
// import SSelectBackend from 'src/components/backend/SSelectBackend.vue';

import {
    useList
} from '../composables/useList';
import { useDeviceSizes } from 'src/composables/useDeviceSizes';
export default defineComponent({
    name: 'NFCPage',
    components: {
        // SSelectBackend,
    },
    setup() {
        const {
            openSetting,
            init,
            list,
            TABLE_SETTINGS,
            TABLE_COLUMNS,
            paginationParams,
            onRequest,
            visibleDialog,
            filterParams,
            fetch,
            clearParameters,
            rfidCurrent,
            deleteRfid,
            onViewConfirmationDialog,
            visibleUpload,
            goUpload,
            TABLE_COLUMNS_CONTROL
        } = useList();
        const tableData = ref([
          {
            type: 'Время опроса',
            val_1: '09.09.2024 12:35',
            val_2: '09.09.2024 12:35',
          },
          {
            type: 'Температура (подающий трубопровод) ',
            val_1: 25,
            val_2: 15,
          },
          {
            type: 'Температура (обратный трубопровод) ',
            val_1: 20,
            val_2: 20,
          },
          {
            type: 'Давление 1, Мпа ',
            val_1: 20,
            val_2: 20,
          },
          {
            type: 'Давление 2, Мпа ',
            val_1: 20,
            val_2: 20,
          },
          {
            type: 'Время наработки, ч.',
            val_1: 15,
            val_2: 17,
          },
          {
            type: 'Время работы узла, ч.',
            val_1: 17,
            val_2: 20,
          },
        ]);
      const { isMobile } = useDeviceSizes();

        const tableControlData = ref([{
            time_request: '09.09.2024',
            temp: 10,
            temp_obr: 15,
            pressure_1: 20,
            pressure_2: 20,
            time_1: 15,
            time_2: 17,
            label:'Школа №1. Старшая школа',
        },
        {
            time_request: '09.09.2024',
            temp: 10,
            temp_obr: 15,
            pressure_1: 20,
            pressure_2: 20,
            time_1: 20,
            time_2: 30,
            label:'Школа №1. Младшая школа',

        }]);
        return {
            rfidCurrent,
            filterParams,
            openSetting,
            deleteRfid,
            init,
            fetch,
            onRequest,
            paginationParams,
            list,
            visibleDialog,
            TABLE_SETTINGS,
            TABLE_COLUMNS,
            onViewConfirmationDialog,
            visibleUpload,
            goUpload,
            tableData,
            TABLE_COLUMNS_CONTROL,
            tableControlData,
            isMobile,
        };
    },
});
</script>

<style>
/* .rotate-90{
  transform: rotate(-90deg);
} */
.for-test {
    transform: rotate(90deg);
}

.bg-error-td {
    background-color: rgb(241, 59, 59) !important;
    color: white !important;
}
.setting-param-table{
  max-width: 500px;
}
</style>
