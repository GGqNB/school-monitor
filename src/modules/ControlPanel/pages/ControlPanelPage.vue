<template>
    <s-page>
      <s-header
        :create-btn="false"
        title="Правила реагирования"
      />
      <div class="flex justify-center m-base-35">
        <div>
            <q-table
                class="s-table--wrapper bordered "
                table-class="s-table"
                dense
                flat
                :rows="data_2"
                :columns="TABLE_COLUMNS"
                :no-data-label="TABLE_SETTINGS.NO_DATA_LABEL"
                :no-results-label="TABLE_SETTINGS.NO_RESULTS_LABEL"
                :rows-per-page-options="TABLE_SETTINGS.ROWS_PER_PAGE_LIST"
                :rows-per-page-label="TABLE_SETTINGS.ROWS_PER_PAGE_LABEL"
                hide-bottom
            >
            </q-table>
            </div>
            <div :class="isMobile ? ' mt-base-35':'ml-base-35'">
            <q-table
                class="s-table--wrapper bordered "
                table-class="s-table"
                dense
                flat
                :rows="data_1"
                :columns="TABLE_COLUMNS_2"
                :no-data-label="TABLE_SETTINGS.NO_DATA_LABEL"
                :no-results-label="TABLE_SETTINGS.NO_RESULTS_LABEL"
                :rows-per-page-options="TABLE_SETTINGS.ROWS_PER_PAGE_LIST"
                :rows-per-page-label="TABLE_SETTINGS.ROWS_PER_PAGE_LABEL"
                hide-bottom
            >
            </q-table>
            </div>
      </div>
      <div class="main_footer">

</div>
    </s-page>
  </template>
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  // import SInput from 'src/components/ui/Input.vue';
import { useList } from '../composables/useControlPage';
import { Tables } from 'src/declarations/components/table';
import {
    TABLE_SETTINGS
} from 'src/constants/table-settings';
import { useDeviceSizes } from 'src/composables/useDeviceSizes';
  
  export default defineComponent({
    name: 'SettingDevicePage',
    components: {
    },
    setup() {
      const {

      } = useList();
      
      const { isMobile } = useDeviceSizes();
     
      const TABLE_COLUMNS: Array < Tables.TableColumn > = [{
                name: 'temp_1',
                label: 'Температура (°С) Окружающего воздуха',
                field: 'temp_2',
                align: 'center',
                sortable: false,
            },
            {
                name: 'temp_1',
                label: 'Температура подачи',
                field: 'temp_2',
                align: 'center',
                sortable: true,
            },
        ];

        const TABLE_COLUMNS_2: Array < Tables.TableColumn > = [{
                name: 'temp',
                label: 'Разница температуры',
                field: 'temp',
                align: 'center',
                sortable: false,
            },
            {
                name: 'pressure',
                label: 'Разница давления',
                field: 'pressure',
                align: 'center',
                sortable: true,
            },
            {
                name: 'time',
                label: 'Время работы',
                field: 'time',
                align: 'center',
                sortable: true,
            },
        ];
      // eslint-disable-next-line no-return-assign
      onMounted(() => generateTableData())
      const data_1 = ref([
        {temp: '10', pressure: '1', time:'20000'}
      ])
      const data_2 = ref([]);
      const generateTableData = ()  => {
      for (let i = 50; i >= -50; i -= 5) {
        let counter = 0;
        if(i>30){
          counter++
        }
        data_2.value.push({ temp_1: i, temp_2: i+5*counter });
      }
    }
      return {
        data_1,
        data_2,
        TABLE_COLUMNS,
        TABLE_COLUMNS_2,
        TABLE_SETTINGS,
        isMobile
      };
    },
  });
  </script>
  